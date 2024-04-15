import { Link } from 'react-router-dom';
// import Logo from '../Logo';
import NavBar from './NavBar';
import Logo from '../Logo';

type Props = {
	isMenuOpen: boolean;
	setIsMenuOpen: (value: boolean) => void;
};

const Header = ({ isMenuOpen, setIsMenuOpen }: Props) => {
	return (
		<header className="w-full backdrop-blur fixed top-0 xsm:p-1  md:p-2 z-40">
			<div className="flex justify-between items-center mx-auto w-[80%]">
				<Link to="/" onClick={() => setIsMenuOpen(false)}>
					<Logo
						source="/logo.svg"
						alt="Scaler Fest"
						className="xsm:w-[180px] md:w-[350px] lg:w-[300px]"
					/>
				</Link>
				<button
					className="xsm:flex md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? (
						<i className="fa-solid fa-times text-primary text-2xl"></i>
					) : (
						<i className="fa-solid fa-bars text-primary text-2xl"></i>
					)}
				</button>

				<nav className="hidden md:flex">
					<NavBar setIsMenuOpen={setIsMenuOpen} />
				</nav>
			</div>

			{isMenuOpen ? (
				<div className="top-[65px] z-10 h-screen bg-background w-full overflow-y-scroll flex flex-col items-center justify-start">
					<NavBar setIsMenuOpen={setIsMenuOpen} />
				</div>
			) : null}
		</header>
	);
};

export default Header;
