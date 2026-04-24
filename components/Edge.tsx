import Image from "next/image";

export default function Edge() {
    return (
        <section
            id="accredianedge"
            className="w-full py-20 flex flex-col items-center justify-center gap-6 bg-white"
        >
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center">
                The <span className="text-blue-600">Accredian Edge</span>
            </h1>

            <p className="text-gray-600 text-center text-lg md:text-xl">
                Key Aspects of{" "}
                <span className="text-blue-600 font-semibold">
                    Our Strategic Training
                </span>
            </p>

            {/* Image */}
            <div className="w-full max-w-6xl px-6 mt-10">
                <Image
                    src="/accredian-edge-usp-v3.svg"
                    alt="Accredian Edge"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>
        </section>
    );
}