import { css } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = hstack({
  w: "full",
  gap: 0,
  py: 8,
});

const carousel = css({
  w: "1/2",
});

const container = vstack({
  w: "1/2",
  gap: 4,
  alignItems: "center",
  justify: "center",
});

const containerTitle = css({
  color: "umber",
  fontSize: "5xl",
  fontWeight: "bold",
});

const content = vstack({
  gap: 2,
  bg: "#FFF",
  shadow: "2xl",
  p: 4,
  alignItems: "center",
  justifyContent: "center",
});

const box = hstack({
  w: "full",
  bg: "umber",
  gap: 0,
  shadow: "2xl",
  justify: "space-evenly",
});

const boxItem = vstack({
  p: 2,
  bg: "umber",
});

const boxTitle = css({
  color: "#FFF",
  fontWeight: "bold",
  fontSize: "1.3rem",
});

const boxTitleContainer = hstack({
  gap: 2,
  alignItems: "center",
});

const boxText = css({
  color: "#FFF",
  ml: "calc(32px - 0.5rem)",
  textAlign: "right",
  textWrap: "nowrap",
  whiteSpace: "nowrap",
});

export {
  root,
  carousel,
  container,
  containerTitle,
  content,
  box,
  boxItem,
  boxTitle,
  boxTitleContainer,
  boxText,
};
