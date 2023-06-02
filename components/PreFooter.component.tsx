// COMPONENTS
import { Headline } from "./Headline.component";
import { ImageComponent } from "./Image.component";
// DATA
import head from "../api/preFooter.json";
import list from "../api/serviceGallery.json";
// TYPES
import { IPreFooterProps } from "../types/preFooter.types";
// STYLES
import styles from "../styles/PreFooter.module.scss";
import Link from "next/link";

export const PreFooter = ({ site }: IPreFooterProps): JSX.Element => {
  const filteredList = list.filter((item) => item.title !== site);

  return (
    <section className={styles.container}>
      <Headline type="h1" center>
        {head.head}
      </Headline>
      <div
        className={
          filteredList.length < 3
            ? styles.listContaienerSm
            : styles.listContainer
        }
      >
        {filteredList.map((item) => (
          <Link key={item.id} href={item.link}>
            <div className={styles.imageContainer}>
              <div className={styles.layer} />
              <ImageComponent type={item.img} alt={item.alt} />
              <Headline center underline>
                {item.title}
              </Headline>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
