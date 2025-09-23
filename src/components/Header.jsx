import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import SkillPage from "./SkillPage";
import ProjectPage from "./ProjectPage";
import ServicePage from "./ServicePage";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import Buttons from './childComponents/Buttons'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineFileDownload } from 'react-icons/md'
import { IoArrowForward } from 'react-icons/io5'
import { motion } from "motion/react"
import { PiShootingStarThin } from 'react-icons/pi'

const navItems = [
  { label: "Home", path: "#home" },
  { label: "Skills", path: "#skill" },
  { label: "Projects", path: "#project" },
  { label: "Services", path: "#service" },
  { label: "Contact", path: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const desktopLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);

  const navItemClass =
    "cursor-pointer hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:scale-105 active:scale-95 transition-all duration-300 text-slate-900";

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Desktop nav animation
  useGSAP(() => {
    gsap.from(desktopLinksRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (menuOpen) {
      const tl = gsap.timeline();
      tl.fromTo(
        mobileMenuRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ).fromTo(
        mobileLinksRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out" },
        "-=0.8"
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -200,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <div className="w-full h-auto relative">
      {/* Fixed Header with proper z-index */}
      <header className="w-full h-20 flex items-center fixed top-0 left-0 shadow-md bg-white z-50" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  }}>
        <nav ref={menuRef} className="w-full">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-end gap-10 font-bold px-10 py-5 items-center w-full">
            <li className="mr-auto text-3xl font-bold cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              <NavLink to="/">Shoaib's Portfolio</NavLink>
            </li>
            {navItems.map(({ label, path }, idx) => (
              <li key={label} ref={(el) => (desktopLinksRef.current[idx] = el)}>
                <a 
                  href={path} 
                  className={navItemClass}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(path);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-between items-center px-6 py-5 w-full">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              <NavLink to="/">Shoaib's Portfolio</NavLink>
            </span>
            <button
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="text-purple-500 focus:outline-none z-60"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l20 20M26 6L6 26" />
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10h20M6 16h20M6 22h20" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <ul
            ref={mobileMenuRef}
            className={`w-full absolute top-full left-0 rounded-b-3xl bg-gradient-to-b from-white to-emerald-50 flex flex-col items-center gap-1 font-bold py-4 text-pink-600 shadow-2xl md:hidden origin-top z-40 ${
              !menuOpen ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
            } transition-opacity duration-300`}
          >
            {navItems.map(({ label, path }, idx) => (
              <li
                key={label}
                ref={(el) => (mobileLinksRef.current[idx] = el)}
                className="py-2 px-4 rounded-lg hover:bg-purple-50 w-full text-center"
              >
                <a 
                  href={path} 
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    const target = document.querySelector(path);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="block w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main content with padding to account for fixed header */}
      <div className="pt-20">
        {/* Home Section with ID for navigation */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className='flex flex-col gap-6 items-center text-center mt-10'>
            <div className='flex items-center py-2 mt-4 px-3.5 gap-2.5 rounded-full bg-gradient-to-r from-emerald-300 to-emerald-200 shadow font-medium cursor-pointer hover:scale-105 transition-all duration-300'>
              <PiShootingStarThin size={21} color='orange' />
              <p className='text-sm text-slate-700'>Available for Freelance Projects</p>
            </div>
            
            <div>
              <h1 className='text-6xl sm:text-8xl font-bold py-1 text-slate-900'>Full Stack</h1>
              <h1 className='text-6xl sm:text-8xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300'>Developer</h1>
            </div>

            <div>
              <p className='sm:text-3xl text-2xl px-12 font-light text-slate-950 leading-10'>
                Web Development • Testing Automation • UI/UX Design • Freelancing
              </p>
            </div>

            <div className='px-6 md:px-24 lg:px-48 xl:px-96'>
              <p className='text-xl text-slate-800 leading-8'>
                Crafting exceptional digital experiences through code, design, and comprehensive testing. Available for freelance projects and long-term collaborations.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row justify-center gap-8 mt-8'>
              <div className='flex items-center justify-center text-white hover:text-black hover:border hover:border-pink-600 gap-3 shadow rounded-2xl w-56 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-none transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer'>
                <Buttons name="View My Work" />
                <IoArrowForward />
              </div>

              <div className='flex items-center justify-center gap-3 shadow rounded-2xl w-56 h-12 border bg-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-slate-200 text-pink-500 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer'>
                <MdOutlineFileDownload />
                <Buttons name="Download CV" />
              </div>
            </div>

            <div className='flex justify-center gap-8 mt-6 relative pb-20'>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/20 transition backdrop-blur-2xl flex items-center justify-center border border-gray-200 shadow-lg"
                aria-label="GitHub"
              >
                <FiGithub size={25} className="text-slate-700" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/20 transition flex items-center justify-center border border-gray-200 shadow-lg"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={26} className="text-slate-700" />
              </a>
              <a
                href="mailto:your@email.com"
                className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/20 transition flex items-center justify-center border border-gray-200 shadow-lg"
                aria-label="Email"
              >
                <HiOutlineMail size={28} className="text-slate-700" />
              </a>

              <motion.div
                initial={{ y: 10, opacity: 0.8 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                animate={{ y: -10, opacity: 1 }}
                className='w-10 h-16 border-2 border-purple-600 rounded-full flex items-center justify-center absolute top-12'
              >
                <motion.div
                  initial={{ y: 10, opacity: 0.8 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  animate={{ y: -10, opacity: 1 }}
                  className='w-2.5 h-4 bg-gradient-to-b from-pink-300 to-pink-500 rounded-full'
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Page Sections with IDs for navigation */}
        <section id="skill">
          <SkillPage />
        </section>
        
        <section id="project">
          <ProjectPage />
        </section>
        
        <section id="service">
          <ServicePage />
        </section>
        
        <section id="contact">
          <ContactPage />
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

export default Header;