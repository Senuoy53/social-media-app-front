import Navbar from "../../components/Navbar";
import FeedContainer from "../../containers/FeedContainer";
import LeftBar from "../../containers/LeftBar";
import RightBar from "../../containers/RightBar";
import HomeWrapper from "./HomeWrapper";
import Icon from "@mui/material/Icon";
import { Groups } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [ocButton, setOcButton] = useState(false);

  const [y, setY] = useState<number | undefined>(
    document?.scrollingElement?.scrollHeight
  );

  // HandleClick
  const handleClick = () => {
    setOcButton(!ocButton);
  };

  const handleNavigation = useCallback(
    (e: any) => {
      if (y && (y > window.scrollY || y < window.scrollY)) {
        setOcButton(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <HomeWrapper ocButton={ocButton}>
      <Navbar />
      <div className="onlineColleaguesButton" onClick={handleClick}>
        <div className="blueBar"></div>
        <div className="ocIcon">
          <Groups className="icon" />
        </div>
      </div>
      <div className="main">
        <LeftBar />
        <FeedContainer />
        <RightBar ocButton={ocButton} />
      </div>
      {/* <LazyComment/> */}
    </HomeWrapper>
  );
};

export default Home;
