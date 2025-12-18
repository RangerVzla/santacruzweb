"use client";

import Image from "next/image";
import { ClientLogosGrid } from "./components/ClientLogosGrid";
import { CTAButton } from "./components/CTAButton";
import { ImageCarousel } from "./components/ImageCarousel";
import { ResponsibilityCard } from "./components/ResponsibilityCard";
import { SectionHeading } from "./components/SectionHeading";
import { StatCard } from "./components/StatCard";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { testimonials } from "./data/testimonials";

const stats = [
  { value: "+20", label: "años de experiencia", image: "/santacruz/rectangle-212.jpg" },
  { value: "+15", label: "países con cobertura", image: "/santacruz/rectangle-217.jpg" },
  { value: "+500", label: "empresas atendidas", image: "/santacruz/rectangle-214.jpg" },
  { value: "12h", label: "tiempo promedio de respuesta", image: "/santacruz/rectangle-215.jpg" },
  { value: "99.8%", label: "satisfacción del cliente", image: "/santacruz/rectangle-216.jpg" },
];

const benefitCards = [
  {
    number: "01",
    title: "Adapta tu servicio de cobertura médica laboral y asistencial con herramientas de última generación e IA.",
    copy: "Adapta tu servicio de cobertura médica laboral y asistencial con herramientas de última generación e IA.",
    image: "/santacruz/rectangle-221.jpg",
  },
  {
    number: "02",
    title: "Reduce tiempos de espera agilizando los procesos de toma de información e ingreso de los pacientes.",
    copy: "Reduce tiempos de espera agilizando los procesos de toma de información e ingreso de los pacientes.",
    image: "/santacruz/rectangle-222.jpg",
  },
  {
    number: "03",
    title: "Ahorra tiempo y dinero, mediante la centralización de los servicios brindados por la ART y las necesidades específicas de tu empresa.",
    copy: "Ahorra tiempo y dinero, mediante la centralización de los servicios brindados por la ART y las necesidades específicas de tu empresa.",
    image: "/santacruz/rectangle-229.jpg",
  },
];

const featureCards = [
  {
    title: "Protocolos ágiles",
    copy: "Simplificamos la burocracia con circuitos claros, trazables y sin fricción para tus equipos.",
    image: "/santacruz/rectangle-223.jpg",
    dark: true,
  },
  {
    title: "Consultas remotas y presenciales",
    copy: "Coordinamos atenciones en sitio y telemedicina con profesionales especialistas.",
    image: "/santacruz/rectangle-226.jpg",
    dark: false,
  },
  {
    title: "Gestión y soporte 24/7",
    copy: "Respuesta rápida y acompañamiento continuo para incidentes y necesidades médicas.",
    image: "/santacruz/rectangle-227.jpg",
    dark: false,
  },
];

