import Image from "next/image";

export default function TrackRecordsPartnerships() {
    const records = [
        {
            number: "10K+",
            desc: "Professionals Trained For Exceptional Career Success",
        },
        {
            number: "200+",
            desc: "Sessions Delivered With Unmatched Learning Excellence",
        },
        {
            number: "5K+",
            desc: "Active Learners Engaged With Dynamic Courses",
        },
    ];

    const partners = [
        { image: "/rel.png" },
        { image: "/hcl.png" },
        { image: "/ibm.png" },
        { image: "/crif.png" },
        { image: "/bayer.svg" },
    ];

    return (
        <section
            id="stats"
            className="w-full py-20 flex flex-col items-center justify-center gap-12 bg-gray-50"
        >
            {/* 🔹 Track Records */}
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center">
                    Our Track <span className="text-blue-600">Records</span>
                </h1>

                <p className="text-gray-600 text-center">
                    The Numbers Behind{" "}
                    <span className="text-blue-600 font-semibold">Our Success</span>
                </p>

                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-6">
                    {records.map((record, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                        >
                            <div className="px-6 py-2 rounded-full bg-blue-100">
                                <h2 className="text-3xl font-bold text-blue-600">
                                    {record.number}
                                </h2>
                            </div>

                            <p className="text-gray-600 mt-3 text-sm font-medium">
                                {record.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Partnerships */}
            <div className="w-full flex flex-col items-center gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                    Our Proven <span className="text-blue-600">Partnerships</span>
                </h2>

                <p className="text-gray-600 text-center font-light">
                    Collaborating with leading companies across industries
                </p>

                {/* Logos */}
                <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-5 gap-6 px-6 mt-6">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-center hover:shadow-md transition"
                        >
                            <Image
                                src={partner.image}
                                alt="partner"
                                width={100}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}