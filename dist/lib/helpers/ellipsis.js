export function ellipsis(input, maxLength = 20) {
    if (input.length <= maxLength) {
        return input;
    }
    return `${input.substr(0, maxLength)}…`;
}
