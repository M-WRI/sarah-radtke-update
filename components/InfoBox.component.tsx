// TYPES
import { IInfoBoxProps } from "../types/infoBox.types";
// STYLES
import styles from "../styles/Infobox.module.scss";
import { Headline } from "./Headline.component";
import { Text } from "./Text.component";
import { List } from "./List.component";

export const InfoBox = ({ headline, text, list, bg = true }: IInfoBoxProps) => {
  return (
    <section className={`${bg ? styles.container : styles.container}`}>
      <div className={styles.wrapper}>
        {headline && (
          <Headline type="h2" center>
            {headline}
          </Headline>
        )}
        {text && <Text center>{text}</Text>}
        {list && list.length && <List list={list} />}
      </div>
    </section>
  );
};
