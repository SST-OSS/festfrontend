type Props = {
	heading: string;
	text1: string;
	text2?: string;
};

const TextContainer = (props: Props) => {
	return (
		<div className="flex text-primary flex-col gap-5 w-[60%]">
			<div className="text-[40px] font-sans">{props.heading}</div>
			<div className="text-[20px]">{props.text1}</div>
			{props.text2 && <div className="text-[20px]">{props.text2}</div>}
		</div>
	);
};

export default TextContainer;
