import LeftBarWrapper from "./LeftBarWrapper";
import { Room } from "@mui/icons-material";
import { createStructuredSelector } from "reselect";
import { makeSelectEvBtnClicked } from "../../components/Navbar/selectors";
import { useDispatch, useSelector } from "react-redux";
import { eventsData } from "./mock";
import EventComponent from "../../components/EventComponent";
import { EventTitle } from "./constants";
import { useCallback, useEffect, useState } from "react";
import { setEvBtnClicked } from "../../components/Navbar/actions";

const navBarState = createStructuredSelector({
  evBtnClicked: makeSelectEvBtnClicked(),
});

const LeftBar = () => {
  // Selectors
  const { evBtnClicked } = useSelector(navBarState);

  // useDispatch
  const dispatch = useDispatch();

  const [y, setY] = useState<number | undefined>(
    document?.scrollingElement?.scrollHeight
  );

  const handleNavigation = useCallback(
    (e: any) => {
      if (y && (y > window.scrollY || y < window.scrollY)) {
        dispatch(setEvBtnClicked(false));
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
    <LeftBarWrapper evBtnClicked={evBtnClicked}>
      {/* <div className="rightBarMenu"> */}
      <div className="eventsContainer">
        <h4 className="evTitle">{EventTitle.evTitle}</h4>
        <div className="evList">
          {/* Event box */}
          {eventsData.map((item, index) => (
            <EventComponent
              key={index}
              className="eventsBox"
              eventImg={item.eventImg}
              eventDate={item.eventDate}
              eventTitle={item.eventTitle}
              eventLocation={item.eventLocation}
            />
          ))}
        </div>
      </div>
    </LeftBarWrapper>
  );
};

export default LeftBar;
