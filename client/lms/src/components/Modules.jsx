import React from 'react'
import ReactPlayer from 'react-player';
import Questionare from '../components/Questionare';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Modules = ({ modules }) => {

  // const { courseid, moduleid } = useParams();

  // const [question, setQuestion] = useState([])


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
