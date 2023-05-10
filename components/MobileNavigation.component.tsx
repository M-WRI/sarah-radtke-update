import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// DATA
import data from "../api/navigation.json";
// COMPONENTS
import { Hamburger } from "./Hamburger.component";
// STYLES
import styles from "../styles/MobileNavigation.module.scss";

export const MobileNavigation = () => {
  const [state, setState] = useState(false);

  const animation = {
    open: {
      y: "0%",
      transition: {
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.2,
      },
      skewY: [5, 0],
    },
    close: {
      y: "-100%",
      transition: {
        delay: 1,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.3,
      },
      skewY: [5, 0],
    },
    lineTop: (i: number) => ({
      x: 0,
      transition: {
        delay: i * 0.2,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.3,
      },
    }),
    lineBottom: (i: number) => ({
      x: 0,
      transition: {
        delay: 0.2 + i * 0.2,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.3,
      },
    }),
    lineTopClose: (i: number) => ({
      x: "-130%",
      transition: {
        delay: i * 0.2,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.3,
      },
    }),
    lineBottomClose: (i: number) => ({
      x: "-130%",
      transition: {
        delay: 0.2 + i * 0.2,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.3,
      },
    }),
    textOpen: (i: number) => ({
      y: "0%",
      transition: {
        delay: (i + 1) * 0.2,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.3,
      },
    }),
    textClose: (i: number) => ({
      y: "140%",
      transition: {
        delay: 0.2 * (i + 1),
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.3,
      },
    }),
  };

  const stateHandler = () => {
    setState(!state);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => setState(false)}>
        <Link href="/">
          <Image
            src="/icon/sarah-radtke-logo.svg"
            alt="sarah logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Link>
      </div>
      <Hamburger state={stateHandler} />
      <motion.div
        className={styles.navContainer}
        initial={{ y: "-130%" }}
        animate={state ? "open" : "close"}
        variants={animation}
      >
        <ul className={styles.listContainer}>
          {data.map((item, i) => (
            <li key={i} className={styles.listItem} onClick={stateHandler}>
              <motion.div
                initial={{ x: "-130%" }}
                custom={i}
                animate={state ? "lineTop" : "lineTopClose"}
                variants={animation}
                className={styles.line}
              />
              <Link href={item.slug}>
                <div className={styles.textElement}>
                  <motion.div
                    custom={i}
                    initial={{ y: "140%" }}
                    animate={state ? "textOpen" : "textClose"}
                    variants={animation}
                  >
                    {item.title}
                  </motion.div>
                </div>
              </Link>
              <motion.div
                initial={{ x: "-130%" }}
                custom={i}
                animate={state ? "lineBottom" : "lineBottomClose"}
                variants={animation}
                className={styles.line}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
