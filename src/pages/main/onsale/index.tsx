import React, {useState, useEffect} from "react";
import { Box } from "components/base/initial";
import { IconBtn, SegmentLink } from "components/elements/buttons";
import { DollarIcon, FourStarIcon, SortListIcon, StarFillIcon } from "components/icons";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "components/elements/form";
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, BN, Provider, web3, Wallet, IdlAccounts, IdlTypes } from '@project-serum/anchor';
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import { getParsedNftAccountsByOwner, decodeTokenMetadata } from "@nfteyez/sol-rayz";
import { Escrow } from "escrow";
import { EscrowIdl } from "idl";
import axios from "axios";
import { MainNFTCardInitial } from "components/elements/cards";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

const anchor = require("@project-serum/anchor") ;


const { SystemProgram, Keypair } = web3;

// type EscrowAccount = IdlAccounts<Escrow>["escrowAccount"];

const programID = new PublicKey("Ei6ZoGTRyYMcm4aWLfvdFCUUw76qtPLgJ9QkSpP9hHAe");
const network = 'https://api.devnet.solana.com';
const opts = {
  preflightCommitment: "confirmed"
}

interface NFT {
  name?: string,
  img?: string,
  description?: string,
  escrow: any,
  price: any,
  mint: any,
  seller: any,
  tokenAccount: string
}

const DashBoardOnSalePage: React.FC = () => {
  const [nftObjData, setNftObjData] = useState<NFT[]>([]);
  const [created, setCreated] = useState(false);

  const connection = new Connection(network, "confirmed");  
  const { publicKey, wallet, signTransaction, signAllTransactions } = useWallet();
  if (!wallet || !publicKey || !signTransaction || !signAllTransactions) {
    console.log("Failed");
  }
  const signerWallet:NodeWallet = {
    publicKey: publicKey!,
    signTransaction: signTransaction!,
    signAllTransactions: signAllTransactions!,
    payer: new Keypair
  };

  const provider = new Provider(connection, signerWallet, {
    preflightCommitment: "confirmed"
  });

  const program = new anchor.Program(EscrowIdl, programID, provider);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      let nfts = await getUserNFTSALE();
      let datas:NFT[] = nfts;
      console.log("OnSaledNFTs", datas);
      setNftObjData(datas);
    }
    anyNameFunction();
  }, [created]);

  async function getEscrowAccountList() {
    const tokens = await program.account.escrowAccount.all();
    let escrows:any[] = [];
    tokens.map((token: any) => {escrows.push(token)});
    return escrows;
  }

  async function getUserNFTSALE() {
    let mints = getEscrowAccountList();
    let escrows:any[] = [];
    (await mints).map((item:any) => 
    {
      if(item.account.isInitialized)
      {
        if(item.account.seller == publicKey?.toBase58())
        {
          let escrow = {
            name: "",
            img: "",
            description: "",
            escrow: item.publicKey,
            price: parseFloat(item.amount) / 1000000000,
            mint: item.account.mintKey,
            seller: item.account.seller,
            tokenAccount: item.account.tokenAccountPubkey.toBase58(),
          };

          getTokenMetaData(item.account.mintKey).then((metadata) => {
            if(metadata != null)
            {
              axios.get(metadata.data.data.uri).then((value) => {
                let val = value;
                escrow.img = val.data.image;
                escrow.name = val.data.name;
                escrow.description = val.data.description;
              });
            }
          });
          escrows.push(escrow);
        }
      }
    });
    return escrows;
  }

  //Get Metadata of Metaplex NFT
  async function getTokenMetaData(mintPubkey: any) {
      try{
          let tokenmetaPubkey = await Metadata.getPDA(mintPubkey);
          const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
          console.log("tokenmeta", tokenmeta);

          return tokenmeta;
      }
      catch(error)
      {
      }
  }


  const navigate = useNavigate();
  const CategoryLinks = (
    <>
      <SegmentLink
        onClick={() => {
          navigate("../owned");
        }}
      >
        Owned
      </SegmentLink>
      <SegmentLink 
        count={nftObjData.length}
        selected
        onClick={() => {
          navigate("../onsale");
        }}>On Sale</SegmentLink>
      <SegmentLink >Created</SegmentLink>
      <SegmentLink>Liked</SegmentLink>
      <SegmentLink>Activity</SegmentLink>
    </>
  );
  const FilterLinks = (
    <>
      <IconBtn before={<FourStarIcon />}>Category</IconBtn>
      <IconBtn before={<StarFillIcon />}>Sale type</IconBtn>
      <IconBtn before={<DollarIcon />}>Price range</IconBtn>
      <IconBtn before={<SortListIcon />}>Sort by</IconBtn>
    </>
  );
  return (
    <>
      <Box bg={"darkgray"} width={"100%"} px={"20px"} py={["6px", "6px", "6px", "6px", "0px"]} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"}>
          <Box display={["flex", "flex", "flex", "flex", "none"]}>
            <Dropdown text={"Category"} contentAlign={"left"}>
              {CategoryLinks}
            </Dropdown>
          </Box>
          <Box display={["none", "none", "none", "none", "flex"]} gridColumnGap={"32px"} flexWrap={"wrap"}>
            {CategoryLinks}
          </Box>
        </Box>
        <Box height={"100%"} display={"flex"} alignItems={"center"} gridColumnGap={"8px"} flexWrap={"wrap"}>
          <Box display={["flex", "flex", "flex", "flex", "none"]}>
            <Dropdown text={"Filter"}>{FilterLinks}</Dropdown>
          </Box>
          <Box display={["none", "none", "none", "none", "flex"]} gridColumnGap={"8px"} flexWrap={"wrap"}>
            {FilterLinks}
          </Box>
        </Box>
      </Box>
      <Box flexGrow={1} p={"20px"} overflow={"auto"} display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexWrap={"wrap"} gridGap={"20px"}>
        {
          nftObjData?nftObjData.concat().map(element => {
            return <MainNFTCardInitial 
            category={1} 
            img={element.img} 
            description={element.description} 
            name={element.name} 
            holderAccount={element.tokenAccount} 
            nftAccount={element.mint.toBase58()} 
            escrowAccount={element.escrow.toBase58()}/>;
          }):null
        }
        {Array(6)
          .fill("0")
          .map((_each, index) => {
            return <Box key={index} width={"268px"} height={"0px"} />;
          })}
      </Box>
    </>
  );
};

export default DashBoardOnSalePage;
function componentDidMount() {
  throw new Error("Function not implemented.");
}

