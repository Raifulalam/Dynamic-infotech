
import { useState, useEffect } from "react";

import RelatedBlogs from "../components/RelatedBlogs";
import Industries from "../components/Industries";
import {
  
  TrendingUp,
  Users,


  
} from "lucide-react";


export default function Home() {
  const images = [
    "./trusted1.webp",
    "./trusted2.webp",
    "./trusted3.webp",
  ];
const salesFusionImg = [
  {
    id: 1,
    src: "./endtoend.png",
    title: "End-to-End Sales Analytics",
    description: "Comprehensive visual overview mapping the complete sales lifecycle from lead generation to final conversion.",
   
  },
  {
    id: 2,
    src: "./supported.png",
    title: "Dedicated Support",
    description: "Compatibility chart displaying all third-party CRM tools, databases, and APIs compatible with the Fusion system.",
   
  },
  {
    id: 3,
    src: "./scalable.png",
    title: "Scalable Architecture Design",
    description: "Technical diagram illustrating how the sales data pipeline handles high-volume traffic and enterprise growth.",
  
  }
];

  const [current, setCurrent] = useState(0);
 
  const [currentIndex, setCurrentIndex] = useState(0);




 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % salesFusionImg.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? salesFusionImg.length - 1 : prevIndex - 1
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const features = [
    {
      title: "Distributor Operations Platform",
      description:
        "Achieve Sales growth & secondary sales visibility through Heera’s Distribution Management Solutions.",
      icon: "./distributor.webp"
    },
    {
      title: "Sales Team Automation",
      description:
        "Single platform that captures market demand, manages merchandising, journey planning & tracking for salesforce in real time",
      icon: "./team.webp",
    },
    {
      title: "Retail Partner App",
      description:
        "Discover new RTM (Route-to-market) and directly communicate with your retailers",
      icon: "./partner.webp"
    },
    {
      title: "Rural Distribution Management",
      description:
        "Expand your rural sales channels to match the pace of rural economic growth",
      icon:"./rural.webp",
    },
    {
      title: "Asset Tracking System",
      description:
        "Tracking & Monitoring Asset Deployments at Retail outlets and dealers",
      icon: "./asset.webp",
    },
    {
      title: "AI & Data Intelligence",
      description:
        "Cutting edge AI to generate actionable insights from your distribution data",
      icon: "./ai.webp",
    },
  ];




  return (
    <div >
    
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b3c66] via-[#0e4a7b] to-[#0b3c66] py-5 sm:py-10  items-center">
        <div className="relative mx-auto  container px-3 sm:px-6">

        
          <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2">
            <div className="relative mx-8 sm:mx-0">
              <div className="rounded-lg sm:rounded-2xl border border-white/10 bg-white/10 p-1 sm:p-3 backdrop-blur-xl shadow-2xl">
              <video
              src="./bannervideo2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-md sm:rounded-xl"
            />
           
              </div>
             <div className="absolute -bottom-6 left-6 rounded-lg sm:rounded-xl bg-white px-3 sm:px-5 py-1.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary shadow-lg">
              <h1>Real-time FMCG Analytics</h1>
             
            </div>
         
            </div>
            
             <div className="text-white">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide text-bluish">SalesFusion Platform</span>
<h1 className="mt-4 sm:mt-6 font-bold leading-tight text-3xl" >Features Enhancing
  <br />
  <span className="text-bluish">FMCG Distribution Management</span>
</h1>

           
              <p className="mt-3 sm:mt-6 max-w-xl  text-blue-100">
                Gain complete visibility and control over inventory, sales,
                payments, promotions, and distributor performance — all from
                one intelligent platform.
              </p>
            <div className="relative mt-5 sm:mt-10 px-15 sm:px-0 "> 
                 <img
                src="./hero6.webp"
                alt="Hero"
                className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10  sm:px-20"

              />
              <div className="absolute inset-0 -z-10 rounded-2xl bg-cyan-400/20 blur-2xl"></div>
              </div>
             
          
          </div>

          </div>

       
          

        </div>
      </section>

  
      <section className="bg-white w-full py-5 sm:10 md:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto sm:px-4 ">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 lg:gap-20 items-center">

            <div className="flex flex-col space-y-3 sm:space-y-8">

              <div className="space-y-2 sm:space-y-4"> 
                <h1 className="font-bold text-primary text-3xl">Trusted by great brands</h1>
              <div className="w-20 h-1.5  bg-(--main-color) rounded-full"></div>
              <p className="  text-gray-600 leading-relaxed max-w-xl">
              HSPL’s esteemed customers derive huge business benefits as a
              result of the automation of after-sales value-chain using our
              state-of-the-art technology solutions. We are proud to maintain
              long, trusted associations with global leaders.
            </p>
            
            </div>
                <div className="flex sm:grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-gray-100 pt-3 ms:pt-8">
                  <div className="flex flex-col space-y-1">
                        
                    <div className="flex items-center space-x-2 mb-1">
                      <Users className="text-(--main-color)"/>
                      
                    </div>
           <span className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
                        18K
                      </span>
                      <span className="text-[12px] sm:text-sm font-medium text-gray-500 uppercase tracking-wide">DMS USERS</span>
              </div>
                  <div className="flex flex-col space-y-1">
                        
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="text-(--main-color)"/>
                      
                    </div>
           <span className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
                        15 Years
                      </span>
                      <span className="text-[12px] sm:text-sm font-medium text-gray-500 uppercase tracking-wide">TRUSTED PARTNERSHIP</span>

              

              
              </div>

              
                </div>
 
            </div>
        <div>
  <section className="w-full ">
              <div className="">
                <div className="swiper-wrapper">
                <div className="carousel-img">
              <img
                src={images[current]}
                alt={`Trusted ${current + 1}`}
              />
            </div>
                </div>
           
          </div>
           </section>
        </div>
            </div>
           
          </div>

         
         

       
      </section>

   
      <section className="bg-[#f4f8fc]  w-full py-5 sm:10 md:py-20 px-3 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto sm:px-4 ">

       
            <h1 className=" text-(--main-color) font-semibold mb-5 sm:mb-14 text-center text-3xl  ">
              How SalesFusion Can Helps You?
            </h1>

           
       

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-14">

            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center text-2xl mb-5">
                
                   <img src={feature.icon} alt={feature.icon} width={36} height={36}/>
                 
                </div>

                <h3 className="text-(--main-color) font-semibold  mb-2">
                  {feature.title}
                </h3>

                <p className=" text-gray-600 leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
      <section className="relative w-full bg-(--secondary--bg) py-5 sm:py-10 md:py-20">
        <div className="container  sm:max-w-[80%] mx-auto px-4">
           <h1 className="text-center font-semibold text-white mb-4 sm:mb-12 text-3xl">Why do businesses choose SalesFusion over others?</h1>
          <div className="relative sm:px-12 bg-white md:bg-transparent rounded-tl-[30px] rounded-br-[30px] sm:rounded-tl-[50px] sm:rounded-br-[50px]">
            
    
      <div className="carousel-window">
      
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {salesFusionImg.map((slide) => (
            <div className="carousel-item bg-white rounded-tl-4xl px-4 py-5 sm:p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center " key={slide.id}>
           
                <div >
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{slide.title}</h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-6 md:line-clamp-none">{slide.description}</p>
                </div>
             <div className="hidden  md:flex justify-center">
                    <img src={slide.src} alt={slide.src} className="max-h-104 w-auto" />
             </div>
             
            </div>
          ))}
        </div>
     

  
      <button className="nav-btn prev" onClick={prevSlide}>&#10094;</button>
      <button className="nav-btn next" onClick={nextSlide}>&#10095;</button>
    </div>
  

          </div>
        </div>
      </section>
    <Industries/>
<section className=" bg-(--secondary--bg)  w-full py-5 sm:10 md:py-20 px-3 sm:px-6 lg:px-8 ">
  <div className="max-w-7xl mx-auto sm:px-4 ">
    <div className="  grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14 items-center">
      <div className="relative w-full max-w-md mx-auto">
        <div className="overflow-hidden rounded-tl-[40px] rounded-br-[80px]">
          <img src="./casestudy3.webp" alt="" width={500} height={600} />
        </div>
       
      </div>
       <div className="text-white">
          <p className="text-sm uppercase opacity-80 mb-3">CASE STUDY</p>
          <h1 className="font-semibold leading-snug mb-10 text-3xl">DMS Implementation <br /> for Rural Nepal</h1>
          <ul className="space-y-6 mb-10">
            <div className="mb-2">
              <ul className="list-disc list-inside  ps-2 ms:ps-5">
                <li>
                  Sales Fusion offers a dedicated and customized solution called SubERP, designed specifically to address the automation needs of rural sub-stockists.
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <ul className="list-disc list-inside  ps-2 ms:ps-5">
                <li>
                  The SubERP implementation has enabled greater visibility and streamlined management of distribution chains deep within the rural areas of Nepal. This ensures smoother operations, better tracking, and improved efficiency across the network.
                  </li>
              </ul>
            </div>
            <div className="mb-2">
              <ul className="list-disc list-inside  ps-2 ms:ps-5">
                <li>
                 Sales Fusion provides end-to-end ownership of the entire implementation process – from selecting the right solution, configuring it for specific needs, to providing hands-on support to ensure tangible results.
                </li>
              </ul>
            </div>
          </ul>
<button className="inline-flex items-center gap-2 bg-white text-[#3aa0df] text-sm font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
  ↓ DOWNLOAD NOW
</button>
        </div>
    </div>
  </div>
</section>
<RelatedBlogs/>


    </div>
  );
}