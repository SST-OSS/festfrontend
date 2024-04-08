import Form from './Form';

type Props = {
	isMenuOpen: boolean;
};

const Registration = ({ isMenuOpen }: Props) => {
	const handleRegister = () => {};
	const handleTicketLessRegister = () => {};

	return (
		<div className="text-primary flex w-full py-[35px] xsm:p-0 md:p-5 lg:p-[35px] xsm:flex-col md:flex-row bg-[#000000] lg:h-screen absolute top-[175vh] sm:top-[200vh]">
			<div className="blob blob1"></div>
			<div className="blob blob2"></div>

			{/* Left side */}
			<div className="flex flex-col lg:w-[80%] gap-[55px] p-4 xsm:h-fit lg:h-full md:w-[90%] justify-center lg:ml-[100px]">
				<div className="flex flex-wrap">
					<span className="xsm:text-[45px] lg:text-[85px] md:font-bold">
						Scaler School of Technology's
					</span>
				</div>
				<div>
					<span className="xsm:text-[35px] lg:text-[55px] flex flex-col">
						Annual Technology and <span> Cultural Fest</span>
					</span>
				</div>
				<div className="text-[25px] gap-2 flex items-center">
					<i className="fa-solid fa-location-dot"></i>
					Bengaluru, India
				</div>
				<div className="text-[25px] flex gap-2 items-center">
					<i className="fa-regular fa-calendar"></i>
					June, 2024
				</div>

				<div className="flex flex-col justify-center items-start h-fit xsm:mt-[40px]  md:mt-[0px]">
					<span className="text-[20px] text-grey">
						powered by <span className="font-bold">SST Open Source Club</span>
					</span>
				</div>
			</div>

			{/* Right side */}

			{isMenuOpen ? null : (
				<div className="flex items-center justify-end h-full md:w-fit lg:w-[40%] z-30">
					<div className=" bg-secondaryBackground opacity-85 flex flex-col gap-[25px] h-fit xsm:w-full rounded-xl p-1 lg:w-[500px] md:mr-[70px]  lg:mr-[100px]">
						<Form
							title="Early Registration"
							desc="Express your early interest by registering with your email and get exlusive offer and discount."
							primaryField
							button="Register Early"
							extraFunc="How will my data be used?"
							onSubmit={handleRegister}
						/>
						<Form
							title="Ticket Less Entry Framework"
							desc="We are working on a Ticket less entry(TLE) system which would allow you to participate in the fest without any physical or electronic ticket."
							button="Enroll Now"
							primaryField
							extraFunc="Read more about TLE"
							onSubmit={handleTicketLessRegister}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Registration;
