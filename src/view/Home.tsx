import Hero from '../components/home/Hero';
import Registration from '../components/home/Registration';

const Home = () => {
	return (
		<div className="flex flex-col overflow-hidden">
			<Hero />
			<Registration />
		</div>
	);
};

export default Home;
