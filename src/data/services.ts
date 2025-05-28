// src/data/services.ts
import { Signature, User, FileCheck } from "lucide-react";

export interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Signature,
    title: "Witnessing Signatures",
    description:
      "Professional witnessing of legal documents and agreements with official certification to ensure validity and authenticity.",
  },
  {
    icon: User,
    title: "Administering Oaths",
    description:
      "Official administration of oaths for affidavits, statements, and other legal declarations requiring sworn testimony.",
  },
  {
    icon: FileCheck,
    title: "Certifying Documents",
    description:
      "Authentication and certification of important documents to verify their legitimacy and authenticity.",
  },
];
