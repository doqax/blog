import dynamic from "next/dynamic";
import { MDXRemote } from "next-mdx-remote";

import Sidenote from "./Sidenote/Sidenote";
import Figure from "./Figure/Figure";
import ImprovedLink from "./ImprovedLink/ImprovedLink";
import Title from "./Title/Title";
import Poem from "./Poem/Poem";

// Improve condition within components
const Code = dynamic(() => import("./Code/Code"));

const components = {
  Sidenote: ({ note, withNumber, id }) => (
    <></>
  ),
  Figure: (props) => <Figure {...props} />,
  code: (props) => <Code {...props} />,
  a: (props) => <ImprovedLink {...props} />,
  Hr: () => (
    <div style={{ marginBottom: "3rem", height: "1px", width: "1px" }} />),
  Poem: (props) => <Poem {...props} />,
};

export default function Article({ source, date, title }) {
  return (
    <article>
      {/* Change Date - put it next to the title */}
      <Title date={date} title={title} />
      <MDXRemote {...source} components={components} />
    </article>
  );
}
