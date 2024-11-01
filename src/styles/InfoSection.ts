import { css } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = vstack({
  w: "full",
  bgImage: "url('/public/img/mask-info.png')",
  bgSize: "cover",
  bgBlendMode: "color-dodge",
  bgPosition: "center",
  alignItems: "center",
  justify: "center",
  p: 4,
  pos: "relative",
});

const map = css({
  mb: "-2rem",
  zIndex: 1,
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
  mdDown: {
    flexDirection: "column",
  },
});

const containerText = css({
});

const containerItems = vstack({
  gap: 4,
  alignItems: "stretch",
  justify: "center",
  mdDown: {
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
