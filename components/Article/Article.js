import dynamic from "next/dynamic";
import { MDXRemote } from "next-mdx-remote";

import Date from "components/Date/Date";
import Sidenote from "./Sidenote/Sidenote";
import Figure from "./Figure/Figure";
import ImprovedLink from "./ImprovedLink/ImprovedLink";
// Improve condition within components
const Code = dynamic(() => import("./Code/Code"));

const components = {
  Sidenote: ({ note, withNumber, id }) => (
    <Sidenote note={note} withNumber={withNumber} id={id} />
  ),
  Figure: (props) => <Figure {...props} />,
  code: (props) => <Code {...props} />,
  a: (props) => <ImprovedLink {...props} />
};

export default function Article({ source, date, title }) {
  return (
    <article>
      {/* Change Date - put it next to the title */}
      <h1>{title}</h1>
      <Date dateString={date} alignRight />
      <MDXRemote {...source} components={components} />
    </article>
  );
}
