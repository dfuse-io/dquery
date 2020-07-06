import emotionStyled from "@emotion/styled";
export * from "./scales";
export let styled = emotionStyled;
export const injectThemedStyled = (themedStyled) => {
    styled = themedStyled;
};
