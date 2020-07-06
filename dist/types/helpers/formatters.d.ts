import moment from "moment-timezone";
import "moment-duration-format";
export declare const NBSP = "\u00A0";
export declare const ELLIPSIS = "\u2026";
export declare const INFINITY = "\u221E";
export declare const LONGDASH = "\u2014";
export declare const BULLET = "\u2022";
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
export declare function compactString(input: number | string, first?: number, last?: number): string[];
export declare function formatTransactionID(value: string): string[];
export declare function truncateString(input: number | string, first: number): (string | null)[];
export declare function compactCount(input: number): string;
export declare function microSecondsToSeconds(microseconds: number): number;
export declare function getAmount(value: string): number;
export declare function formatMicroseconds(microseconds: number): string;
export declare function formatBytes(value: number, limit?: number): string;
export declare function formatAmount(input: number): string;
export declare function formatNumber(input: number): string;
export declare function formatPercentage(input: number, precision?: number): string;
export declare function formatDateTime(input: moment.Moment | Date | string | number): string;
export declare function formatVariation(input: number): string;
export declare function extractValueWithUnits(text: string): string[];
export declare function secondsToTime(seconds: number): any;
export declare function explodeJson(jsonOrString: Record<string, any> | string): string;
export declare function hex2sha256(hexData: string): string;
export declare function hex2binary(hexData: string): Uint8Array | "";
export declare function hasAsianCharacters(str: string): boolean;
export declare function humanizeSnakeCase(value: string): string;
