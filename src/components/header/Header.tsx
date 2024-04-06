import { Link } from 'react-router-dom';
// import Logo from '../Logo';
import NavBar from './NavBar';

const Header = () => {
	return (
		<header className="w-full backdrop-blur fixed top-0 p-4">
			<div className="flex justify-between items-center w-[85%] mx-auto">
				<Link to="/">
					{/* <Logo source="/public/yugantaar.png" alt="Yugantra" width="360px" /> */}
					<span className="text-3xl font-bold text-primary font-sans">Yugantra</span>
				</Link>
				<NavBar />
			</div>
		</header>
	);
};

export default Header;
