import { Header, Footer } from './';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-screen min-h-screen flex flex-col items-center overflow-x-hidden'>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
