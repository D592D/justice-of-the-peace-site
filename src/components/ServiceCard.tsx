// /frontend/components/ServiceCard.tsx
import type { ComponentType, SVGProps } from "react";

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const ServiceCard = ({ icon: Icon, title, description }: Props) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    {Icon && <Icon className="h-10 w-10 text-amber-400 mb-4" />}
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm">{description}</p>
  </div>
);

export default ServiceCard;
