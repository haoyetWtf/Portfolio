import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { BiBrain } from 'react-icons/bi';
import { FaPython } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';


export const heroData = {
	title: 'Full Stack Developer That Love Piano',
	subtitle: 'Clement Law Hao yet',
};

export const workExperienceData = [
	{
		empresa: 'Personal Portfolio',
		rol: 'Portfolio',
		tiempoEnRol: '2023',
		bulletItems: ['My personal portfolio', 'Build with typescript and tailwind css'],
		image: "https://dasf-bg.com/en/wp-content/themes/industry/i/logo.png",
	},

];

export const aboutMeData = {
	parrafo:
	  "Hey there! I'm Clement Law Hao Yet, a seasoned web developer with a rich background spanning over 5 years in the field. My expertise encompasses a diverse range of technologies, including TypeScript, JavaScript, Next.js, React.js, Vue.js, video editing, PHP, Express.js, and Python. As a versatile professional, I seamlessly navigate the realms of development and video editing, offering freelance services in both domains. I'm passionate about crafting engaging and innovative digital experiences. Let me turn your creative ideas into reality! I'm here to help you have a meaningful impact and earn money while doing what you love!",
	skillsArray: [
	  { Icono: <BiBrain />, verso: 'Web Developer' },
	  { Icono: <BiBrain />, verso: 'Video Editor' },
	  { Icono: <BiBrain />, verso: 'New Youtuber' },
	],
	techArray: [
	  { Icono: <FaPython />, nombre: 'python' },
	  { Icono: <FaJs />, nombre: 'js' },
	  { Icono: <FaPhp />, nombre: 'php' },
	  { Icono: <FaVideo />, nombre: 'Editing' },
	  { Icono: <FaYoutube />, nombre: 'Youtube' },



	],
  };
  
export const contactData = [
	{
		Icon: <AiOutlineYoutube />,
		text: 'haoyet08',
		url: 'https://youtube.com/@haoyet08',
	},
	{
		Icon: <AiOutlineInstagram />,
		text: 'haoyet.wtf',
		url: 'https://instagram.com/haoyet.wtf',
	},
	{
		Icon: <FaPaypal />,
		text: 'lawhaoyet',
		url: 'https://paypal.me/lawhaoyet',
	},	
	{
		Icon: <FaPhone />,
		text: '+60 128 620 225',
		url: '',
	},
	{
		Icon: <FaMailBulk />,
		text: 'haoyet.wtf@gmail.com',
		url: '',
	},


];
