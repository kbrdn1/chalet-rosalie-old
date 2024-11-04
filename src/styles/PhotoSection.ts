import { css } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = vstack({
  bg: "parchment",
  p: 10,
  alignItems: "center",
  justify: "center",
  mdDown: {
    p: 0,
    py: 10,
  },
});

const title = css({
  fontSize: 24,
  fontWeight: "bold",
  color: "umber",
});

const container = css({
  bg: "umber",
  w: "full",
  h: "fit",
  p: 4,
});

const carousel = hstack({
});

export { root, title, container, carousel };