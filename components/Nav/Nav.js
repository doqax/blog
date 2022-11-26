import Link from "next/link";
import { isCurrentPathName } from "lib/utils";

const navTitles = [
  //   { pathname: "projects", title: "Projects" },
  { pathname: "about", title: "About"},
];
export default function Nav({ currentPathname }) {
  return (
    <nav>
      <ul>
        {navTitles.map(({ pathname, title }) => (
          <li key={pathname}>
            {isCurrentPathName(pathname, currentPathname) ? title : (
              <Link href={`/${pathname}`}>
                <a>{title}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
