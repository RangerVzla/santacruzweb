export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface EmailResult {
  success: boolean;
  error?: string;
}

export interface ContactFormData {
  nombreCompleto: string;
  empresa: string;
  cargo: string;
  telefono: string;
  email: string;
  mensaje: string;
}
