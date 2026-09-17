import React, { useState } from 'react'

export default function Industries() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const industries = [
    { id: 1, title: "FMCG IMPORT & DISTRIBUTION", description: "Our FMCG import and distribution division operates through Vishwanath Trade House, Vishwanath Overseas, and DV Trading. We specialize in sourcing high-quality international brands and ensuring efficient nationwide distribution, strong partner relationships, and reliable supply chain management to serve diverse consumer markets.", linkText: "KNOW MORE" },
    { id: 2, title: "MANUFACTURING", description: "Gopal Soap Industries Pvt. Ltd., established in 1997, represents our manufacturing strength. The division focuses on producing quality household and personal care products using modern production practices, strict quality control, and continuous innovation to meet evolving consumer needs and market standards.", linkText: "KNOW MORE" },
    { id: 3, title: "SUPERMARKETS / RETAIL", description: "Our supermarket and retail division has built a strong and growing presence in the FMCG segment. We focus on offering a wide range of trusted brands, efficient store operations, customer-centric service, and strategic expansion to meet everyday consumer demands across multiple locations.", linkText: "KNOW MORE" },
    { id: 4, title: "EDUCATION", description: "We strongly believe that quality education is the foundation of long-term societal development. Our education division is committed to providing accessible, value-driven learning environments, modern teaching methodologies, and academic excellence to nurture skilled, responsible, and future-ready individuals.", linkText: "KNOW MORE" },
    { id: 5, title: "HOSPITALITY", description: "DV Hospitality is developing its first hospitality property featuring 81 keys, designed to deliver comfort, quality service, and memorable guest experiences. This division focuses on combining modern amenities with warm hospitality standards, strategic locations, and sustainable operations for long-term growth.", linkText: "KNOW MORE" },
    { id: 6, title: "MEDIA", description: "The group has an active presence in the media sector, focusing on content creation, advertising, and communication platforms. This division supports brand visibility, strategic storytelling, and audience engagement while adapting to evolving digital and traditional media landscapes.", linkText: "KNOW MORE" },
    { id: 7, title: "AGRICULTURE", description: "Our agriculture division includes Trishakti Organic Fertilizer, located in Janakpur, dedicated to sustainable farming solutions. We focus on producing eco-friendly fertilizers that enhance soil health, improve crop yields, and support farmers with reliable, environmentally responsible agricultural inputs.", linkText: "KNOW MORE" },
    { id: 8, title: "FOOD & BEVERAGE", description: "Starting with its first restaurant in 2010, Masala Cottage Restaurant marked our entry into the food and beverage sector. This division emphasizes quality ingredients, authentic flavors, customer satisfaction, and consistent dining experiences while expanding across new concepts and locations.", linkText: "KNOW MORE" },
  ];

  return (
    <section className="w-full bg-(--primary--bg) px-3 py-10 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="pb-8 text-center text-3xl font-bold text-gray-800 sm:pb-12">
          Industries We Serve
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {industries.map((industry) => {
            const isCardExpanded = expandedId === industry.id;

            return (
              <div
                key={industry.id} 
                className="bg-[#F3F4F6] p-3 pb-4 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  <h3 className="mb-4 font-bold uppercase tracking-wide text-gray-800">
                    {industry.title}
                  </h3>

                 
                  <p className={`mb-6 leading-relaxed text-gray-600 ${isCardExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
                    {industry.description}
                  </p>
                </div>

                <button
                  className="relative flex items-center gap-2 text-[var(--main-color)] font-bold text-xs tracking-widest"
                  onClick={() => toggleExpand(industry.id)}
                >
                  <span className="absolute -left-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-blue-400/30 transition-all duration-300 group-hover:scale-125"></span>
                  <span className="relative z-10">
                    {isCardExpanded ? 'SHOW LESS ^' : 'KNOW MORE →'}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
