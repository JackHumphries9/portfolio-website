import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Main, NextScript, Head } from "next/document";
import theme from "../lib/theme";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
						rel="stylesheet"
					/>

					{/* Favicons */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/favicons/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/favicons/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<link rel="shortcut icon" href="/favicons/favicon.ico" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta
						name="msapplication-config"
						content="/favicons/browserconfig.xml"
					/>
				</Head>
				<body>
					<ColorModeScript
						initialColorMode={theme.config.initialColorMode}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
