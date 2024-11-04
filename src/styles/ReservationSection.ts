import { css } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = vstack({
  bg: "olivine",
  w: "full",
  p: 10,
  mdDown: {
    p: 0,
    py: 10,
  },
});

const title = css({
  fontSize: "3xl",
  fontWeight: "bold",
  color: "white",
});

const containerGroup = hstack({
  gap: 10,
  alignItems: "stretch",
  justify: "center",
  mdDown: {
    flexDir: "column",
  },
});

const containerLeft = vstack({
  bg: "#FFF",
  p: 4,
  gap: 8,
  justify: "center",
});

const containerRight = vstack({
  bg: "#FFF",
  p: 4,
});

const link = hstack({
  w: "full",
  py: 2,
  px: 4,
  gap: 2,
  bg: "parchment",
  color: "umber",
  fontWeight: "bold",
  maxW: "450px",
});

const form = vstack({
  gap: 4,
  w: "full",
});

const inputGroup = hstack({
  gap: 4,
  w: "full",
  mdDown: {
    flexDir: "column",
  },
});

const input = css({
  w: "full",
  rounded: "sm",
  p: 2,
  borderWidth: "2px",
  borderColor: "teaGreen",
  borderStyle: "solid",
  color: "chamoisee",
  fontSize: "1rem",
});

const inputGroupDateRange = vstack({
  w: "full",
  justify: "left",
});

const textarea = css({
  w: "full",
  rounded: "sm",
  p: 2,
  borderWidth: "2px",
  borderColor: "teaGreen",
  borderStyle: "solid",
  color: "chamoisee",
  fontSize: "1rem",
});

const buttonSubmit = hstack({
  w: "full",
  justify: "center",
  py: 2,
  px: 4,
  bg: "olivine",
  color: "white",
  fontWeight: "bold",
  _hover: {
    bg: "teaGreen",
  },
  transition: "all 0.3s",
});

export {
  root,
  title,
  containerGroup,
  containerLeft,
  containerRight,
  link,
  form,
  inputGroup,
  input,
  inputGroupDateRange,
  textarea,
  buttonSubmit,
};
