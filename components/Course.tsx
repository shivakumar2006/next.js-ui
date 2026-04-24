import Image from "next/image";
import { LuMonitorCheck } from "react-icons/lu";
import { LuMonitorX } from "react-icons/lu";
import { GiGraduateCap } from "react-icons/gi";
import { FiBriefcase } from "react-icons/fi";

export default function Course() {
    const courses = [
        {
            image: "/project-management-v2.webp",
            title: "Program Specific",
            desc: "Certificate, Executive, Post Graduate Certificate",
        },
        {
            image: "/digital-transformation-v2.webp",
            title: "Industry Specific",
            desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
        },
        {
            image: "/data-science-v2.webp",
            title: "Topic Specific",
            desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
        },
        {
            image: "/senior-management-v2.webp",
            title: "Level Specific",
            desc: "Senior Leadership, Mid-Career Professionals, Freshers",
        },
    ];

    const segments = [
        { icon: <LuMonitorCheck />, title: "Tech Professionals", desc: "Enhance expertise, embrace tech, drive innovation." },
        { icon: <LuMonitorX />, title: "Non-Tech Professionals", desc: "Adapt digitally, collaborate in tech environments." },
        { icon: <GiGraduateCap />, title: "Emerging Professionals", desc: "Develop powerful skills for rapid career growth." },
        { icon: <FiBriefcase />, title: "Senior Professionals", desc: "Strengthen leadership, enhance strategic decisions." },
    ]

    return (
        <section
            id="course"
            className="w-full py-20 flex flex-col items-center bg-white gap-6"
        >
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center">
                Tailored <span className="text-blue-600">Course Segmentation</span>
            </h1>

            <p className="text-gray-600 text-center text-lg md:text-xl max-w-2xl">
                Explore Custom-fit Courses Designed to Address Every{" "}
                <span className="text-blue-600 font-semibold">
                    Professional Focus
                </span>
            </p>

            {/* Cards */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-10">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300"
                    >
                        {/* Image */}
                        <div className="w-full h-40 relative">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col gap-2 text-center">
                            <h2 className="text-2xl font-semibold text-blue-600">
                                {course.title}
                            </h2>

                            <p className="text-gray-600 text-sm">
                                {course.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full max-w-6xl mt-20 bg-blue-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

                {/* Left Side */}
                <div className="w-full md:w-[45%] flex flex-col items-start gap-5 text-white">
                    <p className="text-lg font-semibold">Who Should Join?</p>

                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        Strategic Skill Enhancement
                    </h2>

                    <Image
                        src="/imagehuman.png"
                        alt="human"
                        width={300}
                        height={300}
                        className="mt-4"
                    />
                </div>

                {/* Right Side */}
                <div className="w-full md:w-[55%] flex flex-wrap justify-center gap-6">
                    {segments.map((item, index) => (
                        <div
                            key={index}
                            className="w-[260px] bg-white rounded-xl p-5 flex flex-col gap-3 shadow-md hover:shadow-lg transition"
                        >
                            {/* Icon */}
                            <div className="text-blue-600 text-2xl bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full">
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
                    ))}
                </div>
            </div>
        </section>
    );
}