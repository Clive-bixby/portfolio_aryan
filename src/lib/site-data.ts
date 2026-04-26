import {
  BadgeCheck,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  FileText,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users
} from "lucide-react";

export const links = {
  resume: "/resume/Aryan_Yadav_Software_Engineer.pdf",
  emailAddress: "aryansecondmail@gmail.com",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=aryansecondmail@gmail.com&su=Opportunity%20for%20Aryan%20Yadav",
  mailto: "mailto:aryansecondmail@gmail.com",
  github: "https://github.com/Clive-bixby",
  linkedin: "https://www.linkedin.com/in/aryan-yadav-27766121b/"
};

export const profile = {
  name: "Aryan Yadav",
  role: "Full Stack Engineer building scalable web products.",
  location: "India",
  intro:
    "I build secure, scalable, user-focused products from frontend to backend, with a strong foundation in DSA, system design, and product-minded execution.",
  subheadline:
    "Node.js, React, TypeScript, Django, PostgreSQL, MongoDB, Cloud, and AI-powered systems.",
  education: {
    school: "Indian Institute of Technology (IIT) Roorkee",
    degree: "Bachelor of Technology",
    location: "Roorkee, India",
    duration: "Nov 2020 - May 2024"
  }
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks = [
  { label: "GitHub", href: links.github, icon: Github, external: true },
  { label: "LinkedIn", href: links.linkedin, icon: Linkedin, external: true },
  { label: "Email Me", href: links.email, icon: Mail, external: true }
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "React Query"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Django", "REST APIs", "JWT", "OAuth"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"]
  },
  {
    title: "Cloud / DevOps",
    icon: Cloud,
    skills: ["Docker", "AWS", "Vercel", "Railway", "CI/CD", "Git"]
  },
  {
    title: "Other",
    icon: Code2,
    skills: ["C++", "Python", "Testing", "System Design", "DSA"]
  }
];

export const projects = [
  {
    name: "NarrativeNode",
    icon: FileText,
    summary:
      "A responsive blogging platform with JWT-based authentication, role-based access control, post lifecycle management, comments, search, pagination, and a dark mode UI.",
    impact:
      "Engineered secure content workflows and access control for creation, moderation, and community engagement.",
    tech: ["Tailwind CSS", "JWT Auth", "RBAC", "REST APIs", "Search"],
    githubUrl: "https://github.com/Clive-bixby/blogging-app"
  },
  {
    name: "PersonalDrive",
    icon: BrainCircuit,
    summary:
      "An AI-powered cloud drive with intelligent file search, permissions, workspaces, document retrieval, and scalable storage workflows.",
    impact:
      "Connected AI-assisted retrieval with fine-grained access control for a secure workspace experience.",
    tech: ["AI Search", "Cloud Storage", "Permissions", "Workspaces"],
    githubUrl: "https://github.com/Clive-bixby/personal-drive"
  },
  {
    name: "VidTube",
    icon: TerminalSquare,
    summary:
      "A scalable video platform with streaming workflows, authentication, feeds, subscriptions, and backend aggregation pipelines.",
    impact:
      "Designed media workflows around Node.js, Express, MongoDB, Multer, Cloudinary, and secure JWT authentication.",
    tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    githubUrl: "https://github.com/Clive-bixby/VidTube"
  }
];

export const valueProps = [
  {
    title: "Full-stack ownership",
    description:
      "Comfortable moving from product surface to API design, data modeling, authentication, and deployment.",
    icon: BadgeCheck
  },
  {
    title: "Clean scalable code",
    description:
      "Builds maintainable systems with clear boundaries, practical abstractions, and performance awareness.",
    icon: ShieldCheck
  },
  {
    title: "Startup execution speed",
    description:
      "Fast learner with an ownership mentality, strong fundamentals, and bias toward shipping useful products.",
    icon: Rocket
  },
  {
    title: "Product thinking",
    description:
      "Balances engineering quality with user-focused decisions, recruiter-friendly clarity, and business context.",
    icon: Users
  },
  {
    title: "AI-integrated products",
    description:
      "Interested in practical AI features that improve workflows, search, and product intelligence.",
    icon: Sparkles
  }
];
