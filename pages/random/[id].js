import Head from "next/head";
import { getAllPostIds, getPostData } from "lib/posts";
import { MDXProvider } from "@mdx-js/react";

import Layout from "components/Layout/Layout";
import Article from "components/Article/Article";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return postData;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function RandomPost({ source, frontMatter: { title, date } }) {
  return (
    <MDXProvider>
      <Layout isArticle>
        <Head>
          <title>{title}</title>
        </Head>
        <Article
          date={date}
          source={source}
          title={title}
        />
      </Layout>
    </MDXProvider>
  );
}
