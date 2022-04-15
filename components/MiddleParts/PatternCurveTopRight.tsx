import Image from 'next/image';

const PatternCurveTopRight = () => {
	return (
		<div className='hidden md:block md:absolute md:top-[180px] md:-left-[600px] w-[895px] h-[320px] xl:left-0 xl:top-[300px]'>
			<Image
				src='/images/patterns/pattern-curve-top-right.svg'
				alt='pattern curve top right'
				layout='responsive'
				width={895}
				height={320}
			/>
		</div>
	);
};

export default PatternCurveTopRight;
