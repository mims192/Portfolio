import React from 'react'

const Card = ({ image, title, description, handleClick }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 
                    hover:shadow-md transition-all duration-300 flex flex-col">

      {/* Small thumbnail preview — not full bleed */}
      <div className="mx-4 mt-4 rounded-xl overflow-hidden bg-gray-100 h-36 relative flex-shrink-0">
        {image ? (
          <img
            className="w-full h-full object-cover object-top"
            src={image}
            alt={title}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-300 text-3xl">⬜</span>
          </div>
        )}

     
      </div>

     
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h2 className="text-gray-900 text-lg font-bold leading-snug">
          {title}
        </h2>

        {description && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-4 flex-1">
            {description}
          </p>
        )}

       
        <div className="flex items-center gap-3 pt-2">
          <span className="text-gray-800 font-medium text-sm">Explore</span>
          <button
            onClick={handleClick}
            aria-label={`Explore ${title}`}
            className="w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600 
                       flex items-center justify-center transition-all duration-200
                       hover:scale-105 shadow-sm flex-shrink-0"
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor"
              strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Card