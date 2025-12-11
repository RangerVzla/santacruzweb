"use client";

import Image from "next/image";
import { SectionHeading } from "../components/SectionHeading";
import { CTAButton } from "../components/CTAButton";

const services = [
  {
    title: "Medicina laboral preventiva",
    description:
      "Exámenes preocupacionales, periódicos y de egreso. Programas de prevención adaptados a tu industria.",
    image: "/santacruz/rectangle-221.jpg",
  },
  {
    title: "Atención de emergencias",
    description:
      "Respuesta inmediata ante incidentes laborales. Coordinación con centros de atención y seguimiento del caso.",
    image: "/santacruz/rectangle-222.jpg",
  },
  {
    title: "Telemedicina",
    description:
      "Consultas remotas con especialistas. Ideal para operaciones en ubicaciones remotas o de difícil acceso.",
    image: "/santacruz/rectangle-223.jpg",
  },
  {
    title: "Gestión de ausentismo",
    description:
      "Control y seguimiento de ausencias por enfermedad. Reportes detallados y análisis de tendencias.",
    image: "/santacruz/rectangle-226.jpg",
  },
  {
    title: "Salud ocupacional",
    description:
      "Evaluación de riesgos y condiciones de trabajo. Programas de bienestar y salud mental.",
    image: "/santacruz/rectangle-227.jpg",
  },
  {
    title: "Capacitaciones",
    description:
      "Formación en primeros auxilios, prevención de riesgos y promoción de la salud en el trabajo.",
    image: "/santacruz/rectangle-229.jpg",
  },
];

export default function Servicios() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/santacruz/servicios.png"
          alt="Servicios"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-24 sm:px-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-base sm:text-lg md:text-xl leading-tight tracking-[0.08em] text-white uppercase">
              SERVICIOS MÉDICOS PROFESIONALES FLEXIBLES
            </h1>
            <p className="text-sm sm:text-base tracking-[0.12em] text-white/90">
              Más de 15 años liderando la medicina en la Cuenca Neuquina con tecnología de vanguardia
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-12">
          <SectionHeading
            title="Servicios diseñados"
            highlight="para ti"
            description={
              <p>
                Ofrecemos una amplia gama de servicios de medicina laboral que
                se adaptan a las necesidades específicas de cada empresa.
              </p>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative overflow-hidden rounded-xl bg-neutral-100 shadow-md group"
              >
                <div className="relative h-40 sm:h-44 md:h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/0" />
                </div>
                <div className="relative p-6 space-y-3">
                  <h3 className="text-lg font-semibold tracking-[0.08em]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em]">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="text-base leading-relaxed text-neutral-700">
            Contáctanos y diseñaremos una solución a la medida de tu empresa.
          </p>
          <div className="pt-4">
            <CTAButton label="Contactar" href="/contacto" variant="outline" />
          </div>
        </div>
      </section>
    </main>
  );
}
