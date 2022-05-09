import Navbar from "../../components/Navbar";
import FeedContainer from "../../containers/FeedContainer";
import LeftBar from "../../containers/LeftBar";
import RightBar from "../../containers/RightBar";
import HomeWrapper from "./HomeWrapper";

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <div className="main">
        <RightBar />
        <FeedContainer />
        <LeftBar />
      </div>
    </HomeWrapper>
  );
};

export default Home;
