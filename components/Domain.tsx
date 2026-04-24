"use client";

import { LuLightbulb, LuBrain } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiGlobe, CiMoneyBill } from "react-icons/ci";

export default function Domain() {
    const domains = [
        { icon: <LuLightbulb />, desc: "Product & Innovation Hub" },
        { icon: <LuBrain />, desc: "Gen-AI Mastery" },
        { icon: <FaUserTie />, desc: "Leadership Elevation" },
        { icon: <GiNetworkBars />, desc: "Tech & Data Insights" },
        { icon: <IoSettingsOutline />, desc: "Operations Excellence" },
        { icon: <CiGlobe />, desc: "Digital Enterprise" },
        { icon: <CiMoneyBill />, desc: "Fintech Innovation Lab" },
    ];

    return (
        <section
            id="domain"
            className="w-full py-20 flex flex-col items-center bg-gray-50 gap-6"
        >
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center">
                Our <span className="text-blue-600">Domain Expertise</span>
            </h1>

            <p className="text-gray-600 text-center text-lg md:text-xl">
                Specialized Programs Designed to{" "}
                <span className="text-blue-600 font-semibold">
                    Fuel Innovation
                </span>
            </p>

            {/* Flex-wrap Cards */}
            <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6 px-6 mt-10">
                {domains.map((item, index) => (
                    <div
                        key={index}
                        className="w-[260px] bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                    >
                        {/* Icon */}
                        <div className="text-3xl text-blue-600 bg-blue-100 p-4 rounded-full">
                            {item.icon}
                        </div>

                        {/* Text */}
                        <p className="text-gray-700 font-bold text-sm">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}