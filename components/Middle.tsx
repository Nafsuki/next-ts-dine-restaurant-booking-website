import { MealOne, MealTwo } from '.';

const Middle = () => {
	return (
		<div className='mx-6 md:mx-[98px] md:relative md:-mt-24 xl:mx-0 xl:px-[165px] mb-24 xl:-mb-20'>
			{/* Meal One Section  */}
			<div className='xl:flex xl:justify-between xl:items-center'>
				<MealOne />
			</div>

			{/* Meal Two Section  */}
			<div className='mt-20 md:mt-32 xl:relative xl:flex xl:justify-between xl:items-center'>
				<MealTwo />
			</div>
		</div>
	);
};

export default Middle;
