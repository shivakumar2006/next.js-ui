import Hero from "@/components/Hero";
import TrackRecordsPartnerships from "@/components/TrackRecords&Partnerships";
import Edge from "@/components/Edge";
import Domain from "@/components/Domain";
import Course from "@/components/Course";
import Cat from "@/components/Cat";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Hero />
      <TrackRecordsPartnerships />
      <Edge />
      <Domain />
      <Course />
      <Cat />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <CTA />
    </div>
  )
}