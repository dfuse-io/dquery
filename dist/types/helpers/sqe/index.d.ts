interface SQE {
    query: string;
    lowBlockNum?: string;
    highBlockNum?: string;
}
export declare function parseSQE(input: string): SQE;
export {};
