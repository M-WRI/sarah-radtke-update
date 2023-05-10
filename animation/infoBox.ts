// TYPES
import { TAnimationIndex } from "../types/animation.types";

export const animation = {
  text: (i: TAnimationIndex) => ({
    y: 0,
    transition: {
      delay: i * 0.2,
      ease: [0.7, 0.135, 0.235, 0.99],
      duration: 0.3,
    },
  }),

  lineTop: (i: TAnimationIndex) => ({
    x: 0,
    transition: {
      delay: i * 0.2,
      ease: [0.7, 0.135, 0.235, 0.99],
      duration: 0.3,
    },
  }),

  lineBottom: (i: TAnimationIndex) => ({
    x: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      ease: [0.7, 0.135, 0.235, 0.99],
      duration: 0.3,
    },
  }),
};
