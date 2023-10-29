// DATA
import data from "../api/home.json";
// COMPONENTS
import { Hero } from "../components/Hero.component";
import { ServiceGallery } from "../components/ServiceGallery.component";
import { PriceInfo } from "../components/PriceInfo.component";
import { PreFooter } from "../components/PreFooter.component";
import { Footer } from "../components/Footer.component";
import { Headline } from "../components/Headline.component";
import { HumanBodySection } from "../components/HumanBody.component";
// TYPES
import type { NextPage } from "next";
import { Text } from "../components/Text.component";
import { MetaData } from "../components/MetaData.component";

const Home: NextPage = () => {
  return (
    <div>
      <MetaData
        title={data.meta.title}
        description={data.meta.description}
        url="https://www.sarah-radtke.de"
        img="https://www.sarahradtke.de/img/og_img_start.jpg"
      />
      <Hero
        img="about"
        headType="h2"
        title={data.heroData.title}
        text={data.heroData.text}
        center
        underline
        customPosition={{ isTrue: true, name: "indexHero" }}
      />
      <div
        style={{
          transform: "translateY(100px)",
          marginBottom: "200px",
        }}
      >
        <HumanBodySection />
      </div>
      <ServiceGallery />
      <div
        className="more-spacing"
        style={{ maxWidth: "800px", margin: "auto", padding: "0 1rem" }}
      >
        <Headline type="h2" underline center>
          {data.infoSection.title}
        </Headline>
        <Text center>{data.infoSection.text}</Text>
      </div>
      <PriceInfo />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Home;
