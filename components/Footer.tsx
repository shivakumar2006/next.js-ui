"use client";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white pt-16 pb-8 flex flex-col items-center">

            <div className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo + About */}
                <div className="flex flex-col gap-4">
                    {/* Logo Placeholder */}
                    <div className="w-32 h-10 flex items-center justify-center text-sm">
                        {/* Logo */}
                        <Image
                            src="/image.webp"
                            alt="logo"
                            width={100}
                            height={40}
                            className="object-contain"
                        />
                    </div>

                    <p className="text-gray-400 text-sm">
                        Empowering organizations with world-class training programs and industry-focused learning solutions.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-2">
                        <a className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition">
                            <FaFacebookF />
                        </a>
                        <a className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition">
                            <FaLinkedinIn />
                        </a>
                        <a className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition">
                            <FaInstagram />
                        </a>
                        <a className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition">
                            <FaXTwitter />
                        </a>
                        <a className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-lg">Accredian</h3>
                    <p className="text-gray-400 text-sm cursor-pointer hover:text-white">About</p>
                    <p className="text-gray-400 text-sm cursor-pointer hover:text-white">Blog</p>
                    <p className="text-gray-400 text-sm cursor-pointer hover:text-white">Why Accredian</p>
                    <p className="text-gray-400 text-sm cursor-pointer hover:text-white">Contact Us</p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-lg">Contact</h3>
                    <p className="text-gray-400 text-sm">
                        Email: enterprise@accredian.com
                    </p>
                    <p className="text-gray-400 text-sm">
                        Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
                        Gurugram, Haryana
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-lg">Get Started</h3>
                    <p className="text-gray-400 text-sm">
                        Connect with us and transform your team’s learning journey.
                    </p>

                    <button className="bg-blue-600 px-5 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                        Enquire Now
                    </button>
                </div>
            </div>

            {/* Bottom */}
            <div className="w-full max-w-6xl px-6 mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </div>
        </footer>
    );
}