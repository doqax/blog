import style from './poem.module.css';

export default function Poem({ children }) {
  return <div className={style.poem}>{children}</div>;
}
