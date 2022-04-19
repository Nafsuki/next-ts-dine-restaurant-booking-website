import Link from 'next/link';

const BookATableButton = () => {
	return (
		<Link href='/booking' passHref>
			<button className='my-8 mx-10 uppercase text-white bg-[#111111] hover:bg-white hover:border-[#111111] hover:text-[#17192B] transition-colors ease-in-out border px-[54px] py-6 text-[14px] font-semibold leading-4 tracking-[2px]'>
				Book a table
			</button>
		</Link>
	);
};

export default BookATableButton;
