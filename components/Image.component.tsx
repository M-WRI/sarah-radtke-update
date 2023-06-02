import Image from "next/image";
// IMG
import TitleImg from "../img/title_img_sarah_radtke.jpeg";
import Cmd from "../img/cmd_img_sarah_radtke.jpeg";
import Cmd2 from "../img/cmd_2_img_sarah_radtke.jpeg";
import Acupuncture2 from "../img/acupuncture_2_img_sarah_radtke.jpeg";
import Massage from "../img/massage_img_sarah_radtke.jpeg";
import Fruchtbarkeitsmassage from "../img/fruchtbarkeitsmassage_img_sarah_radtke.jpg";
import Lymphdrainage from "../img/lymphdrainage_img_sarah_radkte.jpg";
import Bindegewebe from "../img/bindegewebsmassage_img_sarah_radtke.jpeg";
import Manual from "../img/manuelle_therapie_title_sarah_radtke.jpg";
import About from "../img/about_img_sarah_radkte.jpeg";
import MittelPunkt from "../img/mittelpunkt_img_sarah_radtke.jpeg";
import Personal from "../img/personal_img_sarah_radtke.jpeg";
import KinesioTaping from "../img/kinesiotaping_img_sarah_radtke.jpg";
import SchroepfBehandlung from "../img/schroepfbehandlung_img_sarah_radtke.jpg";
// TYPE
import { IImageProps, TImageType } from "../types/image.types";

export const ImageComponent = ({ type, alt }: IImageProps): JSX.Element => {
  const imageSwitch = (type: TImageType) => {
    switch (type) {
      case "title":
        return TitleImg;
      case "cmd":
        return Cmd;
      case "cmd2":
        return Cmd2;
      case "acupuncture":
        return Acupuncture2;
      case "massage":
        return Massage;
      case "fruchtbarkeitsmassage":
        return Fruchtbarkeitsmassage;
      case "lymphdrainage":
        return Lymphdrainage;
      case "bindegewebsmassage":
        return Bindegewebe;
      case "manual":
        return Manual;
      case "about":
        return About;
      case "mittelpunkt":
        return MittelPunkt;
      case "personal":
        return Personal;
      case "kinesiotaping":
        return KinesioTaping;
      case "schroepfbehandlung":
        return SchroepfBehandlung;
    }
  };

  const img = imageSwitch(type);

  return (
    <>
      {img && (
        <Image src={img} alt={alt} layout="fill" objectFit="cover" priority />
      )}
    </>
  );
};
