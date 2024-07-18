
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
      console.log(response.data);
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
      setCompletedModules(response.data.completedModules || []);
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
            const isCompleted = Array.isArray(completedModules) && completedModules.includes(module.id);

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
