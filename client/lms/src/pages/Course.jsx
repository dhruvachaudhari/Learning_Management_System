// import React from 'react'
// import ReactPlayer from 'react-player';
// import photo from "C:/Users/Dhruva/Pictures/440142_black and white eagle ___ _xl-1024-v1-0.png"
// import Questionare from '../components/Questionare';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import Modules from '../components/Modules';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Course = () => {
//   const { courseid, moduleid } = useParams();
//   const [modulesTitle, setmoduleTitle] = useState([]);
//   const [lesson, setlesson] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [completedModules, setCompletedModules] = useState([]);

//   const fetchmodulestitle = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/course/${courseid}`)
//       console.log(response.data)
//       setmoduleTitle(response.data)

//     } catch (err) { console.log(err) }
//   }


//   const fetchlesson = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/course/${courseid}/${moduleid}`)
//       console.log([response.data])
//       setlesson([response.data])
//       setLoading(false);
//     } catch (err) { console.log(err) }
//   }

//   const fetchCompletedModules = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/course/${courseid}/${moduleid}/completed-modules`);
//       setCompletedModules(response.data.completedModules);
//     } catch (error) {
//       console.error('Error fetching completed modules', error);
//     }
//   };

//   useEffect(() => {
//     fetchmodulestitle();
//     fetchlesson();
//     fetchCompletedModules();
//   }, [courseid, moduleid]);

//   const module = [{
//     id: 1,
//     title: "First",
//     url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
//   }
//     ,
//   {
//     id: 2,
//     title: "Second",
//     url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
//   }
//     ,
//   {
//     id: 3,
//     title: "Third",
//     url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
//   }
//     ,
//   {
//     id: 4,
//     title: "Fourth",
//     url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
//   }
//     ,
//   {
//     id: 5,
//     title: "Fifth",
//     url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
//   }
//     ,
//   {
//     id: 6,
//     title: "Sixth",
//     url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
//   }
//     ,
//   {
//     id: 7,
//     title: "Seventh",
//     url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
//   }
//     ,
//   {
//     id: 8,
//     title: "Eigth",
//     url: "<https://youtu.be/qYBIJwsjLLE?si=lq39g6ndED6EHLh2"
//   }
//     ,

//   ]


//   return (
//     <div className="flex h-dvh w-full bg-blue_dark text-text-white  ">

//       {/* Sidebar */}
//       <aside className="flex-shrink-0 w-[300px] bg-[#23282E] p-4 sticky top-0 text-[20px] overflow-auto">
//         {/* <button className='h-auto w-auto bg-blue-500 p-1 rounded-md text-white hover:to-blue-700'  >
//             Back
//           </button> */}
//         <h1 className='text-[25px] m-3'>Modules</h1>
//         <div className='flex flex-col gap-5 '>
//           {lesson.map((lesson, index) => {
//             console.log(lesson)
//             const isCompleted = completedModules.includes(lesson.id);
//             return (

//               <Link key={index} to={`/course/${courseid}/module/${lesson.id}`}>
//                 <div
//                   key={index}
//                   className={`hover:border hover:border-white hover:text-white p-3 text-balance text-justify `}
//                 >
//                   <input type="checkbox" checked={isCompleted} readOnly className='mr-2' />
//                   {lesson.title}
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </aside>


//       <main className="flex-grow h-auto flex flex-col  m-10 overflow-x-auto scroll-smooth ">



//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <>
//             {/* {console.log(lesson)} */}
//             <Modules modules={lesson} />
//           </>
//         )}

//       </main>

//     </div>
//   )
// }

// export default Course


import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Modules from '../components/Modules';

const Course = () => {
  const { courseid, moduleid } = useParams();
  const [modulesTitle, setModulesTitle] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completedModules, setCompletedModules] = useState([]);

  const fetchModulesTitle = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/course/${courseid}`);
      // console.log(response.data);
      setModulesTitle(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLessons = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/course/${courseid}/${moduleid}`);
      // console.log(response.data);
      setLessons([response.data]); // Ensure lessons is an array
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCompletedModules = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/course/${courseid}/${moduleid}/completed-modules`);
      setCompletedModules(response.data.completedModules);
    } catch (error) {
      console.error('Error fetching completed modules', error);
    }
  };

  useEffect(() => {
    fetchModulesTitle();
    fetchLessons();
    fetchCompletedModules();
  }, [courseid, moduleid]);

  return (
    <div className="flex h-dvh w-full bg-blue_dark text-text-white">
      {/* Sidebar */}
      <aside className="flex-shrink-0 w-[300px] bg-[#23282E] p-4 sticky top-0 text-[20px] overflow-auto">
        <h1 className='text-[25px] m-3'>Modules</h1>
        <div className='flex flex-col gap-5'>
          {modulesTitle.map((module, index) => {
            console.log(module);
            const isCompleted = completedModules.includes(module.id);
            return (
              <Link key={index} to={`/course/${courseid}/module/${module.id}`}>
                <div
                  className={`hover:border hover:border-white hover:text-white p-3 text-balance text-justify`}
                >
                  <input type="checkbox" checked={isCompleted} readOnly className='mr-2' />
                  {module.title}
                </div>
              </Link>
            );
          })}
        </div>
      </aside>

      <main className="flex-grow h-auto flex flex-col m-10 overflow-x-auto scroll-smooth">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Modules modules={lessons} />
          </>
        )}
      </main>
    </div>
  );
};

export default Course;
