var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { styled } from "../../theme";
import { Link } from "react-router-dom";
import { alignSelf, display, fontFamily, fontSize as _fontSize, fontWeight, justifySelf, lineHeight, textAlign as _textAlign, borders, width, color, layout, position, space, typography, flex, flexbox, } from "styled-system";
// TODO: Merge text components
/* ETHQ */
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
/* EOSQ */
// TODO: implement hoverable prop and replace all custom textStyle
export const Text = styled.div `
  ${flex}
  ${flexbox}
  ${typography}
  ${space}
  ${position}
  ${layout}
  ${display};
  ${_fontSize};
  ${space};
  ${color};
  ${fontWeight};
  ${_textAlign};
  ${fontFamily};
  ${alignSelf};
  ${justifySelf};
  ${lineHeight};
  ${borders};
  ${width};
  text-overflow: ${(props) => props.textOverflow};
  text-transform: ${(props) => props.textTransform};
  white-space: ${(props) => props.whiteSpace};
  word-break: ${(props) => props.wordBreak};
`;
Text.defaultProps = {
    position: "relative",
};
export const HoverableText = styled(Text) `
  &:hover {
    cursor: pointer;
    ${color}
  }
`;
export const HoverableTextNoHighlight = styled(Text) `
  &:hover {
    cursor: pointer;
  }
`;
export const Ellipsis = styled(Text) `
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const CondensedBold = styled.b `
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 800;
`;
export const BigTitle = styled.h1 `
  ${_fontSize};
  ${space};
  ${color};
  ${fontWeight};
  ${_textAlign};
  ${fontFamily};
  ${alignSelf};
  ${justifySelf};
`;
export const Title = styled.h2 `
  ${_fontSize};
  ${space};
  ${color};
  ${fontWeight};
  ${_textAlign};
  ${fontFamily};
  ${alignSelf};
  ${justifySelf};
`;
export const SubTitle = styled.h3 `
  ${display};
  ${_fontSize};
  ${space};
  ${color};
  ${fontWeight};
  ${_textAlign};
  ${fontFamily};
  ${alignSelf};
  ${justifySelf};
`;
Text.defaultProps = {
    color: "text",
};
BigTitle.defaultProps = {
    color: "text",
};
Title.defaultProps = {
    color: "text",
};
SubTitle.defaultProps = {
    color: "text",
    my: [2],
};
export const LinkStyledText = styled(HoverableText) `
  display: inline;
  ${_textAlign};
  ${space};
  ${color};
  ${fontWeight};
  ${_fontSize};
  ${fontFamily};
  ${alignSelf};
  ${justifySelf};
  ${lineHeight};
  ${borders};
  ${width};
`;
export const StyledLink = styled(Link) `
  ${_fontSize};
`;
export const TextLinkLight = (_a) => {
    var { to, children } = _a, rest = __rest(_a, ["to", "children"]);
    return (React.createElement(Link, { to: to },
        React.createElement(LinkStyledText, Object.assign({ color: "link2" }, rest), children)));
};
export const TextLink = (_a) => {
    var { to, children } = _a, rest = __rest(_a, ["to", "children"]);
    return (React.createElement(StyledLink, { fontSize: rest && rest.fontSize ? rest.fontSize : "", to: to },
        React.createElement(LinkStyledText, Object.assign({ color: "link" }, rest), children)));
};
export const ExternalTextLink = (_a) => {
    var { to, download, children } = _a, rest = __rest(_a, ["to", "download", "children"]);
    if (download) {
        return (React.createElement("a", { href: to, target: "_blank", download: download },
            React.createElement(LinkStyledText, Object.assign({ color: "link" }, rest), children)));
    }
    return (React.createElement("a", Object.assign({ href: to, target: "_blank" }, download),
        React.createElement(LinkStyledText, Object.assign({ color: "link" }, rest), children)));
};
export const ExternalTextLinkLight = (_a) => {
    var { to, children } = _a, rest = __rest(_a, ["to", "children"]);
    return (React.createElement("a", { href: to, target: "_blank" },
        React.createElement(LinkStyledText, Object.assign({ color: "link2" }, rest), children)));
};
export class KeyValueFormatEllipsis extends React.Component {
    render() {
        const regex = /(\S*: )/g;
        return (React.createElement(Ellipsis, { fontFamily: "Roboto Condensed", fontSize: [1] }, this.props.content.split(regex).map((value, index) => {
            if (regex.test(value)) {
                return React.createElement(CondensedBold, { key: index }, value);
            }
            return value;
        })));
    }
}
export const MonospaceTextLink = (_a) => {
    var rest = __rest(_a, []);
    return (React.createElement(TextLink, Object.assign({}, rest, { fontFamily: "'Roboto Mono', monospace;", lineHeight: "1em" })));
};
export const MonospaceText = styled(Text) `
  font-family: "Roboto Mono", monospace;
  white-space: nowrap;
`;
export const MonospaceTextWrap = styled(Text) `
  font-family: "Roboto Mono", monospace;
`;
export const WrappingText = styled(Text) `
  overflow: hidden;
  word-wrap: break-word;
`;
export const WrappingMonospaceText = styled(Text) `
  font-family: "Roboto Mono", monospace;
  overflow: hidden;
  word-wrap: break-word;
`;
