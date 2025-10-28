import { PersonalInfo, SocialLink, SkillCategory, Project, Experience, ContactInfo } from '../types';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  bio: 'Passionate developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and continuously learning new technologies.',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YourName',
  resumeUrl: '/resume.pdf'
};

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'mail'
  }
];

// Skills organized by category
export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'HTML5', level: 'expert' },
      { name: 'CSS3', level: 'expert' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'Vue.js', level: 'intermediate' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express', level: 'advanced' },
      { name: 'Python', level: 'intermediate' },
      { name: 'Django', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'GraphQL', level: 'intermediate' }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'AWS', level: 'intermediate' },
      { name: 'Vercel', level: 'advanced' },
      { name: 'Vite', level: 'advanced' },
      { name: 'Webpack', level: 'intermediate' },
      { name: 'Jest', level: 'advanced' },
      { name: 'Cypress', level: 'intermediate' }
    ]
  },
  {
    category: 'Design & Other',
    skills: [
      { name: 'Figma', level: 'intermediate' },
      { name: 'UI/UX Design', level: 'intermediate' },
      { name: 'Responsive Design', level: 'expert' },
      { name: 'Accessibility', level: 'advanced' },
      { name: 'SEO', level: 'intermediate' },
      { name: 'Agile/Scrum', level: 'advanced' }
    ]
  }
];

// Projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    longDescription: 'Built a complete e-commerce solution with user authentication, product management, shopping cart, and Stripe payment integration. Features include real-time inventory updates and order tracking.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    longDescription: 'A productivity app that allows teams to collaborate on projects with real-time updates, drag-and-drop task organization, and progress tracking.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/taskmanager',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with forecasts, maps, and location search.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/weather',
    featured: false
  },
  {
    id: '4',
    title: 'Portfolio CMS',
    description: 'Content management system for portfolio websites with drag-and-drop builder.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/portfolio-cms',
    featured: true
  },
  {
    id: '5',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with beautiful visualizations.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/social-dashboard',
    featured: false
  },
  {
    id: '6',
    title: 'Fitness Tracker',
    description: 'Mobile-responsive fitness tracking app with workout plans and progress charts.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js', 'PWA'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
    featured: false
  }
];

// Work Experience
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    role: 'Senior Frontend Developer',
    duration: '2 years',
    startDate: '2022-01',
    description: 'Leading frontend development for enterprise applications',
    responsibilities: [
      'Led a team of 5 developers in building scalable React applications',
      'Architected and implemented a micro-frontend architecture',
      'Improved application performance by 40% through optimization',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS'],
    current: true
  },
  {
    id: '2',
    company: 'Digital Agency',
    role: 'Full Stack Developer',
    duration: '1.5 years',
    startDate: '2020-06',
    endDate: '2021-12',
    description: 'Developed web applications for various clients',
    responsibilities: [
      'Built and maintained 10+ client websites and web applications',
      'Implemented RESTful APIs and database designs',
      'Collaborated with designers to create pixel-perfect implementations',
      'Managed deployment pipelines and CI/CD processes'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    current: false
  },
  {
    id: '3',
    company: 'Startup Ventures',
    role: 'Junior Developer',
    duration: '1 year',
    startDate: '2019-06',
    endDate: '2020-06',
    description: 'Started career building features for a SaaS product',
    responsibilities: [
      'Developed new features for the company\'s main product',
      'Fixed bugs and improved code quality',
      'Participated in agile ceremonies and sprint planning',
      'Learned best practices in software development'
    ],
    technologies: ['JavaScript', 'React', 'Python', 'Django', 'PostgreSQL'],
    current: false
  }
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  availability: 'Available for freelance work'
};
