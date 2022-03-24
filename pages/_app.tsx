import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import theme from "../lib/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider theme={theme}>
				<CSSReset />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
