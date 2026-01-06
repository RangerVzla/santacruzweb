"use client";

import Image from "next/image";
import { ClientLogosGrid } from "../components/ClientLogosGrid";
import { SectionHeading } from "../components/SectionHeading";
import { ValueCard } from "../components/ValueCard";

export default function QuienesSomos() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/santacruz/quienes-somos.png"
          alt="Quiénes somos"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-24 sm:px-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight tracking-[0.08em] text-white uppercase">
              MÁS DE 20 AÑOS A TU LADO
            </h1>
          </div>
        </div>
      </section>

      {/* Team Photo & Origin */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src="/santacruz/personal.png"
                alt="Equipo Santa Cruz O&G"
                fill
                className="object-cover grayscale"
                sizes="(min-width: 1024px) 1000px, 100vw"
              />
            </div>
            {/* Vertical line from image to dot */}
            <div className="absolute left-0 top-full w-px h-24 bg-[color:var(--brand-orange)]" />
          </div>
          <div className="mt-24 flex items-start gap-4">
            <div className="h-2 w-2 rounded-full bg-[color:var(--brand-orange)] flex-shrink-0 -ml-[3px]" />
            <p className="text-sm sm:text-base uppercase tracking-[0.12em] leading-relaxed">
              <span className="text-neutral-800">
                SANTA CRUZ O&G SURGE EN 2005 DE UNA HISTORIA FAMILIAR TRADICIONAL
                ESTRUCTURADA, LANZÁNDOSE AL MERCADO{" "}
              </span>
              <span className="text-[color:var(--brand-orange)]">
                PARA SATISFACER NECESIDADES MÁS FLEXIBLES HACIA NUESTROS CLIENTES.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Stairs Section */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/santacruz/stairs.png"
                alt="Profesionales médicos"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="space-y-6 md:pt-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[color:var(--brand-orange)] flex-shrink-0" />
                <div className="h-px flex-1 bg-[color:var(--brand-orange)]" />
              </div>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-neutral-800">
                  Tras empezar a trabajar con nuestros primeros clientes, aprendimos que la constancia y resiliencia pueden hacer crecer una pequeña empresa, y que la inversión e innovación son claves para el desarrollo constante.
                </p>
                <p className="text-base leading-relaxed text-neutral-800">
                  Queremos cambiar el modo de ver al paciente, la manera de atenderlo, de acompañarlo. Por ello garantizamos la mejor atención respaldada por nuestros años de experiencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-end">
            <div className="space-y-6 md:pb-8">
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-[color:var(--brand-orange)]" />
                <div className="h-2 w-2 rounded-full bg-[color:var(--brand-orange)] flex-shrink-0" />
              </div>
              <p className="text-base leading-relaxed text-neutral-800">
                El mayor reto que tenemos por delante es alcanzar mayores niveles de innovación y tecnología, así como establecer una estructura sólida que nos permita brindar un mejor servicio a nuestros clientes.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/santacruz/doctor.png"
                alt="Doctor con paciente"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-10">
          <SectionHeading title="Nuestros" highlight="valores" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ValueCard
              icon="efficiency"
              title="Eficiencia"
              description="Maximizamos recursos y minimizamos errores"
            />
            <ValueCard
              icon="transparency"
              title="Transparencia"
              description="Comunicación abierta y clara con información honesta"
            />
            <ValueCard
              icon="flexibility"
              title="Flexibilidad"
              description="Nos adaptamos a las necesidades específicas de cada cliente"
            />
            <ValueCard
              icon="innovation"
              title="Innovación"
              description="Inversión constante en nuevas tecnologías y procesos"
            />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-10">
          <SectionHeading
            title="Nuestros mejores clientes"
            highlight="nos avalan"
            description={
              <p>
                Aliados en distintos países confían en nuestra capacidad de respuesta y
                flexibilidad operacional.
              </p>
            }
          />
          <ClientLogosGrid />
        </div>
      </section>

    </main>
  );
}
