import React, {useState, useEffect, useMemo} from "react";
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
import * as anchorPack from '@project-serum/anchor';
import { publicKey, token } from "@project-serum/anchor/dist/cjs/utils";

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

export interface HomeProps {
  connection: anchorPack.web3.Connection;
}

const DashBoardOnSalePage: React.FC<HomeProps> = (props) => {
  const [nftObjData, setNftObjData] = useState<NFT[]>([]);
  const [created, setCreated] = useState(false);

  const connection = new Connection(network, "confirmed");  
  const wallet = useWallet();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchorPack.Wallet;
  }, [wallet]);


  const provider = new Provider(connection, anchorWallet!, {
    preflightCommitment: "confirmed"
  });

  const program = new anchor.Program(EscrowIdl, programID, provider);

  useEffect(() => {
    // Create an scoped async function in the hook
    getNFTs();
  }, [wallet]);

  const getNFTs = async() => {
    let nfts = await getEscrowAccountList();
    console.log("OnSaledNFTs", nfts);
    setNftObjData(nfts);
  }

  async function getEscrowAccountList() {
    const mints = await program.account.escrowAccount.all();
    let escrows:any[] = [];

    for(let i=0; i<mints.length; i++)
    {
      let mint = mints[i];
      if(mint.account.isInitialized)
      {
        if(mint.account.seller.toBase58() == anchorWallet?.publicKey.toBase58())
        {
          let meta = await getTokenMetaData(mint.account.mintKey);
          console.log("meta", meta);
          if(meta != null)
          {
            let metadata = await axios.get(meta.data.data.uri);
            let escrow = {
              name: metadata.data.name,
              img: metadata.data.image,
              description: metadata.data.description,
              escrow: mint.publicKey,
              price: parseFloat(mint.account.amount) / 1000000000,
              mint: mint.account.mintKey,
              seller: mint.account.seller,
              tokenAccount: mint.account.tokenAccountPubkey.toBase58(),
            }

            escrows.push(escrow);
          }
        }
      }
    }
    return escrows;
  }

  //Get Metadata of Metaplex NFT
  async function getTokenMetaData(mintPubkey: any) {
    try{
        let tokenmetaPubkey = await Metadata.getPDA(mintPubkey);
        const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
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
          navigate("../");
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
          nftObjData && nftObjData.concat().map(element => {
            return <MainNFTCardInitial 
            category={1} 
            img={element.img} 
            description={element.description} 
            name={element.name} 
            holderAccount={element.tokenAccount} 
            price = {element.price}
            nftAccount={element.mint.toBase58()} 
            escrowAccount={element.escrow.toBase58()}/>;
          })
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

