import * as React from "react";
import { Grid } from "../atoms/grid";
import { Text } from "../atoms/typography";
import { styled, MEDIA_QUERIES } from "../../theme";
const Container = styled(Grid) `
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns[0]};
  align-items: center;
  grid-gap: 0px 12px;

  ${MEDIA_QUERIES.medium} {
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns[1]};
  }
`;
export const CellValue = styled.div `
  position: relative;
  word-break: break-word;
  white-space: normal;
`;
export const CellLabel = styled.div `
  text-align: center;
  min-height: 40px;
`;
export const DetailLine = ({ label: label1, label2, color, variant, ml, children, }) => {
    let templateColumns = ["1fr", "2fr 3fr"];
    if (variant === "compact") {
        templateColumns = ["minmax(70px, 1fr) minmax(400px, 6fr)"];
    }
    else if (variant === "auto") {
        templateColumns = ["1fr", "auto 3fr"];
    }
    let labelTemplateRows = ["1fr"];
    if (label2) {
        labelTemplateRows = ["1fr 1fr"];
    }
    return (React.createElement(Container, { gridTemplateColumns: templateColumns },
        React.createElement(Grid, { gridTemplateColumns: "auto", gridTemplateRows: labelTemplateRows, height: "100%", alignItems: "start", gridGap: "10px 0px" },
            React.createElement(Text, { fontWeight: "bold", lineHeight: "23px", color: color },
                label1,
                "\u00A0"),
            label2 && (React.createElement(Text, { fontWeight: "bold", lineHeight: "23px", color: color },
                label2,
                "\u00A0"))),
        React.createElement(CellValue, null,
            React.createElement(Grid, { gridTemplateColumns: "auto", gridGap: "10px 0px", ml: ml }, children))));
};
export const DetailLineAuto = ({ label, color, mb, children }) => {
    const templateColumns = ["1fr", "auto 3fr"];
    return (React.createElement(Grid, { mb: [mb !== undefined ? mb : 2], gridTemplateColumns: templateColumns },
        React.createElement(Text, { color: color || "text", fontWeight: "bold" },
            label,
            "\u00A0"),
        React.createElement(CellValue, null, children)));
};
