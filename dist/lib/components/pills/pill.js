import * as React from "react";
import { Box } from "../atoms/box";
import { Cell } from "../atoms/cell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import Tooltip from "antd/es/tooltip";
import { PillWrapper, PillContainer, PillContainerDetails, PillExpandedContainer, PillHeaderText, PillInfoContainer, PillOverviewRow, PillClickable, AnimatedPillContainer, PillLogoContainer, PillLogo, PillWithRigthInfo, PillFailedIcon, } from "./pill-elements";
export class Pill extends React.Component {
    constructor(props) {
        super(props);
        this.openWebsiteLink = () => {
            window.open(this.props.logo.website, "_blank");
        };
        this.toggleIsOpen = () => {
            if (this.props.disabled) {
                return;
            }
            this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
        };
        this.state = {
            isOpen: false,
        };
    }
    renderOverviewRow() {
        return (React.createElement(PillOverviewRow, { bg: this.props.highlighted ? "yellow" : "white", minHeight: "26px" },
            this.props.pill2,
            this.props.content,
            this.props.disabled ? null : (React.createElement(PillClickable, { bg: this.props.expandButtonBgColor || "grey", px: "12px", alignItems: "center" },
                React.createElement(FontAwesomeIcon, { size: "sm", color: this.props.expandButtonColor || "white", icon: this.state.isOpen ? faMinus : faPlus })))));
    }
    renderHeader(text, color, title) {
        const WrapperComponent = this.props.disabled ? Box : PillClickable;
        return (React.createElement(WrapperComponent, { bg: color, alignItems: "center", justifyContent: "center" },
            React.createElement(PillHeaderText, { title: title, pl: this.props.logo ? "35px" : "16px", pr: "15px", color: this.props.headerColor || "white", fontSize: "12px" }, text)));
    }
    renderLogo() {
        if (this.props.logo) {
            return (React.createElement(PillLogoContainer, null,
                React.createElement(PillLogo, { onClick: this.openWebsiteLink },
                    React.createElement("img", { width: "100%", alt: this.props.logo.website, src: this.props.logo.path }))));
        }
        return null;
    }
    render() {
        const { isOpen } = this.state;
        const infoSection = this.props.renderInfo();
        let infoPadding = "15px";
        if (infoSection == null) {
            infoPadding = "0";
        }
        return (React.createElement(PillWithRigthInfo, null,
            this.props.failed ? (React.createElement(Tooltip, { placement: "left", mouseEnterDelay: 0.01, mouseLeaveDelay: 0.15, title: this.props.failureMessage || "Unknown error" },
                React.createElement(PillFailedIcon, { "data-tip": true }, "?"))) : (React.createElement("div", null)),
            React.createElement(PillWrapper, { width: "100%", display: "block", clear: "both", my: "5px" },
                React.createElement(PillContainer, { cursor: this.props.disabled ? "default" : "pointer", failed: this.props.failed, overflow: "hidden", onClick: this.props.disabled ? () => { } : this.toggleIsOpen, gridTemplateColumns: "auto 1fr" },
                    this.renderLogo(),
                    this.renderHeader(this.props.headerText, this.props.headerBgColor || "grey", this.props.headerHoverText || ""),
                    this.renderOverviewRow()),
                React.createElement(AnimatedPillContainer, { pl: "31px", pr: "35px", isOpen: isOpen, maxHeight: isOpen ? "3000px" : "0px" },
                    React.createElement(PillContainerDetails, null,
                        React.createElement(PillInfoContainer, { withBorderBottom: infoSection != null },
                            React.createElement(Cell, { p: infoPadding }, infoSection)),
                        React.createElement(PillExpandedContainer, { bg: "white" }, this.props.renderExpandedContent()))))));
    }
}
