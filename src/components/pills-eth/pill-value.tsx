import * as React from "react"
import { Cell } from "../atoms/cell"
import { Text, TextStyleProps } from "../atoms/typography"

import { styled } from "../../theme"

import { weiToEther } from "../../helpers/format"

const PillValueWrapper = styled(Cell)`
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
    max-width: 150px;
  }
`

export const PillValue: React.FC<{ value: string } & TextStyleProps> = ({ value, ...rest }) => (
  <PillValueWrapper>
    <Text variant="condensed" fontWeight="800" display="flex" alignItems="center">
      Value:&nbsp;
    </Text>
    <Text variant="monospace" display="flex" alignItems="center">
      {`${weiToEther(value)} ETH`}
    </Text>
  </PillValueWrapper>
)
