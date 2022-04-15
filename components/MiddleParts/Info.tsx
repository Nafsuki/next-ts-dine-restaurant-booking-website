const Info = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div className='text-[#242B37]'>
			<h2 className='border-pink-800 border my-2 font-bold text-[32px] sm:text-[40px] leading-[40px] sm:leading-[56px] tracking-[-0.4px] sm:tracking-[-0.5px] text-center mx-10 sm:mx-32 xl:m-0 xl:my-5 xl:mr-32 xl:text-left'>
				{title}
			</h2>
			<p className='border-pink-800 border text-center font-normal text-[15px] leading-[25px] tracking-[-0.19px] px-9 md:text-[18px] md:leading-[30px] md:tracking-[-0.22px] md:px-24 xl:px-0 xl:text-left xl:mx-0 xl:mr-24'>
				{description}
			</p>
		</div>
	);
};

export default Info;
