"use client";

import { useState } from "react";

export default function FAQ() {
    type FaqCategory = "course" | "delivery" | "misc";

    const [activeCategory, setActiveCategory] = useState<FaqCategory>("course");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData = {
        course: [
            {
                question:
                    "What type of corporate training programs does Accredian offer?",
                answer:
                    "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
            },
            {
                question: "What domain specializations are available?",
                answer:
                    "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
            },
        ],

        delivery: [
            {
                question:
                    "Can the courses be customized for specific industries or teams?",
                answer:
                    "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
            },
            {
                question: "Who are the instructors of this program?",
                answer:
                    "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
            },
            {
                question: "What format are the programs delivered in?",
                answer:
                    "Programs are delivered in flexible formats including live online sessions, in-person workshops, and hybrid models to suit organizational needs.",
            },
        ],

        misc: [
            {
                question: "What is the ideal team size for corporate training?",
                answer:
                    "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
            },
            {
                question: "How do we get started with Accredian?",
                answer:
                    "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
            },
        ],
    };

    const categories: { id: FaqCategory; name: string }[] = [
        { id: "course", name: "About the Course" },
        { id: "delivery", name: "About the Delivery" },
        { id: "misc", name: "Miscellaneous" },
    ];

    return (
        <section
            id="faqs"
            className="w-full py-20 flex flex-col items-center bg-gray-50 gap-10"
        >
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center">
                Frequently Asked <span className="text-blue-600">Questions</span>
            </h1>

            {/* Layout */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 px-6">

                {/* Left Categories */}
                <div className="md:w-1/3 flex md:flex-col gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                setActiveCategory(cat.id);
                                setOpenIndex(null);
                            }}
                            className={`px-4 py-3 rounded-lg text-left transition font-medium ${activeCategory === cat.id
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Right Questions */}
                <div className="md:w-2/3 flex flex-col gap-4">
                    {faqData[activeCategory].length === 0 ? (
                        <p className="text-gray-500">No data available.</p>
                    ) : (
                        faqData[activeCategory].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm p-4 cursor-pointer"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                {/* Question */}
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-gray-800">
                                        {item.question}
                                    </h3>
                                    <span className="text-blue-600">
                                        {openIndex === index ? "-" : "+"}
                                    </span>
                                </div>

                                {/* Answer */}
                                {openIndex === index && (
                                    <p className="text-gray-600 mt-3 text-sm">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))
                    )}
                    <div className="mt-6 flex justify-center md:justify-start">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer">
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}