import * as React from "react";
import { SubTitle } from "./typography";
import { Box } from "./box";
export const DataEmpty = ({ text, color, children }) => (React.createElement(Box, { px: [4], py: [4], align: "center", justify: "center", flexDirection: "column", w: ["100%"] },
    React.createElement(SubTitle, { color: color || "#6a74de", fontWeight: ["normal"], fontSize: [3] }, text),
    children));
