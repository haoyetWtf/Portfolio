import * as React from 'react';
import { Spacer } from '../components/Spacer';
import { workExperienceData } from '../data';
import Image from 'next/image';

const WorkExperience = () => {
  return (
    <section id='workSection' className='px-11'>
      <Spacer />
      <h1 className='mb-10 text-5xl font-bold tracking-wider uppercase linearText'>My Works</h1>
      {workExperienceData.map((item, itemIdx) => {
        return (
          <div className='w-full p-8 text-blanco flex flex-col md:flex-row' key={itemIdx}>
            <div className='w-full md:w-2/3'>
              <h1 className='w-full py-3 text-2xl tracking-widest text-slate-400'>
                {item.empresa} - <mark className='bg-transparent text-blanco'>{item.rol}</mark>
              </h1>
              <h2 className='mb-5'>{item.tiempoEnRol}</h2>
              <ul style={{marginBottom: '100px'}}>
                {item.bulletItems.map((bullet, bulletIdx) => (
                  <li key={`${itemIdx}${bulletIdx}`} className='pl-5 mb-5 border-l-4 border-celesteOscuro'>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>	
            {/* Display the image within a responsive container */}
            <div className='w-full md:w-1/3 flex justify-center items-center'>
              <img
                src={item.image}
                alt={item.empresa}
                className='max-w-full h-auto md:max-h-full'
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default WorkExperience;
