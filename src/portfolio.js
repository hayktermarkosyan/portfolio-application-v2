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
    "Frontend Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
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
  subTitle: "FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Frontend / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase")
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Military Engineering University, Cherepovets, Russia",
      logo: require("./assets/images/cherepovetsLogo.png"),
      subHeader: "BS, Engineering Technology (Radio Engineering) ",
      duration: "September 2010 - June 2015"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Frontend / React Developer",
      company: "Smart Corner",
      companylogo: require("./assets/images/smartCornerLogo.png"),
      date: "May 2022 – Present",
      descBullets: [
        "Working on project for creating interactive videos",
        "Developing and implementing highly responsive user interface components using React JS concepts",
        "Troubleshooting interface software and debugging application codes",
        "Monitoring and improving front-end performance"
      ]
    },
    {
      role: "Military Intelligence Officer / Major",
      company: "Ministry of Defense of RA",
      companylogo: require("./assets/images/modLogo.png"),
      date: "August 2015 – Present",
      descBullets: [
        "Leading a team of eight (engineers and soldiers) to maintain information security, and preserve flawless service provision to the necessary stakeholders",
        "Use of unique datasets, specialized tools, and network analysis techniques to identify and analyze cyber security threats and mitigate the risks",
        "Developing and implementing scalable and efficient strategies to ensure consistent results of the radio intelligence department"
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
