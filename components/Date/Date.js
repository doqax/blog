import { format } from "lib/utils";
import style from "./date.module.css";

export default function Date({ dateString, alignRight = false, full = false }) {
  const time = (
    <time dateTime={dateString} className={style.lightText}>
      {format(dateString, full)}
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
