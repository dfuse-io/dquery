import { GraphqlResponseError } from "@dfuse/client";
import { DocumentNode } from "graphql";
import { PromiseState } from "./use-promise";
export declare type GraphqlQuery = string | DocumentNode;
export declare function useGraphqlQuery<T = any>(document: GraphqlQuery, variables?: Record<string, unknown>): PromiseState<T, GraphqlResponseError[]>;
