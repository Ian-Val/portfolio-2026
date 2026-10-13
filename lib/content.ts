export type Project = {
  title: string;
  url: string;
  role: string;
  dates: string;
  summary: string;
  points: string[];
  stack: string[];
  preview?: boolean;
};

export type Role = {
  title: string;
  org: string;
  dates: string;
  location: string;
  points?: string[];
};

export type Certification = {
  title: string;
  url: string;
  provider: string;
  issued: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    title: "AB EcoPark",
    url: "https://www.abecopark.com",
    role: "Volunteer Web Developer",
    dates: "Nov 2025 – Sep 2026",
    summary:
      "Petition website for a proposed carbon-negative waste recycling and incineration-free power plant in North Haven, CT.",
    points: [
      "Built and maintained the site with Next.js, collecting petition signatures in a Supabase (PostgreSQL) backend.",
      "Modeled and rendered the facility in Blender for site and social imagery.",
      "Scheduled Instagram content with Buffer to drive traffic to the petition.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel", "Blender"],
    preview: true,
  },
  {
    title: "Jobspank",
    url: "https://www.jobspank.org",
    role: "Technical Founder",
    dates: "Mar 2025 – Mar 2026",
    summary:
      "A software and career services startup built around the needs of entry-level job seekers.",
    points: [
      "Developed a full-stack web application and browser add-on with HTML, CSS, and JavaScript.",
      "Interviewed recent college graduates to gather functional requirements.",
      "Prototyped user flows and interactions in Figma.",
      "Set up the custom domain and hosting with GoDaddy, Google Sites, and Vercel.",
    ],
    stack: ["JavaScript", "HTML", "CSS", "Browser Extensions", "Figma", "User Research"],
  },
  {
    title: "Snippet Library",
    url: "https://html-snippet-library.vercel.app/",
    role: "Personal Project",
    dates: "2026",
    summary:
      "A client-side React app that gives marketers a library of tested HTML/CSS components, so campaign and landing pages take minutes instead of hours.",
    points: [
      "Live preview and responsive desktop, tablet, and mobile views.",
      "Isolated CSS scoping to prevent style conflicts between components.",
      "One-click copy of full HTML+CSS blocks with unique IDs per instance.",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS", "Vercel"],
  },
];

export const techRoles: Role[] = [
  {
    title: "Volunteer Web Developer",
    org: "AB EcoPark LLC",
    dates: "Nov 2025 – Sep 2026",
    location: "North Haven, CT",
    points: [
      "Maintained a petition website supporting a carbon-negative waste recycling and incineration-free power plant.",
    ],
  },
  {
    title: "Technical Founder | Full-Stack Software Engineer",
    org: "Jobspank",
    dates: "Mar 2025 – Mar 2026",
    location: "West Haven, CT",
    points: [
      "Developed a full-stack web application and browser add-on.",
      "Ran user research interviews and designed UI prototypes in Figma.",
    ],
  },
  {
    title: "Computer Science Tutor",
    org: "Eastern Connecticut State University",
    dates: "Jan 2024 – May 2025",
    location: "Willimantic, CT",
    points: [
      "Tutored students one-on-one and in groups across 12 computer science courses, including Data Structures, Algorithms, Java Programming, and Computer Networking.",
      "Built personalized tutoring plans around each student's learning style.",
    ],
  },
  {
    title: "3D Graphics Artist",
    org: "Freelance",
    dates: "Sep 2021 – Jun 2025",
    location: "West Haven, CT",
    points: [
      "Produced 3D renders, models, and animations for clients with Blender, DaVinci Resolve, and GIMP.",
      "Designed and deployed custom mobile face filters with Meta Spark AR.",
      "Created 3D models optimized for injection molding and 3D printing.",
    ],
  },
  {
    title: "Mechanical Engineering Intern",
    org: "Tier One Machining & Assembly Solutions",
    dates: "Jul 2019 – Aug 2019",
    location: "Newtown, CT",
    points: [
      "Drafted and revised technical drawings and designed a custom lathe tool for a medical centrifuge manufacturer.",
    ],
  },
];

