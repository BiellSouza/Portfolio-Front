import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function SlideDown() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border border-white bg-white/30 w-[300px] h-44 ">
        <div className="flex justify-between items-center h-full">
          {' '}
          <div className="text-white flex w-fit hover:scale-105 transition-all duration-300 cursor-pointer justify-start items-start">
            <ChevronLeft width={24} />
          </div>
          <div className="text-white flex w-fit hover:scale-105 transition-all duration-300 cursor-pointer justify-end items-center">
            <ChevronRight width={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideDown
