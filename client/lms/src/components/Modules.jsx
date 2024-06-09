import React from 'react'
import ReactPlayer from 'react-player';
import photo from "C:/Users/Dhruva/Pictures/440142_black and white eagle ___ _xl-1024-v1-0.png"
import Questionare from '../components/Questionare';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Modules = ({ modules }) => {
  return (
    <div>
      <div className=' pt-[56.25%] relative'>
        <ReactPlayer url={modules.url}
          width="100%"
          height="100%"
          controls={true}
          className="absolute top-0 left-0"
        // light={<img className=' object-cover w-full border rounded-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5eZmrp4wNJuB_j2yhpgKSvEKznl_8v16Vg&s" alt='Thumbnail' />}
        />
      </div>
      <div className='flex w-[1000px] text-md  h-auto flex-col flex-wrap items-start m-2 p-2 '>
        <h1 className='text-[40px] m-2'>{modules.title}</h1>
        <span>{modules.id}</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consequuntur cupiditate? Sequi tempora, nesciunt aspernatur reiciendis soluta mollitia temporibus perferendis numquam corrupti totam quaerat eos molestiae dolore ipsum sapiente. Odio.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi dolore voluptate non quae hic nulla quasi cupiditate natus sunt illo molestiae praesentium, dignissimos eligendi accusamus quam. Quo, amet quidem?</p>

      </div>

      <div>
        <Questionare />
      </div>
    </div>
  )
}

export default Modules
