import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Hero from "@/components/homepage/sections/Hero";
import Work from "@/components/homepage/sections/Work";
import Certificates from "@/components/homepage/sections/Certificates";
import { site } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}${site.image}`,
  jobTitle: site.jobTitle,
  description: site.description,
  sameAs: Object.values(site.socials),
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Eastern Connecticut State University",
  },
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Technical SEO",
  ],
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
      <main className="flex flex-col gap-15">
        <Hero />
        <Work />
        <Certificates />
      </main>
      <Footer />
    </>
  );
}
