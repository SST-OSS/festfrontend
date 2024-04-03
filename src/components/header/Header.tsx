import Logo from '../Logo';
import NavBar from './NavBar';

const Header = () => {
	return (
		<header className="flex justify-between items-center w-[85%] mx-auto">
			<Logo
				source="https://via.placeholder.com/150"
				alt="logo"
				width="40px"
				height="40px"
			/>
			<NavBar />
		</header>
	);
};

export default Header;
