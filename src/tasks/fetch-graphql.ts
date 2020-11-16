import { DocumentNode } from "graphql"
import { print as printGraphqlDocument } from "graphql/language/printer"
import { getDfuseClient } from "../client/dfuse"

export type GraphqlQuery = string | DocumentNode

export async function taskFetchGraphql<T = unknown>(
  document: GraphqlQuery,
  variables: Record<string, unknown> = {}
): Promise<T> {
  let stringDocument = document as string
  if (typeof document !== "string") {
    stringDocument = printGraphqlDocument(document)
  }

  try {
    const response = await getDfuseClient().graphql<T>(stringDocument, { variables })
    if (response.errors) {
      throw response.errors
    }

    return response.data
  } catch (error) {
    if (Array.isArray(error)) {
      throw error
    }

    // eslint-disable-next-line no-throw-literal
    throw [
      {
        message: `${error}`,
        extensions: { cause: error },
      },
    ]
  }
}
