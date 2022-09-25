import Link from "next/link";
import utilStyles from "styles/utils.module.css";

import { getSortedPostsData } from "lib/posts";
import Date from "components/Date/Date";
import Layout from "components/Layout/Layout";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.introduction}>
        <p>
          Hello, I'm Dorian, a developer living in Belgium. I'm currently taking
          a break to learn a bit more about programming. I mostly write for
          myself.
        </p>
      </section>
      <section>
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

