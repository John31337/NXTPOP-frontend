import React, {useState, useEffect, useMemo} from "react";
import { Box } from "components/base/initial";
import { IconBtn, SegmentLink } from "components/elements/buttons";
import { DollarIcon, FourStarIcon, SortListIcon, StarFillIcon } from "components/icons";
import { MainNFTCardInitial } from "components/elements/cards";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "components/elements/form";
import { useWallet } from "@solana/wallet-adapter-react";
import * as anchor from '@project-serum/anchor';
import { MintLayout, TOKEN_PROGRAM_ID, Token } from '@solana/spl-token';
import axios from "axios";
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';
import { Connection, PublicKey } from '@solana/web3.js';
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
// import { getParsedNftAccountsByOwner, decodeTokenMetadata } from "@nfteyez/sol-rayz";

export interface HomeProps {
  connection: anchor.web3.Connection;
}

const network = 'https://api.devnet.solana.com';
const opts = {
  preflightCommitment: "confirmed"
}
const connection = new Connection(network, "confirmed");

interface NFT {
  name: any;
  description: any;
  img: any;
  nftAccount: string;
  holderAccount: string;
}


const DashboardPage: React.FC<HomeProps> = (props) => {
  const wallet = useWallet();
  const [nftObjData, setNftObjData] = useState<NFT[]>();
  const [created, setCreated] = useState(false);

  console.log('wallet', wallet)
  useEffect(() => {
    if (wallet.connected) getNFTs();
  }, [wallet]);

  const getNFTs = async () => {
    const walletPubKey:PublicKey = wallet.publicKey!;
    const nfts = await getUserNFTs(walletPubKey);
    console.log('getNFTs: ', nfts);
    setNftObjData(nfts);
    console.log('setNft', nftObjData);
  }

 
  //Get Collectibles of User Wallet
  const getUserNFTs = async (walletPubKey:PublicKey) => {
    let response = await props.connection.getParsedTokenAccountsByOwner(walletPubKey, {
      programId: TOKEN_PROGRAM_ID,
    });
    let mints = await Promise.all(
      response.value
        .filter(
          (accInfo) => accInfo.account.data.parsed.info.tokenAmount.uiAmount !== 0
        )
    );

    console.log(mints);

    const nfts:NFT[] = []    

    for (let index = 0; index < mints.length; index++) {
      const mint = mints[index];
      const mintKey = new PublicKey(mint.account.data.parsed.info.mint);
      const largestAccounts = await connection.getTokenLargestAccounts(new PublicKey(mintKey));
      const nft_holderAccount = largestAccounts.value[0].address.toBase58();
      let tokenmetaPubkey = Metadata.getPDA(mintKey);
      const tokenmeta = Metadata.load(props.connection, await tokenmetaPubkey);
      console.log("tokenmeta", tokenmeta);
      const value = await axios.get((await tokenmeta).data.data.uri)
      const nft:NFT = {
        name: value.data.name,
        img: value.data.image,
        description: value.data.description,
        nftAccount: mintKey.toBase58(),
        holderAccount: nft_holderAccount
      };
      nfts.push(nft);
      console.log(nfts.length);
    }
    console.log(nfts);
    return nfts;
  }

  const navigate = useNavigate();
  const CategoryLinks = (
    <>
      <SegmentLink
        count={nftObjData?.length}
        selected
        onClick={() => {
          navigate("owned");
        }}
      >
        Owned
      </SegmentLink>
      <SegmentLink 
        onClick={() => {
          navigate("onsale");
        }}>On Sale</SegmentLink>
      <SegmentLink>Created</SegmentLink>
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
          nftObjData && nftObjData.map(element => {
            return <MainNFTCardInitial category={0} img={element.img} description={element.description} name={element.name} holderAccount={element.holderAccount} nftAccount={element.nftAccount} />;
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

export default DashboardPage;
function componentDidMount() {
  throw new Error("Function not implemented.");
}

