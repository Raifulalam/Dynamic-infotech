import React, { useState } from 'react'
import Modal from '../../components/Modal'
export default function BookDemo() {
    const[isModalOpen,setisModalOpen]=useState(true);
  
    const handleCose=()=>{
        setisModalOpen(false);
    }
 
  
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
        <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl p-4 sm:p-8 md:p-10 mt-10">
      
             <button onClick={handleCose} className="absolute top-1 right-1 sm:top-4 sm:right-4 bg-black text-white rounded-full p-1 hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <form  className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstname"  className="block text-sm font-bold text-gray-700 mb-1">First Name 
<span className='text-red-500'>*</span>
                        </label>
                        <input type="text" id="firstname" name="firstname" required placeholder='First Name' className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 bg-gray-50" />
                       
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block text-sm font-bold text-gray-700 mb-1">Last Name 

                        </label>
                        <input type="text" id="lastname" name="lastname" placeholder="Last Name" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 bg-gray-50" />
                    </div>
                    <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1">Company
                         <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="company" name="company" required placeholder='Company Name' className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 bg-gray-50" />
                </div>
                <div>   
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone Number
                    <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" required placeholder='Phone Number' className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 bg-gray-50" />
                </div>
                <div>
                    <label htmlFor="city" className="block text-sm font-bold text-gray-700 mb-1">City 
                         <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="city" name="city" placeholder='City' className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 bg-gray-50" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email 
                         <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="email" name="email" required placeholder='Email Address' className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 bg-gray-50" />
                </div>
                </div>
                
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label  className="block text-sm font-bold text-gray-700 mb-3">
                     Which solution are you interested in? 
                     <span className='text-red-500'>*</span>
                    </label>
                     <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" value="DMS" name="solutions" className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400" />
                            <span className="text-sm text-gray-700">DMS</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" value="DMS" name="solutions" className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400" />
                            <span className="text-sm text-gray-700">Sales Force Automation</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" value="DMS" name="solutions" className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400" />
                            <span className="text-sm text-gray-700">Retailer Application</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" value="DMS" name="solutions" className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400" />
                            <span className="text-sm text-gray-700">Rural DMS</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" value="DMS" name="solutions" className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400" />
                            <span className="text-sm text-gray-700">Assets Management</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" value="DMS" name="solutions" className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400" />
                            <span className="text-sm text-gray-700">AI & Data Analytics</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message 
                        <span className="text-red-500">{" "}*</span>
                    </label>
                    <textarea id="message" name="message" required placeholder='Your Message' rows="4" className="w-full h-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 bg-gray-50 resize-none">

                    </textarea>
              
                    
                   </div>
               </div>
               <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <div className="bg-gray-50 border border-gray-300 rounded p-2 flex items-center justify-between w-64 h-16 shadow-sm">
                   <div className="flex items-center space-x-3">
                    <input type="checkbox" className="w-6 h-6 border-gray-400 rounded focus:ring-0" />
                    <span className="text-sm text-gray-700">I'm not a robot</span>
                   </div>
                   <div className="flex flex-col items-center">
                        <img src="./logo_48.png" alt="captcha" className="w-8 opacity-70" />
                    <span className="text-[10px] text-gray-500">reCaptcha</span>
                    <span className="text-[8px] text-gray-400 leading-none">Privacy - Term</span>


                   </div>
                </div>
                <button type="submit" className="bg-[#F46A6A] hover:bg-[#e35b5b] text-white font-bold py-3 px-8 rounded-md transition-colors shadow-sm">
                    Submit Form
                </button>
               </div>
            </form>
        </div>
    </div>
  )
}
