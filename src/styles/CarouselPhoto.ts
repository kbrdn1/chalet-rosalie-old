import { css, cva } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = hstack({
  w: "full",
  h: "full",
  alignItems: "stretch",
  justify: "stretch",
});

const container = cva({
  base: {
    display: "flex",
    pos: "relative",
    w: "full",
  },
  variants: {
    view: {
      selector: {
        w: "4/5",
      },
    },
  },
});

const button = hstack({
  alignItems: "center",
  justify: "center",
  pos: "absolute",
  h: "full",
  fontSize: "2xl",
  p: 2,
  color: "#fff",
  bg: "olivine",
  transition: "all 0.3s",
  opacity: 0.5,
  _hover: {
    opacity: 0.8,
  },
});

const imageContainer = hstack({
  w: "full",
  h: "full",
  bg: "rgba(0, 0, 0, 0.5)",
  alignItems: "center",
  justify: "center",
});

const image = css({
  h: "full",
});

const imageSelectionContainer = vstack({
  w: "1/5",
  h: "full",
  overflowY: "scroll",
  gap: 2,
  p: 2,
});

const imageSelection = css({
  w: "full",
  transition: "all 0.3s",
  _selected: {
    border: "2px solid green",
  },
  _hover: {
    border: "2px solid lightgray",
    opacity: 0.5,
  },
});

export {
  root,
  container,
  button,
  imageContainer,
  image,
  imageSelectionContainer,
  imageSelection,
};
