import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize'



const postsDirectory = path.join(process.cwd(), "posts");

// I don't need a complete traduction of the website in french
// good enough for now
export function getSortedPostsData(trimmed = false, lg = "en") {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  const filterByLanguageMatterResult = allPostsData.filter(
    (data) => data.language === lg
  );

  const filteredPostsData = trimmed
    ? filterByLanguageMatterResult.slice(0, 3)
    : filterByLanguageMatterResult;

  // Sort posts by date
  return filteredPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath);

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      id,
      source: mdxSource,
      frontMatter: data,
    },
  };
}
