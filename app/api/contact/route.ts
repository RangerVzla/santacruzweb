import { NextResponse } from "next/server";
import { sendContactEmail, sendConfirmationEmail, ContactFormData } from "@/lib/email";

// Sanitize input to prevent XSS in emails
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check - if filled, silently reject (likely a bot)
    if (body.website && body.website.trim() !== "") {
      // Return success to not alert bots, but don't actually send
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    const requiredFields: (keyof ContactFormData)[] = [
      "nombreCompleto",
      "empresa",
      "cargo",
      "telefono",
      "email",
      "mensaje",
    ];

    for (const field of requiredFields) {
      if (!body[field] || typeof body[field] !== "string" || !body[field].trim()) {
        return NextResponse.json(
          { success: false, error: `El campo ${field} es requerido` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "El formato del email no es válido" },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      nombreCompleto: sanitizeHtml(body.nombreCompleto.trim()),
      empresa: sanitizeHtml(body.empresa.trim()),
      cargo: sanitizeHtml(body.cargo.trim()),
      telefono: sanitizeHtml(body.telefono.trim()),
      email: body.email.trim(), // Don't sanitize email - validated separately
      mensaje: sanitizeHtml(body.mensaje.trim()),
    };

    // Send notification email to admin
    const adminResult = await sendContactEmail(formData);
    if (!adminResult.success) {
      console.error("Failed to send admin email:", adminResult.error);
      return NextResponse.json(
        { success: false, error: "Error al enviar el mensaje. Intenta de nuevo." },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const confirmationResult = await sendConfirmationEmail(formData);
    if (!confirmationResult.success) {
      console.error("Failed to send confirmation email:", confirmationResult.error);
      // Don't fail the request if confirmation email fails - admin already received it
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
