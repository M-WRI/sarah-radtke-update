import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// DATA
import data from "../api/serviceGallery.json";
// COMPONENTS
import { Headline } from "./Headline.component";
import { Text } from "./Text.component";
import { ImageComponent } from "./Image.component";
// ANIMATION
import { animation } from "../animation/serviceGallery";
// TYPES
import { IArticleData, IItemData } from "../types/serviceGallery";
// STYLES
import styles from "../styles/ServiceGallery.module.scss";

export const ServiceGallery = (): JSX.Element => {
  const [index, setIndex] = useState<number | string>(1);
  const [width, setWidth] = useState<number | null>(null);

  const galleryHandeler = (index: string | number): void => {
    setIndex(index);
  };

  const handleScreenSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  const center = () => {
    return width && width <= 730 ? true : false;
  };

  return (
    <section className={styles.container}>
      <div>
        <ul className={styles.galleryNavContainer}>
          {data.map((item: IItemData) => {
            return (
              <li
                key={`navbar-${item.id}`}
                className={`${styles.galleryNavItem} ${
                  item.id === index && styles.active
                }`}
                onClick={() => galleryHandeler(item.id)}
              >
                <div className={styles.line} />
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.contentContainer}>
        {data.map(
          (article: IArticleData): JSX.Element => (
            <div key={article.id}>
              {article.id === index && (
                <div className={styles.articleContainer}>
                  <div className={styles.imageContainer}>
                    <motion.div
                      initial={{ y: "100%" }}
                      variants={animation}
                      animate={"image"}
                      className={styles.image}
                    >
                      <ImageComponent type={article.img} alt={article.alt} />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    variants={animation}
                    animate={"contentBox"}
                    className={styles.article}
                  >
                    <Headline type="h1" center={center()} underline>
                      {article.title}
                    </Headline>
                    <Text center={center()}>{article.text}</Text>
                  </motion.div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};
