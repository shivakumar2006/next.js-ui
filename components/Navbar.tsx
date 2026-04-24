"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "Stats", id: "stats" },
        { name: "Accredian Edge", id: "accredianedge" },
        { name: "CAT", id: "cat" },
        { name: "How It Works", id: "howitworks" },
        { name: "FAQs", id: "faqs" },
        { name: "Testimonial", id: "testimonial" },
    ];

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Image
                    src="/image.webp"
                    alt="logo"
                    width={100}
                    height={40}
                    className="object-contain"
                />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-bold">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={`#${link.id}`}
                            className="relative text-gray-700 transition-colors duration-200 hover:text-blue-600 group"
                        >
                            {link.name}

                            {/* underline effect */}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Button */}
                <div className="hidden md:block">
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition cursor-pointer">
                        Get Started
                    </button>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-black text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-700 font-medium bg-white">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={`#${link.id}`}
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-600 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#leadform"
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                    >
                        Get Started
                    </a>
                </div>
            )}
        </nav>
    );
}