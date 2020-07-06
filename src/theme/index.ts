import emotionStyled, { CreateStyled } from "@emotion/styled"
export * from "./scales"

export let styled = emotionStyled

export const injectThemedStyled = (themedStyled: CreateStyled<any>) => {
  styled = themedStyled
}
