import Layout from "components/Layout/Layout";
import utilStyles from "styles/utils.module.css";
import { getSortedPostsData } from "lib/posts";
import Link from "next/link";

import Date from "components/Date/Date";

export default function Random({ allPostsData }) {
  return (
    <Layout>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/random/${id}`}>
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
  const allPostsData = getSortedPostsData(false, "fr");
  return {
    props: {
      allPostsData,
    },
  };
}
