import { useEffect, useState } from "react"
import { GraphqlResponseError, Stream } from "@dfuse/client"
import { DocumentNode } from "graphql"
import { print as printGraphqlDocument } from "graphql/language/printer"
import { getDfuseClient } from "../client/dfuse"
import {
  PromiseState,
  promiseStatePending,
  promiseStateRejected,
  promiseStateResolved,
} from "./use-promise"

export function useGraphqlStream<T = any>(
  document: string | DocumentNode,
  variables: Record<string, unknown> = {},
  onData: (results: T) => void,
  onError: (error: Error[]) => void,
  onComplete?: () => void
): PromiseState<Stream, GraphqlResponseError[]> {
  const [stream, setStream] = useState<PromiseState<Stream, GraphqlResponseError[]>>(
    promiseStatePending()
  )

  let stringDocument = document as string
  if (typeof document !== "string") {
    stringDocument = printGraphqlDocument(document)
  }

  useEffect(() => {
    setStream(promiseStatePending())
    ;(async () => {
      try {
        const stream = await getDfuseClient().graphql<T>(
          stringDocument,
          (message) => {
            switch (message.type) {
              case "data":
                onData(message.data)
                break
              case "complete":
                onComplete()
                break
              case "error":
                onError(message.errors)
                break
            }
          },
          variables
        )
        setStream(promiseStateResolved(stream))
      } catch (error) {
        setStream(
          promiseStateRejected([
            {
              message: `${error}`,
              extensions: { cause: error },
            },
          ])
        )
      }
    })()
  }, [stringDocument, JSON.stringify(variables)])

  return stream
}
