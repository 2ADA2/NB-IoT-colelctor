export interface MessageInterface {
  id: string;
  type: MessageTypeInterface;
  message: string;
  header: string;
}



export type MessageTypeInterface = "standard" | "success" | "warning" | "danger";

