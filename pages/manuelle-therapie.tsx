// DATA
import data from "../api/manualTherapie.json";
// COMPONENTS
import { Hero } from "../components/Hero.component";
import { InfoBox } from "../components/InfoBox.component";
import { PreFooter } from "../components/PreFooter.component";
import { Footer } from "../components/Footer.component";
// TYPES
import type { NextPage } from "next";
import { MetaData } from "../components/MetaData.component";
import styles from "../styles/Hero.module.scss";

const ManuelleTherapie: NextPage = () => {
  return (
    <div>
      <MetaData
        title={data.meta.title}
        description={data.meta.description}
        url="www.sarah-radtke.de/manuelle-therapie"
        img="https://www.sarahradtke.de/img/og_img_manuelle_therapie.jpg"
      />
      <div className={styles.heroPositioning}>
        <Hero
          img="manual"
          title={data.heroTitle}
          text={data.heroText}
          center
          underline
          customPosition={{
            isTrue: true,
            name: "heroTextContainerAlternative",
          }}
        />
      </div>
      <InfoBox headline={data.symptomTitle} list={data.symptomList} />
      <PreFooter site="Manuelle Therapie" />
      <Footer />
    </div>
  );
};

export default ManuelleTherapie;
