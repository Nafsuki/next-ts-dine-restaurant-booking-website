import type { NextPage } from 'next';
import { Top, Middle } from '../components';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div className=''>
			<Top />
			<Middle />
			{/* <p>
				    A few highlights from our menu We cater for all
				dietary requirements, but here’s a glimpse at some of our diner’s
				favourites. Our menu is revamped every season. Seared Salmon Fillet Our
				locally sourced salmon served with a refreshing buckwheat summer salad.
				Rosemary Filet Mignon Our prime beef served to your taste with a
				delicious choice of seasonal sides. Summer Fruit Chocolate Mousse Creamy
				mousse combined with summer fruits and dark chocolate shavings. Family
				Gathering Special Events Social Events Family Gathering We love catering
				for entire families. So please bring everyone along for a special meal
				with your loved ones. We’ll provide a memorable experience for all.
				Special Events Whether it’s a romantic dinner or special date you’re
				celebrating with others we’ll look after you. We’ll be sure to mark your
				special date with an unforgettable meal. Social Events Are you looking
				to have a larger social event? No problem! We’re more than happy to
				cater for big parties. We’ll work with you to make your event a hit with
				everyone. Book a table Ready to make a reservation? Book a table

			</p> */}
		</div>
	);
};

export default Home;
