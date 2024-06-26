import { useState } from 'react';
import { registerUser } from '../../apis/Registration';
import Form from './Form';
type Props = {
	isMenuOpen: boolean;
};

const Registration = ({ isMenuOpen }: Props) => {
	const [email, setEmail] = useState('');

	const validatedEmail = (email: string) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	const handleRegister = async () => {
		if (!validatedEmail(email)) {
			alert('Invalid email');
			return;
		}
		console.log(email);
		const res = await registerUser(email);
		if (res === 'success') {
			alert('Registration successful');
		} else {
			alert('Registration failed');
		}
	};

	return (
		<div className="text-primary flex w-full xsm:p-0 md:p-5 lg:p-[35px] xsm:flex-col md:flex-row mt-[10vh]">
			{/* Left side */}
			<div className="flex flex-col lg:w-[80%] gap-[55px] p-4 xsm:h-fit lg:h-full md:w-[90%] justify-center lg:ml-[100px] overflow-hidden">
				<div className="flex md:w-[40%]">
					<img src="SST_Logo.svg" alt="logo" className="w-full" />
				</div>
				<div>
					<span className="xsm:text-[35px] lg:text-[40px] flex flex-col">
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
				<div className="flex items-center justify-end h-full xsm:w-[90%] lg:w-[60%] z-30 my-auto xsm:mx-auto xsm:mb-5">
					<div className=" bg-secondaryBackground opacity-85 flex flex-col gap-[25px] h-fit xsm:w-full rounded-xl p-1 lg:w-[700px] md:mr-[70px] lg:mr-[100px]">
						<Form
							title="Early Registration"
							desc="Express your early interest by registering with your email and get exlusive offer and discount."
							primaryField
							button="Register Early"
							extraFunc="How will my data be used?"
							onSubmit={handleRegister}
							email={email}
							setEmail={setEmail}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Registration;
