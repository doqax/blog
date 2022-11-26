import Image from "next/image";
import Link from "next/link";
import styles from "styles/about.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import ImprovedLink from "components/Article/ImprovedLink/ImprovedLink";

export default function About() {
  return (
    <section className={styles.introduction}>
      <div className={styles.image}>
        <div className={styles.corner}>
          <Image
            src="/images/me_cut.jpg"
            alt="Picture of Dorian"
            width={142}
            height={150}
            style={{ borderRadius: "100%" }}
          />
        </div>
      </div>
      <p className={styles.text}>
        Hi. I'm Dorian, just a developer. I live in Charleroi, Belgium. Here's
        my{" "}
        <Link href="/">
          <a>blog</a>
        </Link>
        .
      </p>
      <div className={styles.media}>
        <ImprovedLink href="https://github.com/doqax">
          <AiFillGithub />
        </ImprovedLink>
        <ImprovedLink href="https://www.linkedin.com/in/doqax/">
          <AiFillLinkedin />
        </ImprovedLink>
        <ImprovedLink href="https://twitter.com/doqax">
          <BsTwitter />
        </ImprovedLink>
        {/* <Link href="/"></Link> */}
      </div>
    </section>
  );
}
