import Link from "next/link";
import { GoLinkExternal } from 'react-icons/go';

export default function ImprovedLink({ href, children }) {
  const isExternal = href.includes("http");
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} <GoLinkExternal />
    </a>
  ) : (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}
