import Image from "../teaser/Image";

type Props = {};

const Teaser = (props: Props) => {
  return (
    <div className="h-auto mt-[150vh] ">
      <img src="Group 71.svg" alt="comic" className="w-500" />
      <div className="h-full w-screen flex justify-center items-center">
        <img src="Scaler Fest Group 67.svg" alt="comic 2" />
      </div>
      <div>
        <img src="Scaler Fest.svg" alt="comic 3" />
      </div>
      <div className="mb-3">
        <img src="Group 47.svg" alt="comic 4" />
      </div>
    </div>
  );
};

export default Teaser;
