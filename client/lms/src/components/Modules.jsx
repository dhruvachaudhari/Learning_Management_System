import React from 'react'
import ReactPlayer from 'react-player';
import photo from "C:/Users/Dhruva/Pictures/440142_black and white eagle ___ _xl-1024-v1-0.png"
import Questionare from '../components/Questionare';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Modules = ({ modules }) => {

  // const { courseid, moduleid } = useParams();

  // const [question, setQuestion] = useState([])


  // const questionAll = async () => {
  //   try {
  //     const questionsData = await axios.get(`http://localhost:3000/api/course/${courseid}/${moduleid}/ques`)
  //     console.log(questionsData.data)
  //     setQuestion(questionsData.data)
  //     setLoading(true)
  //   } catch (err) {
  //     console.log("Module component question error", err)
  //   }
  // }

  // useEffect(() => {
  //   questionAll()
  // }

  //   , [moduleid])

  return (
    <div>
      {console.log(modules.vid_link)}
      <div className=' pt-[56.25%] relative'>
        <ReactPlayer url={modules.vid_link}
          width="100%"
          height="100%"
          controls={true}
          className="absolute top-0 left-0"
        // light={<img className=' object-cover w-full border rounded-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5eZmrp4wNJuB_j2yhpgKSvEKznl_8v16Vg&s" alt='Thumbnail' />}
        />
      </div>
      <div className='flex w-[1000px] text-md  h-auto flex-col flex-wrap items-start m-2 p-2 '>
        <h1 className='text-[40px] m-2'>{modules.title}</h1>

        <p>{modules.description}</p>

      </div>

      <div>
        <Questionare />

      </div>
    </div>
  )
}

export default Modules
