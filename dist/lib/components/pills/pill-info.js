import * as React from "react";
import { truncateString } from "../../helpers/formatters";
import { styled } from "../../theme";
import { Text } from "../atoms/typography";
import { Cell } from "../atoms/cell";
const InfoText = styled(Text) `
  font-family: "'Roboto Condensed', sans-serif";
`;
export const PillInfo = ({ info }) => {
    return (React.createElement(Cell, { alignSelf: ["center"], borderLeft: "1px dotted #aaa" },
        React.createElement(InfoText, { alignSelf: "center", pl: [2], pr: [3], color: "traceMemoText", fontSize: [2] }, truncateString(info, 50))));
};
