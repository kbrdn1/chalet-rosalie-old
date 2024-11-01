import { css } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = hstack({
  gap: 0,
  bg: "#FFF",
  alignItems: "stretch",
});

const footerLeft = vstack({
  w: "1/2",
  p: 4,
  gap: 4,
  alignItems: "center",
  justify: "center",
});

const footerRight = vstack({
  w: "1/2",
  p: 4,
  gap: 4,
  alignItems: "left",
  justify: "left",
  bg: "umber",
});

const list = vstack({
  gap: 2,
  mt: 4,
  alignItems: "left",
  justify: "left",
});

const item = css({
  color: "#FFF",
  fontSize: ".9rem",
  fontWeight: "semibold",
  cursor: "pointer",
  transition: "all 0.3s",
  _hover: {
    color: "white",
  },
});

export { root, footerLeft, footerRight, list, item };