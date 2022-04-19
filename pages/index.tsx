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
		</div>
	);
};

export default Home;
