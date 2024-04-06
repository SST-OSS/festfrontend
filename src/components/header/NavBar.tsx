import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="md:flex hidden">
			<ul className="flex w-full justify-around xsm:gap-2 md:gap-8 text-primary text-[22px]">
				<li>
					<Link to="/about">
						<span>About</span>
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<span>Contact</span>
					</Link>
				</li>
				<li>
					<span className="bg-bluebg p-2 rounded-lg text-secondaryBackground">
						Brochure
					</span>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
