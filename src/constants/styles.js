import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

// ------------------------------------------------------------
// base styles
// ------------------------------------------------------------
export const BaseStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", "Yu Gothic", YuGothic, sans-serif;
  }
`;
