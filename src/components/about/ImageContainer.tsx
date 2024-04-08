type Props = {
	src: string;
};

const ImageContainer = (props: Props) => {
	return (
		<div className="md:w-[40%] xsm:w-full">
			<img src={props.src} alt="image" />
		</div>
	);
};

export default ImageContainer;
