import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
function App() {
  const theme = extendTheme({
    fonts: {
      body: `'Poppins', sans-serif`,
    },
    fontSizes: {
      md: "14px",
    },
  });

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <Layout>
          <ConnectButton />
        </Layout>
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default App;
