import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import Navbar from "../Navbar";

const MainLayout = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<Box as="main" overflowY="hidden">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="description" content="Jack Humphries' Website" />
				<meta name="author" content="Jack Humphries" />
				{/* 
        TODO: Implement the touch icons
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
				<link
					rel="shortcut icon"
					href="/favicon.ico"
					type="image/x-icon"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@craftzdog" />
				<meta name="twitter:creator" content="@craftzdog" />
				<meta name="twitter:image" content="/card.png" />
				<meta
					property="og:site_name"
					content="Takuya Matsuyama's Homepage"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/card.png" /> */}
				<title>{title} - Jack Humphries</title>
			</Head>

			<Navbar />

			<Container maxW="full">{children}</Container>
		</Box>
	);
};

export default MainLayout;
