"use client";

import Image from "next/image";
import { ValueCard } from "../components/ValueCard";


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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-[0.08em] text-white uppercase">
              Servicios médicos profesionales flexibles
            </h1>
            <p className="text-sm sm:text-base uppercase tracking-[0.18em] text-white/90">
              Más de 15 años liderando la medicina en la Cuenca Neuquina con tecnología de vanguardia
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Section */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/santacruz/servicios-1.png"
                alt="Atención médica en clínica"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 1000px, 100vw"
              />
            </div>
            {/* Vertical line from image to dot */}
            <div className="absolute left-0 top-full w-px h-24 bg-brand" />
          </div>
          <div className="mt-24 flex items-start gap-4">
            <div className="h-2 w-2 rounded-full bg-brand shrink-0 -ml-[3px]" />
            <p className="text-sm sm:text-base uppercase tracking-[0.12em] leading-relaxed">
              <span className="text-neutral-800">
                DESDE NUESTRA CLÍNICA EN AÑELO, LA PRIMERA DEDICADA
                EXCLUSIVAMENTE A LA SALUD DE LOS TRABAJADORES, OFRECEMOS{" "}
              </span>
              <span className="text-brand">
                SOLUCIONES QUE COMBINAN ATENCIÓN MÉDICA DE EXCELENCIA, TECNOLOGÍA PROPIA Y DISPONIBILIDAD 24/7
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Medicina Laboral Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/santacruz/servicios-2.png"
                alt="Medicina laboral en campo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-[0.2em] text-neutral-800">
                  Servicios médicos especializados
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase">
                  Medicina laboral integral y atención de campo
                </h2>
              </div>
              <div className="h-[2px] w-full bg-brand" />
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    Servicio médico de campo
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Equipos completos desplegados en sitios remotos
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    Medicina laboral integral
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Exámenes preocupacionales, periódicos y preventivos
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    Servicio VIP para ejecutivos
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Atención exclusiva en sala lounge premium
                  </p>
                </div>
              </div>
              <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-neutral-100 transition-colors">
                Más información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Centro de Diagnóstico Portátil Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-[0.2em] text-neutral-800">
                  Tecnología en áreas remotas
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase">
                  Centro de diagnóstico portátil
                </h2>
              </div>
              <div className="h-[2px] w-full bg-brand" />
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">Telemedicina</p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">Irisoscopio</p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">Ecógrafo</p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">Otoscopio</p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">Cámara de inspección</p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">Estetoscopio digital</p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">Dermatoscopio</p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">E.C.G y otros</p>
              </div>
              <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-neutral-100 transition-colors">
                Más información
              </button>
            </div>
            <div className="relative aspect-square overflow-hidden order-1 md:order-2">
              <Image
                src="/santacruz/servicios-3.png"
                alt="Centro de diagnóstico portátil"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Protección Integral de la Salud Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/santacruz/servicios-4.png"
                alt="Protección integral de la salud"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-[0.2em] text-neutral-800">
                  Servicios cardiovasculares y prevención
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase">
                  Protección integral de la salud
                </h2>
              </div>
              <div className="flex items-center gap-0">
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
                <div className="h-[2px] flex-1 bg-brand" />
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    Programa de prevención cardiovascular
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Evaluación de riesgos especializada
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    Tests de alcohol y drogas
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Programas de prevención laboral
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    Red de soporte cardiovascular
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Respaldo inmediato especializado
                  </p>
                </div>
              </div>
              <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-neutral-100 transition-colors">
                Más información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura Global Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-[0.2em] text-neutral-800">
                  Servicios internacionales
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase">
                  Cobertura global y especializada
                </h2>
              </div>
              <div className="flex items-center gap-0">
                <div className="h-[2px] flex-1 bg-brand" />
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    Evacuaciones y repatriaciones
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Alianza internacional especializada
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    Servicios médicos offshore
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Únicos en Argentina para cuencas marítimas
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    Cobertura para personal expatriado
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Protocolos internacionales
                  </p>
                </div>
              </div>
              <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-neutral-100 transition-colors">
                Más información
              </button>
            </div>
            <div className="relative aspect-4/5 overflow-hidden order-1 md:order-2">
              <Image
                src="/santacruz/servicios-5.png"
                alt="Cobertura global y especializada"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ValueCard
              icon="availability"
              title="Disponibilidad 24/7"
              description="Atención inmediata los 365 días del año con equipos móviles y respaldo hospitalario"
            />
            <ValueCard
              icon="personalized"
              title="Atención personalizada"
              description="Protocolos adaptados específicamente a cada empresa y sus necesidades particulares"
            />
            <ValueCard
              icon="pioneer"
              title="Pioneros en la región"
              description="Más de 20 años de experiencia especializada en la Cuenca Neuquina"
            />
            <ValueCard
              icon="alliances"
              title="Alianzas estratégicas"
              description="Convenio exclusivo con Policlínico Neuquén, Hospital Alemán y red internacional de prestadores"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
