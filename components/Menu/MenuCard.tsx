import Image from 'next/image';

const MenuCard = ({
	menu,
}: {
	menu: { imgSrc: string; name: string; description: string };
}) => {
	const { imgSrc, name, description } = menu;
	return (
		<div className='md:flex md:justify-center md:items-center md:py-5'>
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
			{/* <span className='bg-pink-300 w-10' /> */}
			<div className='md:ml-12'>
				<h3 className='text-center md:text-xl md:text-left font-bold text-[18px] leading-[28px] tracking-[-0.22px] my-3 md:m-0 md:p-0'>
					{name}
				</h3>
				<p className='px-12 md:p-0 text-center md:text-left font-normal text-[15px] leading-[28px] tracking-[-0.19px]'>
					{description}
				</p>

				{/* Devider  */}
				{/* <hr className='text-white opacity-20 my-5' /> */}
			</div>
		</div>
	);
};

export default MenuCard;
