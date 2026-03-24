import Certification from "@/components/global/Certification";
import Section from "@/components/global/Section";

export default function Certificates() {
  const certs = [
    {
      title: "Test Driven Development: Unit 1 & 2",
      url: "https://www.coursera.org/account/accomplishments/verify/XKEE4QNDY5GW",
      provider: "Pearson | Coursera",
      issued: "March 2026",
      skills: [
        "Jest (Javascript Testing Framework)",
        "Typescript",
        "Unit Testing",
        "JSDOM Browser-Based Testing",
      ],
    },
    {
      title: "Object Oriented Design",
      url: "https://www.coursera.org/account/accomplishments/verify/RD6FYZDJ4RX8",
      provider: "University of Alberta | Coursera",
      issued: "March 2026",
      skills: ["Java", "OOP Design Patterns", "UML Diagrams"],
    },
    {
      title: "Google SEO Fundamentals",
      url: "https://www.coursera.org/account/accomplishments/verify/F7BDYGAXTP9X",
      provider: "University of California, Davis | Coursera",
      issued: "March 2026",
      skills: [
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "Keyword Research",
        "Crawling & Indexing",
      ],
    },
    {
      title: "Introduction to Docker",
      url: "https://www.coursera.org/account/accomplishments/verify/PJ8PAZRDUL3U",
      provider: "Google Cloud | Coursera",
      issued: "March 2026",
      skills: ["Docker", "Containerization", "Google Cloud Platform", "DevOps"],
    },
    {
      title: "Get Started with Cloud Native, DevOps, Agile, and NoSQL",
      url: "https://www.coursera.org/account/accomplishments/verify/ZCN72M8URTSG",
      provider: "IBM | Coursera",
      issued: "March 2026",
      skills: [
        "Deployment Pipelines",
        "Agile / Scrum",
        "Tekton",
        "MongoDB",
        "Python",
      ],
    },
    {
      title: "Introduction to Software Engineering",
      url: "https://www.coursera.org/account/accomplishments/verify/XV1KF3NZCBO9",
      provider: "IBM | Coursera",
      issued: "March 2026",
      skills: [
        "Software Architecture",
        "Source Control",
        "Software Testing",
        "Software Versioning",
      ],
    },
    {
      title: "The Fullstack Developer Path",
      url: "https://scrimba.com/fullstack-path-c0fullstack:toc;cert23wfboWopQ2SsvoqVgbeXqn6g5b8Pqam5NwATMo6aJpvhpKS",
      provider: "Scrimba",
      issued: "November 2025",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Express.js",
        "Next.js",
        "SQL",
        "Shell Scripting",
      ],
    },
    {
      title: "Next.js SEO Fundamentals",
      url: "https://nextjs.org/learn/certificate?course=seo&user=66286&certId=seo-66286-1749488649867",
      provider: "Vercel",
      issued: "June 2025",
      skills: ["Next.js", "Technical SEO", "Metadata / Meta Tags"],
    },
    {
      title: "Next.js App Router Fundamentals",
      url: "https://nextjs.org/learn/certificate?course=dashboard-app&user=66286&certId=dashboard-app-66286-1749243590170",
      provider: "Vercel",
      issued: "June 2025",
      skills: ["Next.js", "Static & Dynamic Rendering", "Authentication"],
    },
    {
      title: "React Foundations for Next.js",
      url: "https://nextjs.org/learn/certificate?course=react-foundations&user=66286&certId=react-foundations-66286-1748873537394",
      provider: "Vercel",
      issued: "June 2025",
      skills: ["Next.js", "React.js", "JSX", "Babel"],
    },
    {
      title: "Bachelor's Degree of Science in Computer Science",
      url: "https://easternct.meritpages.com/stories/Ian-Valeta-graduates-from-Eastern-Connecticut-State-University/161916472",
      provider: "Eastern Connecticut State University",
      issued: "April 2021 - May 2025",
      skills: [
        "Calculus I & II with Technology",
        "Computer Algorithms",
        "Computer Networking Fundamentals",
        "Computer Organization & Architecture",
        "Cyber Security & Society",
        "Data Mining & Machine Learning",
        "Data Structures",
        "Database & Info Management",
        "Discrete Mathematics",
        "Information Management",
        "Java Programming I & II",
        "Operating Systems",
        "Programming Languages and Translations",
        "Software Engineering",
      ],
    },
    {
      title: "Intro to AI Strategy",
      url: "https://www.codecademy.com/profiles/ianval/certificates/d6f9857857814649999f444381c75035",
      provider: "Codecademy",
      issued: "April 2024",
      skills: ["Data Quality", "Verifiability", "Vulnerabilities"],
    },
    {
      title: "Intro to Generative AI",
      url: "https://www.codecademy.com/profiles/ianval/certificates/28ccb695c353465a8785a036ad32d3b9",
      provider: "Codecademy",
      issued: "March 2024",
      skills: [
        "Applications of Gen-AI",
        "Gen-AI Misconceptions",
        "Gen-AI Limitations & Challenges",
      ],
    },
    {
      title: "Cybersecurity for Business",
      url: "https://www.codecademy.com/profiles/ianval/certificates/a2a257b12a3d49d7ab75c20ea15e7d88",
      provider: "Codecademy",
      issued: "February 2024",
      skills: [
        "Account and Device Security",
        "Security Awareness",
        "Risk Management",
        "Incident Preparation",
      ],
    },
    {
      title: "Code Foundations",
      url: "https://www.codecademy.com/profiles/ianval/certificates/5b55e668646caa552f8e4d1d",
      provider: "Codecademy",
      issued: "February 2024",
      skills: [
        "Computer Science Fundamentals",
        "Web Development Fundamentals",
        "Data Science Fundamentals",
      ],
    },
    {
      title: "Lean How to Code Course",
      url: "https://www.codecademy.com/profiles/ianval/certificates/11a686a7fd57b8c214f7f92749388d42",
      provider: "Codecademy",
      issued: "February 2024",
      skills: ["Programming Fundamentals"],
    },
  ];

  return (
    <Section id="work" textColor="black">
      <h2 className="mb-6 text-2xl text-center">
        My{" "}
        <span className="bg-blue-600 text-white px-2 py-1 rounded">
          Background
        </span>
      </h2>
      <p className="my-4 text-center text-blue-600">↓</p>
      <div>
        <ul className="flex flex-col gap-10">
          {certs.map((c) => (
            <Certification key={c.title} {...c} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
