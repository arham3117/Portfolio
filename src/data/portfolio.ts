import { Skill, Project, Certification } from '@/types';

export const skills: Skill[] = [
  // Cloud Platforms
  { name: 'AWS', category: 'cloud' },
  { name: 'Azure', category: 'cloud' },
  { name: 'Google Cloud Platform', category: 'cloud' },
  
  // Infrastructure as Code
  { name: 'Terraform', category: 'infrastructure' },
  { name: 'CloudFormation', category: 'infrastructure' },
  { name: 'Ansible', category: 'infrastructure' },
  
  // Containerization & Orchestration
  { name: 'Docker', category: 'containerization' },
  { name: 'Kubernetes', category: 'containerization' },
  { name: 'Helm', category: 'containerization' },
  
  // Monitoring & Logging
  { name: 'Prometheus', category: 'monitoring' },
  { name: 'Grafana', category: 'monitoring' },
  { name: 'ELK Stack', category: 'monitoring' },
  
  // Programming & Scripting
  { name: 'Python', category: 'programming' },
  { name: 'Bash', category: 'programming' },
  { name: 'YAML', category: 'programming' },
];

export const projects: Project[] = [
  {
    title: 'Multi-Environment AWS Infrastructure',
    description: 'Infrastructure-as-Code solution for provisioning AWS resources across multiple environments using Terraform modules.',
    bulletPoints: [
      'Automated deployment of DynamoDB, EC2, and S3 services across dev, staging, and production',
      'Modular Terraform configuration enabling reusable infrastructure components',
      'Environment-specific variable management for consistent deployments'
    ],
    githubUrl: 'https://github.com/arham3117/Multi-Environment-AWS-Infrastructure',
    technologies: ['Terraform', 'AWS', 'HCL', 'DynamoDB', 'EC2', 'S3'],
    category: 'cloud'
  },
  {
    title: 'DevSecOps CI/CD with EKS & ArgoCD',
    description: 'Complete DevSecOps pipeline integrating CI/CD workflows with Kubernetes deployment on AWS EKS using GitOps principles.',
    bulletPoints: [
      'Implemented declarative GitOps deployment with ArgoCD for automated application delivery',
      'Provisioned AWS EKS cluster infrastructure using Terraform',
      'Containerized Java application with Docker and automated build pipeline with Maven'
    ],
    githubUrl: 'https://github.com/arham3117/DevSecOps---CICD-with-EKS-ArgoCD',
    technologies: ['AWS EKS', 'ArgoCD', 'Terraform', 'Kubernetes', 'Docker', 'GitOps'],
    category: 'devops'
  },
  {
    title: 'Terraform Practice & Real-World Projects',
    description: 'Comprehensive collection of Terraform implementations demonstrating IaC best practices and real-world cloud infrastructure patterns.',
    bulletPoints: [
      'Built practical examples covering state management, variables, and lifecycle configurations',
      'Implemented dynamic blocks, built-in functions, and data sources for advanced infrastructure',
      'Created reusable modules for multi-cloud deployments and automation'
    ],
    githubUrl: 'https://github.com/arham3117/Terraform',
    technologies: ['Terraform', 'HCL', 'AWS', 'Python', 'Shell'],
    category: 'devops'
  },
  {
    title: 'Terraform Full Course - AWS Projects',
    description: 'Comprehensive Terraform course featuring 30+ lessons with hands-on AWS infrastructure projects and advanced IaC patterns.',
    bulletPoints: [
      'Developed 10+ mini-projects including VPC peering, EKS clusters, Lambda functions, and RDS databases',
      'Implemented 3-tier architecture, GitOps workflows, and infrastructure drift detection',
      'Integrated Terraform Cloud with CI/CD pipelines for automated infrastructure deployment'
    ],
    githubUrl: 'https://github.com/arham3117/Terraform-Full-Course-Aws',
    technologies: ['Terraform', 'AWS', 'EKS', 'RDS', 'Lambda', 'CI/CD', 'ArgoCD'],
    category: 'cloud'
  },
  {
    title: 'DevOps Automation with Shell Scripts',
    description: 'Collection of shell scripts for system administration, monitoring, and deployment automation in DevOps workflows.',
    bulletPoints: [
      'Created disk space and RAM monitoring scripts for proactive system health tracking',
      'Automated project archival and backup workflows for data management',
      'Developed modular scripts for routine operational tasks in server environments'
    ],
    githubUrl: 'https://github.com/arham3117/Shell_Scripts',
    technologies: ['Bash', 'Shell Scripting', 'Linux', 'System Administration'],
    category: 'devops'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js 16, React 19, and TypeScript featuring custom animations and shader effects.',
    bulletPoints: [
      'Implemented custom cursor system with mix-blend-mode and SVG shader backgrounds',
      'Built responsive design with Tailwind CSS 4 and Framer Motion animations',
      'Deployed on Vercel with automated CI/CD from GitHub'
    ],
    githubUrl: 'https://github.com/arham3117/Portfolio',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'cloud'
  },
  {
    title: 'Hand Gesture Recognition System',
    description: 'Real-time hand gesture recognition system that classifies five distinct hand gestures using computer vision and deep learning.',
    bulletPoints: [
      'Achieved 99.83% accuracy with only 2 misclassifications across 1,200 test samples',
      'Implemented CNN architecture with three convolutional blocks and dropout regularization',
      'Real-time inference at approximately 30 FPS performance'
    ],
    githubUrl: 'https://github.com/arham3117/Gestures',
    technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'NumPy', 'Scikit-learn'],
    category: 'aiml'
  },
  {
    title: 'CineMatch - Movie Recommendation System',
    description: 'SQL-based movie recommendation system implementing collaborative filtering, content-based filtering, and hybrid approaches.',
    bulletPoints: [
      'Hybrid approach achieved 85% accuracy with 98% coverage',
      'Built with 9 normalized tables and 35 stored procedures',
      'Implemented 11 automated triggers for data consistency'
    ],
    githubUrl: 'https://github.com/arham3117/CineMatch',
    technologies: ['MySQL', 'SQL', 'Python', 'Database Design', 'Recommendation Systems'],
    category: 'aiml'
  },
  {
    title: 'FairSense - NLP Bias Detection & Mitigation',
    description: 'Comprehensive system to identify, measure, and reduce bias in pre-trained NLP sentiment analysis models.',
    bulletPoints: [
      'Achieved 77.9% bias reduction through name anonymization and score calibration',
      'Reduced bias severity from 21.06/100 (moderate) to 4.66/100 (low)',
      'Eliminated all biased test pairs and achieved perfect demographic parity (0.0000)'
    ],
    githubUrl: 'https://github.com/arham3117/FairSense',
    technologies: ['Python', 'Transformers', 'PyTorch', 'Hugging Face', 'NLP', 'Pandas'],
    category: 'aiml'
  }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    badgeUrl: 'https://www.credly.com/badges/80163d65-c670-4df7-b53a-2035f9d8b9d3/public_url',
    verificationUrl: 'https://aws.amazon.com/verification',
    date: '2024'
  },
  {
    name: 'AWS Solutions Architect - Associate (SAA-C03)',
    issuer: 'Amazon Web Services',
    badgeUrl: 'https://www.credly.com/badges/0254f614-0a97-4f4d-860e-cd8970a6761c/linked_in_profile',
    verificationUrl: 'https://aws.amazon.com/verification',
    date: '2025'
  },
  {
    name: 'AWS Developer - Associate (DVA-C02)',
    issuer: 'Amazon Web Services',
    badgeUrl: 'https://www.credly.com/badges/8bb05bb0-dfcc-45db-a141-bb8e3425bd71/public_url',
    verificationUrl: 'https://aws.amazon.com/verification',
    date: '2025'
  },
  {
    name: 'HashiCorp Certified: Terraform Associate (003)',
    issuer: 'HashiCorp',
    badgeUrl: 'https://www.credly.com/badges/c2ba640d-a7a2-4adf-8b0b-7f494901d84b/linked_in_profile',
    verificationUrl: 'https://www.hashicorp.com/certification/verify',
    date: '2025'
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    badgeUrl: 'https://www.credly.com/badges/your-cka-badge',
    verificationUrl: 'https://www.cncf.io/certification/verify',
    date: '2025'
  }
];