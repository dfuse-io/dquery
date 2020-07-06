import { color, borderColor } from "styled-system";
import { Text } from "../atoms/typography";
import { Cell } from "../atoms/cell";
import { Grid } from "../atoms/grid";
import { styled } from "../../theme";
import { Box } from "../atoms/box";
export const PillClickable = styled(Box) `
  &:hover {
    cursor: pointer;
  }
`;
export const PillWrapper = styled(Cell) `
  min-width: 680px;
  height: auto;
  overflow: hidden;
`;
export const PillContainer = styled(Grid) `
  &:hover {
    border: 1px solid #474793;
    ${borderColor}
  }
  box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;
  border-radius: 28px;
  border: 1px solid #d0d2d3;
`;
export const HoverablePillContainer = styled(PillContainer) ``;
export const PillContainerDetails = styled(Cell) `
  border-left: 1px solid #d0d2d3;
  border-right: 1px solid #d0d2d3;
  border-bottom: 1px solid #d0d2d3;
  word-break: break-all;
  white-space: normal;
`;
export const PillOverviewRow = styled(Grid) `
  grid-auto-flow: column;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-auto-columns: max-content auto;
`;
export const PillInfoContainer = styled(Cell) `
  background-color: white;
  font-size: 14px;
  font-family: "Roboto Mono", monospace;
`;
export const PillExpandedContainer = styled(Grid) `
  border-top: 1px solid #d0d2d3;
  grid-template-columns: max-content auto;
  width: 100%;

  overflow-x: auto;
`;
export const AnimatedPillContainer = styled(Cell) `
  transition: max-height 0.3s;
  transition-timing-function: ease-in-out;
`;
export const PillExpandButton = styled.button `
  background-color: #eaeef2;
  border: none;
  outline: none;
  cursor: pointer;
  color: #5f6070;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 10px;
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  padding-top: 10px;
  text-transform: uppercase;
  ${color}
`;
export const PillHeaderText = styled(Text) `
  font-family: "Roboto Mono", monospace;
`;
export const PillLogoContainer = styled(Cell) `
  border: 1px solid #8d939a;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0px;
  top: 0px;
  box-sizing: border-box;
  z-index: 999;
  border-radius: 50%;
  background: #fff;
`;
export const PillLogo = styled(Cell) `
  &:hover {
    cursor: pointer;
  }
`;
