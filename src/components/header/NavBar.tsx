import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="flex">
			<ul className="flex w-full justify-around xsm:gap-2 md:gap-8">
				<li>
					<Link to="/about">
						<span className="">About</span>
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<span>Contact</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
