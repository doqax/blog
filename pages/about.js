import Layout from "components/Layout/Layout";
import utilStyles from "styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <section className={utilStyles.introduction}>
        <p>
          Hello, I'm Dorian, a developer living in Belgium. I'm currently taking
          a break to learn a bit more about programming. I mostly write for
          myself.
        </p>
      </section>
    </Layout>
  );
}
