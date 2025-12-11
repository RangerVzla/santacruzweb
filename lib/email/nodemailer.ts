import nodemailer from "nodemailer";
import { EmailProvider } from "./provider";
import { EmailMessage, EmailResult, ContactFormData } from "./types";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const nodemailerProvider: EmailProvider = {
  async send(message: EmailMessage): Promise<EmailResult> {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: message.to,
        subject: message.subject,
        html: message.html,
        text: message.text,
      });
      return { success: true };
    } catch (error) {
      console.error("Email send error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email",
      };
    }
  },
};

export async function sendContactEmail(data: ContactFormData): Promise<EmailResult> {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@santacruzoyg.com.ar";

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
        Nuevo mensaje de contacto
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Nombre Completo:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.nombreCompleto}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Empresa:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.empresa}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Cargo:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.cargo}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Teléfono:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.telefono}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            <a href="mailto:${data.email}">${data.email}</a>
          </td>
        </tr>
      </table>

      <div style="margin-top: 20px;">
        <h3 style="color: #333;">Mensaje:</h3>
        <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.mensaje}</p>
      </div>

      <p style="color: #999; font-size: 12px; margin-top: 30px;">
        Este mensaje fue enviado desde el formulario de contacto de Santa Cruz O&G.
      </p>
    </div>
  `;

  const text = `
Nuevo mensaje de contacto

Nombre Completo: ${data.nombreCompleto}
Empresa: ${data.empresa}
Cargo: ${data.cargo}
Teléfono: ${data.telefono}
Email: ${data.email}

Mensaje:
${data.mensaje}
  `;

  return nodemailerProvider.send({
    to: adminEmail,
    subject: `Nuevo contacto: ${data.nombreCompleto} - ${data.empresa}`,
    html,
    text,
  });
}

export async function sendConfirmationEmail(data: ContactFormData): Promise<EmailResult> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
        Gracias por contactarnos
      </h2>

      <p>Hola <strong>${data.nombreCompleto}</strong>,</p>

      <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>

      <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Resumen de tu consulta:</h3>
        <p><strong>Empresa:</strong> ${data.empresa}</p>
        <p><strong>Cargo:</strong> ${data.cargo}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap;">${data.mensaje}</p>
      </div>

      <p>Si tienes alguna pregunta adicional, no dudes en responder a este correo o contactarnos directamente:</p>

      <ul>
        <li>Email: <a href="mailto:admin@santacruzoyg.com.ar">admin@santacruzoyg.com.ar</a></li>
        <li>Cel Clínica Neuquén: +54 299 456 8069</li>
        <li>Cel Clínica Añelo: +54 299 457 3405</li>
      </ul>

      <p style="margin-top: 30px;">
        Saludos cordiales,<br>
        <strong>Equipo Santa Cruz O&G</strong>
      </p>

      <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
        Este es un mensaje automático. Por favor, no respondas directamente a este correo si deseas que tu respuesta sea atendida.
      </p>
    </div>
  `;

  const text = `
Gracias por contactarnos

Hola ${data.nombreCompleto},

Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.

Resumen de tu consulta:
- Empresa: ${data.empresa}
- Cargo: ${data.cargo}
- Teléfono: ${data.telefono}
- Mensaje: ${data.mensaje}

Si tienes alguna pregunta adicional, no dudes en contactarnos:
- Email: admin@santacruzoyg.com.ar
- Cel Clínica Neuquén: +54 299 456 8069
- Cel Clínica Añelo: +54 299 457 3405

Saludos cordiales,
Equipo Santa Cruz O&G
  `;

  return nodemailerProvider.send({
    to: data.email,
    subject: "Gracias por contactarnos - Santa Cruz O&G",
    html,
    text,
  });
}
