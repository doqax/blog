import Layout from "components/Layout/Layout";
import utilStyles from "styles/utils.module.css";
import { getSortedPostsData } from "lib/posts";
import Link from "next/link";

import Date from "components/Date/Date";

function DateHeader({ currentYear, children }) {
  return (
    <div>
      <div className={utilStyles.currentYear}>{currentYear}</div>
      {children}
    </div>
  );
}

function Post({ title, date, id }) {
  return (
    <li className={utilStyles.listItem}>
      <Date dateString={date} alignRight />
      <Link href={`/posts/${id}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }, index) => {
            const currentYear = date.substring(0, 4);
            const post = <Post key={id} id={id} title={title} date={date} />;
            if (!index) {
              return (
                <DateHeader currentYear={currentYear} key={id}>
                  {post}
                </DateHeader>
              );
            } else {
              const prevYear = allPostsData[index - 1].date.substring(0, 4);

              if (currentYear < prevYear) {
                return (
                  <DateHeader currentYear={currentYear} key={id}>
                    {post}
                  </DateHeader>
                );
              }
              return post;
            }
          })}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
