"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/app/components/SectionHeading";



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

      <section className="bg-neutral-100 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-8">
          <div className="grid gap-6 md:gap-8 md:grid-cols-[1.1fr_1fr] items-center">
            <div className="space-y-4">
              <SectionHeading
                eyebrow=""
                title="El futuro de la medicina"
                align="left"
                showDivider={true}
                description={
                  <p>
                    Los clientes requieren contratar un servicio de medicina laboral y/o salud
                    empresarial para el cuidado de sus recursos. Es esencial garantizar la
                    rapidez y la seguridad en la prestación del servicio, asegurando su eficiencia.
                  </p>
                }
              />
            </div>
            <div className="overflow-hidden shadow-lg">
              <Image
                src="/santacruz/trabajamos-1.png"
                alt="El futuro de la medicina"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-[1fr_1.1fr] items-center">
            <div className="overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/santacruz/trabajamos-2.png"
                alt="Lo que otros no pueden ofrecerte"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <SectionHeading
                eyebrow=""
                title="Lo que otros no pueden ofrecerte"
                align="left"
                showDivider={true}
                dividerDotPosition="left"
                description={
                  <p>
                    Las empresas tradicionales no ofrecen atención personalizada requerida.
                    La solución de problemas puede llevar tiempo y se realiza mediante call
                    centers impersonales. Carecen de la experiencia requerida, no hay una
                    persona referente, tienen espacios limitados, y la disponibilidad de
                    estacionamiento es complicada en zonas céntricas. Además, pueden no
                    contar con todos los recursos y equipamientos en el lugar.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* El Futuro de la Medicina Laboral Section */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[0.08em] text-black uppercase">
            EL FUTURO
          </h2>
          <p className="text-lg sm:text-xl tracking-[0.15em] text-brand uppercase mt-2">
            DE LA MEDICINA LABORAL
          </p>
          <p className="mt-8 text-neutral-700 leading-relaxed">
            Hemos decidido desarrollar una <strong>plataforma propia de Medicina Laboral con asistencia al cliente</strong>, con el objetivo de aumentar la eficiencia del servicio en comparación con las soluciones disponibles en el mercado.
          </p>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Esta plataforma cuenta con estos <strong>pilares fundamentales para ofrecer el mejor servicio médico laboral:</strong>
          </p>
        </div>
      </section>

      {/* Feature Card 01 */}
      <section className="bg-white py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-[0.08em] text-black uppercase">
                TECNOLOGÍA APLICADA
              </h3>
              <div className="flex items-center gap-2 max-w-sm">
                <div className="flex-1 h-[2px] bg-brand" />
                <div className="w-3 h-3 rounded-full bg-brand" />
              </div>
              <p className="text-brand uppercase tracking-wider text-sm font-medium pt-2">
                IA QUE REVOLUCIONA TU GESTIÓN.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Implementamos nuestro nuevo software de Medicina con App e inteligencia artificial para el ingreso de pacientes. Esto permite gestionar necesidades de forma más práctica y eficiente al momento de cargar turnos y dar ingreso a empleados para la realización de exámenes de rutina.
              </p>
            </div>
            {/* Right - Image with Number */}
            <div className="relative">
              <span className="absolute -top-4 left-0 text-[5rem] sm:text-[7rem] md:text-[10rem] font-light text-brand leading-none z-20 md:-top-8 md:-left-8">
                01
              </span>
              <Image
                src="/santacruz/futuro-1.png"
                alt="Tecnología aplicada"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto relative z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Card 02 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Image with Number */}
            <div className="relative">
              <span className="absolute -top-8 right-0 text-[10rem] font-light text-brand leading-none z-20">
                02
              </span>
              <Image
                src="/santacruz/futuro-2.png"
                alt="Ahorro económico"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto relative z-0"
              />
            </div>
            {/* Right - Text Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-[0.08em] text-black uppercase">
                AHORRO ECONÓMICO
              </h3>
              <div className="flex items-center gap-2 max-w-sm">
                <div className="w-3 h-3 rounded-full bg-brand" />
                <div className="flex-1 h-[2px] bg-brand" />
              </div>
              <p className="text-brand uppercase tracking-wider text-sm font-medium pt-2">
                OPTIMIZACIÓN REAL DE RECURSOS.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                El cliente prescinde de recursos administrativos, optimiza el tiempo de gestión, ya que él mismo puede encargarse de su propio ingreso, de obtener exámenes digitalizados y recibir avisos automáticos con los resultados 24/7. Esto reduce costos operativos significativamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Card 03 */}
      <section className="bg-neutral-100 py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-[0.08em] text-black uppercase">
                PRACTICIDAD
              </h3>
              <div className="flex items-center gap-2 max-w-sm">
                <div className="flex-1 h-[2px] bg-brand" />
                <div className="w-3 h-3 rounded-full bg-brand" />
              </div>
              <p className="text-brand uppercase tracking-wider text-sm font-medium pt-2">
                CONTACTO DIRECTO, SIN INTERMEDIARIOS.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Te ponemos en contacto al momento de la recepción con la persona que tiene que atender tu petición, reduciendo el tiempo de espera. No más call centers frustrantes.
              </p>
            </div>
            {/* Right - Image with Number */}
            <div className="relative">
              <span className="absolute -top-4 left-0 text-[5rem] sm:text-[7rem] md:text-[10rem] font-light text-brand leading-none z-20 md:-top-8 md:-left-8">
                03
              </span>
              <Image
                src="/santacruz/futuro-3.png"
                alt="Practicidad"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto relative z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Card 04 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Image with Number */}
            <div className="relative">
              <span className="absolute -top-8 right-0 text-[10rem] font-light text-brand leading-none z-20">
                04
              </span>
              <Image
                src="/santacruz/futuro-4.png"
                alt="Eficiencia"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto relative z-0"
              />
            </div>
            {/* Right - Text Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-[0.08em] text-black uppercase">
                EFICIENCIA
              </h3>
              <div className="flex items-center gap-2 max-w-sm">
                <div className="w-3 h-3 rounded-full bg-brand" />
                <div className="flex-1 h-[2px] bg-brand" />
              </div>
              <p className="text-brand uppercase tracking-wider text-sm font-medium pt-2">
                RUTA OPTIMIZADA EN EXÁMENES DE SALUD.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                El paciente tendrá definida su hoja de ruta con los estudios que debe realizar dentro del circuito del estudio o examen. Sin pérdidas de tiempo, sin confusiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Card 05 */}
      <section className="bg-neutral-100 py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-[0.08em] text-black uppercase">
                COMUNICACIÓN
              </h3>
              <div className="flex items-center gap-2 max-w-sm">
                <div className="flex-1 h-[2px] bg-brand" />
                <div className="w-3 h-3 rounded-full bg-brand" />
              </div>
              <p className="text-brand uppercase tracking-wider text-sm font-medium pt-2">
                NOTIFICACIÓN AUTOMÁTICA EN 24 HORAS.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Notificamos a la empresa/cliente la finalización de los estudios del paciente y entrega el examen en el término de 24 horas. Transparencia total en tiempo real.
              </p>
            </div>
            {/* Right - Image with Number */}
            <div className="relative">
              <span className="absolute -top-4 left-0 text-[5rem] sm:text-[7rem] md:text-[10rem] font-light text-brand leading-none z-20 md:-top-8 md:-left-8">
                05
              </span>
              <Image
                src="/santacruz/futuro-5.png"
                alt="Comunicación"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto relative z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empieza a Aplicar CTA Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[0.08em] text-black uppercase">
            EMPIEZA A APLICAR
          </h2>
          <p className="text-lg sm:text-xl tracking-[0.15em] text-brand uppercase mt-2">
            LA MEDICINA LABORAL FLEXIBLE
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-0 sm:px-8">
          <div className="relative overflow-hidden min-h-[400px] sm:min-h-0">
            <Image
              src="/santacruz/empieza-1.png"
              alt="Empieza a aplicar la medicina laboral flexible"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover sm:h-auto sm:object-contain absolute inset-0 sm:relative"
            />
            <div
              className="relative sm:absolute inset-y-0 left-0 w-full md:w-1/2 flex flex-col justify-center px-6 py-8 sm:px-12 lg:px-16 min-h-[400px] sm:min-h-0"
              style={{
                background: "linear-gradient(to bottom, rgba(77, 77, 77, 0.6), rgba(223, 86, 0, 0.6))",
              }}
            >
              <p className="text-white text-base sm:text-lg leading-relaxed max-w-md">
                Agenda una llamada o visita con un asesor de{" "}
                <strong>Santa Cruz O&G</strong> para elaborar una solución adaptada a tu empresa.
              </p>
              <Link
                href="/contacto"
                className="mt-6 sm:mt-8 inline-block w-fit border border-white text-white px-6 sm:px-8 py-3 uppercase tracking-[0.15em] text-sm hover:bg-white hover:text-black transition-colors"
              >
                SOLICITAR ASESORAMIENTO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Images Section */}
      <section className="bg-neutral-100 py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Images Grid */}
            {/* Mobile: Simple 2-column grid, Desktop: Overlapping layout */}
            <div className="grid grid-cols-2 gap-4 md:relative md:h-[600px] md:block">
              {/* Image 1 */}
              <div className="shadow-lg md:absolute md:top-0 md:-left-16 md:w-[65%] md:z-10">
                <Image
                  src="/santacruz/grid-1.png"
                  alt="Instalaciones Santa Cruz - Administración"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              {/* Image 2 */}
              <div className="shadow-lg md:absolute md:top-[20%] md:right-0 md:w-[70%] md:z-20">
                <Image
                  src="/santacruz/grid-2.png"
                  alt="Instalaciones Santa Cruz - Rayos X"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              {/* Image 3 */}
              <div className="shadow-lg col-span-2 md:absolute md:bottom-0 md:-left-16 md:w-[60%] md:z-10">
                <Image
                  src="/santacruz/grid-3.png"
                  alt="Instalaciones Santa Cruz - Recepción"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="space-y-6">
              {/* Calendar Icon */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-brand"
              >
                <rect
                  x="8"
                  y="14"
                  width="48"
                  height="42"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <line x1="20" y1="8" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="44" y1="8" x2="44" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="28" x2="56" y2="28" stroke="currentColor" strokeWidth="2" />
              </svg>

              <p className="text-neutral-700 leading-relaxed">
                <span className="text-brand font-semibold uppercase tracking-wide">
                  AL CONTRATAR NUESTROS SERVICIOS DE MEDICINA LABORAL,
                </span>{" "}
                tendrás exclusivamente para tu empresa y empleados, a disposición nuestras clínicas un día específico, para que puedan realizar sus exámenes sin tener inconvenientes en su movilización.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
