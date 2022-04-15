import Image from 'next/image';

const PatternLines = () => {
	return (
		<div className='z-50 hidden md:block md:absolute w-[160px] h-[76px] top-[228px] xl:top-[282px] right-[-58px] xl:right-[-110px]'>
			<Image
				src='/images/patterns/pattern-lines.svg'
				alt='pattern lines'
				layout='responsive'
				width={160}
				height={76}
			/>
		</div>
	);
};

export default PatternLines;
