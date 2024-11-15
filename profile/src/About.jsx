import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css'

const About = () => {

  const {ref:about , inView : aboutImg} = useInView({
    threshold: 0.5
  })

  const {ref:text , inView : aboutText} = useInView({
    threshold: 0.5
  })
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12" id='about'>
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Left Section: Avatar Image */}
        <div ref={about} className={`w-full md:w-1/3 flex justify-center ${aboutImg ? 'animate__animated animate__rubberBand' : ''}`}>
          <img 
            src="/images/self photo.jpg" 
            alt="Omraje's Avatar" 
            className=" h-80 w-64 object-cover border-4"
          />
        </div>
        
        {/* Right Section: About Info */}
        <div ref={text} className={`w-full md:w-2/3 ${aboutText ? 'animate__animated animate__rotateInDownLeft' : ''}`}>
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hi, I'm Omraje, a passionate web developer with experience in building dynamic and responsive websites. 
            My goal is to create engaging user experiences while leveraging modern web technologies.
            I have expertise in HTML, CSS, JavaScript, React, and Node.js.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            Whether it’s creating visually stunning front-end designs or implementing powerful back-end systems, 
            I always strive for excellence and efficiency in every project I work on.
          </p>
          <a href="https://drive.google.com/file/d/1b3SKTSHKXznXgEmUxqg1KEWBDtuCVwL-/view?usp=drive_link">
          <button  className='mt-8 inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300'>Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
