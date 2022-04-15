import Image from 'next/image';

const MealTwoTablet = () => {
	return (
		<div className='hidden md:shadow-3xl md:block md:mt-20 xl:hidden'>
			<Image
				src='/images/homepage/locally-sourced-tablet@2x.jpg'
				alt='locally sourced tablet'
				layout='responsive'
				width={573}
				height={360}
			/>
		</div>
	);
};

export default MealTwoTablet;
