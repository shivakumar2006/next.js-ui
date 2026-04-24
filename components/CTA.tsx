"use client";

import { FiArrowRight } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

export default function CTA() {
    return (
        <section className="w-full py-20 flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white">

            <div className="w-full max-w-6xl px-6 flex flex-col items-center text-center gap-6">

                {/* Icons Row */}
                <div className="flex gap-6 text-3xl">
                    <div className="bg-white/20 p-4 rounded-full">
                        <MdSupportAgent />
                    </div>
                    <div className="bg-white/20 p-4 rounded-full">
                        <FaUsers />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                    Want to Learn More About Our{" "}
                    <span className="text-white/90">Training Solutions?</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                    Get Expert Guidance for Your Team’s Success!
                </p>

                {/* Button */}
                <button className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
                    Contact Us <FiArrowRight />
                </button>
            </div>
        </section>
    );
}