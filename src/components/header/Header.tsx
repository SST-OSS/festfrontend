import { Link } from 'react-router-dom';
import Logo from '../Logo';
import NavBar from './NavBar';

const Header = () => {
	return (
		<header className="w-full backdrop-blur sticky top-0">
			<div className="flex justify-between items-center w-[85%] mx-auto">
				<Link to="/">
					<Logo
						source="https://via.placeholder.com/150"
						alt="Yugantra"
						width="40px"
						height="40px"
					/>
				</Link>
				<NavBar />
			</div>
		</header>
	);
};

export default Header;
