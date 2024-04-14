import TextBox from "./TextBox";
import ImageBox from "./ImageBox";

type Props = {
  positionText: "left" | "right";
  heading: string;
  description: string;
  name: string;
  email: string;
  image: string;
};

const ContactContainer = (props: Props) => {
  return (
    <div className="z-10">
      {props.positionText === "left" ? (
        <div className="flex gap-10 xsm:flex-col md:flex-row items-center justify-around w-full h-fit my-5">
          <TextBox
            heading={props.heading}
            description={props.description}
            name={props.name}
            email={props.email}
          />
          <ImageBox src={props.image} />
        </div>
      ) : (
        <div className="flex gap-10 xsm:flex-col md:flex-row items-center justify-center w-full h-fit my-5">
          <ImageBox src={props.image} />
          <TextBox
            heading={props.heading}
            description={props.description}
            name={props.name}
            email={props.email}
          />
        </div>
      )}
    </div>
  );
};

export default ContactContainer;
