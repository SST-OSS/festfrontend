import Hero from '../components/home/Hero';
import Registration from '../components/home/Registration';

type Props = {
	isMenuOpen: boolean;
};

const Home = ({ isMenuOpen }: Props) => {
	return (
		<div className='h-full w-full bg-background'>
			<Hero/>
			<Registration isMenuOpen={isMenuOpen}/>
		</div>
	);
};

export default Home;
