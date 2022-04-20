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
				<div className='hidden -z-10 md:block xl:hidden'>
					<Image
						src='/images/booking/hero-bg-tablet@2x.jpg'
						alt='booking background tablet'
						width={768}
						height={600}
						layout='responsive'
					/>
				</div>

				{/* desktop background image  */}
				<div className='hidden -z-10 xl:block'>
					<Image
						src='/images/booking/hero-bg-desktop@2x.jpg'
						alt='booking background desktop'
						width={1440}
						height={600}
						layout='responsive'
					/>
				</div>

				<div className='absolute top-0 z-0 flex flex-col items-center w-screen text-white transform -translate-x-1/2 bg-transparent left-1/2'>
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
						<h1 className='mb-3 text-4xl font-light text-center'>
							Reservations
						</h1>
						<p className='text-lg font-normal text-center'>
							We can’t wait to host you. If you have any special requirements
							please feel free to call on the phone number below. We’ll be happy
							to accommodate you.
						</p>

						<div className='my-5 text-center'>
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
