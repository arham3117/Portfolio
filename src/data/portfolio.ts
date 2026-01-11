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
    title: '2-Tier Web Application Architecture',
    description: 'Production-ready AWS infrastructure with Flask web application in public tier and managed MySQL RDS in private tier.',
    bulletPoints: [
      'Deployed multi-AZ VPC with public/private subnets for network segmentation',
      'Automated EC2 Flask deployment with RDS MySQL backend using Terraform modules',
      'Implemented AWS Secrets Manager for credential storage with AES-256 encryption'
    ],
    githubUrl: 'https://github.com/arham3117/Terraform/tree/main/Projects/2-Tier-Architecture',
    technologies: ['Terraform', 'AWS', 'VPC', 'RDS', 'EC2', 'Flask', 'MySQL'],
    category: 'cloud'
  },
  {
    title: 'Static Website Hosting with CloudFront CDN',
    description: 'Secure global content delivery solution using S3 and CloudFront with Origin Access Control.',
    bulletPoints: [
      'Deployed S3-hosted static website with all public access blocked for security',
      'Configured CloudFront CDN for low-latency global delivery with automatic HTTPS redirection',
      'Implemented Origin Access Control (OAC) for secure S3-CloudFront authentication'
    ],
    githubUrl: 'https://github.com/arham3117/Terraform/tree/main/Projects/Static-Website-with-S3-CloudFront',
    technologies: ['Terraform', 'AWS', 'S3', 'CloudFront', 'OAC', 'HTTPS'],
    category: 'cloud'
  },
  {
    title: 'Serverless Image Processing Pipeline',
    description: 'Event-driven serverless architecture for automated image processing using AWS Lambda and S3.',
    bulletPoints: [
      'Built Lambda function generating 5 image variants (JPEG, WebP, PNG, thumbnail) using Pillow',
      'Implemented S3 event notifications triggering automated image processing workflows',
      'Configured IAM roles, encrypted S3 buckets with versioning, and CloudWatch monitoring'
    ],
    githubUrl: 'https://github.com/arham3117/Terraform/tree/main/Projects/Image-Processing-with-Lambda-Terraform',
    technologies: ['Terraform', 'AWS Lambda', 'S3', 'Python', 'Pillow', 'CloudWatch'],
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
    title: 'Multi-Environment IaC with Terraform & Ansible',
    description: 'Automated infrastructure deployment across dev, staging, and production using Terraform and Ansible configuration management.',
    bulletPoints: [
      'Provisioned environment-specific infrastructure (2-3 instances) with auto-scaling configurations',
      'Automated Ansible inventory updates from Terraform state with timestamped backups',
      'Deployed Nginx with custom landing pages across dev (t2.micro), staging (t2.small), and prod (t2.medium)'
    ],
    githubUrl: 'https://github.com/arham3117/Terraform/tree/main/Projects/Multi-Env-Iac-with-Ansible',
    technologies: ['Terraform', 'Ansible', 'AWS', 'EC2', 'Nginx', 'Shell'],
    category: 'devops'
  },
  {
    title: 'Multi-Environment AWS Infrastructure',
    description: 'Modular Terraform infrastructure for provisioning AWS resources across multiple environments with reusable components.',
    bulletPoints: [
      'Automated deployment of DynamoDB, EC2, and S3 services across dev, staging, and production',
      'Created reusable Terraform modules for consistent infrastructure provisioning',
      'Implemented environment-specific variable management for scalable deployments'
    ],
    githubUrl: 'https://github.com/arham3117/Multi-Environment-AWS-Infrastructure',
    technologies: ['Terraform', 'AWS', 'HCL', 'DynamoDB', 'EC2', 'S3'],
    category: 'devops'
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