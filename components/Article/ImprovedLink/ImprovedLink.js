import Link from "next/link";
// import { GoLinkExternal } from 'react-icons/go';
// <GoLinkExternal fontSize={12} p={0} />
export default function ImprovedLink({ href, children }) {
  const isExternal = href.includes("http");
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} 
    </a>
  ) : (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}
