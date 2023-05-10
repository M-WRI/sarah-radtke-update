// TYPES
import { ITextProps } from "../types/text.types";
// STYLES
import styles from "../styles/Text.module.scss";

export const Text = ({
  children,
  center = false,
  margin = true,
}: ITextProps) => {
  return (
    <div
      className={`${styles.textContainer} ${center && styles.center} ${
        margin ? styles.margin : ""
      }`}
    >
      {children}
    </div>
  );
};
