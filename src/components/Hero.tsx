import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { SparkleStar } from './SparkleStar';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Subtle Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax offsets
  const titleX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const titleY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);
  const signatureX = useTransform(smoothMouseX, [-0.5, 0.5], [18, -18]);
  const signatureY = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const starOffsetX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const starOffsetY = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const letters = 'portfolio'.split('');

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen bg-[#B8B0EA] dark:bg-[#2F274E] text-[#1E1B29] flex flex-col justify-between overflow-hidden px-6 sm:px-12 lg:px-16 pt-24 pb-8 sm:pt-28 sm:pb-10 select-none"
    >
      {/* Dynamic Ambient Floating Gradient Orbs (Adds breathing life & warmth without altering the lavender canvas) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Peach Orb (top left) */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FAD2C0]/40 dark:bg-[#FAD2C0]/15 blur-3xl animate-float-slow" />
        {/* Soft Lilac Orb (center right) */}
        <div className="absolute top-1/3 -right-20 w-[420px] h-[420px] rounded-full bg-[#D4C9FF]/55 dark:bg-[#7562E0]/20 blur-3xl animate-float-reverse" />
        {/* Butter Highlight Orb (bottom left) */}
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-[#FDF0B5]/35 dark:bg-[#FDF0B5]/10 blur-3xl animate-float-slow" />
      </div>

      {/* Exact 4-Point Sparkling Stars with Parallax & Hover Delight */}
      <motion.div style={{ x: starOffsetX, y: starOffsetY }} className="contents">
        {/* 1. Top Right Major Star */}
        <motion.div
          whileHover={{ scale: 1.35, rotate: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="absolute top-[12%] right-[22%] sm:right-[24%] z-20 cursor-pointer"
        >
          <SparkleStar size={44} delay={0} className="text-white opacity-95 drop-shadow-md hover:text-yellow-100 transition-colors" />
        </motion.div>

        {/* 2. Top Right Minor Star (Below #1) */}
        <motion.div
          whileHover={{ scale: 1.4, rotate: -25 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="absolute top-[22%] right-[27%] sm:right-[28%] z-20 cursor-pointer"
        >
          <SparkleStar size={32} delay={1} className="text-white opacity-90 drop-shadow-md hover:text-yellow-100 transition-colors" />
        </motion.div>

        {/* 3. Left Star (Above the 'p' of portfolio) */}
        <motion.div
          whileHover={{ scale: 1.35, rotate: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="absolute top-[34%] left-[6%] sm:left-[8%] z-20 cursor-pointer"
        >
          <SparkleStar size={34} delay={2} className="text-white opacity-90 drop-shadow-md hover:text-yellow-100 transition-colors" />
        </motion.div>

        {/* 4. Center-Left Star Cluster (Under the 'o' / 'r') */}
        <motion.div
          whileHover={{ scale: 1.35, rotate: -30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="absolute bottom-[28%] left-[28%] sm:left-[30%] z-20 cursor-pointer"
        >
          <SparkleStar size={36} delay={0} className="text-white opacity-95 drop-shadow-md hover:text-yellow-100 transition-colors" />
        </motion.div>

        {/* 5. Center-Left Star 2 (Next to #4) */}
        <motion.div
          whileHover={{ scale: 1.4, rotate: 25 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="absolute bottom-[24%] left-[38%] sm:left-[40%] z-20 cursor-pointer"
        >
          <SparkleStar size={26} delay={1} className="text-white opacity-85 drop-shadow-md hover:text-yellow-100 transition-colors" />
        </motion.div>

        {/* 6. Subtle Center Star (Near the signature flourish) */}
        <motion.div
          whileHover={{ scale: 1.4, rotate: -20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="absolute top-[49%] right-[44%] sm:right-[46%] z-20 cursor-pointer"
        >
          <SparkleStar size={22} delay={2} className="text-white opacity-85 drop-shadow-md hover:text-yellow-100 transition-colors" />
        </motion.div>

        {/* 7. Bottom Star (Underneath the LinkedIn pill) */}
        <motion.div
          whileHover={{ scale: 1.35, rotate: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="absolute bottom-[2%] left-[23%] sm:left-[25%] z-20 cursor-pointer"
        >
          <SparkleStar size={30} delay={0} className="text-white opacity-90 drop-shadow-md hover:text-yellow-100 transition-colors" />
        </motion.div>
      </motion.div>

      {/* TOP BAR: Creative Presentation & Date with Arrow */}
      <div className="w-full flex items-start justify-between z-10 pt-2 sm:pt-4">
        {/* Top Left: Creative Presentation */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-sm sm:text-base lg:text-lg leading-tight tracking-tight text-[#1E1B29] dark:text-[#F8F6FF]"
        >
          <div className="hover:translate-x-1 transition-transform cursor-default">Creative</div>
          <div className="hover:translate-x-1 transition-transform cursor-default">Presentation</div>
        </motion.div>

        {/* Top Right: Date & Arrow */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ x: 4 }}
          className="font-sans text-xs sm:text-sm font-semibold tracking-normal text-[#1E1B29] dark:text-[#F8F6FF] flex items-center gap-2 cursor-pointer transition-transform"
        >
          <span>13 July, 2026</span>
          <ArrowRight className="w-4 h-4 text-[#1E1B29] dark:text-[#F8F6FF] group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>

      {/* CENTERPIECE: Massive "portfolio" with Parallax & Signature Script "Fazil Arshiya" */}
      <div className="relative my-auto py-8 sm:py-16 lg:py-20 flex items-center justify-center w-full">
        
        {/* Giant White Bold Lowercase "portfolio" Title with Staggered Letter Reveal */}
        <motion.h1
          style={{ x: titleX, y: titleY }}
          className="font-heading font-black text-[18vw] sm:text-[17vw] lg:text-[16vw] text-white tracking-tight leading-none drop-shadow-md select-none lowercase text-center w-full flex justify-center overflow-visible"
        >
          {letters.map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + idx * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -10, scale: 1.04, color: '#FFFFFF' }}
              className="inline-block transition-colors duration-150 cursor-default"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Cursive Signature Script "Fazil Arshiya" Layered In The Center with Float Animation */}
        <motion.div
          style={{ x: signatureX, y: signatureY }}
          initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.span
            animate={{
              y: [0, -6, 0],
              rotate: [-3, -2.5, -3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="font-script text-[11vw] sm:text-[10vw] lg:text-[9.5vw] font-normal text-[#1E1B29] dark:text-[#120F1D] tracking-wide select-none drop-shadow-sm whitespace-nowrap px-4"
          >
            Fazil Arshiya
          </motion.span>
        </motion.div>

      </div>

      {/* BOTTOM ROW: Social Icons & Details Strip (Directly Matches Reference Layout) */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full z-10 pt-4 flex flex-wrap items-center justify-between gap-y-4 gap-x-6 text-[#1E1B29] dark:text-[#F8F6FF]"
      >
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-sans text-xs sm:text-sm font-medium">
          
          {/* LinkedIn Pill */}
          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.linkedin.com/in/fazilarshiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-[#1E1B29] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#7562E0] group-hover:shadow-lg transition-all duration-200">
              <LinkedinIcon className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#1E1B29] dark:text-[#F8F6FF] group-hover:underline">
              Fazil Arshiya
            </span>
          </motion.a>

          {/* Email Pill */}
          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:fazil1ga22is053@gmail.com"
            className="flex items-center gap-2.5 transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-[#1E1B29] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#7562E0] group-hover:shadow-lg transition-all duration-200">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#1E1B29] dark:text-[#F8F6FF] group-hover:underline">
              fazil1ga22is053@gmail.com
            </span>
          </motion.a>

          {/* GitHub / Code Pill */}
          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/fazilarshiya77"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-[#1E1B29] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#7562E0] group-hover:shadow-lg transition-all duration-200">
              <GithubIcon className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#1E1B29] dark:text-[#F8F6FF] group-hover:underline">
              fazilarshiya77
            </span>
          </motion.a>

          {/* Live / Instagram Pill */}
          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.instagram.com/fazilarshiya_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-[#1E1B29] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#7562E0] group-hover:shadow-lg transition-all duration-200">
              <InstagramIcon className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#1E1B29] dark:text-[#F8F6FF] group-hover:underline">
              fazilarshiya_
            </span>
          </motion.a>

        </div>

        {/* Scroll Hint / Live Deployments Indicator */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="font-sans text-xs font-semibold text-[#1E1B29]/80 dark:text-[#F8F6FF]/80 flex items-center gap-2 ml-auto"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm" />
          <span>5 Production Client Deployments</span>
        </motion.div>
      </motion.div>

    </section>
  );
};
