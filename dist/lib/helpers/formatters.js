import { compactInteger, formatNumber as humanizeFormatNumber, toFixed } from "humanize-plus";
import moment from "moment-timezone";
import "moment-duration-format";
import numeral from "numeral";
import { take as takeFirst, takeLast } from "ramda";
import { formatSI } from "./format-si-prefix";
import { sha256 } from "js-sha256";
export const NBSP = "\u00a0";
export const ELLIPSIS = "\u2026";
export const INFINITY = "\u221e";
export const LONGDASH = "\u2014";
export const BULLET = "\u2022";
/**
 *
 *
 * Compact a string field into a more shorter form. From the
 * input `000210185aca9762f3906832b3ac983510862a04f2b6ee602619958ddccb5823`,
 * the resulting output of this function will be
 * `000210185aca9762f3906832b3ac983510862a...dccb5823`
 *
 * @param input The input to shorten
 */
export function compactString(input, first = 4, last = 2) {
    const id = input.toString();
    return [takeFirst(first, id), ELLIPSIS, takeLast(last, id)];
}
export function formatTransactionID(value) {
    return compactString(value, 10, 0);
}
export function truncateString(input, first) {
    const id = input.toString();
    if (id.length <= first)
        return [id, null];
    return [takeFirst(first, id), ELLIPSIS];
}
export function compactCount(input) {
    return compactInteger(input, 2);
}
export function microSecondsToSeconds(microseconds) {
    return microseconds * 0.000001;
}
export function getAmount(value) {
    return parseFloat(value.split(" ")[0] || "0");
}
export function formatMicroseconds(microseconds) {
    return `${formatSI(microSecondsToSeconds(microseconds))}s`;
}
export function formatBytes(value, limit = 0) {
    if (limit === 0) {
        return numeral(value).format("0.0 b").replace(".0", "");
    }
    if (value > limit) {
        return `${formatNumber(value)} B`;
    }
    return numeral(value).format("0.0 b").replace(".0", "");
}
export function formatAmount(input) {
    return `$${toFixed(input, 2)}`;
}
export function formatNumber(input) {
    return humanizeFormatNumber(input);
}
export function formatPercentage(input, precision = 2) {
    const value = round(input, 7) <= 1.0 ? input * 100.0 : input;
    return `${toFixed(value, precision)} %`;
}
function round(value, decimals) {
    const integral = parseFloat(`${value.toString()}e${decimals.toString()}`);
    return Number(`${Math.round(integral)}e-${decimals}`);
}
export function formatDateTime(input) {
    return moment(input).utc().format("DD MMM YYYY hh:mm");
}
export function formatVariation(input) {
    if (input === 0) {
        return "0.00";
    }
    const value = toFixed(input, 2);
    return `${value}`;
}
export function extractValueWithUnits(text) {
    return text.split(" ");
}
export function secondsToTime(seconds) {
    if (seconds <= 60) {
        return `${seconds} seconds`;
    }
    // use any type since moment-duration-format adds format method
    const momentDurationFormat = moment.duration(seconds, "seconds");
    return momentDurationFormat.format("Y [years] M [months] D [days] [+] h:mm:ss");
}
export function explodeJson(jsonOrString) {
    if (!jsonOrString) {
        return "";
    }
    if (typeof jsonOrString === "string") {
        return jsonOrString;
    }
    const json = jsonOrString;
    return (Object.keys(json)
        .map((key) => {
        if (isLiteral(json[key])) {
            return `${key}: ${json[key]}`;
        }
        if (Array.isArray(json[key])) {
            const entries = json[key].map((entry) => {
                return explodeJson(entry);
            });
            return `${key}: [ ${entries.join(", ")} ]`;
        }
        const explodedJson = explodeJson(json[key]);
        if (explodedJson.replace(/ /g, "").length === 0 || !explodedJson) {
            return "";
        }
        return `${key}: { ${explodeJson(json[key])} }`;
    })
        .join(" ") || "");
}
export function hex2sha256(hexData) {
    const matches = hexData.match(/[\da-f]{2}/gi);
    if (matches != null) {
        return sha256(new Uint8Array(matches.map((match) => parseInt(match, 16))));
    }
    return "";
}
export function hex2binary(hexData) {
    const matches = hexData.match(/[\da-f]{2}/gi);
    if (matches != null) {
        return new Uint8Array(matches.map((match) => parseInt(match, 16)));
    }
    return "";
}
function isLiteral(field) {
    return (typeof field === "string" ||
        typeof field === "number" ||
        field === null ||
        typeof field === "boolean");
}
const REGEX_JAPANESE = /[\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uff9f]|[\u4e00-\u9faf]|[\u3400-\u4dbf]/;
const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;
const REGEX_KOREAN = /[\u3131-\uD79D]/giu;
export function hasAsianCharacters(str) {
    return REGEX_JAPANESE.test(str) || REGEX_CHINESE.test(str) || REGEX_KOREAN.test(str);
}
export function humanizeSnakeCase(value) {
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    return capitalizedValue.replace(/(_)/g, " ");
}
