import {
	Container,
	Flex,
	SimpleGrid,
	useBreakpointValue,
	Image,
	StackDivider,
	Stack,
	Box,
	Heading,
	Text,
	useColorModeValue,
	VStack,
	List,
	ListItem,
	Button,
} from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import type { NextPage } from "next";
import { MdLocalShipping } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import ArticleCard from "../../components/ArticleCard";

import MainLayout from "../../components/layouts/MainLayout";
import HeaderSection from "../../components/sections/HeaderSection";
import { getAllArticles, getArticleBySlug } from "../../lib/getArticles";
import { getAllWorks, getWorkBySlug } from "../../lib/getWorks";
import markdownToHtml from "../../lib/markdownToHtml";
import type Blog from "../../types/article";

type Props = {
	article: Blog;
};

const Home = ({ article }: Props) => {
	return (
		<MainLayout title={article.title}>
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
							src={article.coverImage}
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
								{article.title}
							</Heading>
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
								children={article.content}
								skipHtml
							/>
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</MainLayout>
	);
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const post = getArticleBySlug(params.slug, [
		"title",
		"date",
		"slug",
		"content",
		"ogImage",
		"coverImage",
	]);
	//const content = await markdownToHtml(post.content || "");

	return {
		props: {
			article: {
				...post,
				//content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllArticles(["slug"]);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}

export default Home;
