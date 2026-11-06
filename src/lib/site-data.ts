/**
 * Single source of truth for portfolio content.
 *
 * Every entry below is grounded in the latest resume
 * (public/resume/Aryan_Resume.pdf) or in direct verification of the linked
 * project repositories — see the per-project comments for the source used.
 */
import {
  Brain,
  Cloud,
  Code,
  Database,
  Layers3,
  Server
} from "lucide-react";

export const links = {
  resume: "/resume/Aryan_Resume.pdf",
  emailAddress: "aryansecondmail@gmail.com",
  mailto: "mailto:aryansecondmail@gmail.com",
  github: "https://github.com/Clive-bixby",
  linkedin: "https://www.linkedin.com/in/aryan-yadav-27766121b/",
  phone: "+91 7725952701",
  phoneHref: "tel:+917725952701"
};

export const profile = {
  name: "Aryan Yadav",
  headline: "Full-Stack Software Engineer",
  credential: "IIT ROORKEE ’24",
  // Resume summary, lightly compressed for the hero.
  intro:
    "I’m Aryan — a full-stack software engineer building scalable web and AI-powered applications, with production experience across REST APIs, authentication systems, cloud deployment, vector databases, and RAG pipelines.",
  availability: "Open to Full-Stack, Backend & SDE Roles"
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin }
];

/* ------------------------------------------------------------------------ */
/* EXPERIENCE — Cur8r Technologies (resume: Jul 2026 – Present, Remote)      */
/* ------------------------------------------------------------------------ */

export const experience = {
  company: "Cur8r Technologies",
  role: "Software Engineer Intern",
  period: "Jul 2026 – Present",
  mode: "Remote",
  domain:
    "AI-powered procurement intelligence platform for Indian government tenders.",
  stack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic"],
  // verbatim ordering follows the resume bullets, lightly copyedited
  highlights: [
    {
      title: "Full-Stack Feature Development",
      body:
        "Develop full-stack features for an AI-powered procurement intelligence platform — database models, migrations, repository layers, REST APIs, document-processing workflows, and production UI work — collaborating through Git, pull requests, code reviews, and technical design documents.",
      tags: ["React", "FastAPI", "SQLAlchemy"]
    },
    {
      title: "PDF Backfill & Embedding Pipeline",
      body:
        "Identified a critical document-processing gap where only the first 8 pages of tender PDFs were embedded for Discover scoring — and built a backfill pipeline to parse and embed complete PDFs, improving the accuracy of tender suitability scores.",
      tags: ["Document Parsing", "Embeddings", "FastAPI"]
    },
    {
      title: "Competitor Intelligence",
      body:
        "Independently developed competitor intelligence capabilities: scraped historical tender participation data across government procurement portals — winners, unsuccessful bidders, and bid amounts — and built workflows to identify and rank relevant competitors using LLM-based analysis.",
      tags: ["Web Scraping", "LLMs", "Workflow Automation"]
    },
    {
      title: "Portal Scraping & Data Ingestion",
      body:
        "Built web scrapers and data-ingestion workflows for multiple government procurement portals, expanding the breadth of tender data on the Discover platform while researching additional portals and sources for product expansion.",
      tags: ["Data Ingestion", "Python"]
    }
  ]
};

/* ------------------------------------------------------------------------ */
/* OPSPILOT AI — flagship deep dive                                          */
/* Facts: resume bullets, verified against the repository                    */
/* (github.com/Clive-bixby/AI-ops-copilot — Express 5 + TypeScript API w/,   */
/*  ai/auth/documents/logs/tickets modules, auth·rbac·org middleware,        */
/*  BullMQ + Redis workers, Dockerfile, React + Vite + Tailwind dashboard).  */
/* ------------------------------------------------------------------------ */

