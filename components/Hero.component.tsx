import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// COMPONENTS
import { Text } from "./Text.component";
import { Headline } from "./Headline.component";
import { ImageComponent } from "./Image.component";
// TYPES
import { IHeroProps } from "../types/hero.types";
// ANIMATION
import { animation } from "../animation/heroAnimation";
// STYLES
import styles from "../styles/Hero.module.scss";

export const Hero = ({
  img,
  text,
  title,
  isMain = false,
  headType = "h2",
  center = false,
  underline = false,
}: IHeroProps) => {
  const { ref, inView } = useInView();

  const imgConCtrl = useAnimation();
  const imgCtrl = useAnimation();
  const textBox = useAnimation();

  useEffect(() => {
    if (inView) {
      imgConCtrl.start("imageContainer");
      imgCtrl.start("image");
      textBox.start("textContainer");
    }
  }, [inView, imgCtrl, imgConCtrl, textBox]);

  return (
    <section ref={ref} className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        initial={{ width: "100%" }}
        variants={animation}
        animate={imgConCtrl}
      >
        <motion.div
          className={styles.image}
          initial={{ y: "100%" }}
          variants={animation}
          animate={imgCtrl}
        >
          {img && <ImageComponent type={img} alt="Titelbild Sarah Radtke" />}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        variants={animation}
        animate={textBox}
        className={
          isMain ? styles.heroTextContainerIndex : styles.heroTextContainer
        }
      >
        {title && (
          <Headline type={headType} center={center} underline={underline}>
            {title}
          </Headline>
        )}
        {text && <Text center={center}>{text}</Text>}
      </motion.div>
    </section>
  );
};
