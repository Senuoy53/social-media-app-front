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
              avatar={item.userId.profilePicture}
              title={`${item.userId.fname} ${item.userId.lname}`}
              subheader={item.createdAt}
              desc={item.anDescription}
              img={item.imgUrl}
            />
          )
        )}
    </FeedContainerWrapper>
  );
};

export default FeedContainer;
