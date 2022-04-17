import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookingForm } from '../components';

const booking = () => {
	return (
		<div className='w-screen'>
			{/* Booking Top Component  */}
			<div className='relative -z-10'>
				{/* mobile background image */}
				<div className='-z-10 md:hidden'>
					<Image
						src='/images/booking/hero-bg-mobile@2x.jpg'
						alt='booking background mobile'
						width={375}
						height={600}
						layout='responsive'
					/>
				</div>
				{/* tablet background image  */}
				<div className='-z-10 hidden md:block xl:hidden'>
					<Image
						src='/images/booking/hero-bg-tablet@2x.jpg'
						alt='booking background tablet'
						width={768}
						height={600}
						layout='responsive'
					/>
				</div>

				{/* desktop background image  */}
				<div className='-z-10 hidden xl:block'>
					<Image
						src='/images/booking/hero-bg-desktop@2x.jpg'
						alt='booking background desktop'
						width={1440}
						height={600}
						layout='responsive'
					/>
				</div>

				<div className='z-0 w-screen bg-transparent top-0 left-1/2 transform -translate-x-1/2 absolute text-white flex flex-col items-center'>
					{/* dine logo */}
					<Link href='/' passHref>
						<div className='cursor-pointer relative w-[82.4px] h-[32px] my-16'>
							<Image
								src='/images/logo.svg'
								alt='logo'
								layout='fill'
								objectFit='contain'
							/>
						</div>
					</Link>

					{/* reservation information  */}
					<div className='px-6'>
						<h1 className='text-center font-light text-4xl mb-3'>
							Reservations
						</h1>
						<p className='text-center font-normal text-lg'>
							We can’t wait to host you. If you have any special requirements
							please feel free to call on the phone number below. We’ll be happy
							to accommodate you.
						</p>

						<div className='text-center my-5'>
							<Link href='/booking' passHref>
								<button className='uppercase bg-transparent hover:bg-white hover:text-[#17192B] transition-colors ease-in-out border px-[54px] py-6 text-[14px] font-semibold leading-4 tracking-[2px]'>
									Reserve Place
								</button>
							</Link>
						</div>
					</div>
					{/*   Name Email Pick a date Pick a time Make Reservation Marthwaite, Sedbergh Cumbria +00 44 123 4567 Open Times Mon - Fri: 09:00 AM - 10:00 PM Sat - Sun: 09:00 AM - 11:30 PM */}
				</div>
			</div>
			<BookingForm />
		</div>
	);
};

export default booking;
