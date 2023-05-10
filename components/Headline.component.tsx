// TYPES
import { IHeadlineProps, THeadlineType } from "../types/headline";
// STYLES
import styles from "../styles/Headline.module.scss";

export const Headline = ({
  children,
  type = "h2",
  margin = true,
  center = false,
  underline = false,
}: IHeadlineProps) => {
  const headType = (type: THeadlineType) => {
    switch (type) {
      case "h1":
        return (
          <div className={`${center ? styles.center : ""}`}>
            <h1
              className={`${styles.baseHead} ${styles.mainHead} ${
                margin ? styles.margin : ""
              } ${underline && styles.underline}`}
            >
              {children}
            </h1>
          </div>
        );
      case "h2":
        return (
          <div className={`${center ? styles.center : ""}`}>
            <h2
              className={`${styles.baseHead} ${styles.subHead} ${
                center ? styles.center : ""
              }  ${margin ? styles.margin : ""}  ${
                underline && styles.underline
              }`}
            >
              {children}
            </h2>
          </div>
        );

      case "sanserif":
        return (
          <div className={`${center ? styles.center : ""}`}>
            <h2
              className={`${styles.sanserif} ${center ? styles.center : ""}  ${
                margin ? styles.margin : ""
              }  ${underline && styles.underline}`}
            >
              {children}
            </h2>
          </div>
        );
    }
  };

  const headline = headType(type);

  return <div>{headline}</div>;
};
