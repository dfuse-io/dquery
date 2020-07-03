import styled from "@emotion/styled";
const baseStyles = `
  word-break: break-word;
  color: inherit;
`;
export const textStyle = (props) => {
    const lines = [];
    const color = props.color;
    let fontSize;
    if (props.size === "small") {
        fontSize = "0.8em";
    }
    else if (props.size === "large") {
        fontSize = "1.2em";
    }
    if (props.variant === "monospace") {
        lines.push('font-family: "Roboto Mono", monospace;');
    }
    else if (props.variant === "condensed") {
        lines.push('font-family: "Roboto Condensed";');
    }
    if (props.onClick != null || props.hover || props.hoverable) {
        lines.push(`
        &:hover {
          cursor: pointer;
          ${props.hover ? props.hover : ""}
        }
      `);
    }
    if (props.fontSize) {
        fontSize = props.fontSize;
    }
    if (props.bg) {
        lines.push(`background-color: ${props.bg};`);
    }
    lines.push(`color: ${color};`);
    if (fontSize) {
        lines.push(`font-size: ${fontSize};`);
    }
    if (props.fontWeight) {
        lines.push(`font-weight: ${props.fontWeight};`);
    }
    if (props.p) {
        lines.push(`padding: ${props.p};`);
    }
    if (props.px) {
        lines.push(`padding-left: ${props.px};`);
        lines.push(`padding-right: ${props.px};`);
    }
    if (props.py) {
        lines.push(`padding-top: ${props.py};`);
        lines.push(`padding-bottom: ${props.py};`);
    }
    if (props.pl) {
        lines.push(`padding-left: ${props.pl};`);
    }
    if (props.pr) {
        lines.push(`padding-right: ${props.pr};`);
    }
    if (props.m) {
        lines.push(`margin: ${props.m};`);
    }
    if (props.mx) {
        lines.push(`margin-left: ${props.mx};`);
        lines.push(`margin-right: ${props.mx};`);
    }
    if (props.my) {
        lines.push(`margin-top: ${props.my};`);
        lines.push(`margin-bottom: ${props.my};`);
    }
    if (props.ml) {
        lines.push(`margin-left: ${props.ml};`);
    }
    if (props.mr) {
        lines.push(`margin-right: ${props.mr};`);
    }
    if (props.display) {
        lines.push(`display: ${props.display};`);
    }
    if (props.position) {
        lines.push(`position: ${props.position};`);
    }
    if (props.lineHeight) {
        lines.push(`line-height: ${props.lineHeight};`);
    }
    if (props.width) {
        lines.push(`width: ${props.width};`);
    }
    if (props.height) {
        lines.push(`height: ${props.height};`);
    }
    if (props.minHeight) {
        lines.push(`min-height: ${props.minHeight};`);
    }
    if (props.minWidth) {
        lines.push(`min-width: ${props.minWidth};`);
    }
    if (props.maxHeight) {
        lines.push(`max-height: ${props.maxHeight};`);
    }
    if (props.maxWidth) {
        lines.push(`max-width: ${props.maxWidth};`);
    }
    if (props.whiteSpace) {
        lines.push(`whitespace: ${props.whiteSpace};`);
    }
    if (props.alignItems) {
        lines.push(`align-items: ${props.alignItems};`);
    }
    if (props.alignSelf) {
        lines.push(`align-self: ${props.alignSelf};`);
    }
    if (props.justifyContent) {
        lines.push(`justify-content: ${props.justifyContent};`);
    }
    return lines.join("\n");
};
export const H1 = styled.h1 `
  ${baseStyles}
  ${(props) => textStyle({ ...props, fontSize: "2.25em" })}
`;
export const H2 = styled.h2 `
  ${baseStyles}
  ${(props) => textStyle({ ...props, fontSize: "1.75em" })}
`;
export const H3 = styled.h3 `
  ${baseStyles}
  &.underline {
    padding-bottom: 10px;
    border-bottom: 1px solid hsl(370, 5%, 95%);
  }

  ${(props) => textStyle({ ...props, fontSize: "1.5em" })}
`;
