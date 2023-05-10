// STYLES
import styles from "../styles/Hamburger.module.scss";

interface HamburgerProps {
  state: () => void;
}

export const Hamburger = ({ state }: HamburgerProps) => {
  return (
    <div onClick={state} className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};
