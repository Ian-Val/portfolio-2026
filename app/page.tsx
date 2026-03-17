import Image from "next/image";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

import Hero from "@/components/homepage/sections/Hero";
import About from "@/components/homepage/sections/About";
import Services from "@/components/homepage/sections/Services";
import Work from "@/components/homepage/sections/Work";
import Pricing from "@/components/homepage/sections/Pricing";
import CallToAction from "@/components/homepage/sections/CallToAction";
import Certificates from "@/components/homepage/sections/Certificates";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-15">
        <Hero />
        {/* <About />
        <Services />
        <Pricing /> */}

        <Work />
        <Certificates />
        {/* <CallToAction /> */}
      </main>
      <Footer />
    </>
  );
}
