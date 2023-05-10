import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// COMPONENTS
import { Headline } from "./Headline.component";
import { Text } from "./Text.component";
// ANIMATION
import { animation } from "../animation/photoBoxAnimation";
// TYPES
import { IPhotoBoxProps } from "../types/photoBox.types";
// STYLES
import styles from "../styles/PhotoBox.module.scss";
import { ImageComponent } from "./Image.component";

export const PhotoBox = ({
  title,
  text,
  img,
  link,
  invert = false,
  underline = false,
}: IPhotoBoxProps) => {
  const [innerHeight, setInnerHeight] = useState<number>();
  const [innerWidth, setInnerWidth] = useState<number>();
  const [offsetY, setOffsetY] = useState<number>();
  const [scroll, setScroll] = useState<number>();

  const reference = useRef<HTMLInputElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const handleScroll = () => {
    if (reference.current) {
      setOffsetY(reference.current.getBoundingClientRect().top);
    }
  };

  const handleScreenSize = () => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    if (reference.current) {
      setOffsetY(reference.current.getBoundingClientRect().top);
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  const headCtrl = useAnimation();
  const textCtrl = useAnimation();
  const linkCtrl = useAnimation();

  useEffect(() => {
    if (offsetY && innerHeight) {
      setScroll(offsetY - innerHeight);
    }
  }, [innerHeight, offsetY]);

  useEffect(() => {
    if (inView) {
      headCtrl.start("head");
      textCtrl.start("text");
      linkCtrl.start("link");
    }
  }, [inView, headCtrl, textCtrl, linkCtrl]);

  return (
    <section
      ref={reference}
      className={`${styles.container} ${invert && styles.invert}`}
    >
      <div className={styles.imageContainer}>
        <div className={styles.bgImageElement}></div>
        <div>
          {scroll && offsetY && (
            <div
              className={styles.imageWrapper}
              style={{
                transform: `translateY(${scroll < 1 && offsetY * 0.2}px)`,
              }}
            >
              <ImageComponent type={img} alt={img} />
            </div>
          )}
        </div>
      </div>

      <div ref={ref} className={styles.contentBox}>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          variants={animation}
          animate={headCtrl}
        >
          {innerWidth && (
            <Headline
              type="h1"
              center={innerWidth <= 830 ? true : false}
              underline={underline}
            >
              {title}
            </Headline>
          )}
        </motion.div>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          variants={animation}
          animate={textCtrl}
        >
          {innerWidth && (
            <Text center={innerWidth <= 830 ? true : false}>{text}</Text>
          )}
        </motion.div>
      </div>
    </section>
  );
};
