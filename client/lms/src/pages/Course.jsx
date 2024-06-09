import React from 'react'
import ReactPlayer from 'react-player';
import photo from "C:/Users/Dhruva/Pictures/440142_black and white eagle ___ _xl-1024-v1-0.png"
import Questionare from '../components/Questionare';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Modules from '../components/Modules';


const Course = () => {
  const { courseid } = useParams();
  const { moduleid } = useParams();

  const modules = [{
    id: 1,
    title: "First",
    url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
  }
    ,
  {
    id: 2,
    title: "Second",
    url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
  }
    ,
  {
    id: 3,
    title: "Third",
    url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
  }
    ,
  {
    id: 4,
    title: "Fourth",
    url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
  }
    ,
  {
    id: 5,
    title: "Fifth",
    url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
  }
    ,
  {
    id: 6,
    title: "Sixth",
    url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
  }
    ,
  {
    id: 7,
    title: "Seventh",
    url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
  }
    ,
  {
    id: 8,
    title: "Eigth",
    url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
  }
    ,

  ]
  return (
    <div className="flex h-dvh w-full bg-blue_dark text-text-white  ">

      {/* Sidebar */}
      <aside className="flex-shrink-0 w-[300px] bg-[#23282E] p-4 sticky top-0 text-[20px] overflow-auto">
        {/* <button className='h-auto w-auto bg-blue-500 p-1 rounded-md text-white hover:to-blue-700'  >
          Back
        </button> */}
        <h1 className='text-[25px] m-3'>Modules</h1>
        <div className='flex flex-col gap-5 '>
          {modules.map((lesson, index) => {
            return (
              <Link to={`/course/${courseid}/module/${index + 1}`}>
                <div key={index} className='hover:border hover:border-white hover:text-white p-3 text-balance text-justify'>
                  <li>{lesson.title}</li>
                </div>
              </Link>
            );
          })}
        </div>
        {/* <li>first</li>
        <li>second</li>
        <li>third</li>
        <li>fourth</li>
        <li>fifth</li>
        <li>sixth</li>
        <li>seventh</li>
        <li>eigth</li> */}


      </aside>

      {/* Main Content Area */}
      <main className="flex-grow h-auto flex flex-col  m-10 overflow-x-auto scroll-smooth ">

        {moduleid === null ? (<Modules modules={modules[0]} />) : (<Modules modules={modules[moduleid]} />)}



      </main>

    </div>
  )
}

export default Course
