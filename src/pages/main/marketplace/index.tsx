import React, {useState, useEffect, useMemo} from "react";
import { Box } from "components/base/initial";
import { IconBtn, SegmentLink } from "components/elements/buttons";
import { AllTokenFillIcon, CosmosTokenFillIcon, EthTokenFillIcon, SolanaTokenFillIcon, TerraTokenFillIcon } from "components/icons";
import { Dropdown } from "components/elements/form";
import { TrendingCard } from "components/elements/cards";
import { Connection, PublicKey } from '@solana/web3.js';
import { Provider, web3 } from '@project-serum/anchor';
import { useWallet } from "@solana/wallet-adapter-react";
import { EscrowIdl } from "idl";
import axios from "axios";
import * as anchorPack from '@project-serum/anchor';
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

const anchor = require("@project-serum/anchor") ;


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
  tokenAccount: any
}

const connection = new Connection(network, "confirmed");  

const MarketPlacePage: React.FC = () => {
  const [nftObjData, setNftObjData] = useState<NFT[]>([]);
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
    getNFTs();
  }, [wallet]);


  // Create an scoped async function in the hook
  async function getNFTs() {
    let nfts = await getEscrowAccountList();
    // console.log("OnMarketNFTs", nfts);
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
        console.log("seller", mint.account.seller.toBase58());
        console.log("wallet", anchorWallet?.publicKey.toBase58());

        if(mint.account.seller.toBase58() != anchorWallet?.publicKey.toBase58())
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
              price: parseFloat(mint.amount) / 1000000000,
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
          console.log("tokenmeta", tokenmeta);

          return tokenmeta;
      }
      catch(error){}
  }

  const CategoryLinks = (
    <>
      <SegmentLink selected>Trending</SegmentLink>
      <SegmentLink>Art</SegmentLink>
      <SegmentLink>Collectibles</SegmentLink>
      <SegmentLink>Utility</SegmentLink>
      <SegmentLink>Metaverse</SegmentLink>
      <SegmentLink>DeFi</SegmentLink>
    </>
  );
  const FilterLinks = (
    <>
      <IconBtn before={<AllTokenFillIcon />} selected>
        All
      </IconBtn>
      <IconBtn before={<SolanaTokenFillIcon />}>Solana</IconBtn>
      <IconBtn before={<TerraTokenFillIcon />}>Terra</IconBtn>
      <IconBtn before={<CosmosTokenFillIcon />}>Cosmos</IconBtn>
      <IconBtn before={<EthTokenFillIcon />}>Ethereum</IconBtn>
    </>
  );
  return (
    <>
      <Box bg={"darkgray"} width={"100%"} px={"20px"} py={["16px", "16px", "16px", "16px", "0px"]} borderBottom={"1px solid #333333"} display={"flex"} justifyContent={"space-between"}>
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
            <Dropdown text={"TokenType"}>{FilterLinks}</Dropdown>
          </Box>
          <Box display={["none", "none", "none", "none", "flex"]} gridColumnGap={"8px"} flexWrap={"wrap"}>
            {FilterLinks}
          </Box>
        </Box>
      </Box>
      <Box flexGrow={1} p={"20px"} overflow={"auto"} display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexWrap={"wrap"} gridGap={"20px"}>
        {
          nftObjData && nftObjData.concat().map(element => {
            return <TrendingCard 
            name={element.name} 
            img={element.img} 
            price={element.price}
            description={element.description} 
            holderAccount={element.tokenAccount} 
            nftAccount={element.mint.toBase58()} 
            sellerAccount={element.seller.toBase58()}
            escrowAccount={element.escrow.toBase58()}/>;
          })
        }
        {Array(6)
          .fill("0")
          .map((each, index) => {
            return <Box key={index} width={"268px"} height={"0px"} />;
          })}
      </Box>
    </>
  );
};

export default MarketPlacePage;