export const otherRoles: Role[] = [
  {
    title: "Admissions Counselor",
    org: "Eastern Connecticut State University",
    dates: "Aug 2026 – Present",
    location: "Willimantic, CT",
  },
  {
    title: "Business Development Associate",
    org: "Bridgelight Financial Advisors",
    dates: "Apr 2026 – Aug 2026",
    location: "Shelton, CT",
  },
  {
    title: "Proximity Marketer",
    org: "Renewal by Andersen",
    dates: "Sep 2025 – Mar 2026",
    location: "Middletown, CT",
  },
  {
    title: "STEP/CAP Head Community Leader",
    org: "Eastern Connecticut State University",
    dates: "Jun 2025 – Aug 2025",
    location: "Willimantic, CT",
  },
  {
    title: "STEP/CAP Community Leader",
    org: "Eastern Connecticut State University",
    dates: "Jun 2022 – Aug 2024",
    location: "Willimantic, CT",
  },
  {
    title: "Resident Assistant",
    org: "Eastern Connecticut State University",
    dates: "Aug 2022 – Dec 2022",
    location: "Willimantic, CT",
  },
  {
    title: "Program Assistant",
    org: "Eastern Connecticut State University",
    dates: "Sep 2021 – May 2022",
    location: "Willimantic, CT",
  },
];

export const highlights = [
  "Graduated Magna Cum Laude with a B.S. in Computer Science",
  "Competed in hackathons at Harvard University, Wesleyan University, and Well4Tech",
  "Started two software startups during college",
  "Built multiple video games with the Game Development Club",
  "Mentored 120+ incoming students as they prepared for college",
  "Volunteered with Habitat for Humanity in New Bern, North Carolina",
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js / Express",
  "Tailwind CSS",
  "HTML & CSS",
  "Supabase",
  "PostgreSQL",
  "Java",
  "C++ (learning)",
  "Jest / TDD",
  "Technical SEO",
  "Git & GitHub",
  "Vercel",
  "Figma",
  "Blender",
];

export const education = [
  {
    school: "Eastern Connecticut State University",
    degree: "B.S. Computer Science, Magna Cum Laude",
    dates: "2021 – 2025",
    url: "https://easternct.meritpages.com/stories/Ian-Valeta-graduates-from-Eastern-Connecticut-State-University/161916472",
  },
  {
    school: "Platt Technical High School",
    degree: "Computer Aided Drafting and Design",
    dates: "2016 – 2020",
  },
];

export const certifications: Certification[] = [
  {
    title: "Test-Driven Development for JavaScript",
    url: "https://www.coursera.org/account/accomplishments/specialization/ELMAC9RJB4ZP",
    provider: "Pearson | Coursera",
    issued: "March 2026",
    skills: ["Jest", "TypeScript", "React", "Angular", "Unit Testing", "Integration Testing"],
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
    provider: "UC Davis | Coursera",
    issued: "March 2026",
    skills: ["Technical SEO", "On-Page SEO", "Keyword Research"],
  },
  {
    title: "Introduction to Docker",
    url: "https://www.coursera.org/account/accomplishments/verify/PJ8PAZRDUL3U",
    provider: "Google Cloud | Coursera",
    issued: "March 2026",
    skills: ["Docker", "Containerization", "GCP"],
  },
  {
    title: "Get Started with Cloud Native, DevOps, Agile, and NoSQL",
    url: "https://www.coursera.org/account/accomplishments/verify/ZCN72M8URTSG",
    provider: "IBM | Coursera",
    issued: "March 2026",
    skills: ["CI/CD", "Agile / Scrum", "MongoDB"],
  },
  {
    title: "Introduction to Software Engineering",
    url: "https://www.coursera.org/account/accomplishments/verify/XV1KF3NZCBO9",
    provider: "IBM | Coursera",
    issued: "March 2026",
    skills: ["Software Architecture", "Testing", "Version Control"],
  },
  {
    title: "The Fullstack Developer Path",
    url: "https://scrimba.com/fullstack-path-c0fullstack:toc;cert23wfboWopQ2SsvoqVgbeXqn6g5b8Pqam5NwATMo6aJpvhpKS",
    provider: "Scrimba",
    issued: "November 2025",
    skills: ["JavaScript", "TypeScript", "React", "Express", "Next.js", "SQL"],
  },
  {
    title: "Next.js SEO Fundamentals",
    url: "https://nextjs.org/learn/certificate?course=seo&user=66286&certId=seo-66286-1749488649867",
    provider: "Vercel",
    issued: "June 2025",
    skills: ["Next.js", "Technical SEO", "Metadata"],
  },
  {
    title: "Next.js App Router Fundamentals",
    url: "https://nextjs.org/learn/certificate?course=dashboard-app&user=66286&certId=dashboard-app-66286-1749243590170",
    provider: "Vercel",
    issued: "June 2025",
    skills: ["Next.js", "Rendering", "Authentication"],
  },
  {
    title: "React Foundations for Next.js",
    url: "https://nextjs.org/learn/certificate?course=react-foundations&user=66286&certId=react-foundations-66286-1748873537394",
    provider: "Vercel",
    issued: "June 2025",
    skills: ["React", "JSX", "Next.js"],
  },
];
