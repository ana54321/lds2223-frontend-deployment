import "@/styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Homepage from "./Homepage";
// import HomepageAdmin from "./HomepageAdmin";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  // Put the ethereum chain ids of the chains you want to support
  const supportedChainIds = [1, 4, 137, 250, 43114, 80001];

  /**
   * Include the connectors you want to support
   * injected - MetaMask
   * magic - Magic Link
   * walletconnect - Wallet Connect
   * walletlink - Coinbase Wallet
   */
  const connectors = {
    injected: {},
    magic: {
      apiKey: "pk_...", // Your magic api key
      chainId: 1, // The chain ID you want to allow on magic
    },
    walletconnect: {},
    walletlink: {
      appName: "TicketNFTs",
      url: "https://ticketnftsbackend.azurewebsites.net/Event/100/0/filters?isHidden=false",
      darkMode: false,
    },
  };

  return (
    <ThirdwebProvider desiredChainId={activeChainId}
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Homepage>
        <Component {...pageProps} />
      </Homepage>
    </ThirdwebProvider>
  );
}
export default MyApp;
