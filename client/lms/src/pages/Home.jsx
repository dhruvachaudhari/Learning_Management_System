import React from 'react'
import Courseblog from '../components/Courseblog'
import { Link } from 'react-router-dom'

const Home = () => {

    const course = [
        {
            "id": 1,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IdRtv9JftnO3vOW2TNYFtjfWq1G8hcaWIjWEeY0Q-FVyZa863EN4gIIJog&s",
            "name": "Web Development",
            "desc": "LEarn web development",
            "duration": "30+ hours"
        },

        {
            "id": 2,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IdRtv9JftnO3vOW2TNYFtjfWq1G8hcaWIjWEeY0Q-FVyZa863EN4gIIJog&s",
            "name": "Web Development",
            "desc": "LEarn web development",
            "duration": "30+ hours"
        },
        {
            "id": 3,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IdRtv9JftnO3vOW2TNYFtjfWq1G8hcaWIjWEeY0Q-FVyZa863EN4gIIJog&s",
            "name": "Web Development",
            "desc": "LEarn web development",
            "duration": "30+ hours"
        },
        {
            "id": 4,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IdRtv9JftnO3vOW2TNYFtjfWq1G8hcaWIjWEeY0Q-FVyZa863EN4gIIJog&s",
            "name": "Web Development",
            "desc": "LEarn web development",
            "duration": "30+ hours"
        }
    ]
    return (

        <div className='flex flex-col p-10 h-dvh w-full bg-blue_dark text-text-white overflow-x-auto scroll-smooth'>

            <h1 className=' text-[30px] mb-2'>Courses</h1>
            <div className='flex flex-row flex-wrap gap-10 '>
                {course.map((course, index) => {
                    return (
                        <Link to={`/course/${course.id}/module/0`}>
                            <Courseblog key={index} course={course} />
                        </Link>


                    );
                })}

            </div>
        </div>

    )
}

export default Home
