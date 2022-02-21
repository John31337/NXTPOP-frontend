import * as anchor from '@project-serum/anchor';
import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "components/layouts/main/index";
import DashboardPage from "pages/main/dashboard";
import DashboardOwnedPage from "pages/main/detail";
import MarketPlacePage from "pages/main/marketplace";
import LotteryPage from "pages/main/lottery";
import DrillDownPage from "pages/main/drilldown";
import DashBoardOnSalePage from "pages/main/onsale";
import { WalletProvider, ConnectionProvider, useWallet, WalletContextState } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter,
        SolflareWalletAdapter,
        SolletExtensionWalletAdapter,
        SolletWalletAdapter} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

require('@solana/wallet-adapter-react-ui/styles.css')


const MainPages: React.FC = () => {
  const network = "devnet";
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    [network]
  );

  const rpcHost = "https://api.devnet.solana.com";
  const connection = new anchor.web3.Connection(rpcHost
    ? rpcHost
    : anchor.web3.clusterApiUrl('devnet'));

  return (
  <ConnectionProvider endpoint='https://api.devnet.solana.com'>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
          <MainLayout>
            <Routes>
              <Route
                path="dashboard/*"
                element={
                  <Routes>
                    <Route path="/" element={<DashboardPage connection={connection}/>} />
                    <Route path="owned" element={<DashboardOwnedPage  />} />
                    <Route path="onsale" element={<DashBoardOnSalePage connection={connection}/>}/>
                  </Routes>
                }
              />
              <Route path="marketplace" element={<MarketPlacePage />} />
              <Route path="lottery" element={<LotteryPage />} />
              <Route path="drilldown" element={<DrillDownPage />} />
            </Routes>
          </MainLayout>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default MainPages;
