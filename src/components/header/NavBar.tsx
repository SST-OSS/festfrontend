import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="flex w-2/4">
			<ul className="flex w-full justify-around">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
