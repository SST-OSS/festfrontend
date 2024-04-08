import { SparklesCore } from '../ui/sparkles';

const Footer = () => {
	return (
		<footer>
			<SparklesCore
				id="tsparticlesfullpage"
				background="transparent"
				minSize={2.4}
				maxSize={3.8}
				particleDensity={100}
				className="w-full h-full fixed top-0 left-0 z-0 pointer-events-none"
				particleColor="#4ca9d4"
			/>
			<p>Footer</p>
		</footer>
	);
};

export default Footer;
