import Image from 'next/image';
import Link from 'next/link';

const Top = () => {
	return (
		<div className='w-screen relative'>
			<div className='md:hidden'>
				<Image
					src='/images/homepage/hero-bg-mobile@2x.jpg'
					alt='hero image mobile'
					layout='responsive'
					width={375}
					height={748}
				/>
			</div>
			<div className='hidden md:block xl:hidden'>
				<Image
					src='/images/homepage/hero-bg-tablet@2x.jpg'
					alt='hero image tablet'
					layout='responsive'
					width={768}
					height={992}
				/>
			</div>
			<div className='hidden xl:block'>
				<Image
					src='/images/homepage/hero-bg-desktop@2x.jpg'
					alt='hero image desktop'
					layout='responsive'
					width={1440}
					height={820}
				/>
			</div>
			<div className='md:my-10 xl:top-0 xl:w-[523px] absolute top-1/3 mx-10 text-white bg-[#111111] flex flex-col justify-center items-center xl:left-0 xl:items-start xl:justify-start xl:h-full xl:my-0 xl:mx-0 xl:ml-[165px] 2xl:ml-72'>
				{/* dine logo  */}
				<div className='xl:mb-[130px] xl:mt-20 2xl:mt-40 md:w-[103px] md:h-[40px] w-[82.4px] h-[32px] xl:w-[103px] xl:h-[40px] relative'>
					<Link href='/' passHref>
						<div className='cursor-pointer'>
							<Image
								src='/images/logo.svg'
								alt='logo'
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</Link>
				</div>

				{/* Top Text  */}
				<h1 className='2xl:text-7xl xl:text-[64px] sm:text-[48px] sm:mx-32 md:mx-40 text-4xl font-light sm:leading-[64px] tracking-[-0.4px] sm:tracking-[-0.6px] text-center xl:text-left mx-5 my-8 sm:my-7 lg:mx-0'>
					Exquisite dining
					<br /> since 1989
				</h1>
				<p className='xl:w-[445px] xl:pr-16 xl:text-left sm:px-16 md:px-32 md:py-3 sm:text-xl sm:tracking-[-0.22px] text-center font-normal text-base mb-8 xl:px-0 2xl:text-2xl'>
					Experience our seasonal menu in beautiful country surroundings. Eat
					the freshest produce from the comfort of our farmhouse.
				</p>
				<Link href='/booking' passHref>
					<button className='uppercase bg-transparent hover:bg-white hover:text-[#17192B] transition-colors ease-in-out border px-[54px] py-6 text-[14px] font-semibold leading-4 tracking-[2px]'>
						Book a table
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Top;