export const opspilot = {
  name: "OpsPilot AI",
  tagline: "AI-powered observability & incident intelligence engine.",
  summary:
    "OpsPilot analyzes logs, tickets, and internal docs to detect incidents and answer operational queries using LLMs. A RAG pipeline — ingestion, chunking, embeddings, and vector retrieval on PostgreSQL (pgvector) — grounds every answer in retrieved context with source citations.",
  stack: [
    "Node.js",
    "Express",
    "TypeScript",
    "PostgreSQL",
    "pgvector",
    "BullMQ",
    "Redis",
    "JWT · RBAC",
    "Docker",
    "React",
    "Vite"
  ],
  architecture: [
    {
      stage: "01 // INGEST",
      title: "Document & Log Ingestion",
      detail:
        "PDF parsing for internal docs, structured log and ticket parsing with upload middleware."
    },
    {
      stage: "02 // WORKERS",
      title: "Async Background Jobs",
      detail:
        "BullMQ workers over Redis handle embedding generation, document processing, and heavy ingestion off the request path."
    },
    {
      stage: "03 // RETRIEVE",
      title: "Vector Retrieval",
      detail:
        "Chunked content embedded into PostgreSQL with pgvector; similarity search with Top-K recalls the most relevant readouts."
    },
    {
      stage: "04 // GROUND",
      title: "Cited Q&A",
      detail:
        "RAG service composes context-grounded answers with source citations — grounded retrieval instead of free-form generation."
    }
  ],
  modules: [
    "mod/ai — chunking · embeddings · RAG",
    "mod/auth — JWT access & refresh",
    "mod/rbac — role-based access control",
    "mod/org — multi-tenant isolation",
    "mod/logs & mod/tickets — structured parsers",
    "web/ — React + Vite ops dashboard"
  ],
  github: "https://github.com/Clive-bixby/AI-ops-copilot"
};

/* Simulated incident presets for the interactive sandbox.                   */
/* Clearly labelled as simulated/sample data on the page.                    */
export const incidentPresets = [
  {
    id: "db-pool",
    label: "PostgreSQL Pool Exhaustion",
    severity: "CRITICAL",
    severityClass: "bg-coral text-ink",
    score: "Cosine 0.968 · retrieval 21ms",
    source: "runbook_db-pooling.md · chunks 4–6",
    retrieval:
      "> SQLSTATE 53300 (too_many_connections): active connections exceeded pool max_connections (100). Remediation: raise pool size or enable transaction-mode pooling with statement timeout caps.",
    answer:
      "The database connection pool is saturated by unreleased transaction handles during batch sync runs. Immediate mitigation: terminate idle-in-transaction backends and switch gateway workers to transaction-mode pooling before the next ingest window."
  },
  {
    id: "jwt-rotation",
    label: "JWT Key Rotation Mismatch",
    severity: "HIGH",
    severityClass: "bg-lime text-obsidian",
    score: "Cosine 0.984 · retrieval 16ms",
    source: "runbook_auth-jwks-rotation.md · chunks 1–2",
    retrieval:
      "> JsonWebTokenError: invalid signature — key rotation fired on replica auth-02 without a cache flush on the gateway router. Public JWKS endpoint lagging 180s behind.",
    answer:
      "Verification keys are desynchronized between the auth replica and the edge proxy. Recommended action: purge the JWKS cache so client instances refetch the current asymmetric key, then replay failed authentication attempts."
  },
  {
    id: "upload-timeout",
    label: "Multipart Upload Socket Timeout",
    severity: "MEDIUM",
    severityClass: "bg-obsidian-panel text-ivory",
    score: "Cosine 0.941 · retrieval 24ms",
    source: "runbook_ingest-pipeline.md · chunks 8–11",
    retrieval:
      "> RequestTimeout: socket connection timed out during chunk write #14. Worker buffer exceeded the heap threshold before TCP ACK.",
    answer:
      "Ingest workers are pushing oversized multipart parts under constrained egress. Recommended adjustment: lower multipart chunk size in the upload middleware and raise the socket timeout, then thrash-test with 180MB+ documents."
  }
];

/* ------------------------------------------------------------------------ */
/* PROJECTS — stacks verified from each repository                           */
/* ------------------------------------------------------------------------ */

