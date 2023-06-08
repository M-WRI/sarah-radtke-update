// COMPONENTS
import { TimeLine } from "../components/TimeLine";
import { PhotoBox } from "../components/PhotoBox.component";
import { InfoBox } from "../components/InfoBox.component";
import { PreFooter } from "../components/PreFooter.component";
import { Footer } from "../components/Footer.component";
// DATA
import data from "../api/aboutMe.json";
// TYPES
import type { NextPage } from "next";
import { MetaData } from "../components/MetaData.component";

const UeberMich: NextPage = () => {
  return (
    <div>
      <MetaData
        title={data.meta.title}
        description={data.meta.description}
        url="www.sarah-radtke.de/ueber-mich"
        img="https://www.sarahradtke.de/img/og_img_ueber_mich.jpg"
      />
      <PhotoBox
        title={data.photoTitle}
        text={data.photoText}
        img="mittelpunkt"
        underline
      />
      <InfoBox text={data.symptomText} />
      <TimeLine vita={data.vita} />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default UeberMich;
