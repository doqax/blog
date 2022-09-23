import Sidenote from "../Sidenote/Sidenote";
import style from "./figure.module.css";

// Make it work with Image
export default function Figure({
  withSideNote = false,
  note,
  src,
  alt,
  fullwidth = false,
}) {
  return (
    <figure className={`${style.figure} ${fullwidth ? style.fullwidth : ""}`}>
      {withSideNote && !fullwidth && <Sidenote note={note} />}
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}
