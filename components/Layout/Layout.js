import Head from "next/head";
import { useRouter } from "next/router";

import styles from "./layout.module.css";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";

const name = "Dorian Collier";

export default function Layout({ children, isArticle }) {
  const { pathname, back } = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="data;," />
        <meta name="description" content="My blog" />
        <meta name="og:title" content={name} />
        <title>{name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.grid}>
        {/* Make it good on mobile */}
        <header className={styles.header}>
          {/* <Link href="/">
            <h3>Blog</h3>
          </Link> */}

          <Nav currentPathname={pathname} />
        </header>
        <main className={isArticle ? styles.main : styles.container}>
          {children}
          {/* {isArticle && (
            <Button onClick={back} Icon={GoChevronLeft} withIcon>
              Back
            </Button>
          )} */}
        </main>
        <Footer />
      </div>
    </>
  );
}
