"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Modal from "./Modal";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  


  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setSolutionOpen(false);
    setResourcesOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-15 sm:h-20">

          
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="relative h-12">
              <img
                src="./sitelogo.webp"
                alt="Software Company Logo"
                className="h-12 w-auto"
              />

              <h5 className="absolute bottom-0 text-black left-8 font-semibold text-[10px] ">
                Software{" "}
                <span className="text-(--main-color)">
                  Company
                </span>
              </h5>
            </div>
          </div>

       
          <div className="hidden md:flex gap-x-10 lg:pe-50">

            <nav className="flex items-center gap-2 lg:gap-8">

          
              <a
                href="#"
                className="text-gray-800 hover:text-[var(--primary)] font-bold text-sm transition-colors"
              >
                Home
              </a>

              <div className="relative group">

                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-800 hover:text-[var(--primary)] font-bold text-sm focus:outline-none"
                >
                  Solutions
                  <ChevronDown size={14} />
                </button>

                <div className="absolute top-10 left-0 w-75 bg-white shadow-xl rounded-b-lg   opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 opacity-100  ">
                  <div className="py-2 ">
                    <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Distributor Operations Platform
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Sales Team Automation
                  </a>

                  <a
                    href="./"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Retail Partner App
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Rural Distribution Management
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Assets Tracking System
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    AI & Data Intelligence
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Brand Engagement Suite
                  </a>
                  </div>
                  

                </div>
              </div>

         
              <div className="relative group">

                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-800 hover:text-[var(--primary)] font-bold text-sm focus:outline-none"
                >
                  Resources
                  <ChevronDown size={14} />
                </button>

                <div className="absolute top-10 left-0 w-65 bg-white shadow-xl rounded-b-lg  border-[var(--primary)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0  ">

                 <div className="py-2">
                   <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Blog
                  </a>


                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Customer Stories
                  </a>
                 </div>

                </div>
              </div>

            
              <div className="relative group">

                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-800 hover:text-[var(--primary)] font-bold text-sm focus:outline-none"
                >
                  About Us
                  <ChevronDown size={14} />
                </button>

                <div className="absolute top-10 left-0 w-65 bg-white shadow-xl rounded-b-lg  border-[var(--primary)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 opacity-100">
                  <div className="py-2"></div>
                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    About SalesFusion
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                   Career
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                     Contact Us
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                   Partners
                  </a>

                </div>
              </div>

            </nav>

         
            <div className="flex items-center gap-3">
    
              <button
                onClick={()=>setIsModalOpen(true)}
                className="bg-[#DDEFFF] hover:bg-[#cbe6fe] text-(--main-color)  font-bold text-sm px-2 lg:px-6 py-3 rounded-sm transition-colors uppercase tracking-wide"
              >
                BOOK A DEMO
              </button>

              <button
                className="bg-[#DDEFFF] hover:bg-[#cbe6fe] text-(--main-color)  font-bold text-sm px-2 lg:px-6 py-3 rounded-sm transition-colors  tracking-wide"
              >
                Log in
              </button>

            </div>
          </div>


          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-gray-800 hover:bg-gray-100 rounded-md transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

     

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-3">

        
            <a
              href="#"
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50"
            >
              Home
            </a>

         
            <div>

              <button
                type="button"
                onClick={() => setSolutionOpen(!solutionOpen)}
                className="flex items-center justify-between px-4 py-3 text-gray-700 font-medium hover:bg-gray-50"
              >
                <span>Solutions</span>

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-200 ${
                    solutionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {solutionOpen && (
                <div className="">

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Distributor Operations Platform
                  </a>

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Sales Team Automation
                  </a>

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Retail Partner App
                  </a>

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Rural Distribution Management
                  </a>

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Assets Tracking System
                  </a>

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    AI & Data Intelligence
                  </a>

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Brand Engagement Suite
                  </a>

                </div>
              )}
            </div>

          
            <div>

              <button
                type="button"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className=" flex items-center justify-between px-4 py-3 text-gray-700 font-medium hover:bg-gray-50"
              >
                <span>Resources</span>

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resourcesOpen && (
                <div className="">

                   <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Blog
                  </a>


                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors group/item"
                  >
                    Customer Stories
                  </a>

                </div>
              )}
            </div>

        
            <div>

              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className=" flex items-center justify-between px-4 py-3 text-gray-700 font-medium hover:bg-gray-50"
              >
                <span>About Us</span>

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div className="">

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Our Company
                  </a>

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Our Team
                  </a>

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Careers
                  </a>

                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    Contact Us
                  </a>

                </div>
              )}
            </div>

         
            <div className="flex  sm:flex-row gap-3 px-4 pt-4 pb-3">

              <button
                onClick={closeMobileMenu}
                className="flex-1 bg-(--background-color) hover:bg-(--hover) text-(--main-color) font-bold text-sm px-6 py-3 rounded-sm transition-colors uppercase tracking-wide"
              >
                BOOK A DEMO
              </button>

              <button
                onClick={closeMobileMenu}
                className="flex-1 bg-(--background-color) hover:bg-(--hover) text-(--main-color) font-bold text-sm px-6 py-3 rounded-sm transition-colors uppercase tracking-wide"
              >
                Log in
              </button>

            </div>

          </div>
        )}

      </div>
       <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
    
  );
}