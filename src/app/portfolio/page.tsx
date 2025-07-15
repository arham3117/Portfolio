'use client';

import { skills, projects, certifications } from '@/data/portfolio';
import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import type { Skill } from '@/types';
import { LinkedinIcon, GithubIcon, FileText, ChevronRight } from 'lucide-react';

// Staggered Text Animation Component
const AnimatedText = ({ text, className, style, delay = 0 }: { text: string; className?: string; style?: React.CSSProperties; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <span ref={ref} className={className} style={style}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: `${index * 50}ms`,
            color: isVisible ? '#F5F5F5' : '#F5F5F5'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};





export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [isProjectTransitioning, setIsProjectTransitioning] = useState(false);
  const [showSocialNav, setShowSocialNav] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const sections = [
    'navigation',
    'about', 
    'skills',
    'projects',
    'certifications'
  ];

  const nextSection = useCallback(() => {
    if (isTransitioning || currentSection >= sections.length - 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(prev => prev + 1);
      setIsTransitioning(false);
    }, 300);
  }, [currentSection, isTransitioning, sections.length]);

  const prevSection = useCallback(() => {
    if (isTransitioning || currentSection <= 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(prev => prev - 1);
      setIsTransitioning(false);
    }, 300);
  }, [currentSection, isTransitioning]);

  const changeProject = useCallback((newIndex: number) => {
    if (isProjectTransitioning || newIndex === currentProject) return;
    setIsProjectTransitioning(true);
    setTimeout(() => {
      setCurrentProject(newIndex);
      setIsProjectTransitioning(false);
    }, 200);
  }, [currentProject, isProjectTransitioning]);

  const nextProject = useCallback(() => {
    const newIndex = currentProject < projects.length - 1 ? currentProject + 1 : 0;
    changeProject(newIndex);
  }, [currentProject, changeProject]);

  const prevProject = useCallback(() => {
    const newIndex = currentProject > 0 ? currentProject - 1 : projects.length - 1;
    changeProject(newIndex);
  }, [currentProject, changeProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSection();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        prevSection();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        nextSection();
      } else {
        prevSection();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show navigation when cursor is in the left 100px area
      if (e.clientX < 100) {
        setShowSocialNav(true);
      } else if (e.clientX > 200) {
        // Hide when cursor moves away from left area
        setShowSocialNav(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [nextSection, prevSection]);

  const socialNavItems = [
    { 
      id: 'linkedin', 
      icon: <LinkedinIcon />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://www.linkedin.com/in/muhammad-arham-profile', '_blank') 
    },
    { 
      id: 'github', 
      icon: <GithubIcon />, 
      label: 'GitHub', 
      onClick: () => window.open('https://github.com/yourusername', '_blank') 
    },
    { 
      id: 'resume', 
      icon: <FileText />, 
      label: 'Resume', 
      onClick: () => window.open('/resume.pdf', '_blank') 
    },
  ];

  const getSectionContent = (sectionIndex: number) => {
    switch (sectionIndex) {
      case 0:
        return (
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-block px-10 py-4 bg-transparent border transition-all duration-300 tracking-[0.2em] font-light hover:bg-gray-800 hover:text-white uppercase" 
              style={{borderColor: '#D0D0D0', color: '#E0E0E0', fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', fontWeight: '300', letterSpacing: '0.15em', cursor: 'none'}}
            >
              ← Back to Home
            </Link>

            <div className="mt-12">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                Use arrow keys, mouse wheel, or the dotted navigator on top right
              </p>
              <div className="flex justify-center mt-4">
                <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
              
              {/* Elegant decoration under mouse */}
              <div className="flex justify-center mt-8">
                <div className="flex flex-col items-center space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/30"></div>
                    <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="w-16 h-px bg-gradient-to-r from-white/30 via-white/50 to-white/30"></div>
                    <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/30"></div>
                  </div>
                  <div className="text-xs text-white/30 tracking-[0.2em]" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                    EXPLORE
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Decoration */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.15em] uppercase" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                <AnimatedText text="ABOUT ME" />
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg md:text-xl leading-loose font-light" style={{color: '#E0E0E0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300', lineHeight: '1.8'}}>
                I am a passionate Cloud Engineer with expertise in designing, implementing, and managing scalable cloud infrastructure solutions. 
                With hands-on experience across AWS, Azure, and Google Cloud Platform, I specialize in Infrastructure as Code, 
                containerization, and DevOps practices. I&apos;m committed to building robust, secure, and cost-effective cloud solutions 
                that drive business growth and operational excellence.
              </p>
            </div>
            
            {/* Typographic Separator */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex items-center space-x-6">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/50"></div>
                <div className="text-white/50 text-2xl" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300'}}>
                  ✦
                </div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/50"></div>
              </div>
            </div>
            
            {/* Philosophy Quote */}
            <div className="max-w-5xl mx-auto">
              <blockquote className="text-xl md:text-3xl font-light leading-relaxed italic mb-8" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.01em'}}>
                <AnimatedText text="Technology should be invisible, infrastructure should be elegant, and solutions should be timeless." delay={200} />
              </blockquote>
              <p className="text-sm uppercase tracking-[0.2em]" style={{color: '#D0D0D0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                My Approach to Cloud Engineering
              </p>
            </div>
            
            {/* Bottom Decoration */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.15em] uppercase" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                <AnimatedText text="SKILLS" />
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-h-96 overflow-y-auto">
              {Object.entries(
                skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill);
                  return acc;
                }, {} as Record<string, Skill[]>)
              ).map(([category, categorySkills]: [string, Skill[]]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-lg md:text-xl font-light mb-6 uppercase tracking-[0.1em]" style={{color: '#F5F5F5', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.08em'}}>
                    {category.replace('_', ' ')}
                  </h3>
                  <ul className="space-y-3">
                    {categorySkills.map((skill: Skill) => {
                      const proficiencyLevels: Record<string, number> = {
                        'AWS': 5, 'Azure': 4, 'Google Cloud Platform': 4,
                        'Terraform': 5, 'CloudFormation': 4, 'Ansible': 3,
                        'Docker': 5, 'Kubernetes': 4, 'Helm': 3,
                        'Prometheus': 4, 'Grafana': 4, 'ELK Stack': 3,
                        'Python': 4, 'Bash': 5, 'YAML': 5
                      };
                      const level = proficiencyLevels[skill.name] || 3;
                      
                      return (
                        <li
                          key={skill.name}
                          className="flex items-center justify-between text-sm font-light group" 
                          style={{color: '#E0E0E0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300'}}
                        >
                          <span className="group-hover:text-white transition-colors duration-300">{skill.name}</span>
                          <div className="flex space-x-1 ml-4">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  i < level ? 'bg-white' : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Bottom Decoration */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>
          </div>
        );
      case 3:
        const currentProjectData = projects[currentProject];
        
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.15em] uppercase" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                <AnimatedText text="PROJECTS" />
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
            
            
            {/* Current project display */}
            <div className={`min-h-[400px] flex flex-col justify-center transition-all duration-300 ${
              isProjectTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}>
              <h3 className="text-2xl md:text-3xl font-light mb-6 tracking-wide" style={{color: '#F5F5F5', fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '400', letterSpacing: '0.02em'}}>
                {currentProjectData.title}
              </h3>
              <p className="mb-8 font-light leading-relaxed text-lg max-w-3xl mx-auto" style={{color: '#E0E0E0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300', lineHeight: '1.7'}}>
                {currentProjectData.description}
              </p>
              {currentProjectData.bulletPoints && (
                <ul className="list-none mb-8 space-y-3 font-light text-base max-w-2xl mx-auto" style={{color: '#D0D0D0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300', lineHeight: '1.6'}}>
                  {currentProjectData.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-3">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {currentProjectData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-transparent border text-sm font-light uppercase tracking-wider" style={{borderColor: 'rgba(208, 208, 208, 0.3)', color: '#D0D0D0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.03em'}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={currentProjectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-all duration-300 font-light hover:text-white hover:translate-x-1 uppercase tracking-wide text-sm mx-auto" style={{color: '#D0D0D0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em', cursor: 'none'}}
              >
                View on GitHub →
              </a>
            </div>
            
            {/* Project navigation progress */}
            <div className="mt-12">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevProject}
                  disabled={isProjectTransitioning}
                  className={`transition-colors duration-300 ${
                    isProjectTransitioning ? 'text-gray-600' : 'text-gray-400 hover:text-white'
                  }`}
                  style={{fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', fontWeight: '300', cursor: 'none'}}
                >
                  ← PREV
                </button>
                
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-white/60" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                    {String(currentProject + 1).padStart(2, '0')}
                  </span>
                  <div className="w-16 h-px bg-gray-600 relative">
                    <div 
                      className="h-full bg-white transition-all duration-500"
                      style={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-white/60" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                    {String(projects.length).padStart(2, '0')}
                  </span>
                </div>
                
                <button
                  onClick={nextProject}
                  disabled={isProjectTransitioning}
                  className={`transition-colors duration-300 ${
                    isProjectTransitioning ? 'text-gray-600' : 'text-gray-400 hover:text-white'
                  }`}
                  style={{fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', fontWeight: '300', cursor: 'none'}}
                >
                  NEXT →
                </button>
              </div>
            </div>
            
            
            {/* Bottom Decoration */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.15em] uppercase" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                <AnimatedText text="CERTIFICATIONS" />
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-h-96 overflow-y-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-base md:text-lg font-light mb-3 tracking-wide" style={{color: '#F5F5F5', fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '400', letterSpacing: '0.02em'}}>
                    {cert.name}
                  </h3>
                  <p className="mb-2 font-light" style={{color: '#E0E0E0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300'}}>
                    {cert.issuer}
                  </p>
                  <p className="text-sm mb-4 font-light uppercase tracking-wider" style={{color: '#D0D0D0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em'}}>
                    {cert.date}
                  </p>
                  <div>
                    <a
                      href={cert.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300 text-xs font-light hover:text-white hover:translate-x-1 uppercase tracking-wide"
                      style={{color: '#D0D0D0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em', cursor: 'none'}}
                    >
                      View Badge →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Decoration */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-hidden relative" 
      style={{backgroundColor: '#050505'}}
    >
      
      {/* Left Side Indicator - Simple Arrow */}
      <div className={`fixed left-3 top-1/2 transform -translate-y-1/2 z-30 transition-all duration-300 ${
        showSocialNav ? 'opacity-0' : 'opacity-60 hover:opacity-100'
      }`}>
        <div className="flex items-center justify-center w-8 h-12 bg-transparent border rounded-r-lg cursor-pointer" 
             style={{borderColor: '#D0D0D0'}}>
          <ChevronRight className="w-4 h-4" style={{color: '#E0E0E0'}} />
        </div>
      </div>

      {/* Global Social Navigation - Left Side with Hover Effect */}
      <div className={`fixed left-2 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${
        showSocialNav ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}>
        {/* Smooth Icon Animation */}
        <div className="flex flex-col space-y-4 p-4">
          {socialNavItems.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className="group relative flex items-center justify-center w-10 h-10 transition-all duration-500 hover:w-12 hover:h-12 hover:scale-110 hover:bg-white/10 rounded-full"
              title={item.label}
              style={{cursor: 'none'}}
            >
              {/* Full icon - always visible with smooth scaling */}
              <div className="w-5 h-5 transition-all duration-500 group-hover:w-6 group-hover:h-6 group-hover:text-white" 
                   style={{color: '#E0E0E0'}}>
                {item.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-16 px-2 py-1 bg-transparent border text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap" 
                   style={{borderColor: '#D0D0D0', color: '#E0E0E0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em'}}>
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Page indicator */}
      <div className="fixed top-8 right-8 z-50">
        <div className="text-center">
          <div className="text-sm text-white/60 font-light mb-2" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em'}}>
            Page {currentSection + 1} of {sections.length}
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Main content container */}
      <div 
        className={`h-full flex items-center justify-center px-4 transition-all duration-700 ease-in-out ${
          isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}
      >
        {getSectionContent(currentSection)}
      </div>
    </div>
  );
}