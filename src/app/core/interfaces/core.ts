export interface OSInterface{
  "Operating system": "win" | "linux"
}
export interface ProtocolInterface{
  "Protocol type": "mqtt" | "sub"
}

export interface GetInfoInterface{
  os:string,
  protocol:string,
}
