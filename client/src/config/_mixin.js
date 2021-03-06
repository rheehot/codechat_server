// sizes for media queries
const sizes = {
  desktop: 922,
  tablet: 768,
  phone: 576
};

export const fontSize = {
  smallFontSize: "9px",
  normalFontSize: "12px",
  largeFontSize: "15px"
};

export const headerHeight = "3rem";

export const color = { bgColor: "#141414", fontColor: "#000" };

const customMediaQuery = maxWidth => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(sizes.desktop),
  tablet: customMediaQuery(sizes.tablet),
  phone: customMediaQuery(sizes.phone)
};
