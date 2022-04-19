import { PatternDevide, MenuCard } from '../components/';
import Image from 'next/image';
import { menusMobile } from '../data';

const Menu = () => {
	return (
		<div className='px-6 bg-[#111111] py-[72px] text-white flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:px-[165px] xl:h-[761px]'>
			{/* Section header  */}
			<div className='flex flex-col items-center justify-center border xl:items-start xl:-mt-40'>
				<PatternDevide />
				<h2 className='font-semibold tracking-[-0.4px] text-center text-[32px] w-[327px] md:text-5xl md:tracking-[-0.5px] md:w-[445px] xl:text-left xl:text-5xl'>
					A few highlights
					<br />
					from our menu
				</h2>
				<p className='md:mt-4 font-normal text-[15px] leading-[25px] tracking-[-0.19px] text-center w-[327px] md:px-6 md:text-xl md:w-[445px] xl:text-left xl:p-0'>
					We cater for all dietary requirements, but here’s a glimpse at some of
					our diner’s favourites. Our menu is revamped every season.
				</p>
			</div>

			{/* Menu Cards  */}
			<div className='border mt-[64px] flex flex-col justify-center items-center md:w-[573px] xl:w-[540px]'>
				{menusMobile.map((menu) => (
					<MenuCard key={menu.name} menu={menu} />
				))}
			</div>
		</div>
	);
};

export default Menu;
