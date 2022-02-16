import { Flex, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import ArticleCard from "../../components/ArticleCard";

import MainLayout from "../../components/layouts/MainLayout";
import HeaderSection from "../../components/sections/HeaderSection";

const Home: NextPage = () => {
	return (
		<MainLayout title="Works">
			<HeaderSection title="Works" />
			<SimpleGrid
				columns={useBreakpointValue({ base: 1, md: 2, lg: 3 })}
				spacingX={5}
			>
				<ArticleCard
					title="Test"
					imgUrl="/placeholder-article.jpeg"
					date="25 Feb 21"
					readTime={5}
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Est placeat maxime animi cumque quae architecto, non aliquam
					fugit modi omnis.
				</ArticleCard>
				<ArticleCard
					title="Test"
					imgUrl="/placeholder-article.jpeg"
					date="25 Feb 21"
					readTime={5}
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Est placeat maxime animi cumque quae architecto, non aliquam
					fugit modi omnis.
				</ArticleCard>
				<ArticleCard
					title="Test"
					imgUrl="/placeholder-article.jpeg"
					date="25 Feb 21"
					readTime={5}
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Est placeat maxime animi cumque quae architecto, non aliquam
					fugit modi omnis.
				</ArticleCard>
			</SimpleGrid>
		</MainLayout>
	);
};

export default Home;
