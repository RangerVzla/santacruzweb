"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, FormEvent } from "react";

// Dynamic import for Leaflet (requires window object)
const LocationMap = dynamic(() => import("../components/LocationMap").then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-neutral-200 rounded-lg flex items-center justify-center">
      <span className="text-neutral-500 text-sm">Cargando mapa...</span>
    </div>
  ),
});

type FormData = {
  nombreCompleto: string;
  empresa: string;
  cargo: string;
  telefono: string;
  email: string;
  mensaje: string;
  consentimiento: boolean;
  website: string; // Honeypot field - should remain empty
};

type FormErrors = {
  nombreCompleto?: string;
  empresa?: string;
  cargo?: string;
  telefono?: string;
  email?: string;
  mensaje?: string;
  consentimiento?: string;
};

const contactInfo = {
  email: "admin@santacruzoyg.com.ar",
  phones: [
    { label: "Cel Clínica Neuquén", number: "+54 299 456 8069" },
    { label: "Cel Clínica Añelo", number: "+54 299 457 3405" },
  ],
};

const locations = [
  {
    name: "CLÍNICA SANTA CRUZ O&G SRL",
    city: "NEUQUÉN",
    address: "El Topacio 3275, Q8300 Neuquén Parque Industrial Oeste",
    phone: "+54 299 456 8069",
    coordinates: [-38.9516, -68.0591] as [number, number],
  },
  {
    name: "CLÍNICA SANTA CRUZ O&G",
    city: "AÑELO, NEUQUÉN",
    address: "Av. Primeros Pobladores S/N Lote B1c",
    phone: "+54 299 457 3405",
    coordinates: [-38.3489, -68.7872] as [number, number],
  },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    empresa: "",
    cargo: "",
    telefono: "",
    email: "",
    mensaje: "",
    consentimiento: false,
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombreCompleto.trim()) {
      newErrors.nombreCompleto = "El nombre es requerido";
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = "La empresa es requerida";
    }

    if (!formData.cargo.trim()) {
      newErrors.cargo = "El cargo es requerido";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    }

    if (!formData.consentimiento) {
      newErrors.consentimiento = "Debes aceptar la política de datos";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombreCompleto: formData.nombreCompleto,
          empresa: formData.empresa,
          cargo: formData.cargo,
          telefono: formData.telefono,
          email: formData.email,
          mensaje: formData.mensaje,
          website: formData.website,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setSubmitStatus("success");
      setFormData({
        nombreCompleto: "",
        empresa: "",
        cargo: "",
        telefono: "",
        email: "",
        mensaje: "",
        consentimiento: false,
        website: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <main className="bg-white text-black overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh]">
        <Image
          src="/santacruz/hero-contact.png"
          alt="Contacto"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto flex h-full min-h-[70vh] max-w-7xl flex-col justify-center px-6 sm:px-12">


          <div className="space-y-4 max-w-xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight tracking-[0.08em] text-white uppercase">
              ¿Listo para transformar tu medicina laboral?
            </h1>
            <p className="text-sm sm:text-base text-white/90">
              Contáctanos hoy y descubre cómo podemos hacer tu empresa más eficiente
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/santacruz/bg-techno.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-8">
          {/* Intro text */}
          <p className="text-center text-white/90 text-base leading-relaxed mb-12">
            Si tienes cualquier duda o consulta acerca de nuestros servicios, puedes
            completar el formulario a continuación y te daremos respuesta lo antes posible:
          </p>

          {/* Form title */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center uppercase tracking-[0.12em] mb-16">
            Formulario de Contacto
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Honeypot field - hidden from users, catches bots */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Nombre Completo */}
            <div>
              <label className="block text-white text-sm uppercase tracking-[0.05em] sm:tracking-widest mb-1">
                Nombre Completo
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={formData.nombreCompleto}
                  onChange={(e) => handleChange("nombreCompleto", e.target.value)}
                  className="flex-1 bg-transparent border-b-2 border-[color:var(--brand-orange)] text-white py-2 focus:outline-none"
                />
                <div className="w-2 h-2 rounded-full bg-[color:var(--brand-orange)]" />
              </div>
              {errors.nombreCompleto && <p className="mt-1 text-sm text-red-400">{errors.nombreCompleto}</p>}
            </div>

            {/* Empresa */}
            <div>
              <label className="block text-white text-sm uppercase tracking-[0.05em] sm:tracking-widest mb-1">
                Empresa
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => handleChange("empresa", e.target.value)}
                  className="flex-1 bg-transparent border-b-2 border-[color:var(--brand-orange)] text-white py-2 focus:outline-none"
                />
                <div className="w-2 h-2 rounded-full bg-[color:var(--brand-orange)]" />
              </div>
              {errors.empresa && <p className="mt-1 text-sm text-red-400">{errors.empresa}</p>}
            </div>

            {/* Cargo */}
            <div>
              <label className="block text-white text-sm uppercase tracking-[0.05em] sm:tracking-widest mb-1">
                Cargo
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={formData.cargo}
                  onChange={(e) => handleChange("cargo", e.target.value)}
                  className="flex-1 bg-transparent border-b-2 border-[color:var(--brand-orange)] text-white py-2 focus:outline-none"
                />
                <div className="w-2 h-2 rounded-full bg-[color:var(--brand-orange)]" />
              </div>
              {errors.cargo && <p className="mt-1 text-sm text-red-400">{errors.cargo}</p>}
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-white text-sm uppercase tracking-[0.05em] sm:tracking-widest mb-1">
                Teléfono
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => handleChange("telefono", e.target.value)}
                  className="flex-1 bg-transparent border-b-2 border-[color:var(--brand-orange)] text-white py-2 focus:outline-none"
                />
                <div className="w-2 h-2 rounded-full bg-[color:var(--brand-orange)]" />
              </div>
              {errors.telefono && <p className="mt-1 text-sm text-red-400">{errors.telefono}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-white text-sm uppercase tracking-[0.05em] sm:tracking-widest mb-1">
                Email
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="flex-1 bg-transparent border-b-2 border-[color:var(--brand-orange)] text-white py-2 focus:outline-none"
                />
                <div className="w-2 h-2 rounded-full bg-[color:var(--brand-orange)]" />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            {/* Mensaje */}
            <div>
              <textarea
                rows={5}
                value={formData.mensaje}
                onChange={(e) => handleChange("mensaje", e.target.value)}
                placeholder="MENSAJE/CONSULTA ESPECÍFICA"
                className="w-full bg-white text-neutral-800 p-4 rounded focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-orange)] resize-none placeholder:text-neutral-400 placeholder:uppercase placeholder:tracking-[0.1em]"
              />
              {errors.mensaje && <p className="mt-1 text-sm text-red-400">{errors.mensaje}</p>}
            </div>

            {/* Consentimiento */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consentimiento"
                checked={formData.consentimiento}
                onChange={(e) => handleChange("consentimiento", e.target.checked)}
                className="mt-0.5 w-6 h-6 accent-brand cursor-pointer"
              />
              <label htmlFor="consentimiento" className="text-white/90 text-sm">
                Doy mi consentimiento a la política de gestión de datos de SantaCruzO&G
              </label>
            </div>
            {errors.consentimiento && <p className="text-sm text-red-400">{errors.consentimiento}</p>}

            {/* Submit */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 sm:px-12 md:px-16 py-3 rounded-full text-sm uppercase tracking-[0.16em] font-medium transition-colors border-2 border-white text-white hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-400 text-sm">¡Mensaje enviado con éxito!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm">Error al enviar el mensaje. Intenta de nuevo.</p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div className="space-y-12">
              {/* General Contact */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold uppercase tracking-[0.12em] text-black">
                    Información de Contacto
                  </h3>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 h-[2px] bg-[color:var(--brand-orange)]" />
                    <div className="w-3 h-3 rounded-full bg-[color:var(--brand-orange)]" />
                  </div>
                </div>
                <div className="space-y-2 text-neutral-700 mt-6">
                  <p>mail: {contactInfo.email}</p>
                  {contactInfo.phones.map((phone) => (
                    <p key={phone.number}>
                      {phone.label}: {phone.number}
                    </p>
                  ))}
                </div>
              </div>

              {/* Locations */}
              {locations.map((location, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold uppercase tracking-[0.12em] text-black">
                      {location.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex-1 h-[2px] bg-[color:var(--brand-orange)]" />
                      <div className="w-3 h-3 rounded-full bg-[color:var(--brand-orange)]" />
                    </div>
                  </div>
                  <div className="space-y-2 mt-2">
                    <p className="text-[color:var(--brand-orange)] font-medium uppercase tracking-[0.08em]">
                      {location.city}
                    </p>
                    <p className="text-neutral-700">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Map */}
            <div className="w-full h-[350px] sm:h-[400px] md:h-[500px]">
              <LocationMap locations={locations} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
