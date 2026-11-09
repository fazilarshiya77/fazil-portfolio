import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { SparkleStar } from './SparkleStar';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#B8B0EA] dark:bg-[#2F274E] text-[#1E1B29] flex flex-col justify-between overflow-hidden px-6 sm:px-12 lg:px-16 pt-24 pb-8 sm:pt-28 sm:pb-10 select-none">
      
      {/* Exact 4-Point Sparkling Stars Positioned As In Reference Image */}
      {/* 1. Top Right Major Star */}
      <div className="absolute top-[12%] right-[22%] sm:right-[24%] z-20">
        <SparkleStar size={42} delay={0} className="text-white opacity-95 drop-shadow-sm" />
      </div>

      {/* 2. Top Right Minor Star (Below #1) */}
      <div className="absolute top-[22%] right-[27%] sm:right-[28%] z-20">
        <SparkleStar size={30} delay={1} className="text-white opacity-90 drop-shadow-sm" />
      </div>

      {/* 3. Left Star (Above the 'p' of portfolio) */}
      <div className="absolute top-[34%] left-[6%] sm:left-[8%] z-20">
        <SparkleStar size={32} delay={2} className="text-white opacity-90 drop-shadow-sm" />
      </div>

      {/* 4. Center-Left Star Cluster (Under the 'o' / 'r') */}
      <div className="absolute bottom-[28%] left-[28%] sm:left-[30%] z-20">
        <SparkleStar size={34} delay={0} className="text-white opacity-95 drop-shadow-sm" />
      </div>

      {/* 5. Center-Left Star 2 (Next to #4) */}
      <div className="absolute bottom-[24%] left-[38%] sm:left-[40%] z-20">
        <SparkleStar size={24} delay={1} className="text-white opacity-85 drop-shadow-sm" />
      </div>

      {/* 6. Subtle Center Star (Near the signature flourish) */}
      <div className="absolute top-[49%] right-[44%] sm:right-[46%] z-20">
        <SparkleStar size={20} delay={2} className="text-white opacity-85 drop-shadow-sm" />
      </div>

      {/* 7. Bottom Star (Underneath the LinkedIn pill) */}
      <div className="absolute bottom-[2%] left-[23%] sm:left-[25%] z-20">
        <SparkleStar size={28} delay={0} className="text-white opacity-90 drop-shadow-sm" />
      </div>

      {/* TOP BAR: Creative Presentation & Date with Arrow */}
      <div className="w-full flex items-start justify-between z-10 pt-2 sm:pt-4">
        {/* Top Left: Creative Presentation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-sm sm:text-base lg:text-lg leading-tight tracking-tight text-[#1E1B29] dark:text-[#F8F6FF]"
        >
          <div>Creative</div>
          <div>Presentation</div>
        </motion.div>

        {/* Top Right: Date & Arrow */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xs sm:text-sm font-semibold text-[#1E1B29] dark:text-[#F8F6FF] flex items-center gap-2 cursor-default"
        >
          <span>13 July, 2026</span>
          <ArrowRight className="w-4 h-4 text-[#1E1B29] dark:text-[#F8F6FF]" />
        </motion.div>
      </div>

      {/* CENTERPIECE: Massive "portfolio" with Signature Script "Fazil Arshiya" */}
      <div className="relative my-auto py-8 sm:py-16 lg:py-20 flex items-center justify-center w-full">
        
        {/* Giant White Bold Lowercase "portfolio" Title */}
        <motion.h1
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-[18vw] sm:text-[17vw] lg:text-[16vw] text-white tracking-tight leading-none drop-shadow-sm select-none lowercase text-center w-full"
        >
          portfolio
        </motion.h1>

        {/* Cursive Signature Script "Fazil Arshiya" Layered In The Center */}
        <motion.div
          initial={{ opacity: 0, y: 16, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="font-script text-[11vw] sm:text-[10vw] lg:text-[9.5vw] font-normal text-[#1E1B29] dark:text-[#120F1D] tracking-wide select-none drop-shadow-xs whitespace-nowrap px-4">
            Fazil Arshiya
          </span>
        </motion.div>

      </div>

      {/* BOTTOM ROW: Social Icons & Details Strip (Directly Matches Reference Layout) */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="w-full z-10 pt-4 flex flex-wrap items-center justify-between gap-y-4 gap-x-6 text-[#1E1B29] dark:text-[#F8F6FF]"
      >
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-mono text-xs sm:text-sm">
          
          {/* LinkedIn Pill */}
          <a
            href="https://www.linkedin.com/in/fazilarshiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1E1B29] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <LinkedinIcon className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#1E1B29] dark:text-[#F8F6FF]">
              Fazil Arshiya
            </span>
          </a>

          {/* Email Pill */}
          <a
            href="mailto:fazil1ga22is053@gmail.com"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1E1B29] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#1E1B29] dark:text-[#F8F6FF]">
              fazil1ga22is053@gmail.com
            </span>
          </a>

          {/* GitHub / Code Pill */}
          <a
            href="https://github.com/fazilarshiya77"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1E1B29] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <GithubIcon className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#1E1B29] dark:text-[#F8F6FF]">
              fazilarshiya77
            </span>
          </a>

          {/* Live / Instagram Pill */}
          <a
            href="https://www.linkedin.com/in/fazilarshiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1E1B29] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <InstagramIcon className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#1E1B29] dark:text-[#F8F6FF]">
              fazilarshiya_
            </span>
          </a>

        </div>

        {/* Scroll Hint / Live Deployments Indicator */}
        <div className="font-mono text-xs font-bold text-[#1E1B29]/80 dark:text-[#F8F6FF]/80 flex items-center gap-2 ml-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>5 Production Client Deployments</span>
        </div>
      </motion.div>

    </section>
  );
};
