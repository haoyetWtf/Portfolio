import { useState, ChangeEvent, FormEvent } from 'react';
import { Spacer } from '../components/Spacer';
import { contactData } from '../data';
import emailjs from 'emailjs-com';

const Contact = () => {

  return (
    <section id='contactSection' className='pb-16 px-8 md:px-11'>
      <Spacer />
      <h1 className='mb-10 text-5xl font-bold tracking-wider uppercase linearText'>Contact Me</h1>
      <div className='flex flex-col md:flex-row'>
        <ul className='w-full md:w-1/2 pr-8'>
          {contactData.map((contact, contactIdx) => (
            <a key={contactIdx} href={contact.url} target='_blank' rel='noopener noreferrer'>
              <li className='flex pl-5 mb-8 text-2xl font-light border-l-4 border-celesteOscuro hover:text-celeste'>
                <span className='flex items-center mr-4'>{contact.Icon}</span>
                {contact.text}
              </li>
            </a>
          ))}
        </ul>
        <div className='w-full md:w-1/2'>
          <form method="POST" action="https://formsubmit.co/haoyet.law@gmail.com" enctype="multipart/form-data">
            <div className='mb-4'>
              <label className='block text-xl font-light mb-2' htmlFor='name'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                className='w-full px-4 py-2 border rounded-md'
                required
                style={{ color: 'black' }}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-xl font-light mb-2' htmlFor='email'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className='w-full px-4 py-2 border rounded-md'
                required
                style={{ color: 'black' }}
              />
            </div>
            <div className='mb-6'>
              <label className='block text-xl font-light mb-2' htmlFor='message'>
                Message:
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className='w-full px-4 py-2 border rounded-md'
                required
                style={{ color: 'black' }}
              />
            </div>
            <button type='submit' className='bg-celeste text-white px-4 py-2 rounded-md hover:bg-celesteOscuro'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
