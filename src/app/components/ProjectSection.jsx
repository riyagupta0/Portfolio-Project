"use client"
import React, {useRef, useState} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTag from "./ProjectTag"
import { motion, useInView} from "framer-motion";

const Project_data = [
    {
        id:1,
        title: "React Portfolio Website",
        description:"Project1 Description",
        image: "/images/Projects/Portfolio-image.png",
        tag:[ "All" , "Web", "Mobile"],
        gitUrl : "https://github.com/riyagupta0/Portfolio-Project",
        previewUrl: "https://portfolio-project-five-ivory.vercel.app/"
    },
    {
        id: 2,
        title: "netflix Clone",
        description: "Project2 description",
        image:"/images/Projects/Netflix-image.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/riyagupta0/StreamFlix",
        previewUrl: "https://netify-build-clone.web.app/"

    },
    {
        id: 3, 
        title: "Tic-Tac-Toe",
        description:"Project3 description",
        image:"/images/Projects/Tic-tac-toe.png",
        tag: ["All", "Web"],
        gitUrl : "https://github.com/riyagupta0/tic-tac-toe",
        previewUrl: "https://github.com/riyagupta0/tic-tac-toe"
    },
    {
        id: 4, 
        title: "Amazon-Clone",
        description:"Project 4 description",
        image:"/images/Projects/Amazon-clone.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/riyagupta0/amazon_clone",
        previewUrl: "https://github.com/riyagupta0/amazon_clone"
    },
]
function ProjectSection() {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) =>{
        setTag(newTag);
    }
    const filterdProjects = Project_data.filter((project) =>
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

  return (
    <section id="projects">
    <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name= "All" isSelected= {tag === "All"  } />
        <ProjectTag onClick={handleTagChange} name= "Web" isSelected= {tag === "Web"  } />
        <ProjectTag onClick={handleTagChange} name= "Mobile" isSelected= {tag === "Mobile"  } />
    </div>
    <div ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filterdProjects.map((project, index) => 
            <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{duration:0.3 , delay:index * 0.4}} >
           
            <ProjectsCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} tags={project.tag} gitUrl= {project.gitUrl} previewUrl={project.previewUrl}/>
            </motion.li>
        )} 
    </div>
    </section>
  )
}

export default ProjectSection