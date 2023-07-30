// components/Footer.tsx

import Image from "next/image";
import logoSrc from "public/hq.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center text-gray-600">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        {/* Left Column */}
        <div className="lg:w-1/3">
          <p>© {new Date().getFullYear()} ResumeHQ. <br />All rights reserved by LokerHQ.</p>
          <hr />
          <div className="mt-3">
            Follow us on:
            <div className="pt-2">
              <span className="px-1">
                <a href="https://lokerhq.com/company/lokerhq">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline hover:fill-blue-900" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                    <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                    <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                    <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                    <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                    <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                    <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                    <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                    <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                  </svg>                  
                </a>
              </span>
              <span className="px-1">
                <a href="https://facebook.com/lokerhq">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline hover:fill-blue-500  stroke-blue-800" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                </a>                
              </span>
              <span className="px-1">
                <a href="https://instagram.com/lokerhq">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline hover:fill-pink-300 stroke-violet-800" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M16.5 7.5l0 .01"></path>
                  </svg>
                </a>
              </span>
              <span className="px-1">
                <a href="https://twitter.com/lokerhq">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline hover:fill-blue-300 stroke-blue-500" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                  </svg>                  
                </a>
              </span>
              <span className="px-1">
                <a href="https://linkedin.com/company/lokerhq">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline hover:fill-blue-500 stroke-blue-900" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>                  
                </a>
              </span>
              <span className="px-1">
                <a href="https://github.com/lokerhq">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline hover:fill-gray-700 stroke-grey-800" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 lg:flex-col lg:items-end mt-4 lg:mt-0">
          {/* Email Subscription */}
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="rounded-md py-2 px-3 bg-white border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="button"
              className="btn-primary ml-4 px-4 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Subscribe
            </button>
          </div>
          
          {/* Logo */}
          <div>
            <a href="/">
              <Image
                src={logoSrc}
                alt="ResumeHQ Logo"
                className="h-8 w-auto sm:h-10 md:h-12 lg:h-10"
                priority
              />              
            </a>
          </div>
        </div>
      </div>
      <div>

      </div>
    </footer>
  );
};

export default Footer;
