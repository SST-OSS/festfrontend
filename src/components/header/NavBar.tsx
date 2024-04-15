import { Link } from 'react-router-dom';

type Props = {
	setIsMenuOpen: (value: boolean) => void;
};

const NavBar = ({ setIsMenuOpen }: Props) => {
	return (
		<nav className="flex xsm:p-4 md:p-0 z-1000">
			<ul className="flex xsm:flex-col md:flex-row xsm:gap-10 w-full justify-around md:gap-8 text-primary text-[22px]">
				<li>
					<Link to="/about" onClick={() => setIsMenuOpen(false)}>
						<span>About</span>
					</Link>
				</li>
				<li>
					<Link to="/contact" onClick={() => setIsMenuOpen(false)}>
						<span>Contact</span>
					</Link>
				</li>
				<li className="">
					<a href="#register" onClick={() => setIsMenuOpen(false)}>
						<span className="bg-neon p-2 rounded-lg text-secondaryBackground">
							Register
						</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
