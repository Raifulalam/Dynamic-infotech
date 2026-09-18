import React from "react";
import {
  BarChart3,
  SlidersHorizontal,
  Package,
  RotateCcw,
  Store,
  Zap,
  Wallet,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Real-Time Sales Visibility",
    description:
      "Gain instant insights into secondary sales from distributors to retailers, enabling precise data-driven forecasting.",
    icon: BarChart3,
    color: "text-sky-500",
  },
  {
    title: "Strategic Pricing Control",
    description:
      "Configure and enforce uniform pricing rules and promotional schemes instantly across your entire distribution network.",
    icon: SlidersHorizontal,
    color: "text-indigo-500",
  },
  {
    title: "Smart Inventory Management",
    description:
      "Monitor distributor stock levels with precision to eliminate stockouts and reduce costly overstocking situations.",
    icon: Package,
    color: "text-violet-500",
  },
  {
    title: "Automated Returns Tracking",
    description:
      "Streamline damage logging and returns by SKU or invoice, ensuring complete accountability and reducing manual errors.",
    icon: RotateCcw,
    color: "text-red-500",
  },
  {
    title: "360° Outlet Insights",
    description:
      "Access detailed transaction histories for every outlet to drive hyper-targeted promotions and maximize field force impact.",
    icon: Store,
    color: "text-emerald-500",
  },
  {
    title: "Predictive Replenishment",
    description:
      "Automate stock replenishment based on real-time demand data for a seamless, uninterrupted supply chain.",
    icon: Zap,
    color: "text-orange-500",
  },
  {
    title: "Maximized Distributor ROI",
    description:
      "Optimize delivery routes and stock rotation to boost distributor profitability and strengthen partnership loyalty.",
    icon: Wallet,
    color: "text-cyan-500",
  },
  {
    title: "Data-Driven Growth",
    description:
      "Harness advanced analytics to act as a catalyst for growth across General Trade channels and all key KPIs.",
    icon: TrendingUp,
    color: "text-red-500",
  },
  {
    title: "Frictionless Compliance",
    description:
      "Built-in GST-compliant invoicing, e-way billing, and automated tax reporting to keep your operations worry-free.",
    icon: ShieldCheck,
    color: "text-emerald-500",
  },
];

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div className="group relative bg-white px-4 pb-8 pt-2  sm:p-8 rounded-2xl shadow-sm border overflow-hidden border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 " >
    
      <div className="flex gap-x-4 mb-2">
        <div className=" bg-blue-50 group-hover:scale-110 transition-transform duration-300"></div>
        <h2 className="font-bold">
          {feature.title}
        </h2>

        
      </div>
      <p className="text-slate-600 leading-relaxed">
          {feature.description}
        </p>

      <div className="bg-blue-50 absolute -bottom-15 sm:-bottom-8 -right-10 sm:-right-8 w-25 h-25 bg-black rounded-full "></div>
      <div className="absolute bottom-2 sm:bottom-5 right-2 sm:right-5"
      >
        <Icon
          size={21}
          strokeWidth={1.8}
          className={`relative -left-[5px] -top-[5px] ${feature.color}`}
        />
      </div>
    </div>
  );
};

const DistributionNetwork = () => {
  return (
    <section className="py-5 sm:10 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-5 sm:mb-16">

          <h1  className="  text-primary mb-6 tracking-tight text-3xl font-bold">
            Empower Your{" "}
            <span className="text-[#36a5df]">
              Distribution Network
            </span>
          </h1>

          <p className="max-w-3xl mx-auto  text-slate-600">
            The Heera DMS provides a comprehensive suite of tools designed to
            optimize your entire supply chain.
            <br className="hidden sm:block" />
            From secondary sales visibility to automated compliance, we help
            FMCG brands scale with confidence.
          </p>

         
          <div className="mx-auto mt-[14px] h-1 w-[69px] rounded-full bg-[#3ba7df]" />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DistributionNetwork;