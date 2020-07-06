import * as React from "react";
import { Box } from "../atoms/box";
import { Cell } from "../atoms/cell";
import { MonospaceText } from "../atoms/typography";
import { PillWrapper, PillContainer, PillContainerDetails, PillExpandedContainer, PillHeaderText, PillInfoContainer, PillOverviewRow, PillClickable, HoverablePillContainer, AnimatedPillContainer, PillLogoContainer, PillLogo, } from "./pill-elements";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class Pill extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: false,
        };
        this.toggleIsOpen = () => {
            if (this.props.disabled) {
                return;
            }
            this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
        };
        this.renderTitle = () => {
            if (!this.props.title) {
                return (React.createElement(Box, { px: "2px", bg: this.props.colorVariant }, "\u00A0"));
            }
            let WrapperComponent = PillClickable;
            if (this.props.disabled) {
                WrapperComponent = Box;
            }
            return (React.createElement(WrapperComponent, { onClick: this.toggleIsOpen, bg: this.props.colorVariant },
                React.createElement(MonospaceText, { alignSelf: "center", px: [2], color: "text", fontSize: [1] }, this.props.title)));
        };
    }
    renderOverviewRow() {
        return (React.createElement(PillOverviewRow, { bg: this.props.highlighted ? "lightyellow" : "#ffffff", minHeight: "26px" },
            this.renderTitle(),
            this.props.content,
            this.props.disabled ? null : (React.createElement(PillClickable, { onClick: this.toggleIsOpen, bg: "grey5", color: "white", px: "12px", alignItems: ["center"], display: ["flex"] },
                React.createElement(FontAwesomeIcon, { size: "sm", icon: this.state.isOpen ? faMinus : faPlus })))));
    }
    renderInfoRow() {
        return (React.createElement(PillInfoContainer, null,
            React.createElement(Cell, { p: [3] }, this.props.renderInfo())));
    }
    renderRawRow() {
        return (React.createElement(PillExpandedContainer, { bg: "#FFFFFF" }, this.props.renderExpandedContent()));
    }
    renderHeader(text, color, title) {
        let WrapperComponent = PillClickable;
        if (this.props.disabled) {
            WrapperComponent = Box;
        }
        return (React.createElement(WrapperComponent, { onClick: this.toggleIsOpen, bg: color, alignItems: "center", justifyConten: "center" },
            React.createElement(PillHeaderText, { title: title, pl: this.props.logo ? "35px" : "10px", pr: "7px", color: "traceAccountText", fontSize: [1] }, text)));
    }
    openWebsiteLink() {
        window.open(this.props.logo.website, "_blank");
    }
    renderLogo() {
        if (this.props.logo) {
            return (React.createElement(PillLogoContainer, null,
                React.createElement(PillLogo, { onClick: () => this.openWebsiteLink() },
                    React.createElement("img", { width: "100%", src: this.props.logo.path, alt: "" }))));
        }
        return null;
    }
    render() {
        let PillContainerComponent = HoverablePillContainer;
        if (this.props.disabled) {
            PillContainerComponent = PillContainer;
        }
        return (React.createElement(PillWrapper, { width: "100%", display: "block", clear: "both", my: ["5px"] },
            this.renderLogo(),
            React.createElement(PillContainerComponent, { cursor: this.props.disabled ? "default" : "pointer", overflow: "hidden", gridTemplateColumns: "auto 1fr" },
                this.renderHeader(this.props.headerText, this.props.colorVariantHeader, this.props.headerHoverTitle),
                this.renderOverviewRow()),
            React.createElement(AnimatedPillContainer, { pl: "31px", pr: "35px", maxHeight: this.state.isOpen ? "3000px" : "0px" },
                React.createElement(PillContainerDetails, null,
                    this.renderInfoRow(),
                    this.renderRawRow()))));
    }
}
