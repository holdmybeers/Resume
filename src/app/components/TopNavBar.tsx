"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/hq.png";
import { cx } from "lib/cx";
import { useEffect, useState } from "react";


export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // const handleOutsideClick = (event: MouseEvent) => {
  //   if (isMenuOpen && !event.target.closest(".mobile-dropdown")) {
  //     setMenuOpen(false);
  //   }
  // };
  
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isMenuOpen && !target.closest(".mobile-dropdown")) {
      setMenuOpen(false);
    }
  };
  


  const handleScroll = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listeners when the component unmounts or when dropdown is closed
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <span className="sr-only">ResumeHQ</span>
          <Image src={logoSrc} alt="ResumeHQ Logo" className="h-8 w-full" priority />
        </Link>
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden cursor-pointer">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <div className="line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <nav aria-label="Site Nav Bar" className={cx("hidden lg:flex items-center gap-2 text-sm font-medium")}>
          {/* Your menu items here */}
          {[
            ["/resume-builder", "Buat Resume"],
            ["/resume-screener", "Screening Resume"],
            ["https://www.lokerhq.com/jobs/", "Cari Loker"], 
          ].map(([href, text]) => (
            <Link key={text} className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4" href={href}>
              {text}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        aria-label="Site Nav Bar"
        className={cx(
          "flex lg:hidden flex-col gap-2 text-sm font-medium border-solid border-2 border-indigo-600 absolute mx-2 -top-12 z-50 right-0 mt-16 bg-white rounded-md shadow-lg p-2",
          isMenuOpen ? "flex mobile-dropdown" : "hidden"
        )}
      >
        {/* Your menu items here */}
        {[
          ["/resume-builder", "Buat Resume"],
          ["/resume-screener", "Screening Resume"],
          ["https://www.lokerhq.com/jobs/", "Cari Loker"], 
        ].map(([href, text]) => (
          <Link
            key={text}
            className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100"
            href={href}
          >
            {text}
          </Link>
        ))}
      </nav>
    </header>
  );
};