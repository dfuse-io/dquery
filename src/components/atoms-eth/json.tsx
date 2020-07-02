import * as React from "react"
import styled from "@emotion/styled"
import { system, display, layout, typography, fontFamily } from "styled-system"
import { whiteSpace, wordWrap } from "./custom-style-props"

const JsonContainerCode = styled.code`
${display}
${layout}
${typography}
${fontFamily}
${whiteSpace}
${wordWrap}
`

JsonContainerCode.defaultProps = {
  fontFamily: "Roboto Mono, monospace",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
  display: "block",
  overflowX: "hidden",
}

const JsonContainerPre = styled.pre`
${display}
${typography}
${whiteSpace}
`

JsonContainerPre.defaultProps = {
  whiteSpace: "pre-wrap",
  display: "block",
  overflowX: "hidden",
}

export const JsonWrapper: React.FC<{ fontSize?: string }> = ({ fontSize, children }) => (
  <JsonContainerPre>
    <JsonContainerCode fontSize={fontSize || "15px"}>{children}</JsonContainerCode>
  </JsonContainerPre>
)
