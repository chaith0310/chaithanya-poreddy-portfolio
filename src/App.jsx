import{ useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Network,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const profile = {
  name: "Chaithanya Poreddy",
  role: "SAP ALM Professional | SAP BTP, AI & Automation Builder",
  location: "Hyderabad, India",
  email: "chaithanya.poreddy@example.com",
  linkedin: "#replace-linkedin-url",
  github: "#replace-github-url",
  resume: "#replace-resume-pdf",
  headline: "From SAP ALM Support to AI-Powered Solution Engineering.",
  subheadline:
    "A career journey shaped by computer science, SAP enterprise delivery, continuous learning, and hands-on projects in SAP BTP, AI, automation, and product building.",
};

const metrics = [
  "Diploma + B.Tech CSE AIML",
  "2+ Years SAP ALM Delivery",
  "5+ PI / Go-Live Cycles",
  "2 Live Vercel Deployments",
  "Future Solution Engineer",
];

const projects = [
  {
    slug: "sap-btp-solution-advisor",
    title: "SAP BTP Solution Advisor",
    category: "SAP BTP + AI",
    status: "Flagship",
    featured: true,
    summary:
      "AI-assisted advisory platform that maps business problems to SAP BTP services, architecture patterns, and implementation guidance.",
    problem:
      "Teams often struggle to translate business needs into the right SAP BTP service mix and clear implementation architecture.",
    solution:
      "Created an advisor experience that captures business context and recommends solution direction, service categories, architecture notes, and next actions.",
    impact:
      "Positions me as a solution-oriented SAP BTP learner who can connect enterprise requirements with product thinking.",
    tech: ["SAP BTP", "GenAI", "React", "Solution Architecture", "Automation"],
    live: "#replace-live-demo",
    github: "#replace-github-link",
    architecture: "#replace-architecture-diagram",
  },
  {
    slug: "google-apps-script-lifecycle-platform",
    title: "Google Apps Script Lifecycle Platform",
    category: "Lifecycle Automation",
    status: "Working Automation",
    featured: true,
    summary:
      "Reusable Google Apps Script platform for lifecycle management, structured tracking, automation, and workflow visibility.",
    problem:
      "Spreadsheet-based operations become difficult to manage when tasks, ownership, and process updates are scattered.",
    solution:
      "Implemented script-driven lifecycle logic that can be adapted across Google Sheets with configurable workflow behavior.",
    impact:
      "Highlights practical automation delivery, maintainable scripts, and operational problem-solving.",
    tech: ["Google Apps Script", "Google Sheets", "JavaScript", "Automation"],
    live: "#replace-live-demo",
    github: "#replace-github-link",
    architecture: "#replace-architecture-diagram",
  },
  {
    slug: "linkedin-automation-engine",
    title: "LinkedIn Automation Engine with n8n",
    category: "Workflow Automation",
    status: "Documented Workflow",
    featured: true,
    summary:
      "Content workflow engine for planning, generating, formatting, and supporting professional brand content operations.",
    problem:
      "Manual content planning and publishing makes professional branding inconsistent and time-consuming.",
    solution:
      "Built a reusable n8n-based content engine with structured inputs, automation steps, and platform-ready output blocks.",
    impact:
      "Shows ability to design practical workflow systems and convert repetitive work into scalable automation assets.",
    tech: ["n8n", "Google Sheets", "AI", "Content Automation", "Workflow Design"],
    live: "#replace-live-demo",
    github: "#replace-github-link",
    architecture: "#replace-architecture-diagram",
  },
  {
    slug: "creatorflow",
    title: "CreatorFlow",
    category: "Browser Automation",
    status: "Currently Building",
    featured: true,
    summary:
      "Visual browser automation recorder for creators, designed to capture actions, manage variables, and turn repetitive workflows into reusable automations.",
    problem:
      "Creators, job seekers, marketers, and business users repeat browser workflows every day across multiple tools.",
    solution:
      "Designed a clean-room automation recorder concept with modular flows, reusable variables, scheduling potential, and extensible architecture.",
    impact:
      "Demonstrates product thinking, Chrome extension architecture awareness, AI workflow direction, and automation engineering capability.",
    tech: ["Chrome Extension", "React", "Vite", "Node.js", "Automation"],
    live: "#replace-live-demo",
    github: "#replace-github-link",
    architecture: "#replace-architecture-diagram",
  },
  {
    slug: "executive-case-study",
    title: "Executive Case Study",
    category: "Enterprise Storytelling",
    status: "Detailed Case Study",
    featured: true,
    summary:
      "Recruiter-friendly executive case study that explains business context, architecture, delivery approach, and value.",
    problem:
      "Technical projects often fail to communicate business value clearly to leadership and interview panels.",
    solution:
      "Created a structured case-study format covering problem, solution, architecture, execution, and business value.",
    impact:
      "Strengthens interview storytelling and shows enterprise communication maturity.",
    tech: ["Case Study", "Architecture", "SAP", "AI", "Presentation"],
    live: "#replace-case-study-pdf",
    github: "#replace-github-link",
    architecture: "#replace-architecture-diagram",
  },
  {
    slug: "corporate-treasure-hunt-platform",
    title: "Corporate Treasure Hunt Platform",
    category: "Rapid Prototyping + Gamification",
    status: "Live Demo",
    featured: false,
    summary:
      "Interactive corporate challenge platform with team-based stages, facilitator-controlled answers, and configurable task flow.",
    problem:
      "Corporate engagement events need digital systems that are flexible, fun, and easy for facilitators to control.",
    solution:
      "Built a structured challenge platform with password-based progression, editable content, and team-oriented experience design.",
    impact:
      "Shows fast product execution, event-tech thinking, and practical front-end delivery under real constraints.",
    tech: ["React", "Vite", "Tailwind", "Gamification", "Event Platform"],
    live: "#replace-live-demo",
    github: "#replace-github-link",
    architecture: "#replace-architecture-diagram",
  },
  {
    slug: "corporate-riddle-challenge-platform",
    title: "Corporate Riddle Challenge Platform",
    category: "Team Engagement + Gamification",
    status: "Supporting Project",
    featured: false,
    summary:
      "Riddle-based corporate engagement app with task instructions, answer validation, and team progression flow.",
    problem:
      "Offline corporate games often lack a polished digital layer for validation, flow control, and participant experience.",
    solution:
      "Created a responsive app structure with challenge screens, instruction layers, and configurable passwords.",
    impact:
      "Demonstrates UI delivery, rapid iteration, and lightweight product building for internal events.",
    tech: ["React", "Vite", "Tailwind", "Game Logic", "UX"],
    live: "#replace-live-demo",
    github: "#replace-github-link",
    architecture: "#replace-architecture-diagram",
  },
];

const certifications = [
  {
    title: "Certificate 1",
    issuer: "Replace Issuer",
    status: "Published on LinkedIn",
    date: "Replace date",
    link: "#replace-certificate-url",
  },
  {
    title: "Certificate 2",
    issuer: "Replace Issuer",
    status: "Published on LinkedIn",
    date: "Replace date",
    link: "#replace-certificate-url",
  },
  {
    title: "Certificate 3",
    issuer: "Replace Issuer",
    status: "Published on LinkedIn",
    date: "Replace date",
    link: "#replace-certificate-url",
  },
];

const skills = [
  {
    group: "SAP & Enterprise Delivery",
    icon: Building2,
    items: [
      "SAP ALM",
      "SAP S/4HANA Exposure",
      "PI Cycles",
      "Go-Live",
      "Hypercare",
      "Production Support",
      "Stakeholder Coordination",
    ],
  },
  {
    group: "SAP BTP & Solution Thinking",
    icon: BrainCircuit,
    items: [
      "SAP BTP",
      "Solution Advisory",
      "Architecture Thinking",
      "Business-to-Tech Mapping",
      "Enterprise Use Cases",
    ],
  },
  {
    group: "AI & Automation Engineering",
    icon: Workflow,
    items: [
      "GenAI Use Cases",
      "n8n",
      "Google Apps Script",
      "Browser Automation",
      "Workflow Design",
      "Reusable Templates",
    ],
  },
  {
    group: "Frontend & Product Build",
    icon: Code2,
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Chrome Extensions",
      "GitHub",
      "Vercel",
    ],
  },
];

