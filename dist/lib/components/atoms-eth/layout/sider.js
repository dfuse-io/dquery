import styled from "@emotion/styled";
import { display, layout, flexbox } from "styled-system";
export const Sider = styled.div `
  ${display}
  ${flexbox}
  ${layout}
  display: flex
`;
Sider.defaultProps = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px",
};
