// DATA
import data from "../api/massage.json";
import cmdData from "../api/cmd.json";
// COMPONENTS
import { Hero } from "../components/Hero.component";
import { InfoBox } from "../components/InfoBox.component";
import { PhotoBox } from "../components/PhotoBox.component";
import { PreFooter } from "../components/PreFooter.component";
import { Footer } from "../components/Footer.component";
import { Headline } from "../components/Headline.component";
// TYPES
import type { NextPage } from "next";
import { MetaData } from "../components/MetaData.component";

const Massage: NextPage = () => {
  return (
    <div>
      <MetaData
        title={data.meta.title}
        description={data.meta.description}
        url="www.sarah-radtke.de/physiotherapie"
        img="https://www.sarahradtke.de/img/og_img_physiotherapie.jpg"
      />
      <Hero
        img="massage"
        title={data.heroTitle}
        text={data.heroText}
        center
        underline
      />
      <PhotoBox
        title={cmdData.photoTitle}
        text={cmdData.photoText}
        img="cmd2"
        underline
      />
      <InfoBox headline={cmdData.symptomTitle} list={cmdData.symptomList} />

      {data.photoTextList.map((item, i) => (
        <PhotoBox
          key={item.id}
          img={item.img}
          title={item.photoTitle}
          text={item.photoText}
          invert={i % 2 === 1 && true}
          underline
          height
        />
      ))}
      <InfoBox headline={data.symptomTitle} list={data.symptomList} />
      <PreFooter site="Physiotherapie" />
      <Footer />
    </div>
  );
};

export default Massage;
