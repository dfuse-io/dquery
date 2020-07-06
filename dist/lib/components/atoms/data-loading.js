import * as React from "react";
import styled from "@emotion/styled";
import { Text } from ".";
import Box from "../atoms-eos/ui-box/ui-box";
import { Spinner } from "./spinner";
const Loader = styled(Spinner) `
  width: 100%;
`;
const renderText = (text, color) => {
    if (text === undefined) {
        return null;
    }
    return (React.createElement(Text, { wordBreak: "break-all", whiteSapce: "normal", py: [3], fontSize: [3], color: [color || "#6452b3"] }, text));
};
export const DataLoading = ({ text, color, children }) => (React.createElement(Box, { pt: [4], pb: [4], textAlign: "center", justify: "center", flexDirection: "column", width: ["100%"] },
    React.createElement(Loader, { name: "three-bounce", color: color || "#6452b3", fadeIn: "none" }),
    renderText(text, color),
    children));
