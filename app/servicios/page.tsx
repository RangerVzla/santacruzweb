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
              Más de 15 años liderando la medicina en la Cuenca Neuquina con
              tecnología de vanguardia
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
                src="/santacruz/servicios-1-b.png"
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
            <p className="text-sm sm:text-base uppercase tracking-[0.12em] leading-relaxed text-justify">
              <span className="text-neutral-800">
                DESDE NUESTRA CLÍNICA EN AÑELO, LA PRIMERA DEDICADA
                EXCLUSIVAMENTE A LA SALUD DEL PERSONAL, OFRECEMOS{" "}
              </span>
              <span className="text-brand">
                SOLUCIONES QUE COMBINAN ATENCIÓN MÉDICA DE EXCELENCIA,
                TECNOLOGÍA PROPIA Y DISPONIBILIDAD 24/7 LOS 365 DÍAS DEL AÑO
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Medicina Laboral Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-4/5 overflow-hidden md:order-2">
              <Image
                src="/santacruz/servicios-2a.png"
                alt="Medicina laboral en campo"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.08em] uppercase text-justify">
                  Servicio médico en áreas remotas
                </h2>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-800 text-justify">
                  Llevamos lo que necesites en tu operación
                </span>
              </div>
              <div className="h-[1px] w-full bg-brand" />
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <h3 className="text-xs uppercase tracking-[0.12em] text-neutral-900 text-justify">
                    Médico Director, Médico de Campo y Asistente Coordinador
                  </h3>
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs uppercase tracking-[0.12em] text-neutral-900 text-justify">
                    Unidades Móviles de Alta Complejidad (ambulancias 4X4
                    totalmente equipadas como Clase &quot;A&quot;)
                  </h3>
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs uppercase tracking-[0.12em] text-neutral-900 text-justify">
                    Convenios exclusivos con clínicas de alta complejidad en
                    Neuquén Capital y Hospital Alemán en Buenos Aires.
                  </h3>
                  <h3 className="text-xs uppercase tracking-[0.12em] text-neutral-900 text-justify">
                    Llevamos lo que necesites en tu operación Equipos médicos
                    completos desplegados directamente in situ
                  </h3>
                  {/* <p className="text-sm text-neutral-600">
                    Exámenes preocupacionales, periódicos y preventivos
                  </p> */}
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs uppercase tracking-[0.12em] text-neutral-900 text-justify">
                    Consultorios en campo con sistemas de comunicación
                    integrados (Starlink, radiocomunicación)
                  </h3>
                  {/*
                  <p className="text-sm text-neutral-600">
                    Atención exclusiva en sala lounge premium
                  </p>*/}
                </div>
              </div>
              {/* <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-neutral-100 transition-colors">
                                    Más información
                                  </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Centro de Diagnóstico Portátil Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8 order-2">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-[0.2em] text-neutral-800">
                  Tecnología en áreas remotas
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase text-justify">
                  Centro de diagnóstico médico (portátil)
                </h2>
              </div>
              <div className="h-[2px] w-full bg-brand" />
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">
                  Telemedicina
                </p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">
                  Iriscopio
                </p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">
                  Ecógrafo
                </p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">
                  Otoscopio
                </p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">
                  Cámara de inspección
                </p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">
                  Estetoscopio digital
                </p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">
                  Dermatoscopio
                </p>
                <p className="text-xs uppercase tracking-[0.06em] sm:tracking-[0.12em] text-neutral-800">
                  E.C.G y otros
                </p>
              </div>
              {/* <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-neutral-100 transition-colors">
                Más información
              </button> */}
            </div>
            <div className="relative aspect-square overflow-hidden order-1">
              <Image
                src="/santacruz/servicios-3-b.png"
                alt="Centro de diagnóstico portátil"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Protección Integral de la Salud Section (comentada) */}
      {false && (
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
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase text-justify">
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
                    <p className="text-sm text-neutral-600 text-justify">
                      Evaluación de riesgos especializada
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                      Tests de alcohol y drogas
                    </h3>
                    <p className="text-sm text-neutral-600 text-justify">
                      Programas de prevención laboral
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                      Red de soporte cardiovascular
                    </h3>
                    <p className="text-sm text-neutral-600 text-justify">
                      Respaldo inmediato especializado
                    </p>
                  </div>
                </div>
                {/* <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-neutral-100 transition-colors">
                                    Más información
                                  </button> */}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Medicina laboral (imagen derecha) */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-[0.2em] text-neutral-800">
                  Prevención y excelencia en cada examen
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase text-justify">
                  Medicina laboral
                </h2>
              </div>
              <div className="flex items-center gap-0">
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
                <div className="h-[2px] flex-1 bg-brand" />
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Exámenes preocupacionales, periódicos y de egreso
                  </h3>
                  <p className="text-sm uppercase tracking-[0.12em] text-neutral-900 text-justify">
                    Controles toxicológicos
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Accidentología (ART)
                  </h3>
                  <p className="text-sm uppercase tracking-[0.12em] text-neutral-900 text-justify">
                    Vacunatorio Clinica Parque Industrial Neuquén
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Depósito de Medicamentos en Clínica Añelo
                  </h3>
                  <p className="text-sm uppercase tracking-[0.12em] text-neutral-900 text-justify">
                    Asesoramiento integral y capacitación especializada
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Servicios médico-legales y epidemiología laboral
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Auditorías médicas y actividades integradas de seguridad
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Juntas médicas y procedimientos internos especializados
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Laboratorios propios en Neuquén y Añelo
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/santacruz/servicios-4b.png"
                alt="Protección integral de la salud"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sector VIP para ejecutivos */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/santacruz/servicios-6.png"
                alt="Sector VIP para ejecutivos"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-[0.2em] text-neutral-800">
                  Porque tu tiempo es valioso.
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase text-justify whitespace-nowrap">
                  Sector VIP para ejecutivos
                </h2>
              </div>
              <div className="flex items-center gap-0">
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
                <div className="h-[2px] flex-1 bg-brand" />
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Sala Lounge exclusiva con servicio de café, refrigerios,
                    snacks y WIFI
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Máximo confort y comodidad
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Protocolos optimizados para agendas ejecutivas ajustadas
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Seguimiento completo desde llegada hasta partida
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Prioridad sin demoras ni esperas
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alcohol y drogas */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase text-justify">
                  Alcohol y drogas
                </h2>
              </div>
              <div className="flex items-center gap-0">
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
                <div className="h-[2px] flex-1 bg-brand" />
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Programas de prevención laboral
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Testeos de droga (saliva, orina y sangre)
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Testeos de alcohol (saliva, orina, sangre y aire espirado)
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/santacruz/servicios-8.png"
                alt="Alcohol y drogas"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programa de prevención y soporte cardiovascular */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/santacruz/servicios-7.png"
                alt="Programa de prevención y soporte cardiovascular"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase text-justify">
                  Programa de prevención y soporte cardiovascular
                </h2>
              </div>
              <div className="flex items-center gap-0">
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
                <div className="h-[2px] flex-1 bg-brand" />
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Evaluación de riesgos
                  </h3>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Respaldo especializado
                  </h3>
                </div>
              </div>
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
                <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.04em] uppercase text-justify whitespace-nowrap">
                  Cobertura global y especializada
                </h2>
              </div>
              <div className="flex items-center gap-0">
                <div className="h-[2px] flex-1 bg-brand" />
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Evacuaciones y repatriaciones
                  </h3>
                  <p className="text-sm text-neutral-600 text-justify">
                    Alianza internacional especializada
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Servicios médicos offshore
                  </h3>
                  <p className="text-sm text-neutral-600 text-justify">
                    En Argentina para cuencas marítimas
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm uppercase tracking-[0.12em] text-neutral-900">
                    Cobertura para personal expatriado
                  </h3>
                  <p className="text-sm text-neutral-600 text-justify">
                    Protocolos internacionales
                  </p>
                </div>
              </div>
              {/* <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-neutral-100 transition-colors">
                                    Más información
                                  </button> */}
            </div>
            <div className="relative aspect-4/5 overflow-hidden order-1 md:order-2">
              <Image
                src="/santacruz/servicios-5a.png"
                alt="Cobertura global y especializada"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capacitaciones */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/santacruz/servicios-10.png"
                alt="Capacitaciones"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase text-justify">
                  Capacitaciones en prevención y respuesta
                </h2>
              </div>
              <div className="flex items-center gap-0">
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
                <div className="h-[2px] flex-1 bg-brand" />
              </div>
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.12em] text-neutral-900 text-justify">
                  Formamos equipos en primeros auxilios, RCP y actuación ante
                  emergencias, con contenidos adaptados a las exigencias del
                  sector energético.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Especialidades Médicas Disponibles */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] text-black uppercase text-justify">
            Especialidades médicas disponibles:
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              {
                label: "Medicina",
                image: "/santacruz/especialidades/medicina1.png",
              },
              {
                label: "Cardiología",
                image: "/santacruz/especialidades/cardiologia.jpg",
              },
              {
                label: "Emergencias",
                image: "/santacruz/especialidades/emergencias1.png",
              },
              {
                label: "Psicotécnicos",
                image: "/santacruz/especialidades/psicotecnicos1.png",
              },
              {
                label: "Medicina Preventiva",
                image: "/santacruz/especialidades/preventiva.png",
              },
              {
                label: "Toxicología",
                image: "/santacruz/especialidades/toxicologia.png",
              },
              {
                label: "Oftalmología",
                image: "/santacruz/especialidades/oftalmologia.png",
              },
              {
                label: "Radiología",
                image: "/santacruz/especialidades/radiologia1.png",
              },
              {
                label: "Medicina Offshore/Marítima",
                image: "/santacruz/especialidades/maritima1.png",
              },
              {
                label: "Laboratorio",
                image: "/santacruz/especialidades/laboratorio1.png",
              },
            ].map((specialty, index) => (
              <div key={index} className="flex flex-col">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={specialty.image}
                    alt={specialty.label}
                    fill
                    className="object-cover grayscale"
                    sizes="(min-width: 768px) 20vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>

                {/* Label with vertical line and dot */}
                <div className="flex pt-6">
                  {/* Vertical line with dot */}
                  <div className="flex flex-col items-center mr-3">
                    <div className="w-[2px] h-14 bg-brand" />
                    <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.12em] text-neutral-800 leading-tight pt-12 text-justify">
                    {specialty.label}
                  </p>
                </div>
              </div>
            ))}
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
              description="Convenios exclusivos con clínicas de alta complejidad en Neuquén Capital y Hospital Alemán en Buenos Aires. "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
