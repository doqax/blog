import Link from "next/link";

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
