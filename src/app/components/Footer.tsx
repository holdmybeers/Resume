// components/Footer.tsx

import Image from "next/image";
import logoSrc from "public/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center text-gray-600">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <p>© {new Date().getFullYear()} ResumeHQ. <br />All rights reserved by LokerHQ.</p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 lg:flex-col mr-lg-5 lg:items-end mt-4 lg:mt-0">
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
            <Image src={logoSrc} alt="ResumeHQ Logo" className="h-8 w-full" priority />
          </div>
        </div>
      </div>
      <div>

      </div>
    </footer>
  );
};

export default Footer;
