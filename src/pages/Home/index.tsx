import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  requestAnnouncements,
  setLoadingAnnouncement,
} from "../../components/Modal/actions";
import Navbar from "../../components/Navbar";
import FeedContainer from "../../containers/FeedContainer";
import LeftBar from "../../containers/LeftBar";
import RightBar from "../../containers/RightBar";
import HomeWrapper from "./HomeWrapper";

const Home = () => {
  // useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(setLoadingAnnouncement(true)); /// saga loading !!!
    dispatch(requestAnnouncements());
  }, []);

  return (
    <HomeWrapper>
      <Navbar />
      <div className="main">
        <RightBar />
        <FeedContainer />
        <LeftBar />
      </div>
      {/* <LazyComment/> */}
    </HomeWrapper>
  );
};

export default Home;
