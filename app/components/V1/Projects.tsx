import axios from 'axios'
import React from 'react'

interface ProjectCardInterface {
  title:string,
  description:string,
  imgUrl:string,
  technologies:string[]
}

const fetchData = async()=>{
    // return await axios.get("https://typicode")
}

export default async function Projects() {
  const techArr = ["node", "react", "express", "mongdb"]
  return (
    <div id="projects" className=''>
        <h1 className="text-[1.5rem] md:text-[2rem] mt-[1rem] tracking-loose font-bold ml-[5rem]">Projects</h1>
        <div className='flex flex-wrap gap-[2rem] md:mx-[5rem] md:my-[2rem]'>
          <ProjectCard
            title="TechTitans PWA"
            description="Coding and development website to manage college coding clubs"
            imgUrl="/techtitans.jpeg"
            technologies={techArr}
          />

          <ProjectCard
            title="ShopEase E-commerce"
            description="An advanced e-commerce platform built for small businesses to sell online easily."
            imgUrl="/exim.jpeg"
            technologies={techArr}
          />

          <ProjectCard
            title="Foodie's Delight"
            description="A restaurant recommendation platform with real-time user reviews and ratings."
            imgUrl="/indiaport.jpeg"
            technologies={techArr}
          />

          <ProjectCard
            title="TaskMaster Pro"
            description="A project management tool for agile teams, supporting kanban boards and real-time updates."
            imgUrl="/conway.jpeg"
            technologies={techArr}
          />
          
        </div>
    </div>
  )
}


const ProjectCard = ({title,description,technologies,imgUrl}:ProjectCardInterface) =>{
  return <div className='md:w-[18rem] md:h-[25rem] border border-[#ebebeb0b]  p-[1rem] rounded flex flex-col gap-[.5rem] backdrop-blur-sm shadow-sm shadow-[#ffffff1b]'>
            <div>
                  <img className='h-[10rem] w-full object-cover object-center bg-purple-600 rounded' src={imgUrl} alt={`${title} project image`} />
            </div>
            <h4 className='font-semibold text-[1.2rem] uppercase'>
                  {title}
            </h4>
            <p className=' text-[1rem]'>
                  {description}
            </p>
            <ul className='flex flex-wrap gap-1'>
                  {technologies.map((tech,i)=>{
                    return <li key={tech+i} className='bg-purple-300 text-purple-900 px-[.5rem] py-[.3rem] rounded text-[.8rem]'>{tech}</li>
                  })}
            </ul>
  </div>
}
