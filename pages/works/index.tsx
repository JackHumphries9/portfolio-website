import { Container, SimpleGrid } from "@chakra-ui/react";
import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/layouts/MainLayout";
import HeaderSection from "../../components/sections/HeaderSection";
import { getAllWorks } from "../../lib/getWorks";
import type Work from "../../types/work";

type Props = {
	allWorks: Work[];
};

const Home = ({ allWorks }: Props) => {
	return (
		<MainLayout title="Works">
			<HeaderSection title="Works" />
			<Container maxW="container.xl">
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingX={5}>
					{allWorks.map((work: Work) => {
						return (
							<ArticleCard
								title={work.title}
								imgUrl={work.coverImage}
								slug={"/works/" + work.slug}
								key={work.slug}
							>
								{work.excerpt}
							</ArticleCard>
						);
					})}
				</SimpleGrid>
			</Container>
		</MainLayout>
	);
};

export const getStaticProps = async () => {
	const allWorks = getAllWorks([
		"title",
		"date",
		"slug",
		"coverImage",
		"excerpt",
	]);

	return {
		props: { allWorks },
	};
};

export default Home;
