import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Spacer } from '../components/Spacer';
import { contactData } from '../data';

// ... (your imports)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    message: '',
    success: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const discordWebhookUrl = 'YOUR_DISCORD_WEBHOOK_URL'; // Replace with your actual Discord webhook URL

    try {
      const response = await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `New form submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        }),
      });

      if (response.ok) {
        setSubmissionStatus({ message: 'Form data sent successfully!', success: true });
      } else {
        setSubmissionStatus({ message: 'Failed to send form data. Please try again.', success: false });
      }
    } catch (error) {
      console.error('Error sending form data to Discord:', error);
      setSubmissionStatus({ message: 'Error sending form data. Please try again later.', success: false });
    }

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='contactSection' className='pb-16 px-8 md:px-11'>
      {/* ... (your existing JSX) */}
      <form id="contactform" action="#" method="POST" onSubmit={handleSubmit}>
        {/* ... (your existing form fields) */}
        <div className='mb-6'>
          <button type='submit' className='bg-celeste text-white px-4 py-2 rounded-md hover:bg-celesteOscuro'>
            Send Message
          </button>
        </div>
      </form>
      {submissionStatus.message && (
        <div className={`text-xl font-bold ${submissionStatus.success ? 'text-green-500' : 'text-red-500'}`}>
          {submissionStatus.message}
        </div>
      )}
    </section>
  );
};

export default Contact;

