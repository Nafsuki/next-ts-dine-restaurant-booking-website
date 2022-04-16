import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<div className='flex flex-col md:flex-row items-center h-[440px] md:h-[328px] xl:h-[240px] md:px-10 md:py-14 xl:py-20 justify-center md:justify-start md:items-start bg-[#111111] w-screen my-0 text-white xl:px-[165px] xl:items-start'>
			{/* dine logo  */}
			<Link href='/' passHref>
				<div className='cursor-pointer relative w-[104px] h-[40px]'>
					<Image
						src='/images/logo.svg'
						alt='logo'
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</Link>

			{/* restaurant info  */}
			<div className='text-center font-normal text-[14px] leading-7 tracking-[2px] uppercase md:text-left md:text-xl md:ml-32 xl:flex'>
				<div className='mt-10 md:m-0'>
					<p>Marthwaite, Sedbergh</p>
					<p>Cumbria</p>
					<p>+00 44 123 4567</p>
				</div>
				<div className='my-5 md:my-7 xl:m-0 xl:ml-32'>
					<p>Open Times</p>
					<p>Mon - Fri: 09:00 AM - 10:00 PM</p>
					<p>Sat - Sun: 09:00 AM - 11:30 PM</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
