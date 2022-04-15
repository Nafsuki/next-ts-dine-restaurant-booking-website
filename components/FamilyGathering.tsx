import Image from 'next/image';
import Link from 'next/link';

const FamilyGathering = () => {
	return (
		<div className='bg-white flex flex-col justify-center items-center my-24 px-6'>
			<div className='shadow-3xl w-[326px] h-[400px] relative'>
				<Image
					src='/images/homepage/family-gathering-mobile@2x.jpg'
					layout='fill'
					objectFit='contain'
					alt='family gathering img'
				/>
			</div>

			<div className='border uppercase text-[#4C4C4C] flex flex-col justify-center items-center mt-10 mb-5 leading-[28px] tracking-[2px]'>
				<span className=''>Family Gathering</span>
				<span className='w-[30px] bg-black h-[1px]'></span>
				<span className=''>Special Events</span>
				<span className=''>Social Events</span>
			</div>
			<div className='text-[#242B37] flex flex-col justify-center items-center text-center'>
				<h2 className='font-bold text-[32px] leading-[40px] tracking-[-0.4px]'>
					Family Gathering
				</h2>
				<p className='my-3 px-10 text-[15px] font-normal leading-[25px] tracking-[-0.19px] w-[327px]'>
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
	);
};

export default FamilyGathering;
