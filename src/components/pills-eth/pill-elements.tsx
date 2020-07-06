import { color } from "styled-system"
import { Box } from "../atoms/box"
import { Cell } from "../atoms/cell"
import { Grid } from "../atoms/grid"
import { Text } from "../atoms/typography"

import { styled } from "../../theme"

export const PillClickable = styled(Box)`
  &:hover {
    cursor: pointer;
  }
  background-color: grey;
  color: white;
  ${color}
`

export const PillWrapper = styled(Cell)`
  min-width: 680px;
  height: auto;
  overflow: hidden;
  position: relative;
`

const pillContainerNormal = `
  border: 1px solid #bbc7d3;

  &:hover {
    border: 1px solid #0c243b;
  }
`

const pillContainerFailed = `
  border: 2px solid #0f2e4d;

  &:hover {
    border: 2px solid #081929;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255,70,96,.3);
    pointer-events: none;
    top: 0px;
    left: 0px;
  }
`

export const PillContainer = styled(Grid)<{ failed?: boolean }>`
  box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;
  border-radius: 28px;
  grid-template-columns: auto 1fr;

  ${(props) => {
    if (props.failed) {
      return pillContainerFailed
    }

    return pillContainerNormal
  }}
`

export const PillWithRigthInfo = styled(Grid)`
  /* grid-template-columns: 1fr; */
  grid-template-columns: 20px 1fr;
  grid-column-gap: 5px;
  width: 100%;
  justify-items: center;
  align-items: self-start;
`

export const PillFailedIcon = styled(Cell)`
  width: 20px;
  height: 20px;
  background: #ff4660;
  display: flex;

  border-radius: 10px;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  top: 10px;
`

export const PillContainerDetails = styled(Cell)`
  border-left: 1px solid #bbc7d3;
  border-right: 1px solid #bbc7d3;
  border-bottom: 1px solid #bbc7d3;
  word-break: break-all;
  white-space: normal;
`

export const PillOverviewRow = styled(Grid)`
  grid-auto-flow: column;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-auto-columns: max-content auto;
`

export const PillInfoContainer = styled(Cell)<{ withBorderBottom?: boolean }>`
  background-color: white;
  font-size: 14px;
  font-family: "Roboto Mono", monospace;

  ${(props) => (props.withBorderBottom ? `border-bottom: 1px solid #bbc7d3;` : "")}
`

export const PillExpandedContainer = styled(Grid)`
  border-top: 0px solid #d0d2d3;
  grid-template-columns: max-content auto;
  width: 100%;

  /* overflow-x: auto; */
`

export const AnimatedPillContainer = styled(Cell)<{ isOpen: boolean }>`
  transition: max-height ${({ isOpen }) => (isOpen ? "0.5s" : "0s")};
  transition-timing-function: ease-in-out;
`

export const PillExpandButton = styled.button`
  background-color: #ebeeef;
  border: none;
  outline: none;
  cursor: pointer;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 10px;
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  padding-top: 10px;
  text-transform: uppercase;
`

export const PillHeaderText = styled(Text)``

export const PillLogoContainer = styled(Cell)`
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
`

export const PillLogo = styled(Cell)`
  &:hover {
    cursor: pointer;
  }
`
