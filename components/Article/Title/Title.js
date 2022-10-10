import Date from "components/Date/Date";

import styles from "./title.module.css";

export default function Title({ title, date }) {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <div className={styles.date}>
        <Date dateString={date} />
      </div>
    </div>
  );
}
