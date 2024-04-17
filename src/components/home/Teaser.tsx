import Registration from './Registration';

type Props = {
	isMenuOpen: boolean;
};

const Teaser = (props: Props) => {
	return (
		<div className="flex flex-col">
			<div className="blob blob1"></div>
			<div className="blob blob2"></div>
			<div className="h-fit absolute top-[120vh] lg:mt-[80vh] xsm:mt-[50vh] md:p-5 mx-auto items-center justify-center flex flex-col z-20 w-full">
				<img src="Group 71.svg" alt="comic" className="w-full" />
				<div className="h-full w-full flex justify-center items-center">
					<img src="MemeGuy.svg" alt="comic 2" className="lg:w-[800px] xsm:w-full" />
				</div>
				<img
					src="Scaler Fest.svg"
					alt="comic 3"
					className="lg:w-[1000px] xsm:w-[600px] scale-125 h-full"
				/>
				<div className="w-full items-center justify-center">
					<img src="Group 47.svg" alt="comic 4" className="w-full" />
				</div>
				<Registration isMenuOpen={props.isMenuOpen} />
			</div>
		</div>
	);
};

export default Teaser;
