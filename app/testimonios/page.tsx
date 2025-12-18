"use client";

import Image from "next/image";
import { SectionHeading } from "../components/SectionHeading";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { ClientLogosGrid } from "../components/ClientLogosGrid";
import { SectorCard } from "../components/SectorCard";
import { testimonials } from "../data/testimonials";

const sectores = [
  { icon: "oil" as const, title: "Petróleo y Gas" },
  { icon: "construction" as const, title: "Construcción e Infraestructura" },
  { icon: "industrial" as const, title: "Servicios Industriales" },
  { icon: "international" as const, title: "Servicios Internacionales" },
  { icon: "mining" as const, title: "Servicios Mineros" },
];

export default function Testimonios() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/santacruz/testimonios-hero.png"
          alt="Testimonios"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-24 sm:px-12">
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-[0.08em] text-white uppercase">
              Lo que dicen nuestros clientes
            </h1>
          </div>
        </div>
      </section>

      {/* Sectores Atendidos */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-12 space-y-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] text-black text-center uppercase">
            Sectores Atendidos:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sectores.map((sector) => (
              <SectorCard key={sector.title} icon={sector.icon} title={sector.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 min-h-[80vh]">
        <Image
          src="/santacruz/testimonios.png"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 h-full min-h-[80vh] flex items-center justify-center">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Testimonio + Logos (Unified) */}
      <section className="relative overflow-hidden">
        

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
    </main>
  );
}
