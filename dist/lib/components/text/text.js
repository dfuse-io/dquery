var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]]
      }
    return t
  }
import * as React from "react"
import { Link } from "react-router-dom"
import {
  alignSelf,
  display,
  fontFamily,
  fontSize as _fontSize,
  fontWeight,
  justifySelf,
  lineHeight,
  space,
  textAlign as _textAlign,
  borders,
  width,
  color,
} from "styled-system"
import { styled } from "../../theme"
export const Text = styled.div`
  position: relative;
  text-transform: ${(props) => props.textTransform};
  ${display};
  ${_fontSize};
  ${space};
  ${color};
  ${fontWeight};
  ${_textAlign};
  ${fontFamily};
  ${alignSelf};
  text-overflow: ${(props) => props.textOverflow};
  ${justifySelf};
  ${lineHeight};
  ${borders};
  ${width};
  white-space: ${(props) => props.whiteSpace};
  word-break: ${(props) => props.wordBreak};
`
export const HoverableText = styled(Text)`
  &:hover {
    cursor: pointer;
    ${color}
  }
`
export const HoverableTextNoHighlight = styled(Text)`
  &:hover {
    cursor: pointer;
  }
`
export const EllipsisText = styled(Text)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
export const CondensedBold = styled.b`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 800;
`
export const BigTitle = styled.h1`
  ${_fontSize};
  ${space};
  ${color};
  ${fontWeight};
  ${_textAlign};
  ${fontFamily};
  ${alignSelf};
  ${justifySelf};
`
export const Title = styled.h2`
  ${_fontSize};
  ${space};
  ${color};
  ${fontWeight};
  ${_textAlign};
  ${fontFamily};
  ${alignSelf};
  ${justifySelf};
`
export const SubTitle = styled.h3`
  ${display};
  ${_fontSize};
  ${space};
  ${color};
  ${fontWeight};
  ${_textAlign};
  ${fontFamily};
  ${alignSelf};
  ${justifySelf};
`
Text.defaultProps = {
  color: "text",
}
BigTitle.defaultProps = {
  color: "text",
}
Title.defaultProps = {
  color: "text",
}
SubTitle.defaultProps = {
  color: "text",
  my: [2],
}
export const LinkStyledText = styled(HoverableText)`
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
`
export const StyledLink = styled(Link)`
  ${_fontSize};
`
export const TextLinkLight = (_a) => {
  var { to, children } = _a,
    rest = __rest(_a, ["to", "children"])
  return React.createElement(
    Link,
    { to: to },
    React.createElement(LinkStyledText, Object.assign({ color: "link2" }, rest), children)
  )
}
export const TextLink = (_a) => {
  var { to, children } = _a,
    rest = __rest(_a, ["to", "children"])
  return React.createElement(
    StyledLink,
    { fontSize: rest && rest.fontSize ? rest.fontSize : "", to: to },
    React.createElement(LinkStyledText, Object.assign({ color: "link" }, rest), children)
  )
}
export const ExternalTextLink = (_a) => {
  var { to, download, children } = _a,
    rest = __rest(_a, ["to", "download", "children"])
  if (download) {
    return React.createElement(
      "a",
      { href: to, target: "_blank", download: download },
      React.createElement(LinkStyledText, Object.assign({ color: "link" }, rest), children)
    )
  }
  return React.createElement(
    "a",
    Object.assign({ href: to, target: "_blank" }, download),
    React.createElement(LinkStyledText, Object.assign({ color: "link" }, rest), children)
  )
}
export const ExternalTextLinkLight = (_a) => {
  var { to, children } = _a,
    rest = __rest(_a, ["to", "children"])
  return React.createElement(
    "a",
    { href: to, target: "_blank" },
    React.createElement(LinkStyledText, Object.assign({ color: "link2" }, rest), children)
  )
}
export class KeyValueFormatEllipsis extends React.Component {
  render() {
    const regex = /(\S*: )/g
    return React.createElement(
      EllipsisText,
      { fontFamily: "Roboto Condensed", fontSize: [1] },
      this.props.content.split(regex).map((value, index) => {
        if (regex.test(value)) {
          return React.createElement(CondensedBold, { key: index }, value)
        }
        return value
      })
    )
  }
}
