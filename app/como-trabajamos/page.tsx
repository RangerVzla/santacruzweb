"use client";

import Image from "next/image";
import { SectionHeading } from "../components/SectionHeading";
import { CTAButton } from "../components/CTAButton";

const steps = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description:
      "Evaluamos las necesidades específicas de tu empresa y diseñamos un plan de cobertura médica personalizado.",
  },
  {
    number: "02",
    title: "Implementación",
    description:
      "Activamos los servicios de manera ágil, integrando tecnología y profesionales especializados.",
  },
  {
    number: "03",
    title: "Seguimiento continuo",
    description:
      "Monitoreamos la calidad del servicio y ajustamos según las necesidades cambiantes de tu operación.",
  },
];

export default function ComoTrabajamos() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/santacruz/como-trabajamos.jpg"
          alt="Sistema de medicina empresarial con IA"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-12">
          <div className="max-w-4xl">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-[0.08em] text-white uppercase">
              EL ÚNICO SISTEMA DE MEDICINA EMPRESARIAL CON IA QUE SE ADAPTA COMPLETAMENTE A TU EMPRESA
            </h1>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-12">
          <SectionHeading
            title="Nuestro proceso"
            highlight="de trabajo"
            description={
              <p>
                En Santa Cruz O&G hemos desarrollado una metodología que prioriza
                la agilidad y la personalización para cada cliente.
              </p>
            }
          />
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-6 sm:p-8 rounded-xl bg-neutral-50 border border-neutral-200 space-y-4"
              >
                <div className="text-4xl font-semibold text-[color:var(--brand-orange)]">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold tracking-[0.08em] uppercase">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-10">
          <SectionHeading
            eyebrow="Nuestros valores"
            title="Lo que nos diferencia"
            align="center"
            description={
              <p>
                Combinamos experiencia, tecnología y compromiso para ofrecer
                soluciones que realmente funcionan.
              </p>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-3 p-6">
              <div className="text-2xl font-semibold text-[color:var(--brand-orange)]">
                Agilidad
              </div>
              <p className="text-sm text-neutral-700">
                Respuestas rápidas y procesos simplificados.
              </p>
            </div>
            <div className="text-center space-y-3 p-6">
              <div className="text-2xl font-semibold text-[color:var(--brand-orange)]">
                Flexibilidad
              </div>
              <p className="text-sm text-neutral-700">
                Servicios adaptados a tus necesidades.
              </p>
            </div>
            <div className="text-center space-y-3 p-6">
              <div className="text-2xl font-semibold text-[color:var(--brand-orange)]">
                Tecnología
              </div>
              <p className="text-sm text-neutral-700">
                Herramientas de última generación e IA.
              </p>
            </div>
            <div className="text-center space-y-3 p-6">
              <div className="text-2xl font-semibold text-[color:var(--brand-orange)]">
                Compromiso
              </div>
              <p className="text-sm text-neutral-700">
                Soporte 24/7 y acompañamiento continuo.
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <CTAButton label="Contactar" href="/contacto" variant="outline" />
          </div>
        </div>
      </section>
    </main>
  );
}
