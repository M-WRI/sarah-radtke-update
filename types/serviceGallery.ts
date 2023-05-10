// TYPES
import { TImageType } from "./image.types";

export interface IArticleData {
  id: number | string;
  title: string;
  text: string;
  alt: string;
  // link: string;
  img: TImageType;
}

export interface IItemData {
  id: number | string;
  title: string;
}