const journey = [
  {
    phase: "Foundation",
    title: "Diploma in Computer Science Engineering",
    text:
      "Built my technical foundation through Computer Science, programming basics, systems thinking, and early problem-solving experience.",
  },
  {
    phase: "Specialization",
    title: "B.Tech in CSE with AI/ML Specialization",
    text:
      "Completed B.Tech in Computer Science Engineering specialized in Artificial Intelligence and Machine Learning, which shaped my interest in intelligent systems and automation.",
  },
  {
    phase: "Challenge",
    title: "COVID and Recession Job Market Phase",
    text:
      "Entered the job market during a difficult hiring period. This phase built resilience, patience, and the mindset to keep learning even when opportunities were limited.",
  },
  {
    phase: "Breakthrough",
    title: "First Job at Accenture",
    text:
      "Started my first corporate role at Accenture with excitement and began my enterprise technology journey.",
  },
  {
    phase: "SAP Entry",
    title: "SAP S/4HANA ABAP Stream Training",
    text:
      "Completed SAP S/4HANA ABAP stream training and gained exposure to SAP enterprise systems, development foundations, and business process thinking.",
  },
  {
    phase: "Real Experience",
    title: "SAP ALM Project Experience",
    text:
      "Worked in an SAP ALM project for 2 years across rollout support, PI cycles, go-live readiness, hypercare, production support, and international stakeholder coordination.",
  },
  {
    phase: "Self-Learning",
    title: "Building Beyond Assigned Work",
    text:
      "Alongside project responsibilities, started building independent projects in SAP BTP, AI solution advisory, Google Apps Script, n8n automation, React applications, and gamification platforms.",
  },
  {
    phase: "Current Vision",
    title: "SAP BTP, AI, Automation and CreatorFlow",
    text:
      "Currently focused on SAP BTP Solution Engineering, AI-powered solution advisory, workflow automation, and CreatorFlow, a browser automation product vision.",
  },
  {
    phase: "Future Goal",
    title: "Solution Engineer to Solution Architect",
    text:
      "Long-term goal is to become a Solution Engineer and eventually a Solution Architect who can connect business problems, SAP platforms, AI capabilities, and working product execution.",
  },
];

