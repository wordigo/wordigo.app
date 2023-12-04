import rehypePrism from "@mapbox/rehype-prism";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import remarkGfm from "remark-gfm";

export const POSTS_PATH = path.join(process.cwd(), "posts");

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const postFilePathsByLocale = (locale) =>
  fs
    .readdirSync(path.join(POSTS_PATH, locale))
    .filter((path) => /\.mdx?$/.test(path));

export const getPostBySlug = async (slug, locale) => {
  const postFilePath = path.join(POSTS_PATH, locale, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return { mdxSource, data, postFilePath };
};

export const getAllPosts = async (locale) => {
  const posts = postFilePathsByLocale(locale).map((filePath) => {
    const source = fs.readFileSync(
      path.join(POSTS_PATH, locale, filePath),
      "utf8"
    );
    const { data } = matter(source);

    return data;
  });

  return posts;
};
