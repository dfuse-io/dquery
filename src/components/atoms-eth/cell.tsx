import styled from "@emotion/styled"
import { system, color, layout, display, position, grid, flexbox, typography } from "styled-system"

const cursor = system({ cursor: { property: "cursor" } })
const float = system({ float: { property: "float" } })
const clear = system({ float: { property: "clear" } })

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
