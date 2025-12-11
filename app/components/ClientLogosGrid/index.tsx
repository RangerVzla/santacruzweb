"use client";

import { LogoGrid } from "../LogoGrid";
import { clientLogos } from "@/app/data/clientLogos";

export function ClientLogosGrid() {
  return <LogoGrid logos={clientLogos} />;
}
