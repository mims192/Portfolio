import React, { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion";


const Projects = () => {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' })
  }

  const projects = [
    {
      image: "/assets/Ecotrack.jpeg",
      title: "Carbon Footprint Tracker",
      description: "A web app that tracks and visualizes your daily carbon emissions, helping you understand and reduce your environmental impact.",
      link: "https://github.com/mims192/Carbon-Footprint-Tracker",
    },
    {
      image: "/assets/Quizzer.jpeg",
      title: "Quiz Application",
      description: "Interactive quiz app with timed questions, score tracking, and multiple categories.User can create and join quizzes",
      link: "https://github.com/mims192/Quiz-Application",
    },
    {
      image: "/assets/vocalflow.jpeg",
      title: "VocalLabs",
      description: "An AI-powered voice interface platform for building and testing speech-driven web experiences.",
      link: "https://dainty-palmier-08b62d.netlify.app/",
    },
    {
      image: "/assets/financedashboard.jpeg",
      title: "Finance Dashboard",
      description: "Real-time personal finance dashboard with charts, budgeting tools, and transaction tracking.",
      link: "https://finance-dashboard-v2.netlify.app/",
    },
    {
      image: "/assets/backendh.jpeg",
      title: "Web Scraper",
      description: "A Node.js scraper that pulls and aggregates headlines from Google News with filtering and export.",
      link: "https://github.com/mims192/Scraping-Google-News",
    },

    {
      image: "/assets/backendh.jpeg",
      title: "Real Time Device Tracker",
      description: "Socket-based app that tracks and displays device locations in real time on an interactive map.",
      link: "https://github.com/mims192/Real-Time-Device-Tracker",
    },
  ]

  return (
       <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      id="projects"
    >
    <section className="bg-gray-50 min-h-screen py-30" id='projects'>

      <div className="max-w-6xl mx-auto px-6">

       
        <h2 className="text-center text-gray-900 text-4xl md:text-4xl font-bold mb-12 tracking-tight">
          PROJECTS
        </h2>

        <div className="flex items-start gap-3">

          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="flex-shrink-0 mt-45 w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600
                       text-white flex items-center justify-center transition-all duration-200
                       hover:scale-105 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="grid grid-flow-col auto-cols-[100%]
             sm:auto-cols-[48%]
             lg:auto-cols-[32%]
             gap-6 overflow-x-auto scroll-smooth py-2
             [scrollbar-width:none]
             [-ms-overflow-style:none]
             [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((proj, i) => (
              <Card
                key={i}
                image={proj.image}
                title={proj.title}
                description={proj.description}
                handleClick={() => window.open(proj.link, "_blank")}
              />
            ))}
          </div>

          <div className='flex items-center justify-center'>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className=" mt-45 w-9 h-9 rounded-full  bg-orange-500 hover:bg-orange-600
                       text-white flex items-center justify-center transition-all duration-200
                       hover:scale-105 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    </motion.section>
  )
}

export default Projects