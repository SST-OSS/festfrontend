import Hero from "../components/home/Hero";
import Registration from "../components/home/Registration";
import Teaser from "../components/home/Teaser";

type Props = {
  isMenuOpen: boolean;
};
const Home = ({ isMenuOpen }: Props) => {
  return (
    <div className=" bg-background">
      <Hero />
      <Teaser />
      <div className="flex flex-col">
        <Registration isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
};

export default Home;
