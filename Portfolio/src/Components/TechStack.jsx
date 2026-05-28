import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaSass
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiVite
} from "react-icons/si";

function TechStack() {
  const techStack = [
    { icon: <FaReact />, name: "ReactJS", color: "text-cyan-400" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
    { icon: <FaNodeJs />, name: "NodeJS", color: "text-green-400" },
    { icon: <SiExpress />, name: "ExpressJS", color: "text-gray-300" },
    { icon: <SiMysql />, name: "MySQL", color: "text-blue-400" },
    { icon: <FaDocker />, name: "Docker", color: "text-blue-500" },
    { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-300" },
    { icon: <FaSass />, name: "SASS", color: "text-pink-400" },
    { icon: <SiVite />, name: "Vite", color: "text-yellow-300" }
  ];

  return (
   <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      id="techstack"
    >
    <section className="py-24 bg-[#f8f8f8]">
      
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* Left Text */}
          <div className="flex items-center gap-6">
            <h2 className="text-3xl font-bold text-zinc-800">
              Tech Stack
            </h2>

            <div className="w-[2px] h-12 bg-orange-500 rounded-full"></div>
          </div>

          {/* Icons */}
          <div className="flex flex-wrap justify-center gap-5">
            
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-2xl bg-[#1c1c1c]
                           flex items-center justify-center
                           text-4xl shadow-md
                           hover:-translate-y-2
                           hover:shadow-orange-500/20
                           hover:shadow-xl
                           transition-all duration-300 cursor-pointer"
              >
                <span className={tech.color}>
                  {tech.icon}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
    </motion.section>
  );
}

export default TechStack;