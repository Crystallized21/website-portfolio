'use client'

import {useEffect, useState} from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {MdOutlineMailOutline} from "react-icons/md"
import {ChevronDown} from "lucide-react"

const technologies = ['React', 'TypeScript', 'C#', 'Python', 'Java 💀']

export function MainHero() {
  const [typedText, setTypedText] = useState('')
  const fullText = "I'm just an ordinary developer."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 60)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-mono">
              Hello, I&apos;m Michael.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              <span className="text-green-400">&gt; </span>
              {typedText}
              <span className="animate-blink">|</span>
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Crystallized21" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
                <FaGithub size={24}/>
              </a>
              <a href="https://www.linkedin.com/in/michael-bui-crystal" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={24}/>
              </a>
              <a href="mailto:" className="text-gray-300 hover:text-white transition-colors">
                <MdOutlineMailOutline size={24}/>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-mono mb-4">
              <span className="text-green-400">const </span>
              <span className="text-yellow-300">technologies</span>
              <span className="text-green-400"> = </span>
              <span className="text-purple-400">{'['}</span>
            </h2>
            <ul className="space-y-2">
              {technologies.map((tech, index) => (
                <li key={tech} className="flex items-center space-x-2">
                  <span className="text-green-400">{'  '}</span>
                  <span className="text-yellow-300">&apos;{tech}&apos;</span>
                  {index !== technologies.length - 1 && <span className="text-white">,</span>}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-mono">
              <span className="text-purple-400">{']'}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="group relative w-12 h-20 flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
          <ChevronDown
            size={36}
            className="text-white group-hover:text-green-400 transition-colors z-10 animate-bounce-slow"
          />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-800"/>
      <style jsx global>{`
          @keyframes bounce-slow {
              0%, 100% {
                  transform: translateY(-25%);
                  animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
              }
              50% {
                  transform: translateY(0);
                  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
              }
          }

          .animate-bounce-slow {
              animation: bounce-slow 2s infinite;
          }
      `}</style>
    </div>
  )
}