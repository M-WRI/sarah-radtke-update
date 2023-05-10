// COMPONENTS
import { Headline } from "./Headline.component";
import { Text } from "./Text.component";
// DATA
import data from "../api/footer.json";
// STYLES
import styles from "../styles/Footer.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <div className={styles.addressContainer}>
        <Headline center>{data.address.headline}</Headline>
        <Text margin={false} center>
          {data.address.info.partI}
        </Text>
        <Text margin={false} center>
          {data.address.info.partII}
        </Text>
        <Text margin={false} center>
          {data.address.address}
        </Text>
      </div>
      <div>
        <Text margin={false} center>
          {data.schedule.partI}
        </Text>
        <Text margin={false} center>
          {data.schedule.partII}
        </Text>
      </div>
      <div className={styles.contactContainer}>
        <Text margin={false} center>
          {data.contact.partI}
        </Text>
        <Text margin={false} center>
          {data.contact.partII}
        </Text>
      </div>
    </footer>
  );
};
