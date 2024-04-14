import ImageContainer from './ImageContainer';
import TextContainer from './TextContainer';

type Props = {
	positionText: 'left' | 'right';
	heading: string;
	text1: string;
	text2?: string;
	image: string;
};

const AboutContainer = (props: Props) => {
	return (
		<div className="z-10">
			{props.positionText === 'left' ? (
				<div className="flex gap-10 xsm:flex-col md:flex-row items-center justify-center w-full h-fit my-5">
					<TextContainer
						heading={props.heading}
						text1={props.text1}
						text2={props.text2}
					/>
					<ImageContainer src={props.image} />
				</div>
			) : (
				<div className="flex gap-10 xsm:flex-col md:flex-row items-center justify-center  w-full h-fit my-5">
					<ImageContainer src={props.image} />
					<TextContainer
						heading={props.heading}
						text1={props.text1}
						text2={props.text2}
					/>
				</div>
			)}
		</div>
	);
};

export default AboutContainer;
