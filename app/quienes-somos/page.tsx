"use client";

import Image from "next/image";
import { SectionHeading } from "../components/blocks";

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
            <h1 className="text-2xl  leading-tight tracking-[0.08em] text-white uppercase">
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
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/santacruz/stairs.png"
                alt="Profesionales médicos"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="space-y-6 lg:pt-8">
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
          <div className="grid gap-12 lg:grid-cols-2 items-end">
            <div className="space-y-6 lg:pb-8">
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

      {/* About */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Nuestra historia"
                title="Santa Cruz O&G"
                align="left"
                description={
                  <div className="space-y-4">
                    <p>
                      Desde nuestra fundación, hemos sido pioneros en la
                      transformación de los servicios de medicina laboral en
                      Latinoamérica.
                    </p>
                    <p>
                      Nacimos con la misión de ofrecer soluciones ágiles y
                      personalizadas que se adapten a las necesidades reales de
                      las empresas del sector energético y más allá.
                    </p>
                  </div>
                }
              />
            </div>
            <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/santacruz/rectangle-221.jpg"
                alt="Equipo Santa Cruz"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/0" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 rounded-xl bg-white shadow-md space-y-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-orange)]">
                Misión
              </h3>
              <p className="text-lg leading-relaxed text-neutral-800">
                Brindar servicios de medicina laboral eficientes, flexibles y de
                alta calidad, utilizando tecnología de vanguardia para mejorar
                la salud y bienestar de los trabajadores.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white shadow-md space-y-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-orange)]">
                Visión
              </h3>
              <p className="text-lg leading-relaxed text-neutral-800">
                Ser el referente latinoamericano en servicios de salud laboral,
                reconocidos por nuestra innovación, compromiso y excelencia en
                la atención.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-semibold text-[color:var(--brand-orange)]">
                +20
              </div>
              <p className="text-sm uppercase tracking-[0.16em] text-neutral-600">
                Años de experiencia
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-semibold text-[color:var(--brand-orange)]">
                +15
              </div>
              <p className="text-sm uppercase tracking-[0.16em] text-neutral-600">
                Países con cobertura
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-semibold text-[color:var(--brand-orange)]">
                +500
              </div>
              <p className="text-sm uppercase tracking-[0.16em] text-neutral-600">
                Empresas atendidas
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-semibold text-[color:var(--brand-orange)]">
                99.8%
              </div>
              <p className="text-sm uppercase tracking-[0.16em] text-neutral-600">
                Satisfacción del cliente
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
