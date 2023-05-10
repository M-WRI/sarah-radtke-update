import { motion } from "framer-motion";
// COMPONENTS
import { VitaCardContainer } from "./VitaCardContainer";
// TYPES
import { ITimeLineContent } from "../types/timeLine.types";
// STYLE
import styles from "../styles/TimeLine.module.scss";

export const TimeLine = ({ vita }: ITimeLineContent): JSX.Element => {
  return (
    <section className={styles.container}>
      <motion.div className={styles.progressBar} />
      <div>
        {vita.map((item, i) => (
          <VitaCardContainer key={item.id} data={item} i={i} />
        ))}
      </div>
    </section>
  );
};
