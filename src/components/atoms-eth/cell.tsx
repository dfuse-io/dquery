import styled from "@emotion/styled"
import { system, color, layout, display, position, grid, flexbox, typography } from "styled-system"
import { cursor, float, clear } from "./custom-style-props"

export const Cell = styled.div`
    ${display}
    ${position}
    ${color}
    ${layout}
    ${grid}
    ${flexbox}
    ${typography}
    ${cursor}
    ${float}
    ${clear}
`

Cell.defaultProps = {
  position: "relative",
}
