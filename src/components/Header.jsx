import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
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

  // Initial GSAP animation for desktop nav
  useGSAP(() => {
    gsap.from(desktopLinksRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  // Animate mobile menu open/close
  useEffect(() => {
    if (menuOpen) {
      const tl = gsap.timeline();
      tl.fromTo(
        mobileMenuRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
      ).fromTo(
        mobileLinksRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
        "-=1.2"
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
    <header className="w-full relative shadow-md bg-white mb-6">
      <nav ref={menuRef}>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-end gap-10 font-bold px-10 py-5 items-center">
          <li className="mr-auto text-3xl font-bold cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            <NavLink to="/">Shoaib's Portfolio</NavLink>
          </li>
          {navItems.map(({ label, path }, idx) => (
            <li key={label} ref={(el) => (desktopLinksRef.current[idx] = el)}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-bold" : navItemClass
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center px-6 py-5">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            <NavLink to="/">Shoaib's Portfolio</NavLink>
          </span>
          <button
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="text-purple-500 focus:outline-none"
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

        {/* Mobile Menu */}
        <ul
          ref={mobileMenuRef}
          className={`w-full absolute top-full left-0 rounded-b-3xl bg-gradient-to-b from-white to-emerald-50 flex justify-center items-center flex-col gap-1 font-bold py-4 text-pink-600 shadow-2xl md:hidden origin-top ${
            !menuOpen ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          {navItems.map(({ label, path }, idx) => (
            <li
              key={label}
              ref={(el) => (mobileLinksRef.current[idx] = el)}
              className="py-2 px-4 rounded-lg hover:bg-purple-50"
            >
              <NavLink to={path} className="block" onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;