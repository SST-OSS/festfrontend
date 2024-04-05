import Form from './Form';

const Registration = () => {
	const handleRegister = () => {};

	return (
		<div className="text-primary flex w-full mx-auto py-[35px] xsm:p-0 md:p-5 lg:p-[35px] xsm:flex-col md:flex-row bg-[#000000]  items-center lg:h-screen">
			{/* Left side */}
			<div className="flex flex-col lg:w-[80%] gap-[45px] xsm:p-4 xsm:h-screen lg:h-full mt-[100px] md:w-[90%]">
				<div className="flex flex-wrap">
					<span className="xsm:text-[45px] lg:text-[60px] xl:text-[85px] md:font-bold">
						Scaler School of Technology's
					</span>
				</div>
				<div>
					<span className="xsm:text-[35px] lg:text-[40px] xl:text-[50px]">
						Annual Technology and Cultural Fest
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

				<div className="flex flex-col justify-center items-center h-fit xsm:mt-[150px] md:mt-[10px] xl:mt-[90px]">
					<span className="text-[20px]">Powered by</span>
					<span className="flex justify-center items-center p-2 h-fit gap-1">
						<span className="text-[20px] ">Scaler</span>
						<img src="/public/scaler.png" alt="Scaler" className="w-[40px] " />
					</span>
				</div>
			</div>

			{/* Right side */}
			<div className="flex items-center justify-end h-full w-full">
				<div className=" bg-secondaryBackground opacity-85 flex flex-col gap-[25px] h-fit xsm:w-full rounded-lg p-1 lg:w-[500px] md:mr-[100px]">
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
						primaryField={false}
						extraFunc="Read more about TLE"
						onSubmit={handleRegister}
					/>
				</div>
			</div>
		</div>
	);
};

export default Registration;
