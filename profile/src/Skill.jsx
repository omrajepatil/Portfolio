import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css'

const skillsData = [
  { name: 'HTML', image: '../public/images/html.png' },
  { name: 'CSS', image: '../public/images/css.png' },
  { name: 'JavaScript', image: '../public/images/js.png' },
  { name: 'React', image: '../public/images/react.png' },
  { name: 'Node.js', image: '../public/images/node.png' },
  { name: 'Express', image: '../public/images/express.png' },
  { name: 'Java', image: '../public/images/java.png' },
  { name: 'Python', image: '../public/images/python.png' },
  { name: 'SQL', image: '../public/images/sql.png' },
  { name: 'Git', image: '../public/images/git.png' },
  { name: 'Mongodb', image: '../public/images/mongo.png' },
  { name: 'Tailwind', image: '../public/images/tailwind.png' },
];

const Skill = () => {

  const{ref:skills, inView:skillView} = useInView({
    threshold: 0.5,
  })
  return (
    <div className="min-h-screen bg-indigo-700 flex flex-col items-center py-12" id='skill'>
      <h2 className="text-3xl font-bold text-gray-800 mb-8"><span className='text-white'>Skills &</span>   <span className='text-yellow-500'>Abilities</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {skillsData.map((skill) => (
          <div 
            key={skill.name} 
            
            className="relative group overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <img 
              src={skill.image} 
              alt={skill.name} 
              ref={skills}
              className={`w-full h-32 object-fit-cover transition-transform duration-300 transform group-hover:scale-110 ${skillView ? 'animate__animated animate__rubberBand' : ''}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-lg">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
