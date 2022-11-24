import Sidenote from "../Sidenote/Sidenote";
import style from "./figure.module.css";

// Make it work with Image
export default function Figure({
  src,
  alt,
  fullwidth = false,
}) {
  return (
    <figure className={`${style.figure} ${style.fullwidth}`}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}
