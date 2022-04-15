import Image from 'next/image';
import Link from 'next/link';
const Ready = () => {
	return (
		<div className='relative'>
			<div className='-z-10'>
				<Image
					src='/images/homepage/ready-bg-mobile@2x.jpg'
					alt='ready background image'
					width={375}
					height={328}
					layout='responsive'
				/>
			</div>
			<div className='z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-white'>
				<h2 className='my-5 font-bold leading-10 tracking-[-0.4px] text-center text-[32px] w-[327px]'>
					Ready to make a reservation?
				</h2>
				<div className='text-center'>
					<Link href='/booking' passHref>
						<button className='uppercase bg-transparent hover:bg-white hover:text-[#17192B] transition-colors ease-in-out border px-[54px] py-6 text-[14px] font-semibold leading-4 tracking-[2px]'>
							Book a table
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Ready;
