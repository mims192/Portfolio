import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  const handleContact=()=>{
      
  }
  return (
     <motion.section
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              id="hero"
            >
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between 
                    px-6 md:px-16 py-10  " id="hero"
       >

      
      <div className="flex-1 space-y-6 text-center md:text-left">

        <h1 className="text-4xl md:text-6xl font-bold mt-10">
          Hi, I'm{" "}
          <span className="text-orange-400">
            Mimansa Sahay
          </span>
        </h1>

     
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-500">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>

  
        <div className="flex gap-4 justify-center md:justify-start">
           <a href="#footer" className="hover:text-white">
          <button className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition" >
            Contact Me
          </button>
          </a>
        <a href="#projects" className="hover:text-black">
 <button className="border border-gray-500 px-6 py-3 rounded-full hover:border-gray-200 transition">
            View Work
          </button>
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0 relative">

        
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-orange-500 rounded-full blur-3xl opacity-40"></div>


        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-400 shadow-[0_0_60px_rgba(249,115,22,0.6)]">
          <img
            className="w-full h-full object-cover"
            src="/assets/prof.jpeg"
            alt="profile"
          />
        </div>

      </div>

    </div>
    </motion.section>
  );
};

export default Hero;

{/*h-[80vh]*/}
