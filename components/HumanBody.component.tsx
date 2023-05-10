import { useEffect, useRef, useState } from "react";
import data from "../api/humanBody.json";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TAnimationIndex } from "../types/animation.types";
import { Headline } from "./Headline.component";

import HumanBody from "../img/human_body.svg";

import styles from "../styles/HumanBody.module.scss";

interface ISymptomBubbleProps {
  title: string;
  top: number;
  left: number;
}

export const SymptomBubble = ({ title, top, left }: ISymptomBubbleProps) => {
  return (
    <div className={styles.bubble} style={{ top: top, left: left }}>
      <span>{title}</span>
    </div>
  );
};

export const HumanBodySection = () => {
  const [innerWidth, setInnerWidth] = useState<number>();
  const reference = useRef<HTMLInputElement>(null);

  const handleScreenSize = () => {
    setInnerWidth(window.innerWidth);
  };

  const { ref, inView } = useInView();

  const bubble = useAnimation();

  const animation = {
    bubble: (i: TAnimationIndex) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 0.5,
      },
    }),
  };

  useEffect(() => {
    if (reference.current) {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      bubble.start("bubble");
    }
  }, [inView, bubble]);

  return (
    <section ref={reference} className={styles.container}>
      <div className={styles.human} ref={ref}>
        {innerWidth && innerWidth >= 580 ? (
          <>
            {data.humanList.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                variants={animation}
                animate={bubble}
                custom={i}
                className={styles.bubble}
                style={{ top: item.top, left: item.left }}
              >
                <span>{item.title}</span>
              </motion.div>
            ))}
          </>
        ) : (
          <>
            {data.humanList2.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                variants={animation}
                animate={bubble}
                custom={i}
                className={styles.bubble}
                style={{ top: item.top, left: item.left }}
              >
                <span>{item.title}</span>
              </motion.div>
            ))}
          </>
        )}

        <Image src={HumanBody} alt="Human Body" />
      </div>
      <div className={styles.info}>
        <Headline type="h2" center underline>
          {data.info.title}
        </Headline>
        <ul className={styles.list}>
          {data.info.list.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
