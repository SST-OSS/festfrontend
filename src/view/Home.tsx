import Hero from '../components/home/Hero';
import Registration from '../components/home/Registration';

type Props = {
	isMenuOpen: boolean;
};

const Home = ({ isMenuOpen }: Props) => {
	return (
		<div className="flex flex-col overflow-hidden">
			<Hero />
			<Registration isMenuOpen={isMenuOpen} />
		</div>
	);
};

export default Home;
