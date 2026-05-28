import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     < >
    
      <div className="w-full flex justify-center mt-4 z-50 fixed">
        <div className="w-[90%] max-w-4xl flex items-center justify-between px-6 py-3
                        bg-black backdrop-blur-md rounded-full shadow-lg">

          <div className="flex items-center gap-3">

            {/* hamburger */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
              <Menu size={26} />
            </button>

            <div className="hidden md:flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center
                              bg-orange-500 text-white rounded-full font-bold">
                M
              </div>
              <span className="text-white text-lg font-semibold">Mims</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
            <a href="#hero"     className="hover:text-white transition">Home</a>
            <a href="#about"    className="hover:text-white transition">About</a>
            <a href="#exp"      className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Experiments</a>
            <a href="#footer"   className="hover:text-white transition">Contact</a>
          </div>          
          <a
            href="/assets/Mimansaresume.pdf"
            download
            className="hidden md:flex items-center gap-2 bg-orange-500 text-white
                       px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Resume ⬇
          </a>

        </div>
      </div>

      {/* MOBILE SIDEBAR OVERLAY*/}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/*MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-xs bg-black text-white z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 mt-6 text-lg">
          <a href="#hero"     onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about"    onClick={() => setIsOpen(false)}>About</a>
          <a href="#exp"      onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Experiments</a>
          <a href="#footer"   onClick={() => setIsOpen(false)}>Contact</a>

          <a
            href="/assets/Mimansaresume.pdf"
            download
            className="mt-6 inline-block bg-orange-500 hover:bg-orange-600
                       px-5 py-2 rounded-full text-white font-medium transition"
          >
            Resume ⬇
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;