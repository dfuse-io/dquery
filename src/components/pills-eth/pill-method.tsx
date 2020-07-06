import * as React from "react"
import { Cell } from "../atoms/cell"
import { Text, TextStyleProps, Ellipsis } from "../atoms/typography"

import { styled } from "../../theme"

const PillMethodWrapper = styled(Cell)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  span {
    line-height: 20px;
    float: left;
  }
  div {
    line-height: 20px;
    max-width: 300px;
  }
`

export const PillMethod: React.FC<{ method: string } & TextStyleProps> = ({ method, ...rest }) => (
  <PillMethodWrapper>
    <Text variant="condensed" fontWeight="800" display="flex" alignItems="center">
      Method:&nbsp;
    </Text>

    <Text variant="monospace" display="flex" alignItems="center">
      <Ellipsis {...rest} display="flex" alignItems="center">
        {method}
      </Ellipsis>
    </Text>
  </PillMethodWrapper>
)
