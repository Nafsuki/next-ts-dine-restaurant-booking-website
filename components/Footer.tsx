import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<div className='flex flex-col items-center h-[440px] justify-center bg-[#111111] w-screen my-0 text-white'>
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
			<div className='text-center font-normal text-[14px] leading-7 tracking-[2px] uppercase'>
				<div className='mt-10'>
					<p>Marthwaite, Sedbergh</p>
					<p>Cumbria</p>
					<p>+00 44 123 4567</p>
				</div>
				<div className='my-5'>
					<p>Open Times</p>
					<p>Mon - Fri: 09:00 AM - 10:00 PM</p>
					<p>Sat - Sun: 09:00 AM - 11:30 PM</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
