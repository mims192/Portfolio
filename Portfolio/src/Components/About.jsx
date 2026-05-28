import React from 'react'
import TechStack from './TechStack'
import { motion } from "framer-motion";

const About = () => {
  return (
        <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
    >

    <div className="px-6 md:px-16 py-16  bg-gray-50" id='about'>


      <div className="text-center mb-12">
        <h2 className="text-orange-500 text-sm tracking-widest uppercase mb-3">
          About Me
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Skills & Approach
        </h2>
      </div>


      <div className='flex justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl w-full ">


        {[
        {
  title: "Developed Responsive & User-Centric Interfaces",
  desc: "Developed pixel-perfect, accessible, and high-performance UIs that deliver seamless experiences across desktop, tablet, and mobile devices.",
},
{
  title: "Implemented Clean & Scalable Architecture",
  desc: "Implemented modular, reusable, and optimized frontend code following industry best practices for maintainability and scalability.",
},
{
  title: "Resolved Complex Frontend Challenges",
  desc: "Debugged and resolved complex UI and performance issues, improving application reliability and user experience.",
},
{
  title: "Implemented SEO & Performance Optimizations",
  desc: "Implemented semantic HTML, accessibility standards, and frontend performance optimizations to improve SEO and discoverability.",
},
{
  title: "Collaborated on Cross-Functional Solutions",
  desc: "Collaborated effectively with teams to translate business requirements into intuitive and scalable frontend solutions.",
},
{
  title: "Adapted to Modern Technologies Quickly",
  desc: "Continuously explored and adapted to modern tools, frameworks, and development practices to build efficient applications.",
},
        ].map((item, i) => (
          <div
            key={i}
            className=" p-3 rounded-xl bg-white/5 hover:bg-orange-200  border 
                    border-orange-500 transition duration-300 
                       hover:shadow-lg hover:shadow-orange-500/10"
            
          >
            <h3 className="text-sm font-semibold text-orange-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
</div>
      </div>
      <TechStack/>
    </div>
      </motion.section>
  )
}

export default About