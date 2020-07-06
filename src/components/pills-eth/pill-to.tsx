import * as React from "react"
import { Cell } from "../atoms/cell"
import { Text, TextStyleProps, Ellipsis } from "../atoms/typography"

import { styled } from "../../theme"
import { AddressLink } from "../links"

const PillToWrapper = styled(Cell)`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 15px;
  margin-right: 15px;
  max-width: 150px;
  span {
    line-height: 20px;
    float: left;
  }
  div,
  a {
    line-height: 20px;
  }
`

export const PillTo: React.FC<{ address: string; isContract: boolean } & TextStyleProps> = ({
  address,
  isContract,
  ...rest
}) => (
  <PillToWrapper>
    <Text variant="condensed" fontWeight="800" display="flex" alignItems="center">
      {isContract ? "Contract:" : "To:"}&nbsp;
    </Text>
    <Ellipsis {...rest} display="flex" alignItems="center">
      <AddressLink address={address} fullLength />
    </Ellipsis>
  </PillToWrapper>
)
