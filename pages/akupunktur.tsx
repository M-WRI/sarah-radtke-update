// COMPONENTS
import { Footer } from "../components/Footer.component";
import { Hero } from "../components/Hero.component";
import { InfoBox } from "../components/InfoBox.component";
import { PreFooter } from "../components/PreFooter.component";
import { PhotoBox } from "../components/PhotoBox.component";
import { Text } from "../components/Text.component";
import { Headline } from "../components/Headline.component";

// DATA
import data from "../api/acupuncture.json";
// TYPES
import type { NextPage } from "next";
import { MetaData } from "../components/MetaData.component";

const Akupunktur: NextPage = () => {
  return (
    <div>
      <MetaData
        title={data.meta.title}
        description={data.meta.description}
        url="www.sarah-radtke.de/akupunktur"
        img="https://www.sarahradtke.de/img/og_img_akupunktur.jpg"
      />
      <Hero
        img="acupuncture"
        title={data.heroTitle}
        text={data.heroText}
        center
        underline
      />
      <PhotoBox
        title={data.photoTitle}
        text={data.photoText}
        img="personal"
        underline
      />
      <div
        className="more-spacing"
        style={{ maxWidth: 650, padding: "0 1rem", margin: "0 auto" }}
      >
        <Headline center underline>
          {data.info.headline}
        </Headline>
        <Text center>{data.info.text}</Text>
      </div>
      <InfoBox headline={data.symptomData.headline} list={data.list} />
      <PreFooter site="Akupunktur" />
      <Footer />
    </div>
  );
};

export default Akupunktur;