export const projects = [
  {
    name: "PersonalDrive",
    kind: "CLOUD STORAGE · DOCUMENT AI",
    accent: "violet" as const,
    summary:
      "A secure cloud storage platform inspired by Google Drive — folders, private/public sharing, group collaboration, and RAG-powered Q&A over uploaded PDFs, DOCX, and TXT files.",
    problem:
      "File storage alone gives you a bucket; finding and understanding what is inside the files still costs hours of manual skimming.",
    contribution:
      "Built the backend as a Django REST API with JWT auth and Google OAuth, fine-grained permissions for ownership, folders, and groups, and an ingestion pipeline that parses, chunks, and embeds documents into a vector store to answer natural-language queries.",
    stack: [
      "Django 5",
      "DRF",
      "PostgreSQL",
      "AWS S3",
      "Celery",
      "Redis",
      "Pinecone",
      "LangChain",
      "Gemini",
      "JWT/OAuth"
    ],
    repo: "https://github.com/Clive-bixby/personal-drive"
  },
  {
    name: "NarrativeNode",
    kind: "FULL-STACK WEB APP",
    accent: "cobalt" as const,
    summary:
      "A responsive blogging platform with JWT authentication, role-based access control, a full post lifecycle, comments, search, pagination, and author profiles.",
    problem:
      "Generic CMS setups push publishing behind heavyweight tooling; this needed clean ownership rules, secure auth, and a fast editorial UI.",
    contribution:
      "Implemented JWT auth with refresh tokens and bcrypt, role and ownership middleware, drafts → publish workflows with comments, tags, and likes, tailwind UI with dark mode and skeleton loaders, and debounced search over title, content, and tags.",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Axios"
    ],
    repo: "https://github.com/Clive-bixby/blogging-app"
  },
  {
    name: "VidTube",
    kind: "BACKEND SYSTEM",
    accent: "coral" as const,
    summary:
      "A scalable video-hosting backend: authentication, uploads, subscriptions, feeds, and engagement features backed by MongoDB aggregation pipelines.",
    problem:
      "Video platforms need constrained access, media pipelines, and fast aggregation-backed feeds — not just CRUD endpoints.",
    contribution:
      "Designed MongoDB schemas and aggregation pipelines for subscriptions and feeds, built JWT access/refresh authentication with bcrypt hashing, and handled media via Multer and Cloudinary upload workflows.",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Multer",
      "Cloudinary"
    ],
    repo: "https://github.com/Clive-bixby/VidTube"
  }
];

/* ------------------------------------------------------------------------ */
/* SKILLS — resume skills section, verbatim groupings                        */
/* ------------------------------------------------------------------------ */

export const skillGroups = [
  {
    title: "Languages",
    tag: "CORE",
    icon: Code,
    iconClass: "text-violet",
    description: "Typed and scripting languages used across backend and tooling.",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "SQL"]
  },
  {
    title: "Frontend",
    tag: "INTERFACES",
    icon: Layers3,
    iconClass: "text-cobalt",
    description: "Component systems, client state, and data-fetching discipline.",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Axios", "React Query"]
  },
  {
    title: "Backend & APIs",
    tag: "SERVERS",
    icon: Server,
    iconClass: "text-violet-bright",
    description: "REST design, auth layers, ORM workflows, and migrations.",
    skills: ["FastAPI", "Node.js", "Express.js", "Django", "SQLAlchemy", "Alembic", "JWT", "OAuth"]
  },
  {
    title: "Databases & Vector",
    tag: "DATA LAYERS",
    icon: Database,
    iconClass: "text-cobalt",
    description: "Relational stores, document stores, and semantic retrieval.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "pgvector"]
  },
  {
    title: "AI / Retrieval",
    tag: "APPLIED AI",
    icon: Brain,
    iconClass: "text-violet-bright",
    description: "Grounded LLM features built on retrieval, not guesswork.",
    skills: ["LLMs", "RAG Pipelines", "Embeddings", "Vector Search"]
  },
  {
    title: "DevOps & Practices",
    tag: "SHIPPING",
    icon: Cloud,
    iconClass: "text-coral",
    description: "Containers, cloud deploys, and engineering discipline.",
    skills: [
      "Docker",
      "GCP",
      "AWS",
      "Git",
      "GitHub",
      "Vercel",
      "Railway",
      "Render",
      "CI/CD",
      "TDD",
      "System Design",
      "DSA"
    ]
  }
];

/* ------------------------------------------------------------------------ */
/* ABOUT / EDUCATION                                                         */
/* ------------------------------------------------------------------------ */

export const education = {
  school: "Indian Institute of Technology Roorkee",
  degree: "Bachelor of Technology",
  location: "Roorkee, India",
  duration: "2020 – 2024"
};

export const aboutNarrative = {
  title: "I build for clarity, security, and systems that hold their shape.",
  paragraphs: [
    "During my B.Tech at IIT Roorkee I built my foundation in data structures, algorithms, and system design — the fundamentals that make every framework decision afterward a deliberate one rather than a default.",
    "At Cur8r Technologies I ship full-stack features end to end: schema and migrations under the product, REST APIs in the middle, and React interfaces on top — plus the unglamorous work that makes AI useful, like parsing complete tender PDFs instead of just their first pages.",
    "Independently, I build systems end to end — an AI observability platform grounding LLM answers in pgvector retrieval, a cloud drive with RAG-powered document Q&A, and backends with real authentication and permission models. Security, citations, and clear data boundaries are the recurring theme."
  ]
};

export const footerNote = {
  title: "Building the next wave of web & AI systems.",
  body:
    "Open to full-time software engineering roles. Comfortable across full-stack, backend, and AI-integrated product work."
};
