import React from 'react'


export default function Login() {

  return (
   <div className="min-h-dvh flex items-center justify-center relative p-4">
        <div className="absolute inset-0 overflow-hidden ">
            <img src="./sitelogo.webp" alt="logo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 background"></div>
        </div>
        <div className="relative w-full max-w-md " style={{ opacity: 1, transform: 'none' }}>
            <div className="flex flex-col items-center mb-6 sm:mb-8"  style={{ opacity: 1, transform: 'none' }}>
                <div className="bg-white rounded-full shadow-lg mb-4 w-24 h-24 flex items-center justify-center">
                    <img src="./sitelogo.webp" alt="logo" className="h-16 w-16 object-contain"/>
                </div>
                <h1 className="font-bold text-white mb-2">Welcome Back</h1>
                <p className=" text-gray-400">Sign in to your Sales Dashboard</p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-7 xl:p-8 ">
                <form  className="space-y-2 lg:space-y-3 xl:space-y-4 text-gray-800">
                    <div>
                        <label htmlFor="code" className="block sm:text-sm font-medium text-gray-700 mb-2">Code</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                               <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-mail h-3 w-3 sm:h-5 sm:w-5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="16 18 22 12 16 6"></polyline>
  <polyline points="8 6 2 12 8 18"></polyline>
</svg>
                                
                            </div>
                            <input id="code" placeholder="Enter Company Code" type="text" required className="block w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3 text-class border border-gray-200 rounded-lg focus:ring-2 focus:ring-dv-blue focus:border-transparent transition-all outline-none" />
                        </div>
                       
                    </div>
                    <div>
                        <label htmlFor="username" className="block sm:text-sm font-medium text-gray-700 mb-2">Username</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                               <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-mail h-3 w-3 sm:h-5 sm:w-5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
</svg>

                                
                            </div>
                            <input id="username" placeholder="name@company.com" type="text" required className="block w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3 text-class border border-gray-200 rounded-lg focus:ring-2 focus:ring-dv-blue focus:border-transparent transition-all outline-none" />
                        </div>
                       
                    </div>
                    <div>
                        <label htmlFor="password" className="block sm:text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                               <svg xmlns="http://w3.org" className="lucide lucide-mail h-3 w-3 sm:h-5 sm:w-5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  <circle cx="12" cy="16" r="1" />
</svg>

                               
                            </div>
                            <input id="password" placeholder="Enter password" type="text" required className="block w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3 text-class border border-gray-200 rounded-lg focus:ring-2 focus:ring-dv-blue focus:border-transparent transition-all outline-none" />
                            <button className=""></button>
                        </div>
                       
                    </div>
                    <button className="w-full text-white bg-[#0284c7] py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        <span>Sign In</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12"></line>
  <polyline points="12 5 19 12 12 19"></polyline>
</svg>

                    </button>
                </form>
            </div>
        </div>
   </div>
  )
}
