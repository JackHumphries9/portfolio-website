import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	StackDivider,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import MainLayout from "./MainLayout";

/* eslint-disable react/no-children-prop */

const ArticleLayout = ({
	title,
	excerpt,
	coverImage,
	date,
	children,
}: {
	title: string;
	excerpt: string;
	coverImage: string;
	date?: string;
	children: React.ReactNode;
}) => {
	const dateColor = useColorModeValue("gray.900", "gray.400");
	const cnt = children?.toString() || "";

	const router = useRouter();

	return (
		<MainLayout
			title={title}
			og={{
				title: title,
				type: "article",
				image: coverImage,
				url: `https://jackhumphries.io${router.asPath}`,
				description: excerpt,
			}}
		>
			<Container maxW="container.lg" mt={30}>
				<SimpleGrid
					columns={1}
					spacing={{ base: 8, md: 10 }}
					py={{ base: 18, md: 24 }}
				>
					<Flex>
						<Image
							rounded={"md"}
							alt={"product image"}
							src={coverImage}
							fit={"cover"}
							align={"center"}
							w={"100%"}
							h={{
								base: "100%",
								sm: "400px",
								lg: "500px",
							}}
						/>
					</Flex>
					<Stack spacing={{ base: 6, md: 10 }}>
						<Box as={"header"}>
							<Heading
								lineHeight={1.1}
								fontWeight={600}
								fontSize={{
									base: "2xl",
									sm: "4xl",
									lg: "5xl",
								}}
							>
								{title}
							</Heading>
							{date ? (
								<Text
									color={dateColor}
									fontWeight={300}
									fontSize={"2xl"}
								>
									{new Date(date).toLocaleDateString(
										"en-UK",
										{
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
										}
									)}
								</Text>
							) : null}
						</Box>

						<Stack
							direction={"column"}
							divider={
								<StackDivider
									borderColor={useColorModeValue(
										"gray.200",
										"gray.600"
									)}
								/>
							}
						>
							<ReactMarkdown
								components={ChakraUIRenderer()}
								children={cnt}
								skipHtml
							/>
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</MainLayout>
	);
};

export default ArticleLayout;
