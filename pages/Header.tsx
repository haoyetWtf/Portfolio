import Link from 'next/link';
import { AiOutlineBook, AiOutlineHome } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbArrowUpCircle } from 'react-icons/tb';
import { Cubo } from '../components/Cubo';
export const Header = ({ isOnBanner, isMobile }: { isOnBanner: boolean; isMobile: boolean }) => {
	return (

		<header className='sticky top-0 flex justify-end w-full h-20 px-1 mb-8 backdrop-blur-md py-9 align-center'>
			<Cubo isOnBanner={isOnBanner} />
			<h1
				className={`absolute top-6 transition-all font-bold text-2xl ${
					isOnBanner ? 'left-20' : 'left-5'
				} logo linearText`}>
				{isMobile ? 'H.Y' : 'Hao Yet'}
			</h1>
			<aside className='flex items-center w-3/5 justify-evenly text-end'>
				<a href='#' onClick={() => scrollTo(0, 0)}>
					{isMobile ? <TbArrowUpCircle /> : 'Top'}
				</a>
				<Link href='#workSection'>{isMobile ? <AiOutlineHome /> : 'Works'}</Link>
				<Link href='#aboutSection'>{isMobile ? <AiOutlineBook /> : 'About'}</Link>
				<Link href='#contactSection'>{isMobile ? <CgMail /> : 'Contact'}</Link>
			</aside>
		</header>
	);
};
export default Header;
