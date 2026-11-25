export interface StandardResponseInterface {
  Info: "OK" | "accepted for execution" | "execution";
}

export type InfoType = "OK" | "accepted for execution" | "execution";

export interface StandardFinalResponseInterface {
  USER_CMD_RESP: object,
}
