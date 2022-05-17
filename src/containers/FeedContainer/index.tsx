import PostContainer from "../PostContainer";
import FeedContainerWrapper from "./FeedContainerWrapper";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import {
  makeSelectAnnouncement,
  makeSelectErrorMessage,
} from "../../components/Modal/selectors";
import { useDispatch, useSelector } from "react-redux";
import { requestAnnouncement } from "../../components/Modal/actions";

// CheckId selectors
const announcementState = createStructuredSelector({
  errorMessage: makeSelectErrorMessage(),
  announcements: makeSelectAnnouncement(),
});

const FeedContainer = () => {
  // useDispatch
  const dispatch = useDispatch();
  // Selectors
  const { errorMessage, announcements } = useSelector(announcementState);

  useEffect(() => {
    dispatch(requestAnnouncement());
    console.log("Announcements :", announcements);
  }, []);

  return (
    <FeedContainerWrapper>
      <Post />

      {announcements &&
        announcements.map((item: any, index: number) =>
          item.anIsAnonymous ? (
            <PostContainer
              key={index}
              title="Anonymous"
              subheader={item.createdAt}
              desc={item.anDescription}
              img={item.imgUrl}
            />
          ) : (
            <PostContainer
              key={index}
              avatar="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title={`${item.userId.fname} ${item.userId.lname}`}
              subheader={item.createdAt}
              desc={item.anDescription}
              img={item.imgUrl}
            />
          )
        )}

      {/* <PostContainer
        avatar="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Younes Lamrani"
        subheader="Mai 09 2022, 18:35 pm"
        desc="Hello guys, whats'up ?"
        img="https://images.pexels.com/photos/1686451/pexels-photo-1686451.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        data format : 2022-05-16T17:43:56.734Z
      /> */}
    </FeedContainerWrapper>
  );
};

export default FeedContainer;
