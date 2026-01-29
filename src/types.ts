// Personal Information
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  resumeUrl: string;
}

// Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Skills
export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// Experience
export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

// Contact Information
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

// Education
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}
