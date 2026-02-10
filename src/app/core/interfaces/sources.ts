export interface DeviceInfoInterface {
  Device: {
    "BoardRev.": string;
    DevId: string;
    DevName: string;
    "ProtoVer.": string;
    "SoftVer.": string;
  };
  DeviceAttr: {
    Configured: number;
    LinkRepeat: number;
    Metrics: {
      Battery: number;
      "GSM siglevel": number;
      Mode: string;
      Online: boolean;
      StatusBitMask: string;
      Temperature: number;
    };
    Registered: number;
    State: number;
    localTime: string;
  };
}

export interface FormattedSourcesInterface {
  id: string;
  time: string;
  battery: number;
  signal: number;
  temperature: number;
  online: boolean;
}

export interface ConnectionStateInterface {
  "ConnectionState": boolean;
}

export interface DevInfoListInterface {
  DevinfoList: DeviceInfoInterface[];
}

export interface DBStateInterface {
  "PutDBState": boolean;
}
