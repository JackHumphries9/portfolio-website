import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import IOpenGraph from "../../types/opengraph";

import Navbar from "../Navbar";

const MainLayout = ({
	children,
	title,
	og,
}: {
	children: React.ReactNode;
	title: string;
	og?: IOpenGraph;
}) => {
	let opengraph: IOpenGraph = {
		title: "Jack Humphries Website",
		image: "/favicons/android-chrome-512x512.png",
		type: "website",
		url: "https://jackhumphries.io",
		description: "Welcome to Jack Humphries' website portfolio and blog. ",
	};

	if (og) {
		opengraph = og;
	}
	return (
		<Box as="main" overflowY="hidden">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="description" content="Jack Humphries' Website" />
				<meta name="author" content="Jack Humphries" />
				<meta property="og:title" content={opengraph.title} />
				<meta property="og:site_name" content="Jack Humphries" />
				<meta property="og:url" content={opengraph.url} />
				<meta
					property="og:description"
					content={opengraph.description}
				/>
				<meta property="og:type" content={opengraph.type} />
				<meta property="og:image" content={opengraph.image} />

				<meta
					name="theme-color"
					content={useColorModeValue("#fff", "#333")}
				/>

				<title>{title} - Jack Humphries</title>
			</Head>

			<Navbar />

			<Container maxW="full">{children}</Container>
		</Box>
	);
};

export default MainLayout;
