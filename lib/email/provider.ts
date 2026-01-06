import { EmailMessage, EmailResult } from "./types";

export interface EmailProvider {
  send(message: EmailMessage): Promise<EmailResult>;
}
