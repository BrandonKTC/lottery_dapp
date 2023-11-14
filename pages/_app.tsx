import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import {
  ConnectWallet,
  // import the wallets you want
  metamaskWallet,
} from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider supportedWallets={[metamaskWallet()]} activeChain="mumbai" clientId="4a45534998ae9426edb49ebbbfbbf806">
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
