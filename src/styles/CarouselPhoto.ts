import { css, cva } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = hstack({
  w: "full",
  h: "full",
  alignItems: "stretch",
  justify: "stretch",
  xlDown: {
    flexDirection: "column",
  },
    maxH: "350px",
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
        xlDown: {
          w: "full",
          h: "4/5",
        },
        mdDown: {
          h: "fit",
        },
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
  cursor: "pointer",
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
  xlDown: {
    h: "fit",
  },
});

const image = css({
  h: "full",
  xlDown: {
    h: "fit",
    maxH: "350px",
  },
});

const imageSelectionContainer = vstack({
  w: "1/5",
  h: "full",
  maxH: "350px",
  overflowY: "auto",
  alignItems: "center",
  justify: "start",
  gap: 2,
  xlDown: {
    w: "full",
    maxH: "150px",
  },
});

const imageSelectionElement = hstack({
  w: "fit",
  h: "350px",
});

const imageSelection = css({
  w: "full",
  h: "full",
  transition: "all 0.3s",
  _selected: {
    border: "2px solid green",
  },
  _hover: {
    border: "2px solid lightgray",
    opacity: 0.7,
  },
  mdDown: {
    w: "full",
    h: "fit",
  },
  cursor: "pointer",
});

export {
  root,
  container,
  button,
  imageContainer,
  image,
  imageSelectionContainer,
  imageSelectionElement,
  imageSelection,
};
