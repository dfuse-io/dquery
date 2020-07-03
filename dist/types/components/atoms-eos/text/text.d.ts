import * as React from "react";
export declare const Text: React.ComponentType<any>;
export declare type TextProps = React.ComponentProps<typeof Text>;
export declare const HoverableText: React.ComponentType<any>;
export declare const HoverableTextNoHighlight: React.ComponentType<any>;
export declare const EllipsisText: React.ComponentType<any>;
export declare const CondensedBold: React.ComponentType<any>;
export declare const BigTitle: React.ComponentType<any>;
export declare const Title: React.ComponentType<any>;
export declare const SubTitle: React.ComponentType<any>;
export interface TextLinkProps {
    whiteSpace?: string;
    lineHeight?: string;
    download?: string;
    to: string;
    fontSize?: any;
    fontFamily?: any;
    fontWeight?: any;
    style?: any;
    pt?: any;
    pb?: any;
    pr?: any;
    p?: any;
    textAlign?: any;
    color?: any;
    pl?: any;
    width?: any;
    mr?: any;
    ml?: any;
    my?: any;
    mx?: any;
}
export declare const LinkStyledText: React.ComponentType<any>;
export declare const StyledLink: React.ComponentType<any>;
export declare const TextLinkLight: React.SFC<TextLinkProps>;
export declare const TextLink: React.SFC<TextLinkProps>;
export declare const ExternalTextLink: React.SFC<TextLinkProps>;
export declare const ExternalTextLinkLight: React.SFC<TextLinkProps>;
export declare class KeyValueFormatEllipsis extends React.Component<{
    content: string;
}> {
    render(): JSX.Element;
}
