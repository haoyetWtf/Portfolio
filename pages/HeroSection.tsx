import React, { useState, useEffect } from 'react';
import { heroData } from '../data';

export const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const subtitle = heroData.subtitle;
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= subtitle.length) {
        currentText = subtitle.slice(0, currentIndex);
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className='heroSection'>
      <div className='flex flex-col justify-center w-1/2 h-full p-12'>
        <h1 className='text-3xl font-bold uppercase'>{heroData.title}</h1>
        {isTyping ? (
          <h2 className='py-5 text-2xl'>{typedText}</h2>
        ) : (
          <h2 className='py-5 text-2xl'>{heroData.subtitle}</h2>
        )}
        <>
          <div style={{ width: '180px' }} className="relative block group my-7 ml-4 cursor-pointer">
            <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
            <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
              <div className="py-3 px-10 ">
                <p className="mt-1 text-xl"><a href="#Contact" target='_blank' rel="noreferrer">Say Hello</a></p>
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default HeroSection;
