"Use Client";

import React from "react";
import OurProgress from "@/components/LandingPage/OurProgress";
import Hero from "@/components/LandingPage/Hero";
import HowToUse from "@/components/LandingPage/HowToUse";
import PerfectPlans from "@/components/LandingPage/PerfectPlan";
import Testimonials from "@/components/LandingPage/Testimonials";
import DownloadApp from "@/components/LandingPage/DownlodApp";
import ContactUs from "@/components/LandingPage/contactus";
import Footer from "@/components/LandingPage/Footer";

function LandingPage() {
  return (
    <div className="bg-white ">
      <Hero />
      <OurProgress />
      <HowToUse />
      <PerfectPlans />
      <Testimonials />
      <DownloadApp />
      <ContactUs />
      <Footer />
      {/* Footer Bottom */}
      <div className="my-8 text-center text-lg font-normal text-[#00897B]">
        Designed & Developed By{" "}
        <a href="https://volvrit.com" className="underline">
          Volvrit.Com
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
