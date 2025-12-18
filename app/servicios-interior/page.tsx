"use client";

import Image from "next/image";

export default function ServiciosInterior() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background gradient - peach/tan to white */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8c4a8] via-[#d4a88a] to-[#c49070]" />

        {/* Mesh/network pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl">
          {/* Left side - Text content */}
          <div className="flex w-full flex-col justify-center px-6 py-24 sm:px-12 md:w-1/2">
            <div className="max-w-xl space-y-6">
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-700">
                Servicios médicos especializados
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-[0.08em] text-neutral-900 uppercase">
                Medicina para tu empresa y atención en áreas remotas
              </h1>
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-full max-w-md bg-brand" />
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
              </div>
              <p className="text-sm sm:text-base text-neutral-700">
                Equipos médicos completos con tecnología de vanguardia y disponibilidad 24/7
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden md:block md:w-1/2 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-lg h-[70vh]">
              <Image
                src="/santacruz/servicios-interior-hero.png"
                alt="Atención médica en campo"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile image */}
        <div className="md:hidden relative w-full h-64 mt-8">
          <Image
            src="/santacruz/servicios-interior-hero.png"
            alt="Atención médica en campo"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Service Section 1 - Servicio Médico en Áreas Remotas */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-700">
                Servicio médico en áreas remotas
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase">
                Llevamos lo que necesites a tu operación
              </h2>
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-full max-w-sm bg-brand" />
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-sm sm:text-base text-neutral-700">
                  Equipos médicos completos desplegados directamente en sitios remotos
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Médico Director, Médico de Campo y Asistente Coordinador
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Unidades Móviles de Alta Complejidad con ambulancias 4×4 equipadas
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Consultorios en campo con sistemas de comunicación integrados
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Respaldo hospitalario con Policlínico Neuquén S.A. y Hospital Alemán (convenio exclusivo)
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="overflow-hidden">
              <Image
                src="/santacruz/servicios-interior-1.png"
                alt="Ambulancia equipada"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 2 - Medicina Laboral */}
      <section className="bg-neutral-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-700">
                Medicina laboral
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase">
                Prevención y excelencia en cada examen
              </h2>
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-full max-w-sm bg-brand" />
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-sm sm:text-base text-neutral-700">
                  Exámenes preocupacionales y periódicos
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Asesoramiento integral y capacitación especializada
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Servicios médico-legales y epidemiología laboral
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Auditorías médicas y actividades integradas de seguridad
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Modalidad flexible: en nuestras instalaciones.
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Juntas médicas y procedimientos internos especializados
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="overflow-hidden">
              <Image
                src="/santacruz/servicios-interior-2.png"
                alt="Personal médico revisando documentos"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Section 3 - Servicio VIP para Ejecutivos */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-700">
                Servicio VIP para ejecutivos
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] uppercase">
                Porque tu tiempo es valioso
              </h2>
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-full max-w-sm bg-brand" />
                <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-sm sm:text-base text-neutral-700">
                  Sala Lounge VIP inspirada en aeropuertos internacionales
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Máximo confort: TV, máquina de café Nespresso, cereales, alfajores
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Protocolos optimizados para agendas ejecutivas ajustadas
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Seguimiento integral desde llegada hasta partida
                </p>
                <p className="text-sm sm:text-base text-neutral-700">
                  Prioridad total sin demoras ni esperas
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="overflow-hidden">
              <Image
                src="/santacruz/servicios-interior-3.png"
                alt="Sala VIP para ejecutivos"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Médicas Disponibles */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] text-black uppercase text-center">
            Especialidades médicas disponibles:
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { label: "Medicina", image: "/santacruz/especialidades/medicina.png" },
              { label: "Cardiología", image: "/santacruz/especialidades/cardiologia.png" },
              { label: "Emergencias", image: "/santacruz/especialidades/emergencias.png" },
              { label: "Psicotécnicos", image: "/santacruz/especialidades/psicotecnicos.png" },
              { label: "Medicina Preventiva", image: "/santacruz/especialidades/preventiva.png" },
              { label: "Toxicología", image: "/santacruz/especialidades/toxicologia.png" },
              { label: "Oftalmología", image: "/santacruz/especialidades/oftalmologia.png" },
              { label: "Radiología", image: "/santacruz/especialidades/radiologia.png" },
              { label: "Medicina Offshore/Marítima", image: "/santacruz/especialidades/maritima.png" },
              { label: "Laboratorio", image: "/santacruz/especialidades/laboratorio.png" },
            ].map((specialty, index) => (
              <div key={index} className="flex flex-col">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={specialty.image}
                    alt={specialty.label}
                    fill
                    className="object-cover"
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
                  <p className="text-xs sm:text-sm uppercase tracking-[0.12em] text-neutral-800 leading-tight pt-12">
                    {specialty.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-neutral-100 transition-colors">
              Solicita tu evaluación médica personalizada
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
