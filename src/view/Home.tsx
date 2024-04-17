import Hero from '../components/home/Hero';
import Teaser from '../components/home/Teaser';

type Props = {
	isMenuOpen: boolean;
};
const Home = ({ isMenuOpen }: Props) => {
	return (
		<div className="bg-background h-fit w-full">
			<Hero />
			<Teaser isMenuOpen={isMenuOpen} />
		</div>
	);
};

export default Home;
