import React from 'react'

export function Loading() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col items-center">
        <div 
          className="w-5 h-5 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4"
        ></div>
       
      </div>
    </div>
  )
}