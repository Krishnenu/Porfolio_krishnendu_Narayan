export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon: string; // Lucide icon name as string
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
  colorTheme: "exp" | "proj" | "hack" | "git";
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "backend" | "fullstack" | "devops";
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // level 1-100
}

export interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  url?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    mobile: number;
    role: string;
    tagline: string;
    bio: string;
    avatar: string;
    cvUrl: string;
    social: SocialLinks;
  };
  navigation: NavItem[];
  stats: StatItem[];
  services: ServiceItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  blogs: BlogItem[];
  certifications: CertificationItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Krishnendu Narayan",
    firstName: "Krishnendu",
    lastName: "Narayan",
    mobile: +918050676058,
    role: "Senior Frontend Developer",
    tagline:
      "Building scalable, high-performance React applications with modern frontend architecture.",
    bio: "Frontend Developer with 6+ years of experience in React.js, Next.js, TypeScript, Redux, and Micro Frontend architecture. Specialized in scalable enterprise applications, reusable UI systems, and performance optimization.",
    avatar:
      "https://krishnendu-portfolio-site.s3.eu-north-1.amazonaws.com/Screenshot+2026-06-11+040531.jpg",
    cvUrl: "/Krishnendu_FS_resume.pdf",
    social: {
      github: "https://github.com/krishnenu",
      linkedin: "https://linkedin.com/in/krishnendu-narayan",
      twitter: "https://twitter.com/krishnendu",
      email: "mailto:krishnendu.nryn@gmail.com",
    },
  },

  navigation: [
    { label: "Home", path: "/", icon: "Home" },
    { label: "Resume", path: "/resume", icon: "FileText" },
    { label: "Experience", path: "/experience", icon: "Briefcase" },
    { label: "Projects", path: "/projects", icon: "FolderGit" },
    { label: "Skills", path: "/skills", icon: "Cpu" },
    { label: "Blog", path: "/blog", icon: "BookOpen" },
    { label: "Certifications", path: "/certifications", icon: "Award" },
    { label: "Contact", path: "/contact", icon: "Mail" },
  ],

  stats: [
    {
      value: "6+",
      label: "Years",
      sublabel: "Experience",
      icon: "Briefcase",
      colorTheme: "exp",
    },
    {
      value: "10+",
      label: "Enterprise",
      sublabel: "Projects",
      icon: "CheckCircle",
      colorTheme: "proj",
    },
    {
      value: "4",
      label: "Companies",
      sublabel: "Worked With",
      icon: "Building2",
      colorTheme: "hack",
    },
    {
      value: "React",
      label: "Frontend",
      sublabel: "Specialist",
      icon: "Trophy",
      colorTheme: "git",
    },
  ],

  services: [
    {
      id: "srv-1",
      title: "Frontend Development",
      description:
        "Building scalable and responsive enterprise applications using React.js and Next.js.",
      icon: "Code",
    },
    {
      id: "srv-2",
      title: "UI Architecture",
      description:
        "Designing reusable component systems and Micro Frontend architecture.",
      icon: "Layout",
    },
    {
      id: "srv-3",
      title: "Performance Optimization",
      description:
        "Optimizing frontend performance using code splitting, lazy loading, and memoization.",
      icon: "Gauge",
    },
    {
      id: "srv-4",
      title: "API Integration",
      description:
        "Integrating REST and GraphQL APIs into enterprise-grade applications.",
      icon: "Cloud",
    },
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Technical Specialist",
      company: "Infovision Labs Pvt Ltd",
      period: "May 2025 - Apr 2026",
      description: [
        "Developed customer enrollment interfaces for Verizon Home Internet plans.",
        "Built reusable React.js UI components with Redux state management.",
        "Implemented responsive layouts with HTML5 and CSS3.",
        "Integrated dynamic comparison and eligibility features.",
        "Optimized performance using code splitting and rendering improvements.",
      ],
      tags: ["React.js", "Redux", "JavaScript", "HTML5", "CSS3"],
    },

    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "Accion Labs",
      period: "Nov 2023 - Jan 2025",
      description: [
        "Developed scalable UI modules using React.js and TypeScript.",
        "Built reusable components in Micro Frontend architecture.",
        "Integrated GraphQL APIs using Apollo Client.",
        "Improved application maintainability and performance.",
        "Implemented unit testing using Jest and React Testing Library.",
      ],
      tags: [
        "React.js",
        "TypeScript",
        "GraphQL",
        "Apollo Client",
        "Micro Frontend",
      ],
    },

    {
      id: "exp-3",
      role: "Frontend Engineer / Associate Consultant",
      company: "Capgemini",
      period: "May 2021 - Sep 2023",
      description: [
        "Developed enterprise UI applications using React.js and TypeScript.",
        "Built checkout and address management modules.",
        "Integrated REST APIs with frontend applications.",
        "Migrated legacy codebases to modern React architecture.",
        "Designed reusable UI components for scalability.",
      ],
      tags: ["React.js", "TypeScript", "REST APIs", "Redux"],
    },

    {
      id: "exp-4",
      role: "Software Engineer",
      company: "Amazon Development Centre",
      period: "Aug 2019 - May 2021",
      description: [
        "Worked on Contract Lifecycle Management systems.",
        "Designed automation test cases for backend services.",
        "Improved system reliability through testing frameworks.",
        "Collaborated on regression and integration testing.",
      ],
      tags: ["Automation Testing", "Java", "Backend Validation", "QA"],
    },
  ],

  education: [
    {
      degree: "PG Diploma (CDAC)",
      school: "Bangalore",
      period: "2018",
      details:
        "Advanced training in software development and computer applications.",
    },
    {
      degree: "B.E. Electrical & Electronics Engineering",
      school: "Engineering College",
      period: "2013 - 2017",
      details: "Graduated in Electrical & Electronics Engineering.",
    },
  ],

  projects: [],

  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "Redux", level: 90 },
      ],
    },

    {
      category: "UI / Styling",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 85 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 90 },
      ],
    },

    {
      category: "Backend & APIs",
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "GraphQL APIs", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "Apollo Client", level: 80 },
      ],
    },

    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Linux", level: 75 },
        { name: "Azure Cloud", level: 70 },
      ],
    },
  ],

  blogs: [
    {
      id: "blog-1",
      title:
        "Caching Basics for System Design: Complete Beginner-Friendly Guide",
      excerpt:
        "A beginner-friendly guide to caching concepts in system design, covering caching strategies (write-through, write-around, write-back), eviction policies, and distributed caching basics.",
      date: "Jun 11, 2026",
      readTime: "6 min read",
      tags: ["System Design", "Caching", "Backend", "Web Development"],
      slug: "caching-basics-for-system-design",
      url: "https://medium.com/@krishnendu.nryn/caching-basics-for-system-design-complete-beginner-friendly-guide-4b2afde2dbb5?postPublishedType=repub",
    },
  ],

  certifications: [
    {
      id: "cert-1",
      title: "AI Tools Workshop",
      issuer: "CertX",
      date: "June 2026",
      credentialId: "0270772f-3809-4400-b29b-1e1c61cd09971415510",
      verifyUrl:
        "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971415510",
    },
  ],
};
