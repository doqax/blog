import Layout from "components/Layout/Layout";
import Image from "next/image";
import styles from "styles/about.module.css";

export default function About() {
  return (
    <Layout>
      <section className={styles.introduction}>
        <div className={styles.image}>
          <Image
            src="/images/me_cut.jpg"
            alt="Picture of Dorian"
            width={237.67}
            height={250}
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className={styles.text}>
          Hi, I'm Dorian, just a developer. I spend my time reading, writing, hiking, running and meditating when shit hits the fan.
        </div>
      </section>
    </Layout>
  );
}
