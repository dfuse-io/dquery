import { DfuseClient, createDfuseClient } from "@dfuse/client"

let dfuseClient: DfuseClient
export const getDfuseClient = () => dfuseClient

export const initializeDfuseClient = (client: DfuseClient) => {
  dfuseClient = client
}

export type ClientConfig = {
  apiKey: string
  network: string
  authUrl: string
  secure: boolean
}

export const initializeDfuseClientFromConfig = (clientConfig: ClientConfig) => {
  initializeDfuseClient(
    createDfuseClient({
      apiKey: clientConfig.apiKey,
      network: clientConfig.network,
      authUrl: clientConfig.authUrl,
      secure: clientConfig.secure,
    })
  )
}
