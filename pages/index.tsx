import Head from "next/head";
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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sarah Radtke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        img="about"
        title={data.heroData.title}
        text={data.heroData.text}
        center
        underline
      />
      <div className="more-spacing">
        <Headline type="h1" underline center>
          {data.headline}
        </Headline>
      </div>
      <ServiceGallery />
      <HumanBodySection />
      <div
        className="more-spacing"
        style={{ maxWidth: "800px", margin: "auto", padding: "0 1rem" }}
      >
        <Headline type="h1" underline center>
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
