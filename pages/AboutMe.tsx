import { Spacer } from '../components/Spacer';
import { aboutMeData } from '../data';

const AboutMe = () => {
	return (
		<section id='aboutSection' className='px-11'>
			<Spacer />
			<h1 className='mb-10 text-5xl font-bold tracking-wider uppercase linearText'>About Me</h1>
			<p>{aboutMeData.parrafo}</p>
			<aside className='flex flex-wrap justify-evenly'>
				{aboutMeData.skillsArray.map((skill, skillIdx) => {
					return (
						<div className='flex flex-col items-center justify-between w-64 p-8' key={skillIdx}>
							<header>
								<h1 className='w-full pl-3 text-7xl text-slate-400'>{skill.Icono}</h1>
								<h1 className='w-full py-5 font-bold tracking-widest text-center'>BIG BRAIN</h1>
							</header>

							<p className='text-center'>{skill.verso}</p>
						</div>
					);
				})}
			</aside>
			<div className='flex gap-5 pt-10 flex-center'>
				{aboutMeData.techArray.map((tech, techIdx) => {
					return (
						<aside key={techIdx}>
							<h1 className='text-7xl'>{tech.Icono}</h1>
							<h2 className='w-full pt-2 text-center'>{tech.nombre}</h2>
						</aside>
					);
				})}
			</div>
		</section>
	);
};

export default AboutMe;
