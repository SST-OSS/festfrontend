import Hero from '../components/home/Hero';
import Registration from '../components/home/Registration';
import Teaser from '../components/home/Teaser';

type Props = {
	isMenuOpen: boolean;
};
const Home = ({ isMenuOpen }: Props) => {
	return (
		<div className="bg-background h-fit w-full">
			<Hero />
			<Teaser />
			<Registration isMenuOpen={isMenuOpen} />
		</div>
	);
};

export default Home;
