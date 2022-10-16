import Link from "next/link";
import utilStyles from "styles/utils.module.css";

import { getSortedPostsData } from "lib/posts";
import Date from "components/Date/Date";
import Layout from "components/Layout/Layout";

// Make sure Images are good to go
// Improve Home
// Write an about page

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section>
      <p>Work in progress</p>
        <h3>Latest posts</h3>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <Date dateString={date} alignRight />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(true);
  return {
    props: {
      allPostsData,
    },
  };
}

