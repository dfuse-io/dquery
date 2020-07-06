import * as React from "react";
import { Box } from "../atoms/box";
import { ArrowTo } from "../atoms/arrow";
import { NBSP } from "../../helpers/formatters";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Ellipsis, Text, MonospaceTextLink } from "../atoms/typography";
export const TransferBox = ({ context, from, to, amount, amounts, memo, }) => {
    function renderAmount(amountName, index) {
        return (React.createElement(Box, { key: index, mx: [2], minHeight: "26px", minWidth: "10px", alignItems: "center" },
            React.createElement(Text, { fontSize: [1], fontWeight: "bold" },
                amountName.type,
                ":"),
            NBSP,
            React.createElement(Text, { fontSize: [1], whiteSpace: "nowrap" }, amountName.value)));
    }
    function renderSimpleAmount(amountName) {
        return (React.createElement(Box, { key: "0", alignItems: "center" },
            React.createElement(Text, { lineHeight: "1em", whiteSpace: "nowrap", key: 0, ml: [2], fontSize: [1], fontWeight: "bold" }, amountName)));
    }
    function renderAmounts(amountName, amountNames) {
        if (amountName) {
            return [renderSimpleAmount(amountName)];
        }
        if (amountNames) {
            return amountNames.map((entry, index) => renderAmount(entry, index));
        }
        return [];
    }
    if (!from || !to) {
        console.warn("Transfer pill cannot be display, empty content:");
        console.log("from:", from);
        console.log("to:", to);
        return React.createElement("div", null);
    }
    return (React.createElement(Box, { mx: [2], minHeight: "26px", minWidth: "10px", alignItems: "center" },
        React.createElement(MonospaceTextLink, { fontWeight: from === context ? "bold" : "normal", fontSize: [1], to: to }, from),
        React.createElement(ArrowTo, { icon: faArrowRight }),
        React.createElement(MonospaceTextLink, { fontWeight: to === context ? "bold" : "normal", fontSize: [1], to: to }, to),
        renderAmounts(amount, amounts),
        React.createElement(Box, { alignItems: "center", minWidth: "10px", fontSize: [1], pl: [2], color: "neutral" },
            React.createElement(Ellipsis, { lineHeight: "1em", fontSize: [1] }, memo))));
};
