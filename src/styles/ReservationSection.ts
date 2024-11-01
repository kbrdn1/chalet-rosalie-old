import { css } from "panda/css";
import { hstack, vstack } from "panda/patterns";

const root = vstack({
  bg: "olivine",
  w: "full",
  p: 10,
});

const title = css({
  fontSize: "5xl",
  fontWeight: "bold",
  color: "white",
});

const containerGroup = hstack({
  gap: 10,
  alignItems: "stretch",
  justify: "center",
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
});

const form = vstack({
  gap: 4,
  w: "full",
});

const inputGroup = hstack({
  gap: 4,
  w: "full",
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
  textarea,
};
