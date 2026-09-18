import React ,{useState}from 'react'
import FeatureTabs from '../components/Features'
import DistributionNetwork from '../components/DistributionNetwork'
import Modal from '../components/Modal'
import WhyChooseUs from '../components/Whychooseus'
import FAQ from '../components/FAQ'
export default function DistributionOperationPlatform() {
       const[isOpen,setIsOpen]=useState(false);

  return (
   <div>
       <section className="bg-white w-full py-5 sm:10 md:py-20 px-3 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto sm:px-4 ">
          <div className="  grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="relative w-full h-50 lg:h-full">
              <img src="./shivit.webp" alt="shivit" className="object-cover object-center" />
            </div>
             <div className="order-1 lg:order-2 space-y-4 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#44a5db] text-xs font-bold uppercase tracking-wider">
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#44a5db] opacity-75'>

                </span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#44a5db]"></span>
              </span>
              Next-Gen Distribution
            </div>
            <h1 className="font-black text-primary leading-[1.1] text-3xl">
              Revolutionize Your 
              <br />
              <span className="text-[#44a5db]">
                Operations
              </span>
            </h1>
            <h2 className=" text-slate-700 leading-snug max-w-lg text-xl font-bold">
              With Advanced Distribution 
              <br />
              Management System Software

            </h2>
            <p className=" text-slate-500 leading-relaxed max-w-xl">
              Unlock your business potential with our cutting-edge software. Streamline order processing, optimise inventory management, and leverage data analytics for informed decision-making. Achieve excellence and accelerate your growth trajectory today.
            </p>
            <div className="pt-4 mb-4">
              <button className=" bg-[#0e4b81] text-white px-5 py-2 rounded-md font-bold active:scale-95 "
              onClick={()=>setIsOpen(true)}
              >
                Book A Demo
              </button>
            </div>

          </div> 
          </div>
          
        </div>
      </section>

      <section className="bg-(--primary--bg) relative w-full py-5 sm:10 md:py-20 px-3 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto sm:px-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            
             <div className="space-y-4 sm:space-y-8">
           
            <h1 className="font-black text-primary leading-[1.1] text-3xl font-bold mb-8">
            Experience <span className="text-(--main-color)">Unmatched Efficiency</span> With salesfusion DMS
            </h1>
           <div className="flex py-8 mb-8 items-center space-x-4 border-l-4 border-[#44a5db] pl-2 sm:pl-6 sm:py-2">
              <div className="bg-slate-900 text-white p-2 rounded-lg font-black text-[10px] sm:text-xl italic tracking-tighter">
                TRADE
                <span className="text-[#44a5db]">PULSE</span>
              </div>
              <p className="text-slate-500 font-medium italic">
                The Pulse of your Distribution
              </p>
           </div>
            <p className=" text-slate-500 leading-relaxed max-w-xl">
              Transform your distribution operations with <strong>TrasePulse</strong> . Designed to boost sales growth and enhance visibility across your supply chain, providing brands with accurate secondary sales data and stockist-level inventory control.
            </p>
            

          </div> 
          <div className="relative w-full h-50 lg:h-full">
              <img src="./tradepulse.webp" alt="tradepulse" className="object-cover object-center" />
            </div>
          </div>
          
        </div>
      </section>

      <section className="bg-white relative w-full py-5 sm:10 md:py-20 px-3 sm:px-6 lg:px-8 ">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-16">
            <h1 className="text-[#44a5db] mb-4 sm:mb-6 font-bold text-3xl">
           Core Features of BrandBuddy
            </h1>
             <p className="text-slate-600  mb-4 sm:mb-6">
               BrandBuddy is more than just an in-shop promoter app. It’s a full-featured operational engine built for fast, secure, and reliable execution of in-store campaigns. We close the visibility loop between planning and performance.
              </p>
                <div className="inline-block px-3 sm:px-6 py-2 bg-slate-50 rounded-full border border-slate-100 text-slate-600 font-medium">
                What makes BrandBuddy a must-have tool for retail management?
              </div>
           
          
            </div>
         <div className="">  
          <FeatureTabs/>
          </div> 
         
         
          
        </div>
      </section>
      <DistributionNetwork/>
      <WhyChooseUs/>
      <FAQ/>
        <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
   </div>
  )
}



