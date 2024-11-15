import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css'

const projectsData = [
  {
    name: 'Placement Portal',
    image: '/images/tnp.png', // Replace with your project image URL
    description: 'a Centralized Platform for Streamlining Campus Placement.',
    github: 'https://github.com/yourusername/project-one', // Replace with your GitHub repo link
  },
  {
    name: 'QuickBite ',
    image: '/images/quickbite.png', // Replace with your project image URL
    description: 'A brief description of Project Two.',
    github: 'https://github.com/omrajepatil/QuickBite', // Replace with your GitHub repo link
  },
  {
    name: 'QuillQuiest',
    image: '/images/quillquest.png', // Replace with your project image URL
    description: 'A brief description of Project Three.',
    github: 'https://github.com/omrajepatil/QuillQuest', // Replace with your GitHub repo link
  },
  {
    name: 'Travetilitius Tour',
    image: '/images/tour.png', // Replace with your project image URL
    description: 'A brief description of Project Four.',
    github: 'https://github.com/yourusername/project-four', // Replace with your GitHub repo link
  },
  {
    name: 'Portfolio',
    image: '/images/portfolio.png', // Replace with your project image URL
    description: 'A brief description of Project Five.',
    github: 'https://github.com/omrajepatil/Portfolio', // Replace with your GitHub repo link
  },
  {
    name: 'Techy Software',
    image: '/images/techy.png', // Replace with your project image URL
    description: 'A brief description of Project Six.',
    github: 'https://github.com/omrajepatil/Project2-nexus', // Replace with your GitHub repo link
  },
];

const Projects = () => {

  const{ref:project, inView : projectView} = useInView({
    threshold: 0.5,
  })
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12" id='project'>
      <h2 className="text-3xl font-bold text-gray-800 mb-8"><span className='text-black'>Projects</span> <span className='text-indigo-600'>Made</span></h2>
      <div className='w-20 bg-yellow-800 h-1  mb-4'></div>
      <div ref={project} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl ${projectView ? 'animate__animated animate__flash' : ''}`}>
        {projectsData.map((project) => (
          <div 
            key={project.name} 
            className="relative group overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-48 object-fit-cover transition-transform duration-300 transform group-hover:scale-110"
              style={{ objectFit: 'cover' }} 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h3 className="text-white font-semibold text-lg">{project.name}</h3>
              <p className="text-gray-300 text-sm text-center">{project.description}</p>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-2 text-blue-400 hover:underline"
              >
                View GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
