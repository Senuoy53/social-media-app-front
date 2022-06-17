import LeftBarWrapper from "./LeftBarWrapper";
import { Cake, Female, Male, Work } from "@mui/icons-material";
import { createStructuredSelector } from "reselect";
import { makeSelectEvBtnClicked } from "../../components/Navbar/selectors";
import { useDispatch, useSelector } from "react-redux";
import { eventsData } from "./mock";
import EventComponent from "../../components/EventComponent";
import { ButtonField, EventTitle, userProfileTexts } from "./constants";
import { useCallback, useEffect, useState } from "react";
import { setEvBtnClicked } from "../../components/Navbar/actions";
import ButtonCustom from "../../components/ButtonCustom";
import Moment from "react-moment";
import DefaultProfilePicture from "../../assets/img/profil.jpg";
import { useNavigate } from "react-router-dom";

const navBarState = createStructuredSelector({
  evBtnClicked: makeSelectEvBtnClicked(),
});

const LeftBar = () => {
  let jwt: string | null = "";
  let user: any = "";
  // Get user from localstorage
  if (typeof window.localStorage !== "undefined") {
    jwt = localStorage.getItem("jwt");
    user = JSON.parse(jwt!).user;
  }

  // Selectors
  const { evBtnClicked } = useSelector(navBarState);

  // useDispatch
  const dispatch = useDispatch();

  // UseNavigate
  const history = useNavigate();

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

  // handleClick
  const handleClick = () => {
    history("/generalaccountpage");
  };

  return (
    <LeftBarWrapper evBtnClicked={evBtnClicked}>
      {/* userProfileContainer */}
      <div className="userProfileContainer">
        <div className="topContainer">
          {user.profilePicture ? (
            <img src={user.profilePicture} className="profileImg" />
          ) : (
            <img src={DefaultProfilePicture} className="profileImg" />
          )}

          <div className="userName">{user.fname + " " + user.lname}</div>
          <ButtonCustom className="btn-2" onClick={handleClick}>
            {ButtonField.EditProfile}
          </ButtonCustom>
        </div>
        <div className="bottomContainer">
          <h4 className="profileTitle">{userProfileTexts.profileTitle}</h4>
          <div className="profileInfos">
            <div className="profileInfosBox">
              <Work className="profileIcon" />
              {user.jobTitle ? (
                <div className="profileText">{user.jobTitle}</div>
              ) : (
                <div className="profileText">{userProfileTexts.jobtitle}</div>
              )}
            </div>
            <div className="profileInfosBox">
              {user.gender ? (
                user.gender &&
                (user.gender == "Male" ? (
                  <>
                    <Male className="profileIcon" />
                    <div className="profileText">{user.gender}</div>
                  </>
                ) : (
                  <>
                    <Female className="profileIcon" />
                    <div className="profileText">{user.gender}</div>
                  </>
                ))
              ) : (
                <>
                  <Male className="profileIcon" />
                  <div className="profileText">{userProfileTexts.gender}</div>
                </>
              )}
            </div>

            <div className="profileInfosBox">
              <Cake className="profileIcon" />
              {user.dateOfBirth ? (
                <div className="profileText">
                  {userProfileTexts.BornOn}
                  <Moment format="MMM, DD, YYYY">{user.dateOfBirth}</Moment>
                </div>
              ) : (
                <div className="profileText">
                  {userProfileTexts.DateOfBirth}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/*eventsContainer  */}
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
