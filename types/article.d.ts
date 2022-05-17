type ArticleType = {
	slug: string;
	title: string;
	date: string;
	coverImage: string;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
	minsRead: string;
};

export default ArticleType;
