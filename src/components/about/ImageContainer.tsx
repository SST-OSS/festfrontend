type Props = {
	src: string;
};

const ImageContainer = (props: Props) => {
	return (
		<div className="w-[40%]">
			<img src={props.src} alt="image" />
		</div>
	);
};

export default ImageContainer;
