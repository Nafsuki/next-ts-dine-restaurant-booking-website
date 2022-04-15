import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const booking = () => {
	return (
		<div className=''>
			booking
			<Link href='/' passHref>
				<div className='cursor-pointer bg-black relative w-[82.4px] h-[32px]'>
					<Image
						src='/images/logo.svg'
						alt='logo'
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</Link>
		</div>
	);
};

export default booking;
