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

const ManuelleTherapie: NextPage = () => {
  return (
    <div>
      <MetaData
        title={data.meta.title}
        description={data.meta.description}
        url="www.sarah-radtke.de/manuelle-therapie"
      />
      <Hero
        img="manual"
        title={data.heroTitle}
        text={data.heroText}
        center
        underline
      />
      <InfoBox headline={data.symptomTitle} list={data.symptomList} />
      <PreFooter site="Manuelle Therapie" />
      <Footer />
    </div>
  );
};

export default ManuelleTherapie;
