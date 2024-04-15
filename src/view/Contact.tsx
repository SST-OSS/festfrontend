import ContactContainer from '../components/contactus/ContactContainer';

const Contact = () => {
	return (
		<div className="flex flex-col gap-10 min-h-screen items-center xsm:w-full  md:w-[85%] p-5 mx-auto mt-[75px]">
			<div className="blob blob1"></div>
			<div className="blob blob2"></div>
			<div className="mt-3"></div>
			<ContactContainer
				positionText="right"
				heading="President Student Council"
				description="For more information about fest contact"
				name="Gowtham Sai Yadav"
				email="gowtham.23bcs10168@sst.scaler.com"
				image="Gowtham.JPG"
			/>

			<ContactContainer
				positionText="left"
				heading="Marketing Head"
				description="If you want to sponsor our event contact"
				name="Varun Deep Saini"
				email="varun.23bcs10048@ms.sst.scaler.com"
				image="Varun.JPG"
			/>
		</div>
	);
};

export default Contact;
