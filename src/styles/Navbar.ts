import { css } from "panda/css";
import { hstack } from "panda/patterns";

const root = hstack({
  position: "fixed",
  w: "full",
  h: "fit",
  bg: "white",
  maxW: "1920px",
  justify: "between",
  zIndex: 10,
});

const titleContainer = hstack({
  w: "1/2",
  h: "4rem",
  justify: "center",
  alignItems: "center",
  mdDown: {
    w: "full",
  },
});

const titleLink = hstack({
  h: "full",
  textDecoration: "none",
  alignItems: "center",
});

const logo = css({
  h: "1.3rem",
});

const titleText = css({
  fontSize: "1.3rem",
  fontWeight: "bold",
  color: "umber",
});

const listContainer = hstack({
  w: "1/2",
  h: "4rem",
  gap: 0,
  justify: "space-evenly",
  alignItems: "center",
  mdDown: {
    display: "none",
    w: 0,
  },
});

const listItem = hstack({
  w: "full",
  h: "full",
  justify: "center",
  px: 2,
  fontSize: "1rem",
  fontWeight: "semibold",
  transition: "all 0.3s",
  color: "olivine",
  _hover: {
    bg: "olivine",
    color: "white",
  },
});

const listLink = hstack({
  h: "full",
  justify: "center",
  alignItems: "center",
});

const styles = {
  root,
  title: {
    container: titleContainer,
    link: titleLink,
    logo,
    text: titleText,
  },
  list: {
    container: listContainer,
    item: listItem,
    link: listLink,
  },
};

export default styles;
