import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Hayk",
  title: "Hi, I'm Hayk",
  subTitle: emoji(
    "Frontend Developer 🚀 with 5+ years building data-rich dashboards and interactive UIs across web and mobile. Expert in React, React Native, TypeScript, Node.js, and NestJS — architecting reusable component and data-visualization libraries and owning features end to end. Shipped across the full company-stage spectrum, from enterprise SaaS (Totango) to startups built zero-to-launch (HippoCamera), and a deep practitioner of AI-assisted development workflows."
  ),
  resumeLink: require("./assets/resume/resume.pdf"),
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/hayktermarkosyan",
  linkedin: "https://www.linkedin.com/in/hayk-ter-markosyan/",
  gmail: "hayktermarkosyan@gmail.com",
  facebook: "https://www.facebook.com/hayk.termarkosyan.77",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "FRONTEND DEVELOPER BUILDING RESPONSIVE, ACCESSIBLE WEB EXPERIENCES WITH AI-ASSISTED WORKFLOWS",
  skills: [
    emoji(
      "⚡ Build data-rich dashboards and interactive UIs with React, React Native, Next.js, and TypeScript"
    ),
    emoji(
      "⚡ Deliver full-stack features with Node.js and NestJS, including REST/GraphQL APIs and PostgreSQL/MongoDB"
    ),
    emoji(
      "⚡ Supercharge engineering workflows with AI tools — Claude Code, MCP servers, custom slash commands, subagents, and skills"
    )
  ],
  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fas fa-n"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NestJS",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "AI / Claude",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Military University of Radio Electronics",
      logo: require("./assets/images/cherepovetsLogo.png"),
      subHeader: "Bachelor's Degree in Engineering",
      duration: "September 2010 - June 2015"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend (React, TypeScript, Next.js)",
      progressPercentage: "90%"
    },
    {
      Stack: "Mobile (React Native)",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend (Node.js, NestJS)",
      progressPercentage: "70%"
    },
    {
      Stack: "AI-Assisted Development",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "Totango",
      companylogo: require("./assets/images/totangoLogo.jpeg"),
      bannerColor: "#16302F",
      date: "May 2023 – March 2026",
      descBullets: [
        "Built a shared React and Vue.js component layer, extracting duplicated UI into a single versioned internal package so feature teams across three enterprise apps consumed one source of truth instead of re-implementing the same elements",
        "Designed the API integration layer on TanStack Query with query-key-scoped caching, in-flight request deduplication, and background refetch, cutting redundant API calls by ~40%",
        "Led the Vuex-to-Pinia migration, converting mutation-based stores to typed Pinia stores with composable getters and actions and removing the global mutation side-effects that were causing cross-module state bugs",
        "Drove the Catalyst AI-development initiative: defined the repository structure, agent and prompt conventions, and code-review automation that the team standardized on for AI-assisted feature work"
      ]
    },
    {
      role: "Frontend Developer (Part-time)",
      company: "Nsoft",
      companylogo: require("./assets/images/nsoftLogo.png"),
      bannerColor: "#1A1A1A",
      date: "May 2023 – January 2025",
      descBullets: [
        "Built a data-visualization suite of reusable chart components (line, bar, pie, and combo charts) with a theming layer that maps each brand's color and typography tokens onto the charts at render time",
        "Instrumented chart hover and drill-down interactions with event tracking so the product team could see which metrics users actually engaged with"
      ]
    },
    {
      role: "Full Stack Developer (Part-time)",
      company: "HippoCamera",
      companylogo: require("./assets/images/hippoCameraLogo.png"),
      bannerColor: "#0A8278",
      date: "January 2023 – December 2025",
      descBullets: [
        "Architected the end-to-end memory-capture platform — React Native mobile app, Strapi backend, and TanStack Start admin dashboard — owning the data flow from on-device capture through backend processing to the admin review surface",
        "Built a production-ready React Native app using Expo Router v5 with offline-first architecture, Zustand state management, and sophisticated media recording capabilities",
        "Implemented video/audio recording, file upload queues with presigned URLs, push notifications, and geolocation services with a 3-agent development workflow",
        "Hand-built a custom offline-first sync queue (before AI coding tools existed) for memory, replay, and media-upload events — a FIFO action state machine with HATEOAS-style fulfilled/rejected transitions, exponential-backoff retries, per-asset retry tracking, and rate-limited draining",
        "Wrote 10+ custom facade and adapter modules wrapping Expo and React Native packages (file system, permissions, notifications, image picker, geolocation, network) so legacy, non-Expo-compatible libraries ran in a fully managed Expo workflow",
        "Developed a custom MCP server wrapping Figma's MCP for intelligent design-to-code conversion, mapping design components to React Native code",
        "Automated end-to-end mobile UI tests with Maestro and accelerated delivery with MCP-driven tooling — the XcodeBuild MCP for iOS build/automation and the Chrome MCP for browser workflows",
        "Tech: React Native, Expo, Maestro, TypeScript, Zustand, TanStack Query, Strapi, Node.js, PostgreSQL"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Smart Corner Armenia",
      companylogo: require("./assets/images/smartCornerLogo.png"),
      date: "May 2022 – April 2023",
      descBullets: [
        "Developed an interactive video application with a responsive UI using React.js",
        "Built reusable components and optimized rendering performance for a seamless user experience",
        "Maintained a clean and scalable application architecture while actively debugging and resolving issues"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Nellie Health",
      companylogo: require("./assets/images/nellieHealthLogo.jpeg"),
      bannerColor: "#5119B9",
      date: "February 2021 – May 2022",
      descBullets: [
        "Led development of the admin dashboard, overseeing design, architecture, and implementation across both frontend and backend",
        "Collaborated closely with developers, designers, and stakeholders to gather requirements and align the dashboard with user needs",
        "Built and integrated APIs to connect the dashboard with external systems and data sources, backed by a scalable database schema",
        "Continuously monitored, optimized, and enhanced the dashboard based on user feedback and evolving business requirements"
      ]
    },
    {
      role: "Major",
      company: "Ministry of Defence of the Republic of Armenia",
      companylogo: require("./assets/images/modLogo.png"),
      date: "August 2015 – March 2025",
      descBullets: [
        "Led an 8-person team to ensure information security and stable service delivery in mission-critical environments",
        "Performed cyber threat analysis using advanced datasets and security tools to identify and mitigate risks",
        "Developed scalable intelligence-gathering systems to support proactive cybersecurity operations"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/cherrioSCLogo.jpg"),
      projectName: "Cherrio",
      projectDesc:
        "🚀 A whole new level of video shooting with an interactive video product called Cherrio"
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+374-77-606-016",
  email_address: "hayktermarkosyan@gmail.com"
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
