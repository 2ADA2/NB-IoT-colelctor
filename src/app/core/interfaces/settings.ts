interface ConnectionDetails {
    "CleanSession": boolean
    "ClientID": string
    "HostName": string
    "KeepAlive": number
    "Port": number
}

interface Credentials {
  "Password": string
  "UserName": string
}

interface LastWill {
  "LastWillMessage": string
  "LastWillQos": number
  "LastWillRetain": boolean
  "LastWillTopic": string
}

export interface SettingsData {
  ConnectionDetails: ConnectionDetails;
  Credentials: Credentials;
  LastWill: LastWill;
}
export interface SettingsFormData {
  "CleanSession": boolean
  "ClientID": string
  "HostName": string
  "KeepAlive": number
  "Port": number
  "Password": string
  "UserName": string
  "LastWillMessage": string
  "LastWillQos": number
  "LastWillRetain": boolean
  "LastWillTopic": string
}



