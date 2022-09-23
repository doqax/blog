import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import style from "./code.module.css";

// Make it dynamic
SyntaxHighlighter.registerLanguage("jsx", jsx);

export default function Code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || "");
  return (
    <span className={style.contain}>
      {match ? (
        <SyntaxHighlighter
          language={match[1]}
          PreTag="div"
          {...props}
          // wrapLongLines
          style={vscDarkPlus}
          customStyle={{ fontSize: "1em" }}
          codeTagProps={{
            style: {
              lineHeight: "inherit",
              fontSize: "inherit",
            },
          }}
        />
      ) : (
        <code className={className} {...props} />
      )}
    </span>
  );
}
