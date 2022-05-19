import PostContainer from "../PostContainer";
import FeedContainerWrapper from "./FeedContainerWrapper";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import {
  makeSelectAnnouncement,
  makeSelectErrorMessage,
  makeSelectLoading,
} from "../../components/Modal/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  requestAnnouncements,
  setLoadingAnnouncement,
} from "../../components/Modal/actions";
import LoadingComponent from "../../components/LoadingComponent";

// CheckId selectors
const announcementState = createStructuredSelector({
  errorMessage: makeSelectErrorMessage(),
  announcements: makeSelectAnnouncement(),
  loading: makeSelectLoading(),
});

const FeedContainer = () => {
  // useDispatch
  const dispatch = useDispatch();
  // Selectors
  const { errorMessage, announcements, loading } =
    useSelector(announcementState);

  console.log("Announcements :", announcements);

  // useEffect(() => {
  //   dispatch(setLoadingAnnouncement(true));
  //   dispatch(requestAnnouncements());
  //   // console.log("Announcements :", announcements);
  // }, []);

  return (
    <FeedContainerWrapper>
      <Post />

      <div className="postsContainer">
        {loading ? (
          <LoadingComponent className="loadingPosts" />
        ) : (
          announcements &&
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
          )
        )}
      </div>
    </FeedContainerWrapper>
  );
};

export default FeedContainer;
