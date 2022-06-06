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
import { makeSelectPostComment } from "./selectors";
import { requestPostComment } from "./actions";

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
  const { errorMessage, announcements, loading } = useSelector(announcementState);
  

  console.log("Announcements :", announcements);

 useEffect(() => {
    //dispatch(requestPostComment("628be480233e5536f33ba7e9"));
  //   dispatch(requestAnnouncements());
  //   // console.log("Announcements :", announcements);
 }, []);

  return (
    <FeedContainerWrapper>
      <Post />
        <div className="postsContainer">
        {loading ? (
          <LoadingComponent
            className="loadingPosts"
            width="50px"
            height="50px"
            scale="0.5"
          />
        ) : (
          announcements &&
          announcements.map((item: any, index: number) =>
            {
              if(index>=33 && index<=39){
                return (<>{(item.anIsAnonymous) ? (
                  <PostContainer
                    key={index}
                    title="Anonymous"
                    subheader={item.createdAt}
                    desc={item.anDescription}
                    img={item.imgUrl}
                    postId={item._id}/>
                ) : (
                  <PostContainer
                    key={index}
                    avatar={item.userId.profilePicture}
                    title={`${item.userId.fname} ${item.userId.lname}`}
                    subheader={item.createdAt}
                    desc={item.anDescription}
                    img={item.imgUrl}
                    postId={item._id}
                  />
                )}</>)
              }
              return (
                <h1></h1>
              )
            }
          )
        )}
      </div>
    </FeedContainerWrapper>
  );
};

export default FeedContainer;
