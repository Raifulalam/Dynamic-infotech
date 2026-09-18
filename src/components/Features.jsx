
import React, { useState } from "react";
import "./FeatureTabs.css";

const features = [
  {
    id: "attendance",
    title: "Geo-Fenced Attendance",
    description:
      "Eliminate time-theft and ensure field accountability with location-intelligent check-ins.",
    points: [
      "Ensures promoters are physically present at assigned stores via GPS.",
      "Prevents location fraud with real-time geo-validation and selfie-capture.",
      "Digitized punch-in/out tracking perfectly aligned with promoter rosters.",
      "Automatic flagging of irregular check-ins for immediate manager review.",
    ],
    image:"./attendance.webp"
  },
  {
    id: "sales",
    title: "Streamlined Order Processing",
    description:
      "Empower your promoters to capture sales and stock data instantly from the retail floor.",
    points: [
      "Real-time order booking with instant sync to the central distribution hub.",
      "Stock-out alerts and automated replenishment suggestions.",
      "Support for offline mode to ensure no data is lost in low-connectivity areas.",
      "Visual sales dashboards for promoters to track daily targets vs achievement.",
    ],
    image:"./orderdetail.webp"
  },
  {
    id: "store",
    title: "Centralized Asset Control",
    description:
      "Manage your entire retail footprint and product catalog from a single source of truth.",
    points: [
      "Dynamic SKU management with category-specific attributes and pricing.",
      "Store profiling including location, type, and historical performance data",
      "Easy bulk updates for new product launches or seasonal campaign changes.",
      "Hierarchical view of retail chains from regional to individual store level.",
    ],
    image:"centralized2.webp"
  },
  {
    id: "mapping",
    title: "Intelligent Resource Allocation",
    description:
      "Optimize your workforce by mapping the right people to the right locations.",
    points: [
      "Visual route planning to minimize travel time and maximize store coverage.",
      "Flexible mapping to handle permanent or floating promoter assignments.",
      "Real-time performance-to-location analysis to identify high-growth zones.",
      "Audit logs of all promoter-store associations for historical tracking.",
    ],
    image:"intelligent.webp"
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState("sales");

  const activeFeature = features.find(
    (feature) => feature.id === activeTab
  );

  return (
    <section className="feature-section">
    <div className="relative max-w-5xl mx-auto mb-4 sm:mb-16 px-6 sm:px-12">
         <div className="flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  ">


        {features.map((feature) => (
          <button
            key={feature.id}
            className={`text-[12px] sm:text-base flex items-center gap-2 px-2 sm:px-6 py-2 sm:py-4 rounded-xl font-bold transition-all whitespace-nowrap border-b-2 text-slate-400 border-transparent hover:text-slate-600 hover:bg-slate-50 `}
            onClick={() => setActiveTab(feature.id)}
          >
            <span>
              {feature.id === "sales"
                ? "Sales Order Management"
                : feature.id === "store"
                ? "Store & Product Master"
                : feature.id === "mapping"
                ? "Promoter-Store Mapping"
                : "Leave & Attendance"}
            </span>
          </button>
        ))}

     
      </div>
    </div>
  
      <div className="max-w-6xl mx-auto bg-slate-50 rounded-2xl sm:rounded-[3rem] px-3 py-4 sm:p-8 md:p-16 border border-slate-100" key={activeFeature.id}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
             <div className="relative order-1 lg:order-2">
                <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full scale-110"></div>
                <div className="relative rounded-3xl   shadow-lg sm:shadow-2xl overflow-hidden">
                      <div className="bg-white p-4">
                   <img src={activeFeature.image} alt={activeFeature.title} className="w-full h-auto rounded-xl" />
                    </div>
                </div>
             
                </div>
                     <div className="order-2 lg:order-1">
                         <h1 className="text-3xl font-bold text-slate-900 mb-4">{activeFeature.title}</h1>

          <p className=" text-slate-600 mb-4 sm:mb-8">
            {activeFeature.description}
          </p>

          <ul className="space-y-2 sm:space-y-4">
            {activeFeature.points.map((point, index) => (
              <li className="flex items-start gap-1.5 sm:gap-3 group" key={index}>
                <div className="mt-1 bg-blue-100 p-1 rounded-full text-[#44a5db] group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
               
                </div>
               <span className="text-slate-700 leading-relaxed font-medium">{point}</span>
              </li>
            ))}
          </ul>
                </div>
         
        </div>
      
        </div>
       
   
    </section>
  );
}