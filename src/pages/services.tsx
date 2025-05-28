// src/pages/services.tsx
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import {
  Signature,
  User,
  FileCheck,
  FileText,
  FileX,
  FileSearch,
  FileMinus,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Signature,
      title: "Witnessing Signatures",
      description:
        "Professional witnessing of legal documents and agreements with official certification.",
    },
    {
      icon: User,
      title: "Administering Oaths",
      description:
        "Administration of oaths for affidavits, statements, and other sworn declarations.",
    },
    {
      icon: FileText,
      title: "Oaths & Affidavits",
      description:
        "Preparation and witnessing of oaths, affidavits, and legal declarations.",
    },
    {
      icon: FileCheck,
      title: "Certifying Documents",
      description:
        "Authentication and certification of important documents for legal validity.",
    },
    {
      icon: FileSearch,
      title: "Declarations",
      description:
        "Assisting clients in drafting and certifying statutory and voluntary declarations.",
    },
    {
      icon: FileX,
      title: "Lost Passport Forms",
      description:
        "Guidance and certification for lost passport applications and related paperwork.",
    },
    {
      icon: FileMinus,
      title: "License (Lost)",
      description:
        "Certification and documentation support for lost driver’s or other licenses.",
    },
    {
      icon: FileText,
      title: "Deed Poll",
      description:
        "Preparation and witnessing of deed poll documents for name changes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />
      <main className="flex-grow max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <ServiceCard
              key={svc.title}
              icon={svc.icon}
              title={svc.title}
              description={svc.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
