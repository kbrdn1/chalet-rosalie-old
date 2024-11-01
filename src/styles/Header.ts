import { css } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = hstack({
  pt: "4rem",
  h: "screen",
  gap: 0,
  alignItems: "start",
  mdDown: {
    flexDirection: "column",
  },
});

const leftSide = vstack({
  position: "relative",
  w: "1/2",
  h: "full",
  justify: "start",
  shadow: "2xl",
  mdDown: {
    w: "full",
    h: "fit"
  },
});

const rightSide = vstack({
  w: "1/2",
  h: "full",
  bg: "olive",
  overflow: "hidden",
  bgImage: "url('/public/img/panorama-1.png')",
  bgSize: "cover",
  bgPosition: "center",
  shadow: "2xl",
  mdDown: {
    w: "full",
    h: "fit"
  },
});

const contentContainer = vstack({
  h: "85%",
  px: "4rem",
  py: "4rem",
  justify: "center",
  bg: "white",
  gap: "2rem",
  bgImage: "url('/public/img/mask-header.png')",
  bgBlendMode: "soft-light",
  bgSize: "cover",
});

const title = css({
  fontSize: "1.3rem",
  fontWeight: "bold",
  color: "umber",
  lgDown: {
    fontSize: "1.1rem",
  },
});

const text = css({
  color: "chamoisee",
});

const box = hstack({
  bg: "olivine",
  gap: 0,
  pos: "absolute",
  right: "-210px",
  bottom: "calc(210px)",
  shadow: "2xl",
});

const boxItem = vstack({
  p: 2,
  bg: "#FFF",
  minW: "210px",
});

const boxButton = vstack({
  w: "full",
  h: "full",
  justify: "center",
  alignItems: "center",
  p: 2,
  textAlign: "center",
  bg: "olivine",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.3rem",
  cursor: "pointer",
  transition: "all 0.3s",
  minW: "210px",
  _hover: {
    bg: "teaGreen",
  },
});

const boxTitle = css({
  color: "chamoisee",
  fontWeight: "bold",
  fontSize: "1.3rem",
});

const boxTitleContainer = hstack({
  gap: 2,
  alignItems: "center",
});

const boxText = css({
  ml: "calc(32px - 0.5rem)",
  textAlign: "right",
  textWrap: "nowrap",
  whiteSpace: "nowrap",
});

const indicatorContainer = hstack({
  w: "full",
  h: "15%",
  alignItems: "center",
  justify: "center",
});

const indicatorArrowContainer = vstack({
  gap: 1,
  justify: "center",
  alignItems: "center",
});

const indicatorArrowIcon = css({});

const indicatorArrowExtension = css({
  transform: "rotate(90deg)",
});

const incatorText = css({
  fontSize: "1.1rem",
  color: "chamoisee",
});

const banner = css({
  h: "full"
});

const styles = {
  root,
  side: {
    left: leftSide,
    right: rightSide,
  },
  content: {
    container: contentContainer,
    title,
    text,
    box,
    boxItem,
    boxButton,
    boxTitleContainer,
    boxTitle,
    boxText,
  },
  indicator: {
    container: indicatorContainer,
    arrow: {
      container: indicatorArrowContainer,
      icon: indicatorArrowIcon,
      extension: indicatorArrowExtension,
    },
    text: incatorText,
  },
  banner,
};

export default styles;
