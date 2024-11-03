import { css } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = vstack({
  w: "full",
  bg: "transparent",
  bgImage: "url('/img/mask-info.png')",
  bgSize: "cover",
  bgBlendMode: "multiply",
  bgPosition: "center",
  alignItems: "center",
  justify: "center",
  p: 10,
  pos: "relative",
  mdDown: {
    p: 0,
  },
});

const map = css({
  mb: "-2rem",
  zIndex: 1,
  mdDown: {
    mb: 0,
    maxW: "full",
  },
});

const container = hstack({
  bg: "#FFF",
  maxW: "5xl",
  alignItems: "center",
  justify: "center",
  shadow: "2xl",
  p: 4,
  gap: 4,
  mt: 4,
  xlDown: {
    flexDirection: "column",
  },
});

const containerText = css({
});

const containerItems = vstack({
  gap: 4,
  alignItems: "stretch",
  justify: "center",
  xlDown: {
    flexDirection: "row",
  },
});

const item = vstack({
  bg: "olivine",
  gap: 2,
  color: "#FFF",
  px: 4,
  py: 2,
  fontSize: ".9rem",
  fontWeight: "bold",
  textWrap: "nowrap",
  whiteSpace: "nowrap",
});

export { root, map, container, containerText, containerItems, item };
