import ContactContainer from '../components/contactus/ContactContainer';

const Contact = () => {
	return (
		<div className="flex flex-col gap-10 min-h-screen items-center xsm:w-full w-full mx-auto mt-[20vh]">
			<div className="blob blob1"></div>
			<div className="blob blob2"></div>
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

			<ContactContainer
				positionText="right"
				heading="Events Head"
				description="If you want more information about events contact"
				name="Shreshtha Sharma"
				email="events.yugaantar@sst.scaler.com"
				image="Shreshtha.jpg"
			/>

			<ContactContainer
				positionText="left"
				heading="Tech Head"
				description="If you are facing any issues with the website contact"
				name="Abhinav Gupta"
				email="techlead.yugaantar@sst.scaler.com"
				image="Abhinav.jpg"
			/>
		</div>
	);
};

export default Contact;
