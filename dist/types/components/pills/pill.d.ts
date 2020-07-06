import * as React from "react";
interface Props {
    headerHoverTitle: string;
    renderInfo: () => JSX.Element[] | JSX.Element | null;
    disabled?: boolean;
    colorVariant: string;
    colorVariantHeader: string;
    headerText: JSX.Element | string;
    title?: JSX.Element | string;
    info?: string;
    content: JSX.Element[] | JSX.Element | string;
    renderExpandedContent: () => JSX.Element[] | JSX.Element | null;
    highlighted?: boolean;
    logo?: PillLogoProps;
}
export interface PillLogoProps {
    path: string;
    website: string;
}
interface State {
    isOpen: boolean;
}
export declare class Pill extends React.Component<Props, State> {
    state: State;
    toggleIsOpen: () => void;
    renderTitle: () => JSX.Element;
    renderOverviewRow(): JSX.Element;
    renderInfoRow(): JSX.Element;
    renderRawRow(): JSX.Element;
    renderHeader(text: JSX.Element | string, color: string, title: string): JSX.Element;
    openWebsiteLink(): void;
    renderLogo(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
