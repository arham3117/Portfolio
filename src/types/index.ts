export interface Skill {
  name: string;
  category: 'cloud' | 'containerization' | 'infrastructure' | 'programming' | 'monitoring';
}

export interface Project {
  title: string;
  description: string;
  bulletPoints?: string[];
  githubUrl: string;
  technologies: string[];
  category: 'devops' | 'cloud' | 'aiml';
}

export interface Certification {
  name: string;
  issuer: string;
  badgeUrl: string;
  verificationUrl?: string;
  date: string;
}