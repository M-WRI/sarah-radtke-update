import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// ANIMATION
import { animation } from "../animation/vitaCard";
// STYLES
import styles from "../styles/TimeLine.module.scss";

export const VitaCardContainer = (data: any) => {
  const { ref, inView } = useInView();

  const boxCtrl = useAnimation();
  const circleCtrl = useAnimation();

  useEffect(() => {
    if (inView) {
      boxCtrl.start("box");
      circleCtrl.start("circle");
    }
  }, [boxCtrl, circleCtrl, inView]);

  return (
    <>
      <div className={styles.cardContainer}>
        <motion.div
          ref={ref}
          className={styles.circle}
          initial={{ scale: 0 }}
          animate={circleCtrl}
          variants={animation}
        />
        <motion.div
          className={styles.animationContainer}
          initial={{ y: "50%", opacity: 0 }}
          animate={boxCtrl}
          variants={animation}
        >
          <div
            className={`${
              data.i % 2 === 0
                ? styles.contentContainerLeft
                : styles.contentContainerRight
            }`}
          >
            <p className={styles.content}>{data.data.text}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};
