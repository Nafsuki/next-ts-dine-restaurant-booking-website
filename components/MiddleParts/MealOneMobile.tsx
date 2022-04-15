import Image from 'next/image';
import { PatternDevide, Info, PatternCurveTopRight } from '../';
import { info } from '../../data';

const MealOneMobile = () => {
	return (
		<>
			{/* mobile image */}
			<PatternCurveTopRight />
			<div className='shadow-3xl -mt-20 md:hidden'>
				<Image
					src='/images/homepage/enjoyable-place-mobile@2x.jpg'
					alt='enjoyable place mobile'
					layout='responsive'
					width={654}
					height={800}
				/>
			</div>

			{/* tablet image */}
			<div className='hidden md:shadow-3xl md:block xl:hidden'>
				<Image
					src='/images/homepage/enjoyable-place-tablet@2x.jpg'
					alt='enjoyable place tablet'
					layout='responsive'
					width={573}
					height={360}
				/>
			</div>

			{/* desktop image */}
			<div className='hidden md:shadow-3xl xl:flex relative xl:justify-cente xl:items-center'>
				<Image
					src='/images/homepage/enjoyable-place-desktop@2x.jpg'
					alt='enjoyable place desktop'
					width={540}
					height={720}
				/>
			</div>
			{/* Information Section  */}
			<div className='xl:w-[445px]'>
				<PatternDevide />
				<Info title={info[0].title} description={info[0].description} />
			</div>
		</>
	);
};

export default MealOneMobile;
