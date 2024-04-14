type Props = {
  src: string;
};

const ImageContainer = (props: Props) => {
  return (
    // <div className="md:w-[40%] xsm:w-full">
    // 	<img src={props.src} alt="image" />
    // </div>

    <div className=" md:w-[40%] xsm:w-full ">
      <div
        className=" inset-0 w-full h-full overflow-hidden "
        style={{ transform: 'skewY(12deg)', borderRadius: "50% 20%", backgroundColor: "#fefefe" }}
      >
		<img
        src={props.src}
        alt="image"
        className=" inset-0 w-full h-full object-cover "
        style={{ transform: 'scale(1.1) skewY(-12deg)',overflow: "hidden"  }}
      />
	  </div>
      
    </div>
  );
};

export default ImageContainer;
