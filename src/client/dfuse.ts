import { DfuseClient } from "@dfuse/client"

let dfuseClient: DfuseClient
export const getDfuseClient = () => dfuseClient

export const initializeDfuseClient = (initializedClient: DfuseClient) => {
  dfuseClient = initializedClient
}
