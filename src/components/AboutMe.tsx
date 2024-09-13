"use client"

import {useEffect, useRef, useState} from 'react'

const skills = [
  {name: 'React', level: 85},
  {name: 'C#', level: 75},
  {name: 'TypeScript', level: 70},
  {name: 'Python', level: 70},
  {name: 'SQL', level: 70},
]

const experiences = [
  {
    title: 'Student Intern',
    company: 'Datacom',
    period: 'May 2024 - June 2024',
    description: 'Developed an innovative, camera-activated wall application for display on TVs. ' +
      'The application showcases artwork that\n dynamically reacts to passersby, ' +
      'increasing engagement and providing a unique interactive experience.'
  },
]

export function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    const currentSectionRef = sectionRef.current

    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [])

  return (
    <section id="about-section" ref={sectionRef} className="bg-gray-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-green-400">{'<'}</span>
          About Me
          <span className="text-green-400">{' />'}</span>
        </h2>
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-300 mb-4">
                I&apos;m a passionate full-stack developer. I experiment with various technologies and tools to
                create what I like to build. I&apos;m always eager to learn new things and improve my skills.
              </p>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-green-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{width: isVisible ? `${skill.level}%` : '0%'}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`bg-gray-700 p-4 rounded-lg transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{transitionDelay: `${index * 200}ms`}}
                  >
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p className="text-green-400">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                    <p className="mt-2 text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}