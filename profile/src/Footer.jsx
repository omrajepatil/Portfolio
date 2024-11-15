import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className='bg-blue-950 text-white py-8'>
        <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 place-content-center' >
            <div>
                <h2 className='font-serif text-xl mb-4'>Omraje's Portfolio</h2>
                
                <p>Thanks for visiting my personal portfolio website. Connect with me over Socials</p>
            </div>

            <div>
                <h2 className='font-semibold'>Quick Links</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#project">Projects</a></li>
                </ul>

            </div>

            <div>
                <h2 className='font-semibold'>Contact Info</h2>
                <div>
                <p className='flex flex-row '>< FaPhoneAlt className='mx-2 my-1'/> +91 xxx-xxx-xxxx</p>
                <p className='flex flex-row '>< IoMdMail className='mx-2 my-1'/> omraje@gmail.com</p>
                <p className='flex flex-row '>< FaMapLocationDot className='mx-2 my-1'/> Address: XYZ</p>

                </div>

                <div className='flex space-x-8 mt-4 mx-2'>
                <a className='w-1 h-1  hover:w-2 hover:h-2 ' href="https://www.instagram.com/omraje_09/?next=%2F"><FaInstagramSquare /></a>
                <a className='w-1 h-1  hover:w-2 hover:h-2 ' href="https://www.linkedin.com/in/omraje-patil-077ab0252/"><FaLinkedinIn /></a>
                <a className='w-1 h-1  hover:w-2 hover:h-2 ' href="#hi=ome"><FaTwitter /></a>
                <a className='w-1 h-1  hover:w-2 hover:h-2 ' href="https://github.com/omrajepatil"><FaGithubSquare /></a>
                <a className='w-1 h-1  hover:w-2 hover:h-2 ' href="#home"><FaFacebook /></a>

                </div>
            </div>
            
        </div>
        <hr className="border-t-2 border-gray-400 mx-8 mt-6"/>
        <div className='flex justify-center '>
            <p className='mt-1 font-bold'>Made With ❤️ by <span className='text-yellow-500'>Omraje Patil</span></p>
        </div>
    </div>
    </>
  )
}

export default Footer