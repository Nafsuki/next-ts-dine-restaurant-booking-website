import Image from 'next/image';
import {
	MealOneMobile,
	MealOneTablet,
	PatternCurveTopRight,
	PatternDevide,
	MealTwoMobile,
	Info,
	MealTwoTablet,
	PatternLines,
} from '.';
import { info } from '../data';

const Middle = () => {
	return (
		<div className='mx-6 md:mx-[98px] md:relative md:-mt-24 xl:mx-0 xl:px-[165px] mb-24 xl:-mb-20 border-red-400 border'>
			{/* Meal One Section  */}
			<div className='xl:flex xl:justify-between xl:items-center border border-blue-400'>
				<MealOneMobile />
			</div>

			{/* Meal Two Section  */}
			<div className='mt-20 md:mt-32 border-4 border-pink-400 xl:relative xl:flex xl:justify-between xl:items-center'>
				<MealTwoMobile />
			</div>
		</div>
	);
};

export default Middle;
