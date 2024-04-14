type Props = {
  src: string;
};

const ImageBox = (props: Props) => {
  return (
    <div className="md:w-[40%] xsm:w-full flex justify-center items-center">
      <div className="inset-0 w-80 h-80 overflow-hidden rounded-[50%] bg-[#c4bdbc]">
        <img
          src={props.src}
          alt="image"
          className=" inset-0 w-80  h-80 object-cover overflow-hidden"
        />
      </div>
    </div>
  );
};

export default ImageBox;
