import { GraphqlResponseError, Stream } from "@dfuse/client";
import { DocumentNode } from "graphql";
import { PromiseState } from "./use-promise";
export declare function useGraphqlStream<T = any>(params: {
    document: string | DocumentNode;
    variables: Record<string, unknown>;
    onData: (results: T) => void;
    onError: (errors: Error[]) => void;
    onComplete?: () => void;
}): PromiseState<Stream, GraphqlResponseError[]>;
