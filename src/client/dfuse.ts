import { DfuseClient, createDfuseClient } from "@dfuse/client"

let dfuseClient: DfuseClient
export const getDfuseClient = () => dfuseClient

export const initializeDfuseClient = (client: DfuseClient) => {
  dfuseClient = client
}

export const initializeDfuseClientFromConfig = (
  apiKey: string,
  network: string,
  authUrl: string,
  secure: boolean
) => {
  initializeDfuseClient(
    createDfuseClient({
      apiKey,
      network,
      authUrl,
      secure,
    })
  )
}
