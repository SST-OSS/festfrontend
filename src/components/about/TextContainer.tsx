type Props = {
	heading: string;
	text1: string;
	text2?: string;
};

const TextContainer = (props: Props) => {
	return (
		<div className="flex text-primary flex-col gap-5 xsm:w-full  md:w-[60%]">
			<div className="md:text-[40px] xsm:text-[30px] font-sans">
				{props.heading}
			</div>
			<div className="md:text-[20px] xsm:text-[18px]">{props.text1}</div>
			{props.text2 && (
				<div className="text-[20px] xsm:text-[18px]">{props.text2}</div>
			)}
		</div>
	);
};

export default TextContainer;
