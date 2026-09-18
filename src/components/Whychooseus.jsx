import React, { useState } from "react";
import {
  Award,
  Zap,
  Users,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    title: "15+ Years of Domain Expertise",
    description:
      "Deep-rooted experience in FMCG/CPG automation. We don't just build software; we build solutions that understand ground-level distribution realities.",
    image: " ./photo-1581091226825-a6a2a5aee158.avif",
    icon: Award,
    color: "text-sky-500",
  },
  {
    title: "Proven Enterprise Scalability",
    description:
      "Trusted by thousands of brands to handle massive transaction volumes. Our architecture ensures zero lag even as your regional footprint expands.",
    image: "./whyleading1.jpeg",
    icon: Zap,
    color: "text-orange-500",
  },
  {
    title: "Seamless Enterprise Adoption",
    description:
      "Designed for rapid deployment with minimal disruption. Whether you're a startup or a global giant, our flexible modules adapt to your workflow.",
    image: "./photo-1550751827-4bd374c3f58b.avif",
    icon: Users,
  },
   {
    title: "Proven Enterprise Scalability",
    description:
      "Trusted by thousands of brands to handle massive transaction volumes. Our architecture ensures zero lag even as your regional footprint expands.",
    image: "./photo-1552664730-d307ca884978.avif",
    icon: Zap,
  },
   {
    title: "Proven Enterprise Scalability",
    description:
      "Trusted by thousands of brands to handle massive transaction volumes. Our architecture ensures zero lag even as your regional footprint expands.",
    image: "./photo-1552664730-d307ca884978.avif",
    icon: Zap,
  },
   {
    title: "Proven Enterprise Scalability",
    description:
      "Trusted by thousands of brands to handle massive transaction volumes. Our architecture ensures zero lag even as your regional footprint expands.",
    image: "./photo-1552664730-d307ca884978.avif",
    icon: Zap,
  },
];

const WhyChooseUs = () => {
  const [activeDot, setActiveDot] = useState(0);

 

  return (
    <section className="py-5 sm:py-10 md:py-24 bg-primary">
      <div className="px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-12 gap-6">

          <div className="max-w-2xl">
            <h1 className="text-primary  font-bold  leading-tight text-xl sm:text-3xl md:text-3xl">
              Why leading brands choose{" "}
              <span className="text-[#42a5dc]">
                SalesFusion DMS
              </span>
            </h1>

            <p className="mt-3 text-sm text-[#315078] sm:text-[15px]">
              Driving efficiency and growth through decades of innovation and
              specialized industry focus.
            </p>
          </div>

      
          <div className="hidden shrink-0 items-center gap-2 text-xs font-semibold tracking-[1.5px] text-[#8099b8] md:flex">
            <span>SWIPE TO EXPLORE</span>

            <ChevronRight
              size={17}
              strokeWidth={2}
            />
          </div>
        </div>

       <div className="swiper swiper-initialized swiper-horizontal !pb-5 customer-swiper swiper-backface-hidden">
            <div className="flex gap-4 sm:gap-6 w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
                   {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
            <div className="swiper-slide swiper-slide-active min-w-[320px] scroll-bar-none  "  key={feature.title}>
               <div className="group h-full bg-slate-50 rounded-lg sm:rounded-3xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-xl hover:bg-white">
               
                  <div className="relative h-30 sm:h-56 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-6 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                       <Icon
                      size={21}
                      strokeWidth={2}
                      className={` ${feature.color}`}
                    />
                    </div>
                
                </div>
          
               <div className="p-2 sm:p-8">
                  <h2 className=" font-bold text-primary mb-4 group-hover:text-[var(--primary)] transition-colors">
                    {feature.title}
                  </h2>

                  <p className="text-slate-600 leading-relaxed line-clamp-4 sm:line-clamp-none">
                    {feature.description}
                  </p>
                </div>
              
              
            </div>
            
                  </div>
            
            );
          })}
            </div>
              
        </div>

            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic w-80px">
               <span className={`swiper-pagination-bullet ${activeDot === 0 ? "swiper-pagination-bullet-active" : ""}`} onClick={() => setActiveDot(0)}></span>
               <span className={`swiper-pagination-bullet ${activeDot === 1 ? "swiper-pagination-bullet-active" : ""}`} onClick={() => setActiveDot(1)}></span>
               <span className={`swiper-pagination-bullet ${activeDot === 2 ? "swiper-pagination-bullet-active" : ""}`} onClick={() => setActiveDot(2)}></span>
            </div>
     
  
             
     </div>
    </section>
  );
};

export default WhyChooseUs;