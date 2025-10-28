// Type definitions for portfolio data structures

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  availability?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  resumeUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
