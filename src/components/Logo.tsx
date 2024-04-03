type Props = {
	source: string;
	alt: string;
	width?: string;
	height?: string;
};

const Logo = (props: Props) => {
	return (
		<div>
			<img
				src={props.source}
				alt={props.alt}
				width={props.width}
				height={props.height}
			/>
		</div>
	);
};

export default Logo;