const architectureItems = [
  "SAP BTP Solution Advisor Architecture",
  "Google Apps Script Lifecycle Platform Flow",
  "n8n LinkedIn Automation Workflow",
  "Executive Case Study Architecture",
  "CreatorFlow Architecture",
  "Corporate Treasure Hunt Platform Flow",
];

const navItems = [
  "Home",
  "My Journey",
  "Projects",
  "Resume",
  "Certifications",
  "Architecture",
  "CreatorFlow Vision",
  "About",
  "Contact",
];

const cn = (...classes) => classes.filter(Boolean).join(" ");

function Badge({ children, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-50 text-blue-700 ring-blue-200",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-200",
    violet: "bg-violet-50 text-violet-700 ring-violet-200",
    slate: "bg-slate-50 text-slate-700 ring-slate-200",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  };

  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-semibold ring-1",
        tones[tone] || tones.blue
      )}
    >
      {children}
    </span>
  );
}

function Button({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  href = "#",
  onClick,
}) {
  const variants = {
    primary:
      "bg-blue-700 text-white shadow-lg shadow-blue-200 hover:bg-blue-800",
    secondary:
      "bg-white text-slate-800 ring-1 ring-slate-200 hover:ring-blue-300 hover:text-blue-700",
    ghost: "bg-blue-50 text-blue-700 hover:bg-blue-100",
  };

  const content = (
    <span className="flex items-center justify-center gap-2">
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </span>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "rounded-2xl px-5 py-3 text-sm font-bold transition-all duration-300",
          variants[variant],
          className
        )}
      >
        {content}
      </button>
    );
  }

  const isPlaceholder = href === "#" || href.startsWith("#replace");

  return (
    <a
      href={href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {content}
    </a>
  );
}

