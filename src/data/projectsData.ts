export interface Project {
  id: number;
  title: string;
  titleSuffix?: string;
  subtitle: string;
  image?: string;
  imageBg?: string;
  href: string;
  category?: "design" | "dev";
}

export const productDesignProjects: Project[] = [
  {
    id: 1,
    title: "My Blog",
    subtitle: "A blog for my thoughts and ideas",
    image: "/assets/project-cards/my-blog.svg",
    href: "/projects/my-blog",
    category: "design",
  },
  {
    id: 2,
    title: "Semantic Email Intelligence",
    subtitle: "A Second Brain for your Emails",
    image: "/assets/project-cards/semantic-email.svg",
    href: "/projects/semantic-email",
    category: "design",
  },
  {
    id: 3,
    title: "Terminal Browser",
    subtitle: "A browser that runs in the terminal",
    image: "/assets/project-cards/terminal-browser.svg",
    href: "/projects/terminal-browser",
    category: "design",
  },
  {
    id: 4,
    title: "Luma",
    subtitle: "An AI-assisted error management system",
    image: "/assets/project-cards/luma.svg",
    href: "/projects/luma",
    category: "design",
  },
  {
    id: 5,
    title: "Resume Roaster",
    subtitle: "AI-powered resume roasting platform",
    image: "/assets/project-cards/resume-roaster.svg",
    href: "/projects/resume-roaster",
    category: "design",
  },
  {
    id: 6,
    title: "ACM Hackathon Portal",
    subtitle: "A website for ACM-VIT's Hackathon",
    image: "/assets/project-cards/acm-hackathon-portal.svg",
    href: "/projects/acm-hackathon",
    category: "design",
  },

  {
    id: 8,
    title: "Portfolios",
    subtitle: "A collection of portfolios I've designed and built",
    image: "/assets/project-cards/portfolios.svg",
    href: "/projects/portfolios",
    category: "design",
  },
];

export const codingProjects: Project[] = [
  {
    id: 1,
    title: "GitPerson",
    subtitle: "You can track everything",
    image: "/assets/project-cards/git-person.svg",
    href: "/coding/focus-fuel",
    category: "dev",
  },
  {
    id: 2,
    title: "Codédex App",
    subtitle: "App Proposal for Codedex Platform",
    image: "/assets/project-cards/codedex-app.svg",
    href: "/coding/codedex-wrapped",
    category: "dev",
  },
  {
    id: 3,
    title: "ReadMeFlier",
    subtitle: "High-performance NLP parsing pipeline that transforms raw text streams into semantic database nodes",
    image: "/assets/project-cards/readmeflier.svg",
    href: "/coding/semantic-parser",
    category: "dev",
  },
  {
    id: 4,
    title: "Resume Roaster",
    subtitle: "High-performance NLP parsing pipeline that transforms raw text streams into semantic database nodes",
    image: "/assets/project-cards/resume-roaster.svg",
    href: "/coding/resume-roaster",
    category: "dev",
  },
  {
    id: 5,
    title: "Semantic Email Intelligence",
    subtitle: "High-performance NLP parsing pipeline that transforms raw text streams into semantic database nodes",
    image: "/assets/project-cards/semantic-email.svg",
    href: "/coding/semantic-email-intelligence",
    category: "dev",
  },
  {
    id: 6,
    title: "My Blog",
    subtitle: "Personal blog about web development and programming",
    image: "/assets/project-cards/my-blog.svg",
    href: "/coding/my-blog",
    category: "dev",
  },
];

export const homeProjects: Project[] = [
  {
    id: 1,
    title: "Codédex App",
    subtitle: "App Proposal for Codedex Platform",
    image: "/assets/project-cards/codedex-app.svg",
    href: "/coding/codedex-wrapped",
    category: "dev",
  },
  {
    id: 2,
    title: "My Blog",
    subtitle: "A blog for my thoughts and ideas",
    image: "/assets/project-cards/my-blog.svg",
    href: "/projects/my-blog",
    category: "design",
  },
  {
    id: 3,
    title: "Resume Roaster",
    subtitle: "AI-powered resume roasting platform",
    image: "/assets/project-cards/resume-roaster.svg",
    href: "/projects/resume-roaster",
    category: "design",
  },
  {
    id: 4,
    title: "GitPerson",
    subtitle: "You can track everything",
    image: "/assets/project-cards/git-person.svg",
    href: "/coding/focus-fuel",
    category: "dev",
  },
  {
    id: 5,
    title: "ReadMeFlier",
    subtitle: "High-performance NLP parsing pipeline that transforms raw text streams into semantic database nodes",
    image: "/assets/project-cards/readmeflier.svg",
    href: "/coding/semantic-parser",
    category: "dev",
  },
  {
    id: 6,
    title: "Luma",
    subtitle: "An AI-assisted error management system",
    image: "/assets/project-cards/luma.svg",
    href: "/projects/luma",
    category: "design",
  },
  {
    id: 7,
    title: "Terminal Browser",
    subtitle: "A browser that runs in the terminal",
    image: "/assets/project-cards/terminal-browser.svg",
    href: "/projects/terminal-browser",
    category: "design",
  },
  {
    id: 8,
    title: "ACM Hackathon Portal",
    subtitle: "A website for ACM-VIT's Hackathon",
    image: "/assets/project-cards/acm-hackathon-portal.svg",
    href: "/projects/acm-hackathon",
    category: "design",
  },
];
