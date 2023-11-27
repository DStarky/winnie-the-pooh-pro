import { Outlet } from 'react-router-dom';
import { Footer } from 'src/widgets/Footer';
import { Navbar } from 'src/widgets/Navbar';

const Layout = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
export default Layout;
