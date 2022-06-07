import RightBarWrapper from "./RightBarWrapper";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import OnlineColleagues from "../../components/onlineColleagues";

const RightBar = ({ ocButton }: RightBarProps) => {
  let jwt: string | null = "";
  let user: any = "";
  // Get user from localstorage
  if (typeof window.localStorage !== "undefined") {
    jwt = localStorage.getItem("jwt");
    user = JSON.parse(jwt!).user;
  }

  // useState
  const [onlineColleagues, setOnlineColleagues] = useState<any[]>([]);

  useEffect(() => {
    // Connecting to the io server
    const socket = io("http://localhost:8000");

    //
    console.log("user useeffect :", user);
    socket.emit("addUser", user);

    // Get the onlineUsersList from the server
    socket.on("sendOnlineUsersList", (onlineUsersList: any) => {
      console.log("onlineUsersList", onlineUsersList);
      setOnlineColleagues(onlineUsersList);
    });
  }, []);

  console.log("ocButton : ", ocButton);

  // const socket = io("http://localhost:8000");

  // console.log("onlineColleagues", onlineColleagues);

  return (
    <RightBarWrapper ocButton={ocButton}>
      {/* <div className="rightBarMenu"> */}
      <div className="onlineColleaguesContainerBox">
        <h4 className="ocTitle">Online Colleagues</h4>
        <ul className="ocList">
          {/* onlineColleagues list */}
          {/* {onlineColleagues &&
            onlineColleagues?.map((item: any, index: number) => (
              <OnlineColleagues
                key={index}
                className="onlineColleagues"
                fname={item.fname}
                lname={item.lname}
                profilePicture={item.profilePicture}
              ></OnlineColleagues>
            ))} */}

          <OnlineColleagues
            key={1}
            className="onlineColleagues"
            fname={user.fname}
            lname={user.lname}
            profilePicture={user.profilePicture}
          />

          <OnlineColleagues
            key={2}
            className="onlineColleagues"
            fname="Monaim"
            lname="Tounissi"
            // profilePicture={item.profilePicture}
          />

          <OnlineColleagues
            key={3}
            className="onlineColleagues"
            fname="Amine"
            lname="Sadali"
            // profilePicture={item.profilePicture}
          />
          <OnlineColleagues
            key={4}
            className="onlineColleagues"
            fname="Youssef"
            lname="El Azreq"
            // profilePicture={item.profilePicture}
          />
          <OnlineColleagues
            key={5}
            className="onlineColleagues"
            fname="Ilyas"
            lname="Jayed"
            // profilePicture={item.profilePicture}
          />

          <OnlineColleagues
            key={6}
            className="onlineColleagues"
            fname="Imad"
            lname="Zadouq"
            // profilePicture={item.profilePicture}
          />
          <OnlineColleagues
            key={7}
            className="onlineColleagues"
            fname="Karim"
            lname="Rahmouni"
            // profilePicture={item.profilePicture}
          />
          <OnlineColleagues
            key={8}
            className="onlineColleagues"
            fname="Sara"
            lname="Oualid"
            // profilePicture={item.profilePicture}
          />
          <OnlineColleagues
            key={9}
            className="onlineColleagues"
            fname="Amina"
            lname="El ouali"
            // profilePicture={item.profilePicture}
          />

          <OnlineColleagues
            key={10}
            className="onlineColleagues"
            fname="Kamal"
            lname="Bennani"
            // profilePicture={item.profilePicture}
          />
          <OnlineColleagues
            key={11}
            className="onlineColleagues"
            fname="Oussama"
            lname="Amelah"
            // profilePicture={item.profilePicture}
          />
          <OnlineColleagues
            key={12}
            className="onlineColleagues"
            fname="Mehdi"
            lname="Boukhayar"
            // profilePicture={item.profilePicture}
          />
          <OnlineColleagues
            key={13}
            className="onlineColleagues"
            fname="Fatima"
            lname="Samdoun"
            // profilePicture={item.profilePicture}
          />

          <OnlineColleagues
            key={14}
            className="onlineColleagues"
            fname="Ayoub"
            lname="Bouzidi"
            // profilePicture={item.profilePicture}
          />
        </ul>
      </div>
    </RightBarWrapper>
  );
};

export default RightBar;
