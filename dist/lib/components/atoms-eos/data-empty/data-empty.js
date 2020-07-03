import * as React from "react";
import { SubTitle } from "../../atoms";
import Box from "../ui-box/ui-box";
export const DataEmpty = ({ text, children }) => (React.createElement(Box, { px: [4], py: [4], align: "center", justify: "center", flexDirection: "column", w: ["100%"] },
    React.createElement(SubTitle, { color: "link", fontWeight: ["normal"], fontSize: [3] }, text),
    children));
