import styled from "@emotion/styled"
import { system, color, layout, display, position, grid, flexbox } from "styled-system"

const cursor = system({ cursor: { property: "cursor" } })

export const Grid = styled.div`
    ${display}
    ${position}
    ${color}
    ${layout}
    ${grid}
    ${flexbox}
    ${cursor}
`

Grid.defaultProps = {
  display: "grid",
  position: "relative",
}
