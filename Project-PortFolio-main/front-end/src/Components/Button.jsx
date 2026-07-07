import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, path}) => {
  return (
    <>
       <div className=" flex justify-center items-center">
            <div className="relative inline-flex group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <Link
                to={path}
                title=""
                className={"relative inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm  lg:text-base font-bold text-white transition-all duration-200 bg-gray-900  font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"}
                role="button"
              >
                {text}
              </Link>
            </div>
          </div>
    </>
  )
}

export default Button
