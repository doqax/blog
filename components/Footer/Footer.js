import styles from "./footer.module.css";

const navTitles = [
  { href: "linkedin.com/in/doqax", title: "Linkedin" },
  { href: "twitter.com/doqax", title: "Twitter" },
  { href: "github.com/doqax", title: "Github" },
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
