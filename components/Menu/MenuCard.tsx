import Image from 'next/image';

const MenuCard = ({
	menu,
}: {
	menu: { imgSrc: string; name: string; description: string };
}) => {
	const { imgSrc, name, description } = menu;
	return (
		<div className='flex flex-col items-center justify-center md:flex-row md:py-5'>
			<div className='w-[327px] h-[245px] md:w-[128px] md:h-[96px] flex justify-center items-center relative'>
				<Image
					src={imgSrc}
					// width={327}
					// height={245}
					alt={name}
					layout='fill'
					objectFit='contain'
				/>
			</div>
			{/* <span className='w-10 bg-pink-300' /> */}
			<div className='md:ml-12'>
				<h3 className='text-center md:text-xl md:text-left font-bold text-[18px] leading-[28px] tracking-[-0.22px] my-3 md:m-0 md:p-0'>
					{name}
				</h3>
				<p className='px-12 md:p-0 text-center md:text-left font-normal text-[15px] leading-[28px] tracking-[-0.19px]'>
					{description}
				</p>

				{/* Devider  */}
				{/* <hr className='my-5 text-white opacity-20' /> */}
			</div>
		</div>
	);
};

export default MenuCard;
