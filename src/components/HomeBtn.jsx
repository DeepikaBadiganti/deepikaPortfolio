"use client"
import { Home } from 'lucide-react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import React from 'react'

const NavLink = motion(Link)

const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/"}
      target={"_self"}
      className="text-foreground rounded-full flex items-center justify-center
      bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset 
       hover:shadow-glass-sm  fixed top-4 left-4 self-start z-20"
      aria-label={"home"}
      name={"home"}
    >
      <span className="relative peer w-10 h-10 xs:w-14 xs:h-14  p-3 sm:p-4 hover:text-cyan-400">
        <Home className="w-full h-auto" strokeWidth={1.5} />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md  shadow-lg whitespace-nowrap">
          Home
        </span>
      </span>
    </NavLink>
  );
}

export default HomeBtn
