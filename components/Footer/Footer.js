import styles from "./footer.module.css";

const navTitles = [
  { href: "github.com/doqax", title: "Github" },
  // { href: "twitter.com/doqax", title: "Twitter" },
  { href: "linkedin.com/in/doqax", title: "Linkedin" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        {navTitles.map(({ href, title }) => (
          <li key={title}>
            <a
              href={`https://${href}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