const carouselImages = [
  { src: "/santacruz/rectangle-243.jpg", alt: "Consulta médica" },
  { src: "/santacruz/rectangle-226.jpg", alt: "Atención médica" },
  { src: "/santacruz/rectangle-227.jpg", alt: "Equipo médico" },
  { src: "/santacruz/rectangle-223.jpg", alt: "Servicios médicos" },
  { src: "/santacruz/rectangle-221.jpg", alt: "Profesionales de salud" },
];

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/santacruz/rectangle-207.jpg"
          alt="Plataforma petrolera"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-24 sm:px-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-[0.08em] text-white uppercase">
              Implementa el servicio de medicina laboral más eficiente para tu empresa
            </h1>
            <p className="text-sm sm:text-base uppercase tracking-[0.18em] text-white/90">
              gracias a alianzas estratégicas a nivel mundial
            </p>
            <div className="pt-4">
              <CTAButton label="CÓMO LO HACEMOS" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
          <p className="text-center text-base leading-relaxed text-neutral-800 max-w-5xl mx-auto">
            Nos diferencia de otros servicios masificados, en <strong>Santa Cruz O&G</strong> desarrollamos un modelo único,
            rápido y eficiente, para que puedas agilizar la gestión en tu empresa de la medicina laboral que más se adopte a tus necesidades.
          </p>
        </div>
      </section>

      {/* Problema / Solución */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-8">
          <div className="grid gap-6 md:gap-8 md:grid-cols-[1.1fr_1fr] items-center">
            <div className="space-y-4">
              <SectionHeading
                eyebrow=""
                title="El problema"
                align="left"
                showDivider={true}
                description={
                  <p>
                    El auténtico enemigo en materia de salud es el modelo que usan las empresas que prestan servicios
                    de medicina laboral: burocracia, falta de acceso a tecnologías, gestión ineficiente y carencia de recursos capacitados.
                  </p>
                }
              />
            </div>
            <div className="overflow-hidden shadow-lg">
              <Image
                src="/santacruz/el-problema.png"
                alt="El problema"
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
                src="/santacruz/la-solucion.png"
                alt="La solución"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <SectionHeading
                eyebrow=""
                title="La solución"
                align="left"
                showDivider={true}
                dividerDotPosition="left"
                description={
                  <p>
                    Hoy los empresarios han visto las carencias del sistema convencional.
                    No quieren pasar por procesos rígidos que frenan su operación.
                    Necesitan soluciones que se adapten a sus tiempos y necesidades.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-10">
          <SectionHeading
            title="La medicina laboral"
            highlight="que se adapta a ti"
            description=""
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefitCards.map((card) => (
              <div key={card.number} className="flex flex-col">
                {/* Image */}
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="500px"
                  />
                </div>

                {/* Content with vertical divider */}
                <div className="flex pt-4">
                  {/* Vertical divider with dot */}
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-[2px] flex-1 bg-brand" />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand -ml-px mt-1" />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 space-y-3">
                    <div className="text-4xl font-light text-brand">
                      {card.number}
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-700">{card.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <CTAButton label="Saber más" variant="outline" />
          </div>
        </div>
      </section>

      {/* Transformación */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-orange)]">
              Más de 20 años
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[0.08em] text-black">
              Transformando la salud de las empresas
            </h2>
          </div>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* Testimonio + Logos (Unified) */}
      <section className="relative overflow-hidden">
        {/* Dark background section */}
        <div className="relative pt-16 pb-32 sm:pb-40">
          <div className="absolute inset-0">
            <Image
              src="/santacruz/rectangle-234.jpg"
              alt="Clientes"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-8 space-y-8 text-white">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-sm uppercase tracking-[0.18em] text-white/80">
                Nos avalan
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-[0.12em]">
                Nuestros mejores clientes
              </h3>
            </div>
          </div>
        </div>

        {/* Testimonial Card - Positioned to bridge sections */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-8 -mt-16 sm:-mt-20">
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Light background section with logos */}
        <div className="bg-neutral-50 pt-32 sm:pt-36 pb-16">
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
        </div>
      </section>

      {/* Responsabilidad Social */}
      <section>
        {/* White background area - Title and description */}
        <div className="bg-white py-16 px-4 sm:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[0.08em] text-black uppercase">
              Responsabilidad Social
            </h2>
            <p className="text-base leading-relaxed text-black/80">
              <span className="font-semibold">Santa Cruz O&G, reafirma su compromiso de integración tanto con la sociedad como con su entorno</span>,
              a través de la contribución activa y voluntaria al mejoramiento social del país y con total
              apego al cumplimiento de las leyes nacionales. Este compromiso se materializa
              con especial énfasis en las siguientes áreas:
            </p>
          </div>
        </div>

        {/* Photo background area - Cards */}
        <div className="px-4 sm:px-8 pb-16">
          <div className="relative mx-auto max-w-5xl min-h-[500px] sm:min-h-[400px] md:aspect-video md:min-h-0">
            {/* 16:9 Image background */}
            <Image
              src="/santacruz/rectangle-234.jpg"
              alt="Fondo oficina"
              fill
              className="object-cover grayscale rounded-lg"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg" />

            {/* Cards overlay centered on image */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
              <div className="relative w-full">
                {/* Horizontal connecting line with dots between each box */}
                <div className="absolute left-0 right-0 top-[70px] sm:top-[80px] hidden lg:flex items-center px-[70px] sm:px-[80px]">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                  <div className="flex-1 h-[2px] bg-brand" />
                  <div className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                  <div className="flex-1 h-[2px] bg-brand" />
                  <div className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                  <div className="flex-1 h-[2px] bg-brand" />
                  <div className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
                  <div className="flex flex-col items-center relative z-10">
                    <ResponsibilityCard icon="solidarity" />
                    <p className="mt-2 sm:mt-4 text-[9px] sm:text-[10px] md:text-sm uppercase tracking-[0.08em] sm:tracking-[0.12em] text-white text-center font-medium leading-relaxed">
                      Solidaridad social
                    </p>
                  </div>
                  <div className="flex flex-col items-center relative z-10">
                    <ResponsibilityCard icon="community" />
                    <p className="mt-2 sm:mt-4 text-[9px] sm:text-[10px] md:text-sm uppercase tracking-[0.08em] sm:tracking-[0.12em] text-white text-center font-medium leading-relaxed">
                      Iniciativas de apoyo comunal
                    </p>
                  </div>
                  <div className="flex flex-col items-center relative z-10">
                    <ResponsibilityCard icon="ethics" />
                    <p className="mt-2 sm:mt-4 text-[9px] sm:text-[10px] md:text-sm uppercase tracking-[0.08em] sm:tracking-[0.12em] text-white text-center font-medium leading-relaxed">
                      Buenas prácticas de gobierno corporativo: ética y transparencia
                    </p>
                  </div>
                  <div className="flex flex-col items-center relative z-10">
                    <ResponsibilityCard icon="environment" />
                    <p className="mt-2 sm:mt-4 text-[9px] sm:text-[10px] md:text-sm uppercase tracking-[0.08em] sm:tracking-[0.12em] text-white text-center font-medium leading-relaxed">
                      Compromisos de preservación del medio ambiente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