function Shell({ children, activePage, setActivePage }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setActivePage("Home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 via-cyan-500 to-violet-600 text-white shadow-lg shadow-blue-200">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-black tracking-tight">
                Chaithanya Poreddy
              </p>
              <p className="text-xs font-medium text-slate-500">
                Career Command Center
              </p>
            </div>
          </button>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-semibold transition-all",
                  activePage === item
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                {item}
              </button>
            ))}
          </nav>

          <Button href={profile.resume} variant="primary" icon={FileText}>
            Resume
          </Button>
        </div>

        <div className="border-t border-slate-100 px-4 py-3 xl:hidden">
          <div className="flex gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={cn(
                  "shrink-0 rounded-xl px-3 py-2 text-xs font-bold transition-all",
                  activePage === item
                    ? "bg-blue-700 text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/70 bg-white/70 py-10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-black">Chaithanya Poreddy</p>
            <p className="text-sm text-slate-500">
              Career story, proof of work, and future solution engineering platform.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
            <a href={profile.linkedin} className="hover:text-blue-700 transition-colors">
              LinkedIn
            </a>
            <a href={profile.github} className="hover:text-blue-700 transition-colors">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-blue-700 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wider text-blue-700 ring-1 ring-blue-100">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group rounded-3xl border border-white/80 bg-white/75 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl transition-all hover:border-blue-200 hover:shadow-2xl"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <Badge tone={project.featured ? "blue" : "slate"}>
            {project.category}
          </Badge>
          <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950 group-hover:text-blue-700">
            {project.title}
          </h3>
        </div>
        <Badge tone={project.featured ? "violet" : "cyan"}>
          {project.status}
        </Badge>
      </div>

      <p className="min-h-[72px] text-sm leading-6 text-slate-600">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech} tone="slate">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Button
          onClick={() => onOpen(project.slug)}
          variant="primary"
          icon={ArrowRight}
          className="justify-center px-3 py-2.5"
        >
          Case Study
        </Button>
        <Button href={project.live} variant="secondary" className="justify-center px-3 py-2.5">
          Live Demo
        </Button>
        <Button href={project.github} variant="secondary" className="justify-center px-3 py-2.5">
          GitHub
        </Button>
        <Button href={project.architecture} variant="secondary" className="justify-center px-3 py-2.5">
          Architecture
        </Button>
      </div>
    </motion.article>
  );
}

function CareerVideoCard({ setActivePage }) {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-2xl shadow-blue-100 backdrop-blur-xl lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <Badge tone="violet">Career Story</Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Watch my journey from SAP ALM support to AI-powered solution engineering.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            This section is designed for a future career journey video. It will summarize
            education, first job experience, SAP ALM delivery, self-built projects,
            CreatorFlow vision, and the long-term goal of becoming a Solution Engineer
            and Solution Architect.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => setActivePage("My Journey")} icon={Rocket}>
              Read My Journey
            </Button>
            <Button href="#replace-career-video-link" variant="secondary" icon={PlayCircle}>
              Video Coming Soon
            </Button>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 p-6 text-white shadow-xl">
          <div className="flex aspect-video items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-center backdrop-blur">
            <div>
              <Globe2 className="mx-auto h-12 w-12 text-cyan-300" />
              <p className="mt-4 text-xl font-black">Career Journey Video</p>
              <p className="mt-2 text-sm text-blue-100">
                Add HeyGen, YouTube, or hosted video link here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ setActivePage, openProject }) {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Career Command Center
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {profile.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => setActivePage("My Journey")} icon={Globe2}>
                Watch My Journey
              </Button>
              <Button
                onClick={() => setActivePage("Projects")}
                variant="secondary"
                icon={Rocket}
              >
                Explore Projects
              </Button>
              <Button
                onClick={() => setActivePage("Resume")}
                variant="secondary"
                icon={FileText}
              >
                View Resume
              </Button>
              <Button href={profile.linkedin} variant="secondary" icon={ExternalLink}>
                LinkedIn
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-blue-200/50 backdrop-blur-xl"
          >
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 p-5 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">
                    Transformation Console
                  </p>
                  <h3 className="mt-1 text-2xl font-black">
                    From Experience to Proof of Work
                  </h3>
                </div>
                <Zap className="h-8 w-8 text-cyan-300" />
              </div>

              <div className="grid gap-3">
                {[
                  "Computer Science Foundation",
                  "SAP Enterprise Delivery",
                  "Parallel Self-Learning",
                  "AI + Automation Projects",
                  "Future Solution Architecture",
                ].map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-300/20 text-cyan-200">
                      {idx + 1}
                    </div>
                    <div className="h-2 flex-1 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300"
                        style={{ width: `${55 + idx * 8}%` }}
                      />
                    </div>
                    <span className="w-40 text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-3xl border border-white/80 bg-white/75 p-5 text-center shadow-lg shadow-slate-200/70 backdrop-blur-xl"
            >
              <p className="text-sm font-black text-slate-950">{metric}</p>
            </div>
          ))}
        </div>
      </section>

      <CareerVideoCard setActivePage={setActivePage} />

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Proof of Work"
            title="Projects that support the transition story"
            description="Each project is structured as interview-ready proof of problem solving, architecture thinking, delivery ownership, and automation mindset."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} onOpen={openProject} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Career Journey"
              title="A full story from education to enterprise SAP delivery and future solution architecture"
            />

            <div className="space-y-4">
              {journey.slice(0, 5).map((item, idx) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-3xl border border-white/80 bg-white/75 p-5 shadow-lg shadow-slate-200/60 backdrop-blur-xl"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 font-black text-blue-700">
                    {idx + 1}
                  </div>
                  <div>
                    <Badge tone="cyan">{item.phase}</Badge>
                    <h3 className="mt-3 font-black text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => setActivePage("My Journey")}
              variant="ghost"
              icon={ArrowRight}
              className="mt-5"
            >
              View Full Journey
            </Button>
          </div>

          <div>
            <SectionHeader
              eyebrow="Skills Snapshot"
              title="Balanced across enterprise, AI, automation, and product build"
            />
            <SkillsGrid compact />
          </div>
        </div>
      </section>

      <ContactCTA setActivePage={setActivePage} />
    </>
  );
}

