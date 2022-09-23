import { format } from "lib/utils";
import style from "./date.module.css";

export default function Date({ dateString, alignRight = false }) {
  const time = (
    <time dateTime={dateString} className={style.lightText}>
      {format(dateString)}
    </time>
  );

  return alignRight ? (
    <small className={style.alignRight}>
      {time}
    </small>
  ) : (
    time
  );
}
