import React from 'react'
import ReactLinesEllipsis from 'react-lines-ellipsis';
import alt from "E:/MERN Stack/9A-internship/LMS/Learning_Management_System/client/lms/public/uploads/default.jpg"
import { useState } from 'react';

const Courseblog = ({ course }) => {

  const [img, setimage] = useState("")
  return (
    <div className=' group flex flex-col gap-1 border border-[#ECEBE4] hover:border-2  rounded-md h-[350px] w-[400px] bg-[#2C353A] transition-all '>
      <img className=' w-full group-hover:h-[200px] h-[225px] object-cover rounded-md transition-all duration-300 z-20' src={img} onError={() => { setimage(alt) }} />
      <p className=' mt-2 ml-2  text-lg '>{course.name}</p>
      <ReactLinesEllipsis className=' ml-2 mt-2' text={course.description} maxLine={2} />
      {/* <p className='ml-2 mt-2 mb-2 text-gray-400'>{course.duration}</p> */}
    </div>
  )
}

export default Courseblog
