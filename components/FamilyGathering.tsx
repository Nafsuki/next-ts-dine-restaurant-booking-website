import Image from 'next/image';
import Link from 'next/link';
import { PatternLines, PatternCurveTopRight } from './';

const FamilyGathering = () => {
	return (
		<div className='static md:relative bg-white flex flex-col justify-center items-center py-24 px-6 xl:flex-row xl:justify-between xl:px-[165px] xl:py-40'>
			<div className='hidden md:block md:absolute w-[895px] h-[320px] md:top-0 md:-left-2/3 xl:left-[-350px]'>
				<PatternCurveTopRight />
			</div>

			<div className='md:relative'>
				{/* tablet image  */}
				<div className='hidden xl:hidden md:block w-[573px] h-[360px] shadow-3xl'>
					<Image
						src='/images/homepage/family-gathering-tablet@2x.jpg'
						layout='fill'
						objectFit='contain'
						alt='family gathering tablet'
					/>
				</div>

				{/* desktop image  */}
				<div className='hidden xl:block w-[540px] h-[600px] shadow-3xl'>
					<Image
						src='/images/homepage/family-gathering-desktop@2x.jpg'
						layout='fill'
						objectFit='contain'
						alt='family gathering desktop'
					/>
				</div>

				{/* pattern lines  */}
				<div className='md:z-50 hidden md:block md:absolute md:w-[160px] md:h-[76px] top-[-40px] left-[-60px]'>
					<PatternLines />
				</div>
			</div>

			{/* mobile image  */}
			<div className='shadow-3xl w-[326px] h-[400px] relative md:hidden'>
				<Image
					src='/images/homepage/family-gathering-mobile@2x.jpg'
					layout='fill'
					objectFit='contain'
					alt='family gathering mobile'
				/>
			</div>

			<div className='flex flex-col-reverse'>
				<div className='cursor-pointer uppercase text-[#4C4C4C] flex flex-col justify-center items-center mt-10 mb-5 md:mb-14 leading-[28px] tracking-[2px] md:flex-row md:space-x-14 xl:space-x-0 text-lg md:text-xl xl:flex-col xl:items-start xl:space-y-3'>
					<span className=''>Family Gathering</span>
					{/* <span className='w-[30px] bg-black h-[1px]'></span> */}
					<span className=''>Special Events</span>
					<span className=''>Social Events</span>
				</div>
				<div className='text-[#242B37] flex flex-col justify-center items-center text-center xl:items-start'>
					<h2 className='font-semibold text-4xl tracking-[-0.4px] md:text-5xl'>
						Family Gathering
					</h2>
					<p className='my-3 md:my-5 px-10 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left'>
						We love catering for entire families. So please bring everyone along
						for a special meal with your loved ones. We’ll provide a memorable
						experience for all.
					</p>
					<Link href='/booking' passHref>
						<button className='my-5 uppercase text-white bg-[#111111] hover:bg-white hover:border-[#111111] hover:text-[#17192B] transition-colors ease-in-out border px-[54px] py-6 text-[14px] font-semibold leading-4 tracking-[2px]'>
							Book a table
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FamilyGathering;
