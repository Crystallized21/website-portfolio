"use client"

import {Briefcase, Home, Mail, Menu, User} from 'lucide-react'
import {Icon} from '@iconify/react';
import Image from "next/image";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {ModeToggle} from "@/components/ModeToggle";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const navLinks = [
  {name: 'Home', icon: <Home className="w-8 h-8"/>, url: '/'},
  {name: 'Profile', icon: <User className="w-8 h-8"/>, url: '/profile'},
  {name: 'Projects', icon: <Briefcase className="w-8 h-8"/>, url: '/projects'},
  {name: 'Contact', icon: <Mail className="w-8 h-8"/>, url: '/contact'},
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Icon icon="skill-icons:github-dark" className="w-8 h-8"/>,
    username: '@Crystallized21',
    url: 'https://github.com/Crystallized21',
    hoverOutlineClass: 'hover:border-gray-500',
  },
]

export default function HomePageHero() {
  return (
    <div className="bg-background text-foreground min-h-screen p-6">
      <nav className="flex justify-between items-center mb-12 relative ">
        <Link href="/" className="flex items-center">
          <Button variant="ghost" size="icon">
            <Home/>
          </Button>
        </Link>
        <div className="flex items-center space-x-4">
          <ModeToggle/>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link href={link.url} className="flex items-center">
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
        <div className="md:w-1/3 mb-12 md:mb-0">
          <Image
            src="https://github.com/Crystallized21.png"
            alt="Profile"
            className="rounded-full mb-6"
            width="180"
            height="180"
          />
          <h1 className="text-4xl font-bold mb-2">Michael Bui</h1>
          <p className="text-xl text-gray-400">Crystallized21</p>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 bg-background text-left">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-background p-4 rounded-lg flex flex-col items-start text-left border transition-all duration-300 ease-in-out ${link.hoverOutlineClass}`}
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <div className="mb-2">{link.icon}</div>
              <h2 className="font-semibold text-sm">{link.name}</h2>
              <p className="text-xs text-gray-400">{link.username}</p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>2024 Crystallized Project.</p>
      </footer>
    </div>
  )
}