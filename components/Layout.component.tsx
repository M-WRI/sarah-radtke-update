// TYPES
import { ILayoutProps } from "../types/layout.types";
// STYLES
import styles from "../styles/Layout.module.scss";

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <main className={styles.container}>{children}</main>
    </>
  );
};
