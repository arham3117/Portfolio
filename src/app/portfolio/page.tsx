'use client';

import { skills, projects, certifications } from '@/data/portfolio';
import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import type { Skill } from '@/types';
import { Linkedin, Github, FileText } from 'lucide-react';
import { Component } from "@/components/ui/etheral-shadow";

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

// Dark Ethereal Background Component
const DarkEtherealBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Component
        color="rgba(15, 15, 15, 1)"
        animation={{ scale: 120, speed: 80 }}
        noise={{ opacity: 0.8, scale: 1.3 }}
        sizing="fill"
      />
    </div>
  );
};


export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [isProjectTransitioning, setIsProjectTransitioning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'devops' | 'cloud'>('devops');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const sections = [
    'navigation',
    'about', 
    'skills',
    'projects',
    'certifications'
  ];

  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => project.category === selectedCategory);

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
    const newIndex = currentProject < filteredProjects.length - 1 ? currentProject + 1 : 0;
    changeProject(newIndex);
  }, [currentProject, changeProject, filteredProjects.length]);

  const prevProject = useCallback(() => {
    const newIndex = currentProject > 0 ? currentProject - 1 : filteredProjects.length - 1;
    changeProject(newIndex);
  }, [currentProject, changeProject, filteredProjects.length]);

  // Reset currentProject when category changes
  useEffect(() => {
    setCurrentProject(0);
  }, [selectedCategory]);

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


    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [nextSection, prevSection]);


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
          <div className="max-w-5xl mx-auto text-center px-8">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-[0.15em] uppercase" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                <AnimatedText text="ABOUT ME" />
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto mb-24">
              <p className="text-lg md:text-xl leading-loose font-light" style={{color: '#E0E0E0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300', lineHeight: '2'}}>
                I am a passionate Cloud Engineer with expertise in designing, implementing, and managing scalable cloud infrastructure solutions.
                With hands-on experience across AWS, Azure, and Google Cloud Platform, I specialize in Infrastructure as Code,
                containerization, and DevOps practices. I&apos;m committed to building robust, secure, and cost-effective cloud solutions
                that drive business growth and operational excellence.
              </p>
            </div>
            
            {/* Typographic Separator */}
            <div className="flex items-center justify-center mb-20">
              <div className="flex items-center space-x-8">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/50"></div>
                <div className="text-white/50 text-2xl" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300'}}>
                  ✦
                </div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/50"></div>
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="max-w-5xl mx-auto">
              <blockquote className="text-xl md:text-3xl font-light leading-relaxed italic mb-12" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.01em'}}>
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
          <div className="max-w-6xl mx-auto text-center px-8">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-[0.15em] uppercase" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                <AnimatedText text="SKILLS" />
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-h-96 overflow-y-auto px-4">
              {Object.entries(
                skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill);
                  return acc;
                }, {} as Record<string, Skill[]>)
              ).map(([category, categorySkills]: [string, Skill[]]) => (
                <div key={category} className="mb-10">
                  <h3 className="text-lg md:text-xl font-light mb-8 uppercase tracking-[0.1em]" style={{color: '#F5F5F5', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.08em'}}>
                    {category.replace('_', ' ')}
                  </h3>
                  <ul className="space-y-4">
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
        if (filteredProjects.length === 0) {
          return (
            <div className="max-w-5xl mx-auto text-center px-8">
              <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-[0.15em] uppercase" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                  <AnimatedText text="PROJECTS" />
                </h2>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
              </div>

              {/* Category Filter */}
              <div className="mb-16 text-center">
                <div className="inline-flex items-center space-x-8">
                  {[
                    { key: 'devops', label: 'DEVOPS' },
                    { key: 'cloud', label: 'CLOUD' }
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key as 'devops' | 'cloud')}
                      className={`px-4 py-2 text-sm font-light uppercase tracking-wider transition-all duration-300${
                        selectedCategory === key 
                          ? ' text-white border-b border-white' 
                          : ' text-gray-400 hover:text-gray-200'
                      }`}
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '300',
                        letterSpacing: '0.1em',
                        cursor: 'none'
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-gray-400 font-light" style={{fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300'}}>
                No projects found in this category.
              </p>
            </div>
          );
        }

        const currentProjectData = filteredProjects[currentProject];


        return (
          <div className="max-w-5xl mx-auto text-center px-8">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-[0.15em] uppercase" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                <AnimatedText text="PROJECTS" />
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>

            {/* Category Filter */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center space-x-8">
                {[
                  { key: 'devops', label: 'DEVOPS' },
                  { key: 'cloud', label: 'CLOUD' }
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as 'devops' | 'cloud')}
                    className={`px-4 py-2 text-sm font-light uppercase tracking-wider transition-all duration-300${
                      selectedCategory === key 
                        ? ' text-white border-b border-white' 
                        : ' text-gray-400 hover:text-gray-200'
                    }`}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '300',
                      letterSpacing: '0.1em',
                      cursor: 'none'
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Current project display */}
            <div className={`min-h-[450px] flex flex-col justify-center transition-all duration-300 py-8 ${
              isProjectTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}>
              <h3 className="text-2xl md:text-4xl font-light mb-8 tracking-wide" style={{color: '#F5F5F5', fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '400', letterSpacing: '0.02em'}}>
                {currentProjectData.title}
              </h3>
              <p className="mb-10 font-light leading-relaxed text-lg max-w-3xl mx-auto" style={{color: '#E0E0E0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300', lineHeight: '1.9'}}>
                {currentProjectData.description}
              </p>
              {currentProjectData.bulletPoints && (
                <ul className="list-none mb-10 space-y-4 font-light text-base max-w-2xl mx-auto" style={{color: '#D0D0D0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300', lineHeight: '1.7'}}>
                  {currentProjectData.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-4">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {currentProjectData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-transparent border text-sm font-light uppercase tracking-wider hover:border-white/50 transition-all duration-300" style={{borderColor: 'rgba(208, 208, 208, 0.3)', color: '#D0D0D0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em'}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={currentProjectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-all duration-300 font-light hover:text-white hover:translate-x-1 uppercase tracking-wide text-sm mx-auto" style={{color: '#D0D0D0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.08em', cursor: 'none'}}
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
                      style={{ width: `${((currentProject + 1) / filteredProjects.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-white/60" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                    {String(filteredProjects.length).padStart(2, '0')}
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
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.15em] uppercase" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                <AnimatedText text="CERTIFICATIONS" />
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
            </div>
            
            {/* Certifications List */}
            <div className="max-w-6xl mx-auto">
              {/* Even certifications in 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {certifications.slice(0, certifications.length % 2 === 0 ? certifications.length : certifications.length - 1).map((cert, index) => (
                  <div key={index} className="group relative">
                    {/* Subtle background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -m-4"></div>
                    
                    {/* Certification Item */}
                    <div className="relative pb-8 transition-all duration-500 p-6 group-hover:border group-hover:border-white/20 group-hover:rounded-lg">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {/* Number in square */}
                          <div className="w-6 h-6 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
                            <span className="text-xs font-light" style={{color: '#A0A0A0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-light tracking-wide group-hover:text-white transition-colors duration-300 mb-4 text-left leading-tight" style={{color: '#F5F5F5', fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '400', letterSpacing: '0.01em'}}>
                            {cert.name}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Year and Badge in a more elegant layout */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-xs uppercase tracking-wider font-light" style={{color: '#A0A0A0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                            {cert.date}
                          </span>
                          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                          <span className="text-xs font-light opacity-60" style={{color: '#D0D0D0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300'}}>
                            Certified
                          </span>
                        </div>
                        
                        <a
                          href={cert.badgeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-300 text-xs font-light hover:text-white hover:translate-x-1 uppercase tracking-wide opacity-50 group-hover:opacity-100 hover:scale-105"
                          style={{color: '#D0D0D0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em', cursor: 'none'}}
                        >
                          View Badge →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Last certification centered if odd number */}
              {certifications.length % 2 === 1 && (
                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    {(() => {
                      const cert = certifications[certifications.length - 1];
                      const index = certifications.length - 1;
                      return (
                        <div className="group relative">
                          {/* Subtle background glow on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -m-4"></div>
                          
                          {/* Certification Item */}
                          <div className="relative pb-8 transition-all duration-500 p-6 group-hover:border group-hover:border-white/20 group-hover:rounded-lg">
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0 mt-1">
                                {/* Number in square */}
                                <div className="w-6 h-6 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
                                  <span className="text-xs font-light" style={{color: '#A0A0A0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                                    {String(index + 1).padStart(2, '0')}
                                  </span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-light tracking-wide group-hover:text-white transition-colors duration-300 mb-4 text-left leading-tight" style={{color: '#F5F5F5', fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '400', letterSpacing: '0.01em'}}>
                                  {cert.name}
                                </h3>
                              </div>
                            </div>
                            
                            {/* Year and Badge in a more elegant layout */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <span className="text-xs uppercase tracking-wider font-light" style={{color: '#A0A0A0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.1em'}}>
                                  {cert.date}
                                </span>
                                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                                <span className="text-xs font-light opacity-60" style={{color: '#D0D0D0', fontFamily: 'Crimson Text, Georgia, serif', fontWeight: '300'}}>
                                  Certified
                                </span>
                              </div>
                              
                              <a
                                href={cert.badgeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 text-xs font-light hover:text-white hover:translate-x-1 uppercase tracking-wide opacity-50 group-hover:opacity-100 hover:scale-105"
                                style={{color: '#D0D0D0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em', cursor: 'none'}}
                              >
                                View Badge →
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
            
            {/* Elegant closing decoration */}
            <div className="flex justify-center mt-20">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/30"></div>
                <div className="text-white/30 text-lg" style={{fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '300'}}>
                  ✦
                </div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/30"></div>
              </div>
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
      {/* Dark Ethereal Background */}
      <DarkEtherealBackground />

      {/* Fixed Bottom-Right Social Menu */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/muhammad-arham-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 border border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 hover:w-12 hover:h-12 hover:scale-110 transition-all duration-500"
            style={{cursor: 'none'}}
          >
            <Linkedin className="w-4 h-4 text-white/60 group-hover:text-white group-hover:w-5 group-hover:h-5 transition-all duration-500" />
            {/* Tooltip */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-transparent border text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap" 
                 style={{borderColor: '#D0D0D0', color: '#E0E0E0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em'}}>
              LinkedIn
            </div>
          </a>
          
          <a
            href="https://github.com/<your-github-username>"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 border border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 hover:w-12 hover:h-12 hover:scale-110 transition-all duration-500"
            style={{cursor: 'none'}}
          >
            <Github className="w-4 h-4 text-white/60 group-hover:text-white group-hover:w-5 group-hover:h-5 transition-all duration-500" />
            {/* Tooltip */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-transparent border text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap" 
                 style={{borderColor: '#D0D0D0', color: '#E0E0E0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em'}}>
              GitHub
            </div>
          </a>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 border border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 hover:w-12 hover:h-12 hover:scale-110 transition-all duration-500"
            style={{cursor: 'none'}}
          >
            <FileText className="w-4 h-4 text-white/60 group-hover:text-white group-hover:w-5 group-hover:h-5 transition-all duration-500" />
            {/* Tooltip */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-transparent border text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap" 
                 style={{borderColor: '#D0D0D0', color: '#E0E0E0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.05em'}}>
              Resume
            </div>
          </a>
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
        className={`h-full flex items-center justify-center px-4 transition-all duration-700 ease-in-out relative z-30 ${
          isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}
      >
        {getSectionContent(currentSection)}
      </div>
    </div>
  );
}