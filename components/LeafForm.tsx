"use client";

import { useState } from "react";

export default function LeadForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return alert("Please enter email");

        try {
            setLoading(true);

            const res = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            console.log(data);

            setEmail("");
            alert("Thanks! We'll contact you soon 🚀");
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 bg-white shadow-md p-4 rounded-xl w-full max-w-md"
        >
            {/* Input */}
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {/* Button */}
            <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
                {loading ? "Submitting..." : "Enquire"}
            </button>
        </form>
    );
}