export type TImageType =
  | "title"
  | "cmd"
  | "acupuncture"
  | "massage"
  | "manual"
  | "about"
  | string;

export interface IImageProps {
  type: TImageType;
  alt: string;
}
