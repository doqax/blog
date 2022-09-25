import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { GoChevronLeft } from "react-icons/go";
// To change
import utilStyles from "styles/utils.module.css";

import styles from "./layout.module.css";

import Button from "components/Button/Button";
import Nav from "components/Nav/Nav";

const name = "Dorian Collier";

// Onglets - About | Blog | Work | CV
// Write a small text about the website
// Write an about Page
// Make a CV
// Write an article
// French stuff

// Refactor css once it works
// Maybe use styled-system or something like that

export default function Layout({ children, isArticle }) {
  const { pathname, back } = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="data;," />
        <meta name="description" content="Just a web site" />
        <meta name="og:title" content={name} />
        <title>{name}</title>
      </Head>
      <div className={styles.grid}>
        {/* Make it good on mobile */}
        <header className={styles.header}>
          <h3>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h3>
          <Nav currentPathname={pathname} />
        </header>
        <main className={isArticle ? styles.main : styles.container}>
          {children}
          {isArticle && (
            <Button onClick={back} Icon={GoChevronLeft} withIcon>
              Back
            </Button>
          )}
        </main>
        <footer className={styles.footer}>asd</footer>
      </div>
    </>
  );
}
