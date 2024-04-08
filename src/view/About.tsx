import AboutContainer from '../components/about/AboutContainer';
import { BackgroundBeams } from '../components/ui/background-beams';
// import { TracingBeam } from '../components/ui/tracing-beams';

const About = () => {
	return (
		<div className="flex flex-col gap-10 min-h-screen items-center w-[85%] p-5 mx-auto lg:mt-[75px]">
			<BackgroundBeams />
			<AboutContainer
				heading="Scaler School of Technology Fest"
				text1="Welcome to the Scaler School of Technology, where innovation meets tradition, and the future is shaped by the leaders of tomorrow. Our fest is not just an event; it’s a celebration of the vibrant spirit that drives our institution."
				text2="Join us for a weekend of fun, learning, and networking. We have a range of events lined up, from coding competitions to workshops, and we can’t wait to see you there!"
				image="/G2.jpeg"
				positionText="right"
			/>
			<AboutContainer
				heading="Scaler Vision"
				text1="At the heart of our fest lies the Scaler Vision, a commitment to fostering an environment where ideas flourish and boundaries are pushed. We’ve been honored to host industry titans—CTOs, CMOs, COOs, and founders—who’ve shared their insights and inspired our students. This year, we’re thrilled to announce that we’re expecting the legendary many big artists from the 21st century to grace our stage."
				image="G1.jpeg"
				positionText="left"
			/>
			We strive to create two days of immersive experiences that leave a lasting
			impression. Our fest is a tapestry woven with passionate competitions,
			interactive games, and activities that spark joy and camaraderie. We’re a
			stage for renowned artists, a venue for electrifying concerts, and a haven
			for soothing nightlife. We’ve built a legacy that resonates with the essence
			of Yugaantar. We’ve witnessed the magic of performances that have captivated
			hearts and celebrated the spirit of exploration and self-expression. Our fest
			is more than just a gathering; it’s a journey that etches indelible memories
			in the hearts of all who partake in its enchantment. Join us at theYugaantar
			, where dreams take flight, and every moment is a step towards the
			extraordinary.
		</div>
	);
};

export default About;
