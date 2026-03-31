import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div className="w-full flex justify-center mt-4 relative z-50">
        <div className="w-[90%] max-w-4xl flex items-center justify-between px-6 py-3 
                        bg-black backdrop-blur-md rounded-full shadow-lg">


          <div className="flex items-center gap-3">
            
            {/*  Hamburger */}
            <div className="md:hidden text-white">
              <button onClick={() => setIsOpen(true)}>
                <Menu size={26} />
              </button>
            </div>

         
            <div className="hidden md:flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center 
                              bg-orange-500 text-white rounded-full font-bold">
                M
              </div>
              <span className="text-white text-lg font-semibold">Mims</span>
            </div>
          </div>

  
          <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Experience</a>
            <a href="#" className="hover:text-white">Experiments</a>
            <a href="#" className="hover:text-white">Blogs</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-orange-500 text-white 
                             px-4 py-2 rounded-full hover:bg-orange-600 transition">
            Resume ⬇
          </button>

        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
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
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#" onClick={() => setIsOpen(false)}>Experiments</a>
          <a href="#" onClick={() => setIsOpen(false)}>Blogs</a>
          <a href="#" onClick={() => setIsOpen(false)}>Contact</a>

          <button className="mt-6 bg-orange-500 px-4 py-2 rounded-full">
            Resume ⬇
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;