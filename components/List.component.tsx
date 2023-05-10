import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// ANIMATION
import { animation } from "../animation/infoBox";
// TYPES
import { IListProps } from "../types/list.types";
// STYLES
import styles from "../styles/List.module.scss";

export const List = ({ list }: IListProps) => {
  const { ref, inView } = useInView();

  const textCtrl = useAnimation();
  const lineTopCtrl = useAnimation();
  const lineBottomCtrl = useAnimation();

  useEffect(() => {
    if (inView) {
      textCtrl.start("text");
      lineTopCtrl.start("lineTop");
      lineBottomCtrl.start("lineBottom");
    }
  }, [textCtrl, lineTopCtrl, lineBottomCtrl, inView]);
  return (
    <ul ref={ref} className={styles.container}>
      {list &&
        list.length &&
        list.map((item, i) => (
          <li key={i} className={styles.listItem}>
            <motion.div
              initial={{ x: "-100%" }}
              custom={i}
              animate={lineTopCtrl}
              variants={animation}
              className={styles.line}
            />
            <div className={styles.textElement}>
              <motion.div
                custom={i}
                initial={{ y: "130%" }}
                animate={textCtrl}
                variants={animation}
              >
                {item.title}
              </motion.div>
            </div>
            <motion.div
              initial={{ x: "-100%" }}
              custom={i}
              animate={lineBottomCtrl}
              variants={animation}
              className={styles.line}
            />
          </li>
        ))}
    </ul>
  );
};
