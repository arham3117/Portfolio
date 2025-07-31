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
    title: 'Multi-Cloud Infrastructure Automation',
    description: 'Automated infrastructure deployment across AWS, Azure, and GCP using Terraform modules with standardized configurations.',
    bulletPoints: [
      'Reduced deployment time by 75% through automation',
      'Implemented cost optimization strategies saving $50k annually',
      'Created reusable Terraform modules for consistent deployments'
    ],
    githubUrl: 'https://github.com/<your-github-username>/multi-cloud-terraform',
    technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'CI/CD'],
    category: 'cloud'
  },
  {
    title: 'Kubernetes Monitoring Stack',
    description: 'Comprehensive monitoring solution for Kubernetes clusters using Prometheus, Grafana, and custom alerting rules.',
    bulletPoints: [
      'Implemented cluster-wide monitoring for 50+ services',
      'Created custom dashboards for performance metrics',
      'Set up automated alerting for critical system events'
    ],
    githubUrl: 'https://github.com/<your-github-username>/k8s-monitoring',
    technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm', 'AlertManager'],
    category: 'devops'
  },
  {
    title: 'CI/CD Pipeline Optimization',
    description: 'Streamlined deployment pipelines using GitLab CI and Jenkins with automated testing and security scanning.',
    bulletPoints: [
      'Reduced deployment failures by 90% through automated testing',
      'Integrated security scanning in CI/CD pipeline',
      'Achieved zero-downtime deployments using blue-green strategy'
    ],
    githubUrl: 'https://github.com/<your-github-username>/cicd-optimization',
    technologies: ['GitLab CI', 'Jenkins', 'Docker', 'SonarQube', 'Trivy'],
    category: 'devops'
  },
  {
    title: 'AWS Cost Optimization Platform',
    description: 'Automated cost optimization platform using AWS Lambda and CloudWatch to monitor and reduce cloud spending.',
    bulletPoints: [
      'Identified and eliminated $30k in unused resources annually',
      'Automated rightsizing recommendations for EC2 instances',
      'Created real-time cost alerting system with Slack integration'
    ],
    githubUrl: 'https://github.com/<your-github-username>/aws-cost-optimizer',
    technologies: ['AWS Lambda', 'CloudWatch', 'Python', 'Cost Explorer API', 'Slack API'],
    category: 'cloud'
  },
  {
    title: 'Infrastructure as Code Pipeline',
    description: 'Complete GitOps workflow for infrastructure management using Terraform, GitHub Actions, and automated testing.',
    bulletPoints: [
      'Implemented infrastructure drift detection and remediation',
      'Created automated testing suite for Terraform configurations',
      'Established secure secrets management with HashiCorp Vault'
    ],
    githubUrl: 'https://github.com/<your-github-username>/iac-pipeline',
    technologies: ['Terraform', 'GitHub Actions', 'HashiCorp Vault', 'Terratest', 'Python'],
    category: 'devops'
  },
  {
    title: 'Serverless Microservices Architecture',
    description: 'Built scalable serverless architecture on AWS using Lambda, API Gateway, and DynamoDB with automated deployment.',
    bulletPoints: [
      'Designed event-driven microservices handling 10M+ requests/month',
      'Implemented auto-scaling with 99.9% uptime SLA',
      'Reduced infrastructure costs by 60% compared to traditional hosting'
    ],
    githubUrl: 'https://github.com/<your-github-username>/serverless-microservices',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'CloudFormation', 'Node.js'],
    category: 'cloud'
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