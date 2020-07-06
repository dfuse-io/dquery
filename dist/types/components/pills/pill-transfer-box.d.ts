import * as React from "react";
export interface TransferProps {
    from: string;
    to: string;
    amount?: string;
    amounts?: {
        type: string;
        value: string;
    }[];
    context?: string;
    memo?: string;
}
export declare const TransferBox: React.SFC<TransferProps>;
