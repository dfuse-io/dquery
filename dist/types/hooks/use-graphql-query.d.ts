import { GraphqlResponseError } from "@dfuse/client";
import { DocumentNode } from "graphql";
import { PromiseState } from "./use-promise";
export declare function useGraphqlQuery<T = any>(document: string | DocumentNode, variables?: Record<string, unknown>): PromiseState<T, GraphqlResponseError[]>;
