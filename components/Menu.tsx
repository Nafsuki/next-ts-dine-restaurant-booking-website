import { PatternDevide, MenuCard } from '../components/';
import Image from 'next/image';
import { menusMobile } from '../data';

const Menu = () => {
	return (
		<div className='px-6 bg-[#111111] py-[72px] border-4 border-pink-500 text-white'>
			<PatternDevide />

			{/* Section header  */}
			<div className='flex flex-col justify-center items-center'>
				<h2 className='border font-bold leading-10 tracking-[-0.4px] text-center text-[32px] w-[327px]'>
					A few highlights
					<br />
					from our menu
				</h2>
				<p className='border font-normal text-[15px] leading-[25px] tracking-[-0.19px] text-center w-[327px]'>
					We cater for all dietary requirements, but here’s a glimpse at some of
					our diner’s favourites. Our menu is revamped every season.
				</p>
			</div>

			{/* Menu Cards  */}
			<div className='mt-[64px]'>
				{menusMobile.map((menu) => (
					<MenuCard key={menu.name} menu={menu} />
				))}
			</div>
		</div>
	);
};

export default Menu;
