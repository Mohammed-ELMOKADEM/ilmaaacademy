"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when navigating or resizing to desktop
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <Link href="/" onClick={() => setIsOpen(false)} aria-label="الرئيسية">
            <Image
              src="/logo.png"
              alt="أكاديمية إلماع للتكوين الحديثي"
              className="logo-img"
              width={140}
              height={70}
              priority
            />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation links (Desktop & Mobile Drawer) */}
        <div className={`nav-menu-wrapper ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link href="/#levels" onClick={() => setIsOpen(false)}>
                مستويات التكوين
              </Link>
            </li>
            <li>
              <Link href="/#tracks" onClick={() => setIsOpen(false)}>
                مسارات التكوين
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="nav-contact-btn"
                onClick={() => setIsOpen(false)}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
