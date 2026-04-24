import Image from "next/image";

export default function Cat() {
    return (
        <section
            id="cat"
            className="w-full py-20 flex flex-col items-center bg-gray-50 gap-6"
        >
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-center">
                The <span className="text-blue-600">CAT Framework</span>
            </h1>

            <p className="text-gray-600 text-center text-lg md:text-xl max-w-2xl">
                Our Proven Approach to{" "}
                <span className="text-blue-600 font-semibold">
                    Learning Excellence
                </span>
            </p>

            {/* Image */}
            <div className="w-full max-w-6xl px-6 mt-10">
                <Image
                    src="/catV2.svg"
                    alt="CAT Framework"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>
        </section>
    );
}