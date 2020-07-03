export declare type PromiseState<T, E = any> = (PromisePending | PromiseResolved<T> | PromiseRejected<E>) & PromiseHelpers<T>;
export declare type PromiseHelpers<T> = {
    resultOr(orFallbackTo: T): T;
};
export declare type PromisePending = {
    state: "pending";
};
export declare type PromiseResolved<T> = {
    state: "resolved";
    result: T;
};
export declare type PromiseRejected<E> = {
    state: "rejected";
    error: E;
};
export declare function promiseStatePending<T, E = any>(): PromiseState<T, E>;
export declare function promiseStateRejected<T, E = any>(error: E): PromiseState<T, E>;
export declare function promiseStateResolved<T, E = any>(result: T): PromiseState<T, E>;
/**
 * This is only use for re-typing purposes. Ideally, it would not be a function call,
 * but we are ready to pay the small footprint it adds for now.
 */
export declare function promiseStateRetype<T, E>(state: PromiseState<any, any>): PromiseState<T, E>;
