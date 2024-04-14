type Props = {
  heading: string;
  description: string;
  name: string;
  email: string;
};

const TextBox = (props: Props) => {
  return (
    <div className="flex text-primary flex-col gap-5 xsm:w-full  md:w-[80%]">
      <div className="md:text-[40px] xsm:text-[30px] font-sans">
        {props.heading}
      </div>
      <div className="md:text-[20px] xsm:text-[18px] text-primary">
        {props.description}
      </div>
      <div className="md:text-[20px] xsm:text-[18px] text-[#c4bdbc]">
        {props.name}
      </div>
      <div className="flex flex-row items-center">
        <span className="material-symbols-outlined">mail</span>
        <div className=" ml-2  md:text-[20px] xsm:text-[18px]">
          {props.email}
        </div>
      </div>
    </div>
  );
};

export default TextBox;
