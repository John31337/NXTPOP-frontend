import React, {useState, useEffect} from "react";
import { Box } from "components/base/initial";
import { IconBtn, SegmentLink } from "components/elements/buttons";
import { DollarIcon, FourStarIcon, SortListIcon, StarFillIcon } from "components/icons";
import { MainNFTCardInitial } from "components/elements/cards";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "components/elements/form";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";

import { Connection, PublicKey } from '@solana/web3.js';
import { getParsedNftAccountsByOwner, decodeTokenMetadata } from "@nfteyez/sol-rayz";

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


const DashboardPage: React.FC = () => {
  const wallet = useWallet();
  const walletPubKey = wallet.wallet?.adapter.publicKey!;
  const [nftObjData, setNftObjData] = useState<NFT[]>([]);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      let nfts = await getUserNFTDataList(walletPubKey);
      let datas:NFT[] = nfts!;
      setNftObjData(datas);
      console.log("DashBoardNFTs", datas);
    }
    anyNameFunction();
  }, [created]);

  //Get Collectibles of User Wallet
  const getUserNFTs = async (walletPubKey:PublicKey) => {
    const pubAddress = walletPubKey?.toBase58()!;
    const nfts = await getParsedNftAccountsByOwner({
      publicAddress: pubAddress,
      connection: connection,
      sanitize: true,
    });
  
    return nfts;
  }
  //Function to get all nft data
  const getUserNFTDataList = async (walletPubKey:PublicKey) => {
    try {
      let nftData = await getUserNFTs(walletPubKey);
      let n  = nftData.length;
      let nfts:NFT[] = [];
      for (let i = 0; i < n; i++) {
        let val = await axios.get(nftData[i].data.uri);
    
        //Properties of NFT
        let nft_name = val.data.name;
        let nft_description = val.data.description;
        let nft_img = val.data.image;
        let nft_account = nftData[i].mint;
    
        //Find Current Buyer
        const largestAccounts = await connection.getTokenLargestAccounts(new PublicKey(nft_account));
    
        const nft_holderAccount = largestAccounts.value[0].address.toBase58();
        let nft = {
          name: nft_name,
          description: nft_description,
          img: nft_img,
          nftAccount: nft_account,
          holderAccount: nft_holderAccount,
        };
    
        nfts.push(nft);
      }
      return nfts;

    } catch (error) {
      console.log(error);
    }
  };  


  const navigate = useNavigate();
  const CategoryLinks = (
    <>
      <SegmentLink
        count={nftObjData.length}
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
          nftObjData?nftObjData.map(element => {
            return <MainNFTCardInitial category={0} img={element.img} description={element.description} name={element.name} holderAccount={element.holderAccount} nftAccount={element.nftAccount} />;
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

export default DashboardPage;
function componentDidMount() {
  throw new Error("Function not implemented.");
}

