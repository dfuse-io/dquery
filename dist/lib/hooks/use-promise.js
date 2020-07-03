export function promiseStatePending() {
    return {
        resultOr: (other) => other,
        state: "pending"
    };
}
export function promiseStateRejected(error) {
    return {
        resultOr: (other) => other,
        state: "rejected",
        error
    };
}
export function promiseStateResolved(result) {
    return {
        resultOr: () => result,
        state: "resolved",
        result
    };
}
/**
 * This is only use for re-typing purposes. Ideally, it would not be a function call,
 * but we are ready to pay the small footprint it adds for now.
 */
export function promiseStateRetype(state) {
    return state;
}
// Incomplete work for now. Ideally, we generalize `use-graphql-query` logic
// of the Promise execution + try/catch the transaformation to proper state
// object. For now, only the base re-usable types and helpers are defined.
// export function usePromise<T, E = any>(promiseFactory:()=>PromiseLike<T>): PromiseState<T, E> {
//   const [state, setState] = useState<PromiseState<T, E>>(promiseStatePending())
//   useEffect(() => {
//     setState(promiseStatePending())
//     ;(async () => {
//       try {
//         const response = await promiseFactory()
//         // Some composable hooks will need to hook here somehow, to turn the receive value in either
//         // resolved/reject states, see `use-graphql-query.ts`.
//         setState(promiseStateResolved(response))
//       } catch (error) {
//         setState(promiseStateRejected(error))
//       }
//     })()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, /* Actual dependencies is more defined by user of this hook, maybe would need to pass them in in `usePromise` see `use-graphql-query.ts` */)
//   return state
// }
