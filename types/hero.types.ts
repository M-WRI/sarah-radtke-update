// TYPES
import { THeadlineType } from "./headline";

export interface IHeroProps {
  img: string;
  title?: string;
  text?: string;
  isMain?: boolean;
  headType?: THeadlineType;
  center?: boolean;
  underline?: boolean;
}
