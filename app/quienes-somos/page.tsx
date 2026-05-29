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
          src="/santacruz/quienes-somos-1.png"
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
              MÁS DE 15 AÑOS A TU LADO
            </h1>
          </div>
        </div>
      </section>

      {/* Vimeo Video Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1159012688?autoplay=1&background=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Video Vimeo"
            />
          </div>
        </div>
      </section>

      {/* Team Photo & Origin */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="flex items-start gap-4">
            <div className="h-2 w-2 rounded-full bg-[color:var(--brand-orange)] flex-shrink-0" />
            <p className="text-sm sm:text-base uppercase tracking-[0.12em] leading-relaxed text-justify">
              <span className="text-neutral-800 text-justify">
                Santa Cruz O&G es una empresa nacida en Neuquén, Patagonia
                Argentina, con más de 15 años de trayectoria.
              </span>
              <span className="text-[color:var(--brand-orange)] text-justify">
                Se ha posicionado en el mercado brindando soluciones flexibles y
                eficientes, que responden a las necesidades de cada cliente.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Stairs Section */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/santacruz/quienes-somos-3b.png"
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
                <p className="text-base leading-relaxed text-neutral-800 text-justify">
                  A lo largo de nuestra experiencia, entendimos que la
                  constancia, la innovación y la personalización son los pilares
                  de un crecimiento sostenido. Queremos transformar el modo de
                  cuidar al paciente, brindando una atención humana y técnica de
                  excelencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-[color:var(--brand-orange)]" />
                <div className="h-2 w-2 rounded-full bg-[color:var(--brand-orange)] flex-shrink-0" />
              </div>
              <p className="text-base leading-relaxed text-neutral-800 text-justify">
                En 2015 marcamos un hito al ser pioneros con la inauguración de
                la primera clínica privada en Añelo, reafirmando nuestro
                compromiso con el desarrollo de Añelo y Vaca Muerta.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/santacruz/quienes-somos-4a.png"
                alt="Doctor con paciente"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/santacruz/quienes-somos-5a.png"
                alt="Imagen quienes somos 5"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
            <div className="space-y-6 md:pt-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[color:var(--brand-orange)] flex-shrink-0" />
                <div className="h-px flex-1 bg-[color:var(--brand-orange)]" />
              </div>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-neutral-800 text-justify">
                  Hoy nuestro compromiso es liderar el mercado a través de la
                  tecnología y una estructura sólida para brindar el servicio
                  más eficiente de la Cuenca Neuquina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vimeo Video */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-10">
          <SectionHeading title="Nuestras" highlight="Oficinas" />
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1196620389?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Oficinas_Santa_Cruz"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />
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
      {/* <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 space-y-10">
          <SectionHeading
            title="Nuestros mejores clientes"
            highlight="nos avalan"
            description={
              <p>
                Aliados en distintos países confían en nuestra capacidad de
                respuesta y flexibilidad operacional.
              </p>
            }
          />
          <ClientLogosGrid />
        </div>
      </section> */}
    </main>
  );
}
