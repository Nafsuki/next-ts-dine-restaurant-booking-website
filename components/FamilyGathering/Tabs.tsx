import { Tab } from '@headlessui/react';
import { BookATableButton } from '../';

const Tabs = () => {
	return (
		<Tab.Group defaultIndex={0}>
			<Tab.List className='space-y-5 md:space-y-0 md:mt-16 uppercase text-[#4C4C4C] flex flex-col justify-center items-center mt-10 mb-5 md:mb-14 leading-[28px] tracking-[2px] md:flex-row md:space-x-14 xl:space-x-0 text-lg md:text-xl xl:flex-col xl:items-start xl:space-y-3'>
				<Tab
					className={({ selected }) =>
						selected
							? 'text-[#4C4C4C] border-b-2 transition cursor-pointer'
							: 'opacity-50 transition cursor-pointer'
					}
				>
					Family Gathering
				</Tab>
				<Tab
					className={({ selected }) =>
						selected
							? 'text-[#4C4C4C] border-b-2 transition cursor-pointer'
							: 'opacity-50 transition cursor-pointer'
					}
				>
					Special Events
				</Tab>
				<Tab
					className={({ selected }) =>
						selected
							? 'text-[#4C4C4C] border-b-2 transition cursor-pointer'
							: 'opacity-50 transition cursor-pointer'
					}
				>
					Social Events
				</Tab>
			</Tab.List>
			<Tab.Panels className='text-[#242B37] flex flex-col justify-center items-center text-center xl:items-start'>
				{/* Content 1 */}
				<Tab.Panel>
					<h2 className='mt-5 md:mt-10 font-semibold text-4xl tracking-[-0.4px] md:text-5xl'>
						Family Gathering
					</h2>
					<p className='my-3 md:my-5 px-10 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left'>
						We love catering for entire families. So please bring everyone along
						for a special meal with your loved ones. We’ll provide a memorable
						experience for all.
					</p>
					<BookATableButton />
				</Tab.Panel>

				{/* Content 2 */}
				<Tab.Panel>
					<h2 className='mt-5 md:mt-10 font-semibold text-4xl tracking-[-0.4px] md:text-5xl'>
						Special Events
					</h2>
					<p className='my-3 md:my-5 px-10 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left'>
						Whether it’s a romantic dinner or special date you’re celebrating
						with others we’ll look after you. We’ll be sure to mark your special
						date with an unforgettable meal.
					</p>
					<BookATableButton />
				</Tab.Panel>

				{/* Content 3 */}
				<Tab.Panel>
					<h2 className='mt-5 md:mt-10 font-semibold text-4xl tracking-[-0.4px] md:text-5xl'>
						Social Events
					</h2>
					<p className='my-3 md:my-5 px-8 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left'>
						Are you looking to have a larger social event? No problem! We’re
						more than happy to cater for big parties. We’ll work with you to
						make your event a hit with everyone.
					</p>
					<BookATableButton />
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};

export default Tabs;
