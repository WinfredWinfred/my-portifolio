import { PersonalInfo, SocialLink, SkillCategory, Project, Experience, ContactInfo } from '../types';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Winfred',
  title: 'Full Stack Developer',
  bio: 'I am a professional full stack developer with expertise in building responsive frontend interfaces, scalable backend systems, and blockchain-based applications. I specialize in creating seamless user experiences across modern web technologies, with a passion for clean code, innovative solutions, and continuous learning.',
  avatar: '/avatar.jpg',
  resumeUrl: '/resume.pdf'
};

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/WinfredWinfred',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nsooli-winfred-980572208/',
    icon: 'linkedin'
  }
];

// Skills organized by category
export const skills: SkillCategory[] = [
  {
    category: 'Web3 & Blockchain',
    skills: [
      { name: 'Solidity', level: 'expert' },
      { name: 'Ethereum', level: 'expert' },
      { name: 'Smart Contracts', level: 'expert' },
      { name: 'Web3.js', level: 'advanced' },
      { name: 'Ethers.js', level: 'advanced' },
      { name: 'Hardhat', level: 'advanced' },
      { name: 'IPFS', level: 'intermediate' },
      { name: 'DeFi', level: 'advanced' }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'HTML5', level: 'expert' },
      { name: 'CSS3', level: 'expert' },
      { name: 'Web3 UI', level: 'advanced' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'GraphQL', level: 'intermediate' },
      { name: 'Python', level: 'intermediate' },
      { name: 'Rust', level: 'intermediate' }
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
    title: 'True Defynity',
    description: 'A decentralized finance (DeFi) platform built on blockchain technology.',
    longDescription: 'A Web3 DeFi platform providing decentralized financial services and cryptocurrency operations.',
    technologies: ['Web3', 'Blockchain', 'DeFi', 'Ethereum', 'Smart Contracts'],
    liveUrl: 'https://truedefynity.com/',
    featured: true
  },
  {
    id: '2',
    title: 'DigPeg Exchange',
    description: 'A cryptocurrency exchange platform for digital asset trading.',
    longDescription: 'A secure and user-friendly cryptocurrency exchange platform enabling seamless trading of digital assets.',
    technologies: ['Web3', 'Cryptocurrency', 'Trading', 'Blockchain', 'Exchange'],
    liveUrl: 'https://digpegexchange.com/',
    featured: true
  },
  {
    id: '3',
    title: 'Nife Transport Services',
    description: 'A transport and logistics booking platform with real-time tracking.',
    longDescription: 'A comprehensive transport services platform enabling users to book rides, track shipments, and manage logistics operations efficiently.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveUrl: 'https://nife-transport-services-virid.vercel.app/',
    featured: true
  }
];

// Work Experience
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Self-Employed / Freelance',
    role: 'Full Stack Developer',
    duration: 'Ongoing',
    startDate: '2023-01',
    description: 'Developing complete web applications across frontend and backend technologies',
    responsibilities: [
      'Frontend Development: Build responsive UIs with React, TypeScript, and Tailwind CSS',
      'Backend Development: Create scalable APIs using Node.js, Express, and databases',
      'Full Stack Solutions: Design and deploy complete web applications end-to-end',
      'Web3 Integration: Implement blockchain and smart contract functionality',
      'Database Management: Design and optimize PostgreSQL and MongoDB databases',
      'Deployment & DevOps: Manage application deployments on Vercel, AWS, and cloud platforms'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Web3', 'Solidity', 'AWS', 'Vercel'],
    current: true
  },
  {
    id: '2',
    company: 'Nehemiah Stem Research',
    role: 'Frontend Developer (Part-time)',
    duration: 'Part-time',
    startDate: '2024-01',
    description: 'Contributing frontend expertise to research projects and applications',
    responsibilities: [
      'Design and implement responsive user interfaces for research platforms',
      'Build interactive components using React and modern JavaScript frameworks',
      'Collaborate with researchers and backend teams on project requirements',
      'Optimize user experience and application performance for research tools'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Next.js'],
    current: true
  }
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: 'winfrednsooli@gmail.com',
  phone: '+256 752674690 / +256 761685359',
  location: 'Kampala, Uganda',
  availability: 'Open to Frontend & Full Stack opportunities'
};
