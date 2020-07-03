import * as React from "react";
import { Text } from "../text/text";
const errorToMessage = (error) => {
    if (error == null) {
        return undefined;
    }
    if (Array.isArray(error)) {
        return error.map((element) => errorToMessage(element)).join(", ");
    }
    if (typeof error === "object" && error.path != null && error.message) {
        // FIXME: Format "path!"
        return error.message;
    }
    if (typeof error === "object" && error.message) {
        return error.message;
    }
    if (typeof error === "string") {
        return error;
    }
    return `${error}`;
};
export const DataError = ({ error }) => {
    return React.createElement(Text, { fontSize: [4] }, errorToMessage(error) || "An unknow error occurred");
};
