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
    "Frontend Developer 🚀 with 5+ years building data-rich dashboards and interactive UIs in React and TypeScript. Full-stack experience with Node.js and NestJS, and a deep practitioner of AI-assisted development."
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
      duration: "January 2010 - January 2015"
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
      role: "Freelance Full Stack Developer",
      company: "Upwork · Freelance",
      companylogo: require("./assets/images/upWorkLogo.jpg"),
      date: "May 2023 – Present",
      descBullets: [
        "Developing and maintaining a platform for users to plan and book photo shoots",
        "Working across the full stack using React and Node.js",
        "Implementing features including user registration, photo uploading, and booking scheduling",
        "Optimizing the platform for performance and scalability; resolving bugs and security vulnerabilities"
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
        "Led development of the admin dashboard, overseeing design, architecture, and implementation across front-end and back-end",
        "Collaborated closely with developers, designers, and stakeholders to align the dashboard with user needs",
        "Designed and implemented an intuitive, user-friendly interface to enhance the overall user experience",
        "Built and integrated APIs to connect the dashboard with external systems and data sources",
        "Developed a scalable and efficient database schema to support dashboard data operations"
      ]
    },
    {
      role: "Frontend Developer",
      company: "SoftConstruct",
      companylogo: require("./assets/images/softConstructLogo.jpeg"),
      date: "March 2020 – February 2021",
      descBullets: [
        "Built and maintained user interfaces of web applications with a focus on performance and usability",
        "Translated design concepts into responsive and accessible code in close collaboration with UI/UX designers",
        "Wrote clean, maintainable HTML, CSS, and JavaScript following best practices",
        "Optimized web applications for speed, scalability, and cross-browser compatibility"
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