function MyJourneyPage({ setActivePage }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="My Journey"
          title="From Computer Science student to SAP enterprise delivery and AI automation builder"
          description="This page tells the full career story behind the resume: education, first job, SAP project experience, self-learning, proof of work, and future solution engineering direction."
        />

        <div className="grid gap-6">
          {journey.map((item, idx) => (
            <motion.div
              whileHover={{ y: -4 }}
              key={item.title}
              className="grid gap-5 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl lg:grid-cols-[auto_1fr_auto] lg:items-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-700 to-violet-600 text-lg font-black text-white">
                {idx + 1}
              </div>

              <div>
                <Badge tone={idx % 2 ? "cyan" : "violet"}>{item.phase}</Badge>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>

              <ChevronRight className="hidden h-6 w-6 text-blue-600 lg:block" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-blue-700 via-cyan-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-200">
          <p className="text-sm font-black uppercase tracking-widest text-cyan-100">
            The Core Message
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">
            I am not only showing experience. I am showing direction, proof, and ambition.
          </h2>
          <p className="mt-4 max-w-4xl text-blue-50">
            My journey started with Computer Science, moved into SAP enterprise delivery,
            and is now expanding into SAP BTP, AI solution advisory, automation engineering,
            and product building. This portfolio is my proof-of-work platform for the next phase of my career.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={() => setActivePage("Projects")}
              variant="secondary"
              icon={Rocket}
            >
              Explore Proof of Work
            </Button>
            <Button
              onClick={() => setActivePage("CreatorFlow Vision")}
              variant="secondary"
              icon={Zap}
            >
              View CreatorFlow Vision
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPage({ openProject }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Project Portfolio"
          title="Case-study driven portfolio for recruiters and interviewers"
          description="Major projects support the SAP BTP, AI, and automation transition story. Supporting projects show rapid prototyping, gamification, and delivery ownership."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-2xl px-4 py-2 text-sm font-bold ring-1 transition-all",
                filter === cat
                  ? "bg-blue-700 text-white ring-blue-700"
                  : "bg-white text-slate-600 ring-slate-200 hover:text-blue-700"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={openProject} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDetailsPage({ project, setActivePage }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => setActivePage("Projects")}
          className="mb-6 text-sm font-bold text-blue-700 hover:text-blue-900"
        >
          ← Back to Projects
        </button>

        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/80 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge tone="blue">{project.category}</Badge>
                <Badge tone="violet">{project.status}</Badge>
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950">
                {project.title}
              </h1>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={project.live} variant="secondary" icon={ExternalLink}>
                  Live Demo
                </Button>
                <Button href={project.github} variant="secondary" icon={Code2}>
                  GitHub
                </Button>
                <Button href={project.architecture} variant="secondary" icon={Layers3}>
                  Architecture
                </Button>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-cyan-50 to-violet-50 p-6 ring-1 ring-white">
              <p className="text-xs font-black uppercase tracking-widest text-blue-700">
                Architecture Placeholder
              </p>
              <div className="mt-4 flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-white/70 text-center">
                <div>
                  <Layers3 className="mx-auto h-10 w-10 text-blue-500" />
                  <p className="mt-3 font-black text-slate-800">
                    Replace with diagram image
                  </p>
                  <p className="text-sm text-slate-500">
                    PNG, SVG, PDF preview, or hosted image
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "Problem", text: project.problem },
              { label: "Solution", text: project.solution },
              { label: "Impact", text: project.impact },
            ].map((block) => (
              <div
                key={block.label}
                className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-100"
              >
                <h3 className="font-black text-slate-950">{block.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-black text-slate-950">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} tone="slate">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumePage({ openProject }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Interactive Resume"
          title="SAP ALM delivery experience plus SAP BTP, AI, and automation portfolio evidence"
          description="This page helps recruiters quickly understand current experience, target direction, education, certifications, and hands-on proof of work."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-700 to-violet-600 text-2xl font-black text-white">
                CP
              </div>
              <div>
                <h2 className="text-xl font-black">{profile.name}</h2>
                <p className="text-sm text-slate-500">{profile.role}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                {profile.location}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                {profile.email}
              </p>
              <p className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-blue-600" />
                LinkedIn placeholder
              </p>
              <p className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-blue-600" />
                GitHub placeholder
              </p>
            </div>

            <Button href={profile.resume} variant="primary" icon={FileText} className="mt-6 w-full">
              Download Resume
            </Button>
          </aside>

          <div className="space-y-6">
            <ResumeBlock title="Professional Summary" icon={BriefcaseBusiness}>
              SAP ALM professional with 2+ years of enterprise delivery experience across
              go-live, hypercare, rollout support, production support, and international
              stakeholder coordination. Actively transitioning into SAP BTP Solution
              Engineering through hands-on AI, automation, and solution architecture portfolio projects.
            </ResumeBlock>

            <ResumeBlock title="Education" icon={Award}>
              <div className="grid gap-3">
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <h3 className="font-black">Diploma in Computer Science Engineering</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Built technical foundation in programming, systems, computer science fundamentals,
                    and problem-solving.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <h3 className="font-black">
                    B.Tech in Computer Science Engineering with AI/ML Specialization
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Specialized in Artificial Intelligence and Machine Learning, building early direction
                    toward intelligent systems and automation.
                  </p>
                </div>
              </div>
            </ResumeBlock>

            <ResumeBlock title="Experience" icon={Building2}>
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <h3 className="font-black">Packaged App Development Associate</h3>
                <p className="text-sm font-semibold text-blue-700">
                  Accenture | SAP ALM / Enterprise Delivery
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li>• Supported SAP ALM delivery activities across PI cycles, go-live readiness, deployment support, and hypercare.</li>
                  <li>• Collaborated with international stakeholders across enterprise project environments.</li>
                  <li>• Built a parallel portfolio focused on SAP BTP, AI solution advisory, automation, and product development.</li>
                </ul>
              </div>
            </ResumeBlock>

            <ResumeBlock title="Skills Matrix" icon={Cpu}>
              <SkillsGrid compact />
            </ResumeBlock>

            <ResumeBlock title="Portfolio Projects" icon={Rocket}>
              <div className="grid gap-3 md:grid-cols-2">
                {projects.filter((p) => p.featured).map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => openProject(p.slug)}
                    className="rounded-2xl bg-slate-50 p-4 text-left ring-1 ring-slate-100 transition hover:bg-blue-50 hover:ring-blue-200"
                  >
                    <p className="font-black text-slate-950">{p.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{p.category}</p>
                  </button>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock title="Certifications" icon={Award}>
              <div className="grid gap-3">
                {certifications.map((cert) => (
                  <CertificationRow key={cert.title} cert={cert} />
                ))}
              </div>
            </ResumeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeBlock({ title, icon: Icon, children }) {
  return (
    <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-black">
        <Icon className="h-5 w-5 text-blue-700" />
        {title}
      </h2>
      <div className="text-slate-600">{children}</div>
    </div>
  );
}

function SkillsGrid({ compact = false }) {
  return (
    <div
      className={cn(
        "grid gap-4",
        compact ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {skills.map((skill) => {
        const Icon = skill.icon;

        return (
          <div
            key={skill.group}
            className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-lg shadow-slate-200/60 backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-black text-slate-950">{skill.group}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <Badge key={item} tone="slate">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CertificationsPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Certifications"
          title="Learning evidence and verification links"
          description="Attach LinkedIn certification links, SAP Learning badges, PDFs, proof-of-work documents, and verification URLs here."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col justify-between rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl"
            >
              <div>
                <Award className="h-9 w-9 text-blue-700" />
                <h3 className="mt-5 text-xl font-black text-slate-950">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{cert.issuer}</p>

                <div className="mt-4 flex items-center justify-between">
                  <Badge tone="cyan">{cert.status}</Badge>
                  <span className="text-sm font-bold text-slate-500">{cert.date}</span>
                </div>
              </div>

              <Button href={cert.link} variant="ghost" className="mt-5 w-full" icon={ExternalLink}>
                View Certificate
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationRow({ cert }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-black text-slate-950">{cert.title}</p>
        <p className="text-sm text-slate-500">{cert.issuer}</p>
      </div>
      <Badge tone="cyan">{cert.status}</Badge>
    </div>
  );
}

function ArchitecturePage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Architecture Gallery"
          title="Diagram gallery for solution architecture storytelling"
          description="Replace each placeholder block with diagram images, architecture PDFs, Miro exports, Draw.io exports, or hosted image URLs."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {architectureItems.map((item, idx) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={item}
              className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <Badge tone={idx % 2 ? "cyan" : "violet"}>Architecture</Badge>
                <Network className="h-5 w-5 text-blue-700" />
              </div>

              <div className="mt-5 flex aspect-[16/10] items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 text-center">
                <div>
                  <Layers3 className="mx-auto h-9 w-9 text-blue-500" />
                  <p className="mt-3 text-sm font-black text-slate-800">
                    Placeholder Image Block
                  </p>
                  <p className="text-xs text-slate-500">Replace with image URL</p>
                </div>
              </div>

              <h3 className="mt-5 text-lg font-black text-slate-950">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use this card to explain systems, service flow, integrations,
                data movement, and deployment choices.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreatorFlowVisionPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Current Vision"
          title="CreatorFlow: browser automation that learns workflows by observing actions"
          description="CreatorFlow is the current flagship product vision. It represents the future direction of combining browser automation, AI-assisted workflow generation, and reusable productivity systems."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
              <Badge tone="blue">Product Vision</Badge>
              <h2 className="mt-4 text-2xl font-black text-slate-950">
                What CreatorFlow is
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                CreatorFlow is a Chrome extension and automation platform concept designed
                to record browser actions, convert repetitive tasks into reusable workflows,
                support variables, and help creators and business users automate routine browser-based work.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
              <Badge tone="cyan">Why It Matters</Badge>
              <h2 className="mt-4 text-2xl font-black text-slate-950">
                The problem it solves
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Many creators, job seekers, marketers, and professionals repeat the same
                browser workflows every day: posting content, filling forms, collecting information,
                formatting outputs, and moving data between tools. CreatorFlow is designed
                to turn those repeated actions into reusable automation flows.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
              <Badge tone="violet">Future Direction</Badge>
              <h2 className="mt-4 text-2xl font-black text-slate-950">
                Long-term roadmap
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>• Visual browser action recorder</li>
                <li>• Reusable workflow templates</li>
                <li>• Variables and dynamic inputs</li>
                <li>• AI-assisted workflow explanation and optimization</li>
                <li>• Scheduling and repeat execution</li>
                <li>• Creator and business automation use cases</li>
                <li>• Future expansion toward desktop automation concepts</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 p-6 text-white shadow-2xl shadow-blue-200">
            <p className="text-xs font-black uppercase tracking-widest text-cyan-200">
              CreatorFlow Architecture Placeholder
            </p>
            <h3 className="mt-3 text-2xl font-black">Automation OS Concept</h3>

            <div className="mt-6 grid gap-4">
              {[
                "User Action Recorder",
                "Workflow Step Engine",
                "Variable Manager",
                "AI Workflow Assistant",
                "Template Library",
                "Execution Layer",
              ].map((item, idx) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/20 font-black text-cyan-200">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-dashed border-cyan-200/40 bg-white/10 p-6 text-center">
              <Layers3 className="mx-auto h-10 w-10 text-cyan-300" />
              <p className="mt-3 font-black">Replace with architecture diagram</p>
              <p className="mt-1 text-sm text-blue-100">
                Add Chrome extension flow, background script, content script,
                storage, and workflow engine diagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur-xl">
          <Badge tone="blue">About</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950">
            Building the bridge between enterprise SAP delivery and AI-powered product execution.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Chaithanya Poreddy is an SAP ALM professional based in Hyderabad,
            focused on transitioning into SAP BTP Solution Engineering through
            hands-on projects in AI solution advisory, automation platforms,
            browser automation, and enterprise storytelling.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            This portfolio is structured to show more than learning. It shows
            product execution, architecture thinking, workflow automation, and a clear career story.
          </p>
        </div>

        <div className="grid gap-5">
          {[
            [
              CheckCircle2,
              "Enterprise Delivery Mindset",
              "Experience across go-live, hypercare, production support, and PI cycle support.",
            ],
            [
              BrainCircuit,
              "AI Solution Thinking",
              "Projects that convert business problems into guided AI product experiences.",
            ],
            [
              Workflow,
              "Automation Builder",
              "Practical systems using n8n, Google Apps Script, and browser automation concepts.",
            ],
            [
              Rocket,
              "Portfolio-Led Transition",
              "Evidence-driven path toward SAP BTP and solution engineering roles.",
            ],
          ].map(([Icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl"
            >
              <Icon className="h-7 w-7 text-blue-700" />
              <h3 className="mt-3 font-black text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/80 bg-white/85 p-8 text-center shadow-2xl shadow-blue-100 backdrop-blur-xl">
        <Badge tone="violet">Contact</Badge>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950">
          Let’s discuss SAP BTP, AI solutions, automation, or product engineering opportunities.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Use the links below to connect, review portfolio code, or request a resume.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${profile.email}`} variant="primary" icon={Mail}>
            Email
          </Button>
          <Button href={profile.linkedin} variant="secondary" icon={ExternalLink}>
            LinkedIn
          </Button>
          <Button href={profile.github} variant="secondary" icon={Code2}>
            GitHub
          </Button>
          <Button href={profile.resume} variant="secondary" icon={FileText}>
            Resume PDF
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContactCTA({ setActivePage }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-blue-700 via-cyan-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-200 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-cyan-100">
              Recruiter CTA
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Looking for someone who learns fast, builds continuously, and understands enterprise delivery?
            </h2>
            <p className="mt-4 max-w-3xl text-blue-50">
              I bring SAP ALM delivery experience, rollout and hypercare exposure,
              AI and automation curiosity, and a hands-on product-building mindset.
              I am actively working toward SAP BTP Solution Engineering and future
              Solution Architecture roles.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setActivePage("Resume")}
              variant="secondary"
              icon={FileText}
            >
              View Resume
            </Button>
            <Button
              onClick={() => setActivePage("Contact")}
              variant="secondary"
              icon={Mail}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [activeProjectSlug, setActiveProjectSlug] = useState(
    "sap-btp-solution-advisor"
  );

  const activeProject = useMemo(
    () => projects.find((p) => p.slug === activeProjectSlug) || projects[0],
    [activeProjectSlug]
  );

  const openProject = (slug) => {
    setActiveProjectSlug(slug);
    setActivePage("ProjectDetails");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    if (activePage === "Home") {
      return <HomePage setActivePage={setActivePage} openProject={openProject} />;
    }

    if (activePage === "My Journey") {
      return <MyJourneyPage setActivePage={setActivePage} />;
    }

    if (activePage === "Projects") {
      return <ProjectsPage openProject={openProject} />;
    }

    if (activePage === "ProjectDetails") {
      return (
        <ProjectDetailsPage
          project={activeProject}
          setActivePage={setActivePage}
        />
      );
    }

    if (activePage === "Resume") {
      return <ResumePage openProject={openProject} />;
    }

    if (activePage === "Certifications") {
      return <CertificationsPage />;
    }

    if (activePage === "Architecture") {
      return <ArchitecturePage />;
    }

    if (activePage === "CreatorFlow Vision") {
      return <CreatorFlowVisionPage />;
    }

    if (activePage === "About") {
      return <AboutPage />;
    }

    if (activePage === "Contact") {
      return <ContactPage />;
    }

    return <HomePage setActivePage={setActivePage} openProject={openProject} />;
  };

  return (
    <Shell activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </Shell>
  );
}