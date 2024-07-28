"use client"
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";
import Link from "next/link"
const PATH_RESUME =
  "https://drive.google.com/file/d/1qZvJ_zAvAzSAZPU4NdUe4EV0CnVm9jEp/view?usp=sharing";
    
  
function HeroSection() {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12  '>
            <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale: 1}} transition={{duration: 0.5}} className='col-span-7 place-self-center  text-center sm:text-left justify-self-start'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-puprple-500 to-pink-600'>Hello, I&apos;m {" "}</span> 
                    <br/>
                    
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Riya Gupta',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Frontend Developer',
                            2000,
                            'Backend Developer',
                            2000,
                            'Full Stack Developer',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        
                        repeat={Infinity}
                        />
                    </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                I&apos;m a frontend and full-stack developer specializing in crafting user-friendly
            interfaces for various projects. Let&apos;s create something
            extraordinary together!
                </p>
                <div>
                <Link
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              target="blank"
              href={PATH_RESUME}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Resume
              </span>
            </Link>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image 
                    src="/images/hero-image.png"
                    alt='heroImage'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                />
                </div>
            </motion.div>
        </div>
        
    </section>
  )
}

export default HeroSection