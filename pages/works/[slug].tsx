import ArticleLayout from "../../components/layouts/ArticleLayout";
import { getAllWorks, getWorkBySlug } from "../../lib/getWorks";
import type Work from "../../types/work";

type Props = {
	work: Work;
};

const Home = ({ work }: Props) => {
	return (
		<ArticleLayout
			title={work.title}
			coverImage={work.coverImage}
			excerpt={work.excerpt}
		>
			{work.content}
		</ArticleLayout>
	);
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const post = getWorkBySlug(params.slug, [
		"title",
		"slug",
		"content",
		"ogImage",
		"coverImage",
	]);

	return {
		props: {
			work: {
				...post,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllWorks(["slug"]);

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
