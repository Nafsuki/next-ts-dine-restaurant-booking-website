import Image from 'next/image';

const MealOneTablet = () => {
	return (
		<div className='hidden md:shadow-3xl md:block xl:hidden'>
			<Image
				src='/images/homepage/enjoyable-place-tablet@2x.jpg'
				alt='enjoyable place tablet'
				layout='responsive'
				width={573}
				height={360}
			/>
		</div>
	);
};

export default MealOneTablet;
