import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Ventures from "@/components/sections/Ventures";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { skills } from "@/lib/content";
import { site } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  image: `${site.url}${site.image}`,
  jobTitle: site.jobTitle,
  worksFor: {
    "@type": "Organization",
    name: site.company.name,
    url: site.company.url,
  },
  description: site.description,
  sameAs: Object.values(site.socials),
  address: {
    "@type": "PostalAddress",
    addressRegion: "CT",
    addressCountry: "US",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Eastern Connecticut State University" },
    { "@type": "HighSchool", name: "Platt Technical High School" },
  ],
  knowsAbout: skills,
  knowsLanguage: ["English", "Spanish"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Ventures />
        <Projects />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
