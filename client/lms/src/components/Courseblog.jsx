import React, { useEffect } from 'react'
import ReactLinesEllipsis from 'react-lines-ellipsis';
import alt from "E:/MERN Stack/9A-internship/LMS/Learning_Management_System/client/lms/public/uploads/default.jpg"
import { useState } from 'react';
import axios from "axios"

const Courseblog = ({ course }) => {
  const [percentage, setPercentage] = useState(0);

  const fetchProgress = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/course/${course.id}/progress`);
      setPercentage(response.data.percentage);
    } catch (error) {
      console.error('Error fetching progress:', error);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);
  // const percentage = 75
  const circleRadius = 16;
  const circleCircumference = 2 * Math.PI * circleRadius;
  let progressOffset;

  if (percentage === 0) {
    progressOffset = circleCircumference
  } else {
    progressOffset = circleCircumference - (percentage / 100) * circleCircumference;
  }

  const [img, setimage] = useState("")
  return (
    <div className=' group flex flex-col gap-1 border border-[#ECEBE4] hover:border-2  rounded-md h-[400px] w-[425px] bg-[#2C353A] transition-all '>
      <img className=' w-full group-hover:h-[200px] h-[225px] object-cover rounded-md transition-all duration-300 z-20' src={img} onError={() => { setimage(alt) }} />
      <p className=' mt-2 ml-2  text-lg '>{course.name}</p>
      <ReactLinesEllipsis className=' ml-2 mt-2' text={course.description} maxLine={2} />
      <div className=" m-2 relative size-20">
        <svg className="size-full" width="16" height="16" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          {/* Background Circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-gray-200 dark:text-neutral-700"
            strokeWidth="2"
          ></circle>
          <g className="origin-center -rotate-90 transform">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-teal-600 dark:text-teal-500"
              strokeWidth="2"
              strokeDasharray={circleCircumference}
              strokeDashoffset={progressOffset}
            ></circle>
          </g>
        </svg>
        {/* Percentage Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-l font-bold text-gray-800 dark:text-white">{percentage}%</span>
        </div>
      </div>

    </div>
  )
}

export default Courseblog
