type Props = {
	source: string;
	alt: string;
	className?: string;
};

const Logo = (props: Props) => {
	return (
		<div>
			<img src={props.source} alt={props.alt} className={props.className} />
		</div>
	);
};

export default Logo;
