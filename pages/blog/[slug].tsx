import ArticleLayout from "../../components/layouts/ArticleLayout";
import { getAllArticles, getArticleBySlug } from "../../lib/getArticles";

import type Blog from "../../types/article";

type Props = {
	article: Blog;
};

const Home = ({ article }: Props) => {
	return (
		<ArticleLayout
			title={article.title}
			coverImage={article.coverImage}
			date={article.date}
			excerpt={article.excerpt}
		>
			{article.content}
		</ArticleLayout>
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
		"excerpt",
	]);

	return {
		props: {
			article: {
				...post,
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
