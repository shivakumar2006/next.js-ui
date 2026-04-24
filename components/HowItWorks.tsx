"use client";

import { GoGraph } from "react-icons/go";
import { BsDisplay } from "react-icons/bs";
import { LuMonitorPlay } from "react-icons/lu";

export default function HowItWorks() {
    const results = [
        {
            icon: <GoGraph />,
            title: "Skill Gap Analysis",
            desc: "Assess team skill gaps and developmental needs.",
        },
        {
            icon: <BsDisplay />,
            title: "Customized Training Plan",
            desc: "Create a tailored roadmap addressing organizational goals.",
        },
        {
            icon: <LuMonitorPlay />,
            title: "Flexible Program Delivery",
            desc: "Deliver adaptable programs aligned with industry and organizational needs.",
        },
    ];

    return (
        <section
            id="howitworks"
            className="w-full py-20 flex flex-col items-center bg-white gap-6"
        >
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center">
                How We Deliver{" "}
                <span className="text-blue-600">Results That Matter?</span>
            </h1>

            <p className="text-gray-600 text-center text-lg md:text-xl max-w-2xl">
                A Structured Three-Step Approach to{" "}
                <span className="text-blue-600 font-semibold">
                    Skill Development
                </span>
            </p>

            {/* Steps */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 mt-12 px-6">

                {results.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center text-center max-w-xs"
                    >
                        {/* Circle Number */}
                        <div className="absolute -top-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                            {index + 1}
                        </div>

                        {/* Card */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center gap-4">

                            {/* Icon */}
                            <div className="text-3xl text-blue-600 bg-blue-100 p-4 rounded-full">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-black">
                                {item.title}
                            </h3>

                            {/* Desc */}
                            <p className="text-gray-600 text-sm">
                                {item.desc}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}