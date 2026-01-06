import { ReactNode } from "react";

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  align?: "left" | "center";
  description?: ReactNode;
  showDivider?: boolean;
  dividerDotPosition?: "left" | "right";
};
