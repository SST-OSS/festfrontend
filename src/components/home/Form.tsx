interface Props {
	title: string;
	desc: string;
	primaryField: boolean;
	button: string;
	extraFunc: string;
	onSubmit: () => void;
}

const Form = (props: Props) => {
	return (
		<div className="flex flex-col w-full p-5 gap-5 font-sans">
			<div className="flex xsm:text-[25px]  md:text-[30px]">
				<span>{props.title}</span>
			</div>
			<div className="flex xsm:text-[15px] md:text-[18px]">
				<span>{props.desc}</span>
			</div>
			{props.primaryField && (
				<input
					type="text"
					placeholder="Email address"
					className="rounded-md p-4 bg-[#D9D9D9] bg-opacity-15"
				/>
			)}
			<div className="flex justify-between items-center">
				<span className="p-3 rounded-md  bg-secondary bg-opacity-15 text-primary hover:cursor-pointer">
					{props.button}
				</span>
				<span className="text-grey text-[13px] hover:underline hover:cursor-pointer">
					{props.extraFunc}
				</span>
			</div>
		</div>
	);
};

export default Form;
