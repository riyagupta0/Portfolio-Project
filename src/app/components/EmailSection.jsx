"use client"

import React from 'react'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2"

function EmailSection() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "dd84eb6c-983b-448d-9173-303608f96220");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            Swal.fire({
                title:"Success!",
                text:"Message sent successfully!",
                icon:"success"
            }).then(() => {
                setTimeout(() => {
                    window.location.reload();
                }, 1000); // reload the page after 1 second
            });
        }
    }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id="contact">
        
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2 '>
                <Link href="https://github.com/riyagupta0">
                    <Image src={GithubIcon} alt='Github Icon' />
                </Link>
                <Link href="www.linkedin.com/in/riya-gupta20">
                    <Image src={LinkedinIcon} alt='Linked In Icon' />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col ' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor="name" type="text"  className='text-white block mb-2 text-sm font-medium '>Full Name</label>
                    <input type='text' name="Name" required placeholder='Enter your name' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                </div>

                <div className='mb-6'>
                    <label htmlFor="email" type="email"  className='text-white block mb-2 text-sm font-medium '>Your email</label>
                    <input type='email' id="email" name="email" required placeholder='jacob@google.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                </div>
                
                <div className='mb-6'>
                    <label htmlFor="subject"   className='text-white block text-sm mb-2 font-medium '>Subject</label>
                    <input type='text' id="subject" name="subject" required placeholder='Just Saying hi' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                </div>

                <div className='mb-6'>
                    <label className='text-white block text-sm mb-2 font-medium'>Message</label>
                    <textarea name="message"
                    id='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder="Let&apos;s talk about.." />

                    
                </div>
                
                <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection