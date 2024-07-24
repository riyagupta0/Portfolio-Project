"use client"
import React, {useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from "./TabButton"

const TAB_DATA = [
    {
        title: "Skills",
        id:"skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>C++, Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>
                    JavaScript
                </li>
                <li>React.js</li>
                <li>
                    Next.js
                </li>
                <li>Material UI</li>
                <li>Bootstrap, Tailwind CSS</li>
                <li>
                    Node.js
                </li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Git and GitHub</li>
            </ul>
        )

    },
    {
        title: "education",
        id:"education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Master of Computer Application , Chandigarh University</li>
                <li>
                    Bachelor of Science, Maharaj Sinh College, Saharanpur
                </li>
                <li>12th, Lord Mahavira Academy , Saharanpur</li>
                <li>10th, Lord Mahavira Academy, Saharanpur</li>
            </ul>
        )

    },
    {
        title: "Certification",
        id:"certification",
        content: (
            <ul className='list-disc pl-2'>
                <li >Basics of C++ (Coding Ninjas)</li>
                <li>DSA in C++(Coding Ninjas)</li>
                <li>Web Development (Apna College)</li>
                <li>React.js and Node.js (Infosys- Springboard)</li>
                <li>Python basics(Coursera)</li>
            </ul>
        )

    }
]

const AboutSection = ()  => {
    const [tab, setTab ] = useState("skills");
    const [isPending , startTransition] = useTransition();
    const handleTabChange = (id) =>{
        startTransition(() => {
            setTab(id);
        });
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
                <p className='text-base lg:text-lg'>I'm an MCA student with a strong grasp of programming languages and data structures. Passionate about problem-solving and technology, I'm eager to expand my skills in software development. With proficiency in HTML,CSS, Javascript, React.js , Node.js and C++ for DSA , I'm driven to innovate and make a meaningful impact in the tech industry.

                I love coding :)</p>
                <div className='flex flex-row mt-8'>

                    <TabButton selectTab={() => handleTabChange("skills")} active ={tab === "skills"}>{" "} Skills {" "} </TabButton>

                    <TabButton selectTab={() => handleTabChange("education")} active ={tab === "education"}>
                         {" "} Education {" "} 
                    </TabButton>

                    <TabButton selectTab={() => handleTabChange("certification")} active ={tab === "certification"}> {" " }Certifications {" "} 

                    </TabButton>
                    
                </div>
                <div className="mt-10 " >
                        {TAB_DATA.find((t) => t.id === tab).content}

                    </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection