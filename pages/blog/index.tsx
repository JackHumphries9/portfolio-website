import { Container, SimpleGrid } from "@chakra-ui/react";
import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/layouts/MainLayout";
import HeaderSection from "../../components/sections/HeaderSection";
import { getAllArticles } from "../../lib/getArticles";
import type Blog from "../../types/article";

type Props = {
	allArticles: Blog[];
};

const Home = ({ allArticles }: Props) => {
	return (
		<MainLayout title="Blog">
			<HeaderSection title="Blog" />
			<Container maxW="container.xl">
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingX={5}>
					{allArticles.map((blog: Blog) => {
						return (
							<ArticleCard
								title={blog.title}
								imgUrl={blog.coverImage}
								date={blog.date}
								slug={"/blog/" + blog.slug}
								key={blog.slug}
								minsRead={blog.minsRead}
							>
								{blog.excerpt}...
							</ArticleCard>
						);
					})}
				</SimpleGrid>
			</Container>
		</MainLayout>
	);
};

export const getStaticProps = async () => {
	const allArticles = getAllArticles([
		"title",
		"date",
		"slug",
		"coverImage",
		"excerpt",
		"minsRead",
	]);

	return {
		props: { allArticles },
	};
};

export default Home;
