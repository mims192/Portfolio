import React from "react";
import {motion} from "framer-motion"
const WorkExp = () => {

  return (
   <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      id="exp"
    >
    <section id="exp" className="w-full py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
        Work Experience
      </h1>

      <div className="max-w-4xl ">
        <div className="border-l-2 border-orange-500 pl-6 md:pl-10 py-4">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-semibold mb-4">
            Episodic Labs
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              • Developed and deployed Node.js backend services for large-scale
              data extraction, scraping 100+ URLs and processing 1,000+
              records/day.
            </p>

            <p>
              • Built automated web scraping workflows using Puppeteer to
              extract data from dynamic websites, reducing manual data
              collection effort by 70%.
            </p>

            <p>
              • Designed optimized MySQL schemas and indexing to improve query
              performance and ensure scalable data storage.
            </p>

            <p>
              • Implemented CI/CD pipelines with GitHub Actions to automate
              build, test, and deployment workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
 </motion.section>
  );
};

export default WorkExp;