import * as React from "react";
import { Cell } from "../atoms/cell";
import { ellipsis } from "../../helpers/ellipsis";
import { Text } from "../atoms/typography";
import { styled } from "../../theme";
const Container = styled(Cell) `
  align-self: center;
  border-left: 1px dotted #aaa;
`;
const InfoText = styled(Text) `
  align-self: center;
  font-family: "'Roboto Condensed', sans-serif";
  font-size: 14px;
  padding: 0 16px 0 8px;
  color: black;
`;
export const PillInfo = ({ info }) => (React.createElement(Container, null,
    React.createElement(InfoText, null, ellipsis(info, 50))));
