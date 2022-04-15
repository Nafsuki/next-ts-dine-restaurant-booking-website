import Image from 'next/image';

const MenuCard = ({
	menu,
}: {
	menu: { imgSrc: string; name: string; description: string };
}) => {
	const { imgSrc, name, description } = menu;
	return (
		<>
			<div>
				<Image src={imgSrc} width={327} height={245} alt={name} />
			</div>
			<div>
				<h3 className='text-center font-bold text-[18px] leading-[28px] tracking-[-0.22px] my-3'>
					{name}
				</h3>
				<p className='px-12 text-center font-normal text-[15px] leading-[28px] tracking-[-0.19px]'>
					{description}
				</p>

				{/* Devider  */}
				<hr className='text-white opacity-20 my-5' />
			</div>
		</>
	);
};

export default MenuCard;
