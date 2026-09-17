import React from 'react'
import { MapPin,Users ,Phone,Mail} from 'lucide-react'

export default function Footer() {
  return (

<>
<div className="bg-black">
  <div className="container mx-auto px-2.5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 sm:py-8">
      <div>
        <p className="text-white text-sm sm:text-2xl ">
          Looking for a First-Class 
          <span className="font-bold">
            Distribution 
          </span>
          Solution?
        </p>
      </div>
      <div className="text-center">
        <a href="#" className="bg-red-500 text-white py-1 px-2 sm:p-2 rounded-sm sm:rounded-md text-sm sm:text-base ">
          CONTACT US
        </a>
      </div>
    </div>
  </div>
</div>
 <footer className="bg-[#f3f4f7] pt-5 sm:pt-8 md:pt-16 pb-8  ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-8 lg:gap-4">
      <div>
        <div className="mb-2 sm:mb-4 ">
          <a href="#">
            <img src="./sitelogo.webp" alt="sitelogo" className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex gap-3 ">
          <a href="#" className="w-8 h-8 rounded-full bg-gray-400/30 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
          <Users/>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-gray-400/30 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
          <Users/>
          </a>
        </div>
      </div>
      <div className="space-y-4 text-sm">
        <div className="flex items-start space-x-3">
            <MapPin/>
          <p className="leading-relaxed text-gray-500">
          
            2nd Floor,Baneshwar,
             <br />
            B & S Complex, 
            <br />
             Sankhamul - Balkumari Rd, 
             <br />
             Kathmandu 44600
          </p>
        </div>
        <div className="space-y-1.5 sm:space-y-3">
          <a href="#" className="flex items-center space-x-3 text-gray-500 ">
            <Phone height={24} width={24}/>
            <span>+977 9805600000</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-500 ">
            <Mail/>
            <span>sales@salesfusion.online</span>
          </a>
        </div>
       
      </div>
       <div>
          <h3 className="text-gray-900 font-bold mb-2 sm:mb-4">
            Solutions
          </h3>
          <ul className="space-y-1.5 sm:space-y-3 text-sm text-gray-500">
            <li>
               <a
                  href="#"
                 
                >
                Distributor Operations Platform
                </a>
            </li>

             <li>   <a
                  href="#"
                 
                >
                 Sales Team Automation
                </a></li>

               <li> <a
                  href="#"
                 
                >
                  Retail Partner App
                </a></li>

               <li> <a
                  href="#"
                 
                >
                  Rural Distribution Management
                </a></li>
              <li>  <a
                  href="#"
                 
                >
                   Assets Tracking System
                </a>
                </li>
                
              <li> <a
                  href="#"
                 
                >
                  AI & Data Intelligence
                </a></li>
                <li>
                  <a
                  href="#"
                 
                >
                 Brand Engagement Suite
                </a>
                </li>
          </ul>
        </div>
       <div>
          <h3 className="text-gray-900 font-bold mb-2 sm:mb-4">
         Resources
          </h3>
          <ul className="space-y-1.5 sm:space-y-3 text-sm text-gray-500">
            <li>
               <a
                  href="#"
                 
                >Blogs
                </a>
            </li>

             <li>   <a
                  href="#"
                 
                >
                Cistomer Stories
                </a></li>

               <li> <a
                  href="#"
                 
                >
                  Request a Demo
                </a></li>

               
          </ul>
        </div>
       <div>
          <h3 className="text-gray-900 font-bold mb-2 sm:mb-4">
            Company
          </h3>
          <ul className="space-y-1.5 sm:space-y-3 text-sm text-gray-500">
            <li>
               <a
                  href="#"
                 
                >
                About Us
                </a>
            </li>

             <li>   <a
                  href="#"
                 
                >
                 Career
                </a></li>

               <li> <a
                  href="#"
                 
                >
                  Privacy Policy
                </a></li>

              
          </ul>
        </div>
    </div>
  </div>
</footer>

</>
  )
}
