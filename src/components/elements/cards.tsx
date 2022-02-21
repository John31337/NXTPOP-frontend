import React, {useMemo, useState} from "react";
import { Box, Image } from "components/base/initial";
import { BellIcon, EmptyStarIcon, SearchIcon, SolanaTokenFillIcon, ThreeDotIcon } from "components/icons";
import { Connection, PublicKey } from '@solana/web3.js';
import { BN, Provider, web3 } from '@project-serum/anchor';
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { CircleBtn, CircleSmBtn } from "./buttons";
import { useWallet } from "@solana/wallet-adapter-react";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import { EscrowIdl } from "../../idl";
import * as anchorPack from '@project-serum/anchor';
import { CustomInput, CustomSelect, SmOption } from "./form";

const anchor = require("@project-serum/anchor") ;
const { SystemProgram, Keypair } = web3;
const network = 'https://api.devnet.solana.com';
const programID = new PublicKey("Ei6ZoGTRyYMcm4aWLfvdFCUUw76qtPLgJ9QkSpP9hHAe");

interface MainNFTCardListProps {
  category?:number;
  price?: number;
  name?:string;
  description?:string;
  img?:string;
  nftAccount?: string;
  holderAccount?: string;
  escrowAccount?: string;
  sellerAccount?: string;
}

