import type { NextPage } from 'next';
import { Top, Middle, Menu, FamilyGathering, Ready } from '../components';

const Home: NextPage = () => {
	return (
		<div className=''>
			<Top />
			<Middle />
			<Menu />
			<FamilyGathering />
			<Ready />
			{/* <p>
				Special Events Whether it’s a romantic dinner or special date you’re
				celebrating with others we’ll look after you. We’ll be sure to mark your
				special date with an unforgettable meal. Social Events Are you looking
				to have a larger social event? No problem! We’re more than happy to
				cater for big parties. We’ll work with you to make your event a hit with
				everyone.

			</p> */}
		</div>
	);
};

export default Home;
