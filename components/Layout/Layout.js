import Head from "next/head";
import { useRouter } from "next/router";

import styles from "./layout.module.css";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";

const name = "Dorian Collier";

export default function Layout({ children, isArticle }) {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="data;," />
        {/* <meta name="description" content="A blog" /> */}
        <meta name="og:title" content="A blog" />
        <title>{name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.grid}>
        {/* Make it good on mobile */}
        <header className={styles.header}>
          <Nav currentPathname={pathname} />
        </header>
        <main className={isArticle ? styles.main : styles.container}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
