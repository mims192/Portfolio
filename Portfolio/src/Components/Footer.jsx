import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion";

function Footer() {
  return (
     <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          id="footer"
        >
    <div className='bg-black w-full h-[40vh] flex items-center justify-center border-t border-gray-700 pt-5 rounded-t-2xl ' id='footer'>
      
      <div className='flex flex-col items-center gap-6'>
        
        <h1 className='text-3xl font-bold text-orange-500'>
          Mimansa Sahay
        </h1>

        <div className='flex gap-8  '>
          
          <a
            href="https://www.linkedin.com/in/mimansa-sahay192/"
            target="_blank"
            rel="noreferrer"
            className='text-white hover:text-orange-500 transition duration-300 text-3xl'
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/mims192"
            target="_blank"
            rel="noreferrer"
            className='text-white hover:text-orange-500 transition duration-300 text-3xl'
          >
            <FaGithub />
          </a>
        

        </div>
        <p className='text-white'>© 2026 Mimansa All Rights Reserved, Inc.</p>

      </div>

    </div>
    </motion.section>
  )
}

export default Footer