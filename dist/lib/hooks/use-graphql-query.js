var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from "react";
import { print as printGraphqlDocument } from "graphql/language/printer";
import { getDfuseClient } from "../client/dfuse";
import { promiseStatePending, promiseStateRejected, promiseStateResolved, } from "./use-promise";
export function useGraphqlQuery(document, variables = {}) {
    const [state, setState] = useState(promiseStatePending());
    let stringDocument = document;
    if (typeof document !== "string") {
        stringDocument = printGraphqlDocument(document);
    }
    useEffect(() => {
        setState(promiseStatePending());
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield getDfuseClient().graphql(stringDocument, { variables });
                if (response.errors) {
                    setState(promiseStateRejected(response.errors));
                }
                else {
                    setState(promiseStateResolved(response.data));
                }
            }
            catch (error) {
                setState(promiseStateRejected([
                    {
                        message: `${error}`,
                        extensions: { cause: error },
                    },
                ]));
            }
        }))();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stringDocument, JSON.stringify(variables)]);
    return state;
}
