import * as React from "react";
interface Props {
    headerHoverTitle?: string;
    info?: string;
    disabled?: boolean;
    failed?: boolean;
    failureMessage?: string;
    highlighted?: boolean;
    logo?: PillLogoProps;
    headerText: JSX.Element | string;
    headerColor?: string;
    headerBgColor?: string;
    headerHoverText?: string;
    isSubCall?: boolean;
    percentage?: number;
    selfGas?: string | number;
    cumulativeGas?: string | number;
    pill2: JSX.Element[] | JSX.Element | null;
    expandButtonColor?: string;
    renderInfo: () => JSX.Element[] | JSX.Element | null;
    content: JSX.Element[] | JSX.Element | string | null;
    renderExpandedContent: () => JSX.Element[] | JSX.Element | null;
}
export interface PillLogoProps {
    path: string;
    website: string;
}
interface State {
    isOpen: boolean;
}
export declare class Pill extends React.Component<Props, State> {
    constructor(props: Props);
    openWebsiteLink: () => void;
    toggleIsOpen: () => void;
    renderOverviewRow(): JSX.Element;
    renderHeader(text: JSX.Element | string, color: string, title: string): JSX.Element;
    renderLogo(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
