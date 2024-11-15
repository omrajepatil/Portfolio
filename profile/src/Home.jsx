import React from 'react';
import { useState,useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


const Home = () => {

  const{ref:intro, inView: introView} = useInView({
    threshold: 0.5
  })

  const {ref:img, inView: introImg} = useInView({
    threshold: 0.5
  })

  const[text,setText] = useState("Web Development");

  useEffect(()=>{
      const texts = ['Frontend Development','Backend Development','Full Stack Development']
      let item = 0;

      

      const interval = setInterval(()=>{
        
        setText(texts[item]);
        item = (item + 1) % texts.length;
        }, 2000);

        return()=> clearInterval(interval);
      
  },[])
  

  return (
    <div className="min-h-screen bg-white flex flex-col justify-evenly items-center" id='home'>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 md:px-20 ">
        
        {/* Left Section */}
        <div ref={intro} className={`w-full md:w-1/2 text-center md:text-left ${introView ? 'animate__animated animate__rotateInDownLeft ' : ''}` }  >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 ">
            Hi There,
          </h1>
          <h2 className='font-bold text-4xl color-gray-800 mt-4'>
            I am Omraje <span className='font-bold text-violet-500'>Patil</span>
          </h2>
          <h3 className="mt-4 text-gray-600 font-bold ">
            I Am Into <span className='text-violet-900'> {`${text}`}</span>
          </h3>
          
          {/* About Me Button */}
          <a href="#about" className="mt-8 inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
            About Me 
          </a>
          
          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center md:justify-start space-x-8">
           
               <div className='w-6 h-6 rounded-lg border-2 border-sky-500 px-0.5 py-0.5 bg-sky-500 hover:bg-sky-500 hover:boredr-2 hover:border-sky-500'> <a className='w-6 h-6   ' href="https://www.linkedin.com/in/omraje-patil-077ab0252/"><FaLinkedinIn className='bg-sky-500       hover:text-white'/></a></div>
               <div className='w-6 h-6 rounded-lg border-2 border-sky-500 px-0.5 py-0.5 bg-sky-500 hover:bg-pink-500 hover:boredr-2 hover:border-pink-500'> <a className='w-1 h-1   ' href="https://www.instagram.com/omraje_09/?next=%2F"><FaInstagramSquare className='bg-sky-500 hover:text-white'/></a></div>
               <div className='w-6 h-6 rounded-lg border-2 border-sky-500 px-0.5 py-0.5 bg-sky-500 hover:bg-sky-500  hover:boredr-2 hover:border-sky-500'> <a className='w-6 h-6   ' href="#home"><FaTwitter className='bg-sky-500          hover:text-white'/></a></div>
               <div className='w-6 h-6 rounded-lg border-2 border-sky-500 px-0.5 py-0.5 bg-sky-500 hover:bg-black    hover:boredr-2 hover:border-black'> <a className='w-6 h-6   ' href="https://github.com/omrajepatil"><FaGithubSquare className='bg-sky-500       hover:text-white'/></a></div>
               <div className='w-6 h-6 rounded-lg border-2 border-sky-500 px-0.5 py-0.5 bg-sky-500 hover:bg-sky-500  hover:boredr-2 hover:border-sky-500'> <a className='w-6 h-6   ' href="#home"><FaFacebook className='bg-sky-500         hover:text-white'/></a></div>

          </div>
          </div>

        {/* Right Section */}
        <div ref={img} className={`w-full md:w-1/2 flex justify-center " data-aos="slide-left ${introImg ? 'animate__animated animate__zoomInDown' : ''}`}>
          <img 
            src="../public/images/home.png" 
            alt="Omraje's Photo" 
            className="rounded-full h-96 w-96 object-cover border-4 "
          />
        </div>
      
    </div>
    </div>
  );
};

export default Home;
