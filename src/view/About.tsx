import AboutContainer from "../components/about/AboutContainer";

const About = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen items-center xsm:w-full  md:w-[85%] p-5 mx-auto mt-[75px]">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="mt-3"></div>
      <AboutContainer
        heading="Scaler School of Technology Fest"
        text1="Welcome to the Scaler School of Technology, where innovation meets tradition, and the future is shaped by the leaders of tomorrow. Our fest is not just an event; it’s a celebration of the vibrant spirit that drives our institution."
        text2="Join us for a weekend of fun, learning, and networking. We have a range of events lined up, from coding competitions to workshops, and we can’t wait to see you there!"
        image="/G2.jpeg"
        positionText="right"
      />
      <AboutContainer
        heading="Scaler Vision"
        text1="At the heart of our fest lies the Scaler Vision, a commitment to fostering an environment where ideas flourish and boundaries are pushed. We’ve been honored to host industry titans—CTOs, CMOs, COOs, and founders—who’ve shared their insights and inspired our students. This year, we’re thrilled to announce that we’re expecting the legendary many big artists from the 21st century to grace our stage."
        image="G1.jpeg"
        positionText="left"
      />

      <div className="flex flex-col text-primary font-sans gap-5">
        <div className="md:text-[20px] xsm:text-[18px]">
          We strive to create two days of immersive experiences that leave a
          lasting impression. Our fest is a tapestry woven with passionate
          competitions, interactive games, and activities that spark joy and
          camaraderie. We’re a stage for renowned artists, a venue for
          electrifying concerts, and a haven for soothing nightlife. We’ve built
          a legacy that resonates with the essence of Yugaantar.
        </div>

        <div className="md:text-[20px] xsm:text-[18px]">
          We’ve witnessed the magic of performances that have captivated hearts
          and celebrated the spirit of exploration and self-expression. Our fest
          is more than just a gathering; it’s a journey that etches indelible
          memories in the hearts of all who partake in its enchantment. Join us
          at theYugaantar , where dreams take flight, and every moment is a step
          towards the extraordinary.
        </div>

        <div className="md:text-[20px] xsm:text-[18px] ">
          We welcome you to the Scaler School of Technology Fest, where the
          future is celebrated and the spirit of innovation is honored. Our fest
          is a testament to the vibrant energy that drives our institution, and
          we’re excited to share it with you. Join us for a weekend of fun,
          learning, and networking as we come together to celebrate the magic of
          technology and the power of community.
        </div>

        <img
          src="/Big2.jpeg"
          alt="G3"
          className="w-full h-full object-cover z-10 mt-8 mb-4 "
          style={{ borderRadius: "5%" }}
        />
      </div>
    </div>
  );
};

export default About;
