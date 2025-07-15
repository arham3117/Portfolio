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
    githubUrl: 'https://github.com/yourusername/multi-cloud-terraform',
    technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'CI/CD']
  },
  {
    title: 'Kubernetes Monitoring Stack',
    description: 'Comprehensive monitoring solution for Kubernetes clusters using Prometheus, Grafana, and custom alerting rules.',
    bulletPoints: [
      'Implemented cluster-wide monitoring for 50+ services',
      'Created custom dashboards for performance metrics',
      'Set up automated alerting for critical system events'
    ],
    githubUrl: 'https://github.com/yourusername/k8s-monitoring',
    technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm', 'AlertManager']
  },
  {
    title: 'CI/CD Pipeline Optimization',
    description: 'Streamlined deployment pipelines using GitLab CI and Jenkins with automated testing and security scanning.',
    bulletPoints: [
      'Reduced deployment failures by 90% through automated testing',
      'Integrated security scanning in CI/CD pipeline',
      'Achieved zero-downtime deployments using blue-green strategy'
    ],
    githubUrl: 'https://github.com/yourusername/cicd-optimization',
    technologies: ['GitLab CI', 'Jenkins', 'Docker', 'SonarQube', 'Trivy']
  }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    badgeUrl: 'https://www.credly.com/badges/your-badge-id',
    verificationUrl: 'https://aws.amazon.com/verification',
    date: '2024'
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    badgeUrl: 'https://www.credly.com/badges/your-cka-badge',
    verificationUrl: 'https://www.cncf.io/certification/verify',
    date: '2023'
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    badgeUrl: 'https://www.credly.com/badges/your-terraform-badge',
    verificationUrl: 'https://www.hashicorp.com/certification/verify',
    date: '2023'
  },
  {
    name: 'Azure DevOps Engineer Expert',
    issuer: 'Microsoft',
    badgeUrl: 'https://www.credly.com/badges/your-azure-badge',
    verificationUrl: 'https://learn.microsoft.com/en-us/certifications/verify',
    date: '2024'
  }
];