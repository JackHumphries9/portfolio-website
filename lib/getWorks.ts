import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content/_works");

export function getWorkSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getWorkBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	type Items = {
		[key: string]: string;
	};

	const items: Items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === "slug") {
			items[field] = realSlug;
		}
		if (field === "content") {
			items[field] = content;
		}

		if (typeof data[field] !== "undefined") {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllWorks(fields: string[] = []) {
	const slugs = getWorkSlugs();
	const posts = slugs
		.map((slug) => getWorkBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}
