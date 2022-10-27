import Link from "next/link";

import { isCurrentPathName } from "lib/utils";

//   { pathname: "projects", title: "Projects" },
  // { pathname: "", title: "Home" },
const navTitles = [
  { pathname: "posts", title: "Blog" },
  { pathname: "about", title: "About"},
  { pathname: "random", title: "Blogue" },
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
