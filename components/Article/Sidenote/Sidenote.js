import style from "./sidenote.module.css";

export default function Sidenote({ id, note, withNumber = false }) {
  return (
    <>
      <span className={style.side}>
        {withNumber && (
          <label
            className={`${style.marginToggle} ${style.sidenoteNumber}`}
            htmlFor={id}
          />
        )}
      </span>
      <input type="checkbox" id={id} className={style.marginToggle} />
      <span className={withNumber ? style.sidenote : style.marginnote}>
        {note}
      </span>
    </>
  );
}