export const MainNFTCardInitial: React.FC<MainNFTCardListProps> = ({category, name, description, img, holderAccount, nftAccount, escrowAccount, price}) => {
  const connection = new Connection(network, "confirmed");  
  const [showInputModal, setShowInputModal] = useState(false);
  const [priceNow, setPriceNow] = useState(1);
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

  //Deposit NFT to Marketplace
  async function initialize() { 
    /* call prompt() with custom message to get user input from alert-like dialog */
    // const PriceModal = prompt('Please input price of NFT');
    // const Price:string = PriceModal!;
    // const priceNow = parseInt(Price);
    if(priceNow > 0)
    {
      let _nft:string = nftAccount!;
      let nftAccountPubKey = new PublicKey(_nft);
    
      let _token:string = holderAccount!;
      let tokenAccountPubKey = new PublicKey(_token);
    
      const escrowAccount = Keypair.generate();
      /* create the program interface combining the idl, program ID, and provider */
      const program = new anchor.Program(EscrowIdl, programID, provider);
      try {
        /* interact with the program via rpc */
        await program.rpc.list(
          new BN(priceNow * 1000000000), {
          accounts: {
            initializer: provider.wallet.publicKey,
            initializerTokenAccount: tokenAccountPubKey,
            mintKey: nftAccountPubKey,
            escrowAccount: escrowAccount.publicKey,
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
          },
          signers: [escrowAccount],
        });
    
        const account = await program.account.escrowAccount.fetch(escrowAccount.publicKey);
        console.log('escrowAccount', escrowAccount.publicKey.toBase58());
        console.log('account.tokenAccountPubkey: ', account.tokenAccountPubkey.toBase58());
    
        console.log("List Success!");
        //window.location.reload();
      } catch (err) {
        console.log("Transaction error: ", err);
      }
    }
  }

  async function cancel(){
    const escrow: string = escrowAccount!;
    const holder: string = holderAccount!;
    let EscrowAccount = new PublicKey(escrow);
    console.log("EscrowAccount", EscrowAccount.toBase58());
    const program = new anchor.Program(EscrowIdl, programID, provider);
    // // Get the PDA that is assigned authority to token account.
    const [_pda, _nonce] = await PublicKey.findProgramAddress(
      [Buffer.from(anchor.utils.bytes.utf8.encode("escrow")), EscrowAccount.toBuffer()],
      programID
    );

    const pda = _pda;
    try{
      await program.rpc.cancel({
        accounts: {
          user: provider.wallet.publicKey,
          pdaTokenAccount: new PublicKey(holder),
          pdaAccount: pda,
          escrowAccount: EscrowAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
        },
      });
    }
    catch(error){
      console.log(error);
    }

    console.log("Cancel Success!");
    //window.location.reload();
  }

  return (
    <Box bg={"darkgray"} width={"268px"} border={"1px solid #333333"} borderRadius={"20px"} display={"flex"} flexDirection={"column"}>
      <Box p={"16px"} pb={"12px"} display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} flexDirection={"row"}>
          <Box bg={"white"} width={"32px"} height={"32px"} borderRadius={"100%"} />
          <Box ml={"6px"} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
            <Box fontWeight={"500"} fontSize={"10px"} lineHeight={"12px"} letterSpacing={"-0.04em"} color={"#777777"}>
              {name}
            </Box>
            <Box fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"}>
              @{name}
            </Box>
          </Box>
          <CircleSmBtn ml={"auto"}>
            <ThreeDotIcon />
          </CircleSmBtn>
        </Box>
        <Box mt={"16px"}>
          <Image src={img} width={"236px"} height={"236px"} />
        </Box>
        <Box mt={"20px"} fontWeight={["600"]} fontSize={["14px"]} lineHeight={["16px"]} letterSpacing={["-0.04em"]} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
          {description}
        </Box>
        <Box mt={"12px"} display={"flex"} alignItems={"center"} flexDirection={"row"}>
          <Box fontSize={"24px"} display={"flex"}>
            <SolanaTokenFillIcon />
          </Box>
          <Box ml={"6px"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            collection name
          </Box>
          <Box ml={"auto"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"lightgray"} display={"flex"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
            179
            <Box fontSize={"16px"}>
              <EmptyStarIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box bg={"#333333"} width={"100%"} height={"1px"} />
      <Box p={"16px"} display={"flex"} alignItems={"center"} flexDirection={"row"}>
        {(category == 1) && 
          <Box fontSize={"24px"}>
            <SolanaTokenFillIcon />
          </Box>}
        <Box ml={"6px"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"#777777"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          {(category == 1) ? price + "SOL" : 
            <Box order={[2, 2, 2, 2, 1]}>
              <CustomInput
                width={["100%", "100%", "100%", "100%", "150px"]}
                value={priceNow}
                onChange={(value:any) => {setPriceNow(parseFloat(value))}}
                after={
                  <CustomSelect
                    sm
                    onChange={(value: any) => {
                      // console.log(value);
                    }}
                  >
                    <SmOption value={"SOL"}>SOL</SmOption>
                    <SmOption value={"ETH"}>ETH</SmOption>
                  </CustomSelect>
                }
                placeHolder="Price"
              />
            </Box>
          }
        </Box>
        <Box ml={"auto"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"lightgray"} display={"flex"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
          <Box onClick={(category == 0) ? initialize : cancel} bg={"rgba(174, 177, 255, 0.1)"} width={"70px"} alignContent={"center"} textAlign={"center"} p={"8px"} borderRadius={"8px"} fontWeight={["600"]} fontSize={["14px"]} lineHeight={["16px"]} letterSpacing={["-0.04em"]} color={"lightpurple"} cursor={"pointer"}>
            {(category == 0) ? "List" : "Cancel"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const MainNFTCard: React.FC = () => {
  return (
    <Box bg={"darkgray"} width={"268px"} border={"1px solid #333333"} borderRadius={"20px"} display={"flex"} flexDirection={"column"}>
      <Box p={"16px"} pb={"12px"} display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} flexDirection={"row"}>
          <Box bg={"white"} width={"32px"} height={"32px"} borderRadius={"100%"} />
          <Box ml={"6px"} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
            <Box fontWeight={"500"} fontSize={"10px"} lineHeight={"12px"} letterSpacing={"-0.04em"} color={"#777777"}>
              Owned by
            </Box>
            <Box fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"}>
              @nickname
            </Box>
          </Box>
          <CircleSmBtn ml={"auto"}>
            <ThreeDotIcon />
          </CircleSmBtn>
        </Box>
        <Box mt={"16px"}>
          <Image src={require("assets/image/dashboard/nftcard.png")} width={"236px"} height={"236px"} />
        </Box>
        <Box mt={"20px"} fontWeight={["600"]} fontSize={["14px"]} lineHeight={["16px"]} letterSpacing={["-0.04em"]} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
          NFT abstract artwork name examples
        </Box>
        <Box mt={"12px"} display={"flex"} alignItems={"center"} flexDirection={"row"}>
          <Box fontSize={"24px"} display={"flex"}>
            <SolanaTokenFillIcon />
          </Box>
          <Box ml={"6px"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            collection name
          </Box>
          <Box ml={"auto"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"lightgray"} display={"flex"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
            179
            <Box fontSize={"16px"}>
              <EmptyStarIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box bg={"#333333"} width={"100%"} height={"1px"} />
      <Box p={"16px"} display={"flex"} alignItems={"center"} flexDirection={"row"}>
        <Box fontSize={"24px"}>
          <SolanaTokenFillIcon />
        </Box>
        <Box ml={"6px"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"#777777"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          Highest bid 1/1
        </Box>
        <Box ml={"auto"} fontWeight={"600"} fontSize={"12px"} lineHeight={"16px"} letterSpacing={"-0.04em"} color={"lightgray"} display={"flex"} justifyContent={"center"} alignItems={"center"} gridGap={"4px"}>
          <Box bg={"rgba(174, 177, 255, 0.1)"} p={"8px"} borderRadius={"8px"} fontWeight={["600"]} fontSize={["14px"]} lineHeight={["16px"]} letterSpacing={["-0.04em"]} color={"lightpurple"}>
            4.75 ETH
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const TrendingCard: React.FC<MainNFTCardListProps> = ({name, description, img, holderAccount, escrowAccount, sellerAccount, price}) => {
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

  //Buy NFT in Marketplace
  async function buy() {
    console.log("buy");
    
    console.log("holderAccount", holderAccount);
    console.log("escrowAccount", escrowAccount);
    console.log("sellerAccount", sellerAccount);

    const holder:string = holderAccount!;
    const escrow:string = escrowAccount!;
    const seller:string = sellerAccount!;
    let TokenAccount = new PublicKey(holder);
    let EscrowAccount = new PublicKey(escrow);
    let SellerAccount = new PublicKey(seller);


    // Get the PDA that is assigned authority to token account.
    const [_pda, _nonce] = await PublicKey.findProgramAddress(
      [Buffer.from(anchor.utils.bytes.utf8.encode("escrow")), EscrowAccount.toBuffer()],
      programID
    );

    const pda = _pda;

    console.log('pda_token_account: ', pda.toBase58());
    const program = new anchor.Program(EscrowIdl, programID, provider);
    try{
      await program.rpc.buy({
        accounts: {
          buyer: provider.wallet.publicKey,
          pdaDepositTokenAccount: TokenAccount,
          initializerMainAccount: SellerAccount,
          escrowAccount: EscrowAccount,
          pdaAccount: pda,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId
        },
      });
    }
    catch(error){
      console.log(error);
    }

    console.log("buy success!");
  }
  return (
    <Box bg={"darkgray"} width={"268px"} border={"1px solid #333333"} borderRadius={"20px"} display={"flex"} flexDirection={"column"}>
      <Box p={"16px"} pb={"12px"} display={"flex"} flexDirection={"column"}>
        <Box position={"relative"}>
          <CircleSmBtn position={"absolute"} right={"8px"} top={"8px"} border={"none !important"}>
            <ThreeDotIcon />
          </CircleSmBtn>
          <Image src={img} width={"236px"} height={"236px"} />
        </Box>
        <Box mt={"20px"} fontWeight={["600"]} fontSize={["14px"]} lineHeight={["16px"]} letterSpacing={["-0.04em"]} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
          {name}
        </Box>
      </Box>
      <Box bg={"#333333"} width={"100%"} height={"1px"} />
      <Box display={"flex"} flexDirection={"row"}>
        <Box fontSize={"24px"}>
          <SolanaTokenFillIcon />
        </Box>
        <Box flex={1} p={"16px"} display={"flex"} alignItems={"center"}>
          <Box background={"linear-gradient(266.99deg, #AEB1FF -1.09%, #DBAEFF 100%)"} ml={"6px"} fontWeight={"600"} fontSize={"14px"} lineHeight={"16px"} letterSpacing={"-0.04em"} display={"flex"} justifyContent={"center"} alignItems={"center"} backClip={"text"} color={"transparent"}>
            {price} SOL
          </Box>
        </Box>
        <Box bg={"#333333"} width={"1px"} />
        <Box flex={1} p={"16px"} display={"flex"} alignItems={"center"}>
          <Box fontSize={"24px"}>
            <SolanaTokenFillIcon />
          </Box>
          <Box onClick={buy} cursor={"pointer"} ml={"6px"} fontWeight={"600"} fontSize={"14px"} lineHeight={"16px"} letterSpacing={"-0.04em"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            Buy
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
