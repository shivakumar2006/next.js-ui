"use client";

import Image from "next/image";
import LeadForm from "@/components/LeafForm";

export default function Testimonials() {
    const testimonials = [
        {
            company: "ADP",
            text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
            Image: "/adp.svg",
        },
        {
            company: "Bayer",
            text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
            Image: "/bayer.svg",
        },
    ];

    return (
        <section
            id="testimonial"
            className="w-full py-20 flex flex-col items-center bg-gray-50 gap-6"
        >
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center">
                Testimonials from{" "}
                <span className="text-blue-600">Our Partners</span>
            </h1>

            <p className="text-gray-600 text-center text-lg md:text-xl">
                What Our Clients Are Saying
            </p>

            {/* Cards */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 px-6 mt-10">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition"
                    >
                        {/* Company + Image */}
                        <div className="flex items-center gap-4">

                            {/* Image placeholder */}
                            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                                <Image
                                    src={item.Image}
                                    alt="company"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-black">
                                {item.company}
                            </h3>
                        </div>

                        {/* Quote */}
                        <p className="text-gray-600 text-sm leading-relaxed italic">
                            "{item.text}"
                        </p>
                    </div>
                ))}
            </div>

            <div id="leadform" className="mt-10 flex justify-center">
                <LeadForm />
            </div>
        </section>
    );
}