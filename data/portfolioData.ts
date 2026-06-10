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
    role: "Full Stack Developer",
    tagline:
      "I build exceptional digital experiences and scalable web applications.",
    bio: "I build exceptional digital experiences and scalable web applications that solve real world problems.",
    avatar: "/arjun_mehta.png",
    cvUrl: "#",
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
      value: "4+",
      label: "Years",
      sublabel: "Experience",
      icon: "Briefcase",
      colorTheme: "exp",
    },
    {
      value: "15+",
      label: "Projects",
      sublabel: "Completed",
      icon: "CheckCircle",
      colorTheme: "proj",
    },
    {
      value: "5",
      label: "Hackathons",
      sublabel: "Won",
      icon: "Star",
      colorTheme: "hack",
    },
    {
      value: "Top Rated",
      label: "on GitHub",
      sublabel: "",
      icon: "Trophy",
      colorTheme: "git",
    },
  ],
  services: [
    {
      id: "srv-1",
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with modern technologies.",
      icon: "Code",
    },
    {
      id: "srv-2",
      title: "Backend Development",
      description:
        "Creating robust APIs and backend services with scalable architecture.",
      icon: "Database",
    },
    {
      id: "srv-3",
      title: "Full Stack Solutions",
      description:
        "End-to-end development with complete solutions from idea to deployment.",
      icon: "Layers",
    },
    {
      id: "srv-4",
      title: "DevOps & Deployment",
      description:
        "CI/CD, cloud deployment and monitoring for production apps.",
      icon: "Cloud",
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Senior Full Stack Engineer",
      company: "InnovateTech Solutions",
      period: "2024 - Present",
      description: [
        "Led a team of 4 engineers to design and develop a microservices-based SaaS platform.",
        "Optimized frontend bundle sizes by 42% and implemented modern state-management configurations.",
        "Created custom reusable UI library using React, TypeScript, and Tailwind CSS.",
      ],
      tags: ["React", "Next.js", "Node.js", "GraphQL", "TailwindCSS"],
    },
    {
      id: "exp-2",
      role: "Software Engineer",
      company: "PixelCraft Agency",
      period: "2022 - 2024",
      description: [
        "Developed responsive web applications for enterprise clients using React and Next.js.",
        "Built serverless backend REST APIs using AWS Lambda, API Gateway, and DynamoDB.",
        "Integrated third-party payment systems and automated testing suites using Cypress.",
      ],
      tags: ["React", "TypeScript", "AWS", "Serverless", "DynamoDB"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Tech Institute of Engineering",
      period: "2018 - 2022",
      details:
        "Specialized in Software Engineering and Database Systems. Graduated with Honors.",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Crypto Dashboard",
      description:
        "A real-time cryptocurrency tracker and portfolio analytics platform featuring detailed charts and historical trends.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&auto=format&fit=crop&q=60",
      tags: ["React", "ChartJS", "CoinGecko API", "Tailwind CSS"],
      category: "frontend",
      demoUrl: "https://crypto-dash-example.com",
      githubUrl: "https://github.com/krishnendunarayan/crypto-dash",
    },
    {
      id: "proj-2",
      title: "E-Commerce Microservice",
      description:
        "Scalable backend architecture for an e-commerce platform incorporating order processing, catalog, and checkout modules.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=60",
      tags: ["Node.js", "Express", "MongoDB", "RabbitMQ", "Docker"],
      category: "backend",
      demoUrl: "https://api-example.com",
      githubUrl: "https://github.com/krishnendunarayan/ecommerce-service",
    },
    {
      id: "proj-3",
      title: "TaskFlow Manager",
      description:
        "Collaborative project management dashboard with board layouts, Gantt charts, real-time sync, and notification hub.",
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&auto=format&fit=crop&q=60",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      category: "fullstack",
      demoUrl: "https://taskflow-example.com",
      githubUrl: "https://github.com/krishnendunarayan/taskflow",
    },
    {
      id: "proj-4",
      title: "Cloud Infrastructure Setup",
      description:
        "Infrastructure as Code project provisioning scalable VPC, load balancers, ECS cluster, and RDS databases on AWS.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60",
      tags: ["Terraform", "AWS", "ECS", "Docker", "GitHub Actions"],
      category: "devops",
      demoUrl: undefined,
      githubUrl: "https://github.com/krishnendunarayan/aws-iac",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Redux Toolkit", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "REST & GraphQL APIs", level: 85 },
        { name: "PostgreSQL & MongoDB", level: 82 },
        { name: "Redis Caching", level: 75 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker / Containers", level: 80 },
        { name: "Git & CI/CD", level: 90 },
        { name: "AWS Cloud", level: 78 },
        { name: "Linux Administration", level: 75 },
      ],
    },
  ],
  blogs: [
    {
      id: "blog-1",
      title: "Optimizing Next.js Web Vitals for Production Sites",
      excerpt:
        "Deep dive into performance patterns including image optimization, font caching, dynamic imports, and static generation mechanisms.",
      date: "May 12, 2026",
      readTime: "8 min read",
      tags: ["Next.js", "Performance", "Web Vitals"],
      slug: "optimizing-nextjs-web-vitals",
    },
    {
      id: "blog-2",
      title: "Why We Switched From REST to GraphQL for our Mobile API",
      excerpt:
        "The architectural challenges, migration path, and major speedups we observed when shifting our query framework to GraphQL.",
      date: "April 18, 2026",
      readTime: "6 min read",
      tags: ["API", "GraphQL", "Architecture"],
      slug: "switching-rest-to-graphql",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialId: "AWS-ASA-12345",
      verifyUrl: "https://aws.amazon.com/verification",
    },
    {
      id: "cert-2",
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      date: "2025",
      credentialId: "CKA-7890",
      verifyUrl: "https://cncf.io/verification",
    },
  ],
};
