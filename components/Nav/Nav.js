import Link from "next/link";

import { isCurrentPathName } from "lib/utils";

//   { pathname: "projects", title: "Projects" },
const navTitles = [
  { pathname: "", title: "Home" },
  { pathname: "posts", title: "Blog" },
  { pathname: "about", title: "About"},
  { pathname: "random", title: "Random" },
];
export default function Nav({ currentPathname }) {
  return (
    <nav>
      <ul>
        {navTitles.map(({ pathname, title }) => (
          <li key={pathname}>
            {isCurrentPathName(pathname, currentPathname) ? (
              <div>{title}</div>
            ) : (
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
