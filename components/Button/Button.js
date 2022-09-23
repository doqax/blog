import { forwardRef } from "react";
import styles from "./button.module.css";

const Button = forwardRef(
  ({ children, onClick = () => {}, Icon, withIcon = false }, ref) => {
    return (
      <button ref={ref} className={styles.btn} onClick={onClick}>
        {withIcon ? (
          <div className={styles.grid}>
            <span className={styles.center}>
              <Icon />
            </span>
            <span>{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

export default Button;
