"use client";
import { useState } from "react";
import LeadForm from "@/components/LeafForm";

import { FcApproval } from "react-icons/fc";
import Image from "next/image";

export default function Hero() {

    const [showForm, setShowForm] = useState(false);

    const lines = [
        "Tailored Solutions",
        "Industry Insights",
        "Expert Guidance",
    ]

    return (
        <div className="w-full pt-40 pb-20 flex items-center justify-center">
            <div className="w-320 shadow-2xl rounded-2xl bg-blue-50 flex flex-row justify-center items-center">
                <div className="w-1/2 py-10 flex flex-col gap-10 pl-10">
                    <h1 className="text-6xl font-bold text-left">Next Gen <span className="text-blue-600">Expertise</span> <br /> For Your <span className="text-blue-600">Enterprise</span></h1>
                    <p className="text-xl font-bold">Cultivate high-performance <br /> teams through expert learning.</p>
                    <div className="flex flex-row gap-5">
                        {lines.map((line, index) => (

                            <div key={index} className="flex flex-row font-bold">
                                <FcApproval className="text-2xl" />
                                {line}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="w-50 h-15 text-xl bg-blue-500 text-white rounded-xl"
                    >
                        Enquire Now
                    </button>
                    {showForm && (
                        <div className="mt-5">
                            <LeadForm />
                        </div>
                    )}
                </div>
                <div className="w-1/2 flex items-center align-bottom">
                    <Image
                        src="/corporate-big-hero-v4.webp"
                        alt="hero"
                        width={600}
                        height={700}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}