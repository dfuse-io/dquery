import styled from "@emotion/styled"
import {
  system,
  color,
  layout,
  display,
  position,
  flexbox,
  flex,
  space,
  typography,
} from "styled-system"
import { whiteSpace } from "./custom-style-props"

export const Box = styled.div`
  ${layout}
  ${display}
  ${position}
  ${flexbox}
  ${flex}
  ${space}
  ${color}
  ${typography}
  ${whiteSpace}
`

Box.defaultProps = {
  display: "flex",
  position: "relative",
}
