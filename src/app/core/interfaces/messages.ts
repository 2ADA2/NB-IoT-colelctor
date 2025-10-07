export interface MessageInterface {
  type: MessageTypeInterface;
  message: string;
  header: string;
}

export type MessageTypeInterface = "standard" | "success" | "warning" | "danger";

