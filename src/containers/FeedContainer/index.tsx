import PostContainer from "../PostContainer";
import FeedContainerWrapper from "./FeedContainerWrapper";
import Post from "../../components/Post";
import { useEffect, useState, useRef, useCallback, createRef } from "react";
import { createStructuredSelector } from "reselect";
import {
  makeSelectAnnouncement,
  makeSelectCurrentPage,
  makeSelectErrorMessage,
  makeSelectLoading,
  makeSelectLoadingMore,
  makeSelectSubmitPostClicked,
  makeSelectTotalPages,
} from "../../components/Modal/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  requestAnnouncements,
  setLoadingAnnouncement,
  setLoadingMore,
  setSubmitPostClicked,
} from "../../components/Modal/actions";
import LoadingComponent from "../../components/LoadingComponent";
import { Alert } from "@mui/material";
import { LaodingAnnouncementVaribales } from "../../utils/constants";

// CheckId selectors
const announcementState = createStructuredSelector({
  errorMessage: makeSelectErrorMessage(),
  announcements: makeSelectAnnouncement(),
  loading: makeSelectLoading(),
  currentPage: makeSelectCurrentPage(),
  totalPages: makeSelectTotalPages(),
  loadingMore: makeSelectLoadingMore(),
  submitPostClicked: makeSelectSubmitPostClicked(),
});

const FeedContainer = () => {
  const [pageNumber, setPageNumber] = useState(
    LaodingAnnouncementVaribales.PAGE
  );
  const [docLimit, setDocLimit] = useState(LaodingAnnouncementVaribales.LIMIT);
  const [testPage, setTestPage] = useState(1);
  // useDispatch
  const dispatch = useDispatch();
  // Selectors
  const {
    errorMessage,
    announcements,
    loading,
    currentPage,
    totalPages,
    loadingMore,
    submitPostClicked,
  } = useSelector(announcementState);

  // Get user from localstorage
  let jwt = localStorage.getItem("jwt");

  let currentUser = JSON.parse(jwt!).user;

  useEffect(() => {
    console.log("pageNumber", pageNumber);
    if (submitPostClicked) {
      console.log("submitPostClicked :", submitPostClicked);
      // increment testPage by 1 to
      setTestPage(2);
      setPageNumber(2);

      dispatch(setLoadingMore(true));
      dispatch(requestAnnouncements({ page: 2, limit: docLimit }));

      // change SubmitPostClicked to true
      dispatch(setSubmitPostClicked(false));
      //  }
    } else {
      console.log("not submitPostClicked:", submitPostClicked);
      // increment testPage by 1 to
      setTestPage(testPage + 1);

      if (testPage <= totalPages) {
        if (testPage === 1) {
          dispatch(setLoadingAnnouncement(true));
        }
        dispatch(setLoadingMore(true));
        dispatch(requestAnnouncements({ page: pageNumber, limit: docLimit }));
      }
    }
  }, [pageNumber, docLimit]);

  // UserRef equal to createRef in typescript
  const observer = createRef<HTMLDivElement>();

  const lastAnnouncementElementRef = useCallback(
    (element: any): void => {
      let currentObserver: any = observer.current;
      if (loading) return;
      if (currentObserver) currentObserver.disconnect();
      currentObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && testPage <= totalPages) {
          // console.log("visible");

          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (element) currentObserver.observe(element);
    },
    [loading]
  );

  return (
    <FeedContainerWrapper>
      <Post />

      <div className="postsContainer">
        {/* {errorMessage && (
          <Alert sx={{ mt: 2 }} severity="warning">
            {errorMessage}
          </Alert>
        )} */}

        {errorMessage ? (
          <Alert sx={{ mt: 2 }} severity="warning">
            {errorMessage}
          </Alert>
        ) : loading ? (
          <LoadingComponent
            className="loadingPosts"
            width="50px"
            height="50px"
            scale="0.5"
          />
        ) : (
          announcements &&
          announcements.map((item: any, index: number) =>
            // Check if is last element
            announcements.length === index + 1 ? (
              loadingMore ? (
                // <div>loading... </div>
                <LoadingComponent
                  className="loadingMorePosts"
                  width="50px"
                  height="50px"
                  scale="0.5"
                />
              ) : item.anIsAnonymous ? (
                <PostContainer
                  key={index}
                  title="Anonymous"
                  subheader={item.createdAt}
                  desc={item.anDescription}
                  img={item.imgUrl}
                  postReactionsDb={item.reactions}
                  currentUser={currentUser}
                  currentPost={item._id}
                  ref={lastAnnouncementElementRef}
                />
              ) : (
                <PostContainer
                  key={index}
                  avatar={item.userId.profilePicture}
                  title={`${item.userId.fname} ${item.userId.lname}`}
                  subheader={item.createdAt}
                  desc={item.anDescription}
                  img={item.imgUrl}
                  postReactionsDb={item.reactions}
                  currentUser={currentUser}
                  currentPost={item._id}
                  ref={lastAnnouncementElementRef}
                />
              )
            ) : item.anIsAnonymous ? (
              <PostContainer
                key={index}
                title="Anonymous"
                subheader={item.createdAt}
                desc={item.anDescription}
                img={item.imgUrl}
                postReactionsDb={item.reactions}
                currentUser={currentUser}
                currentPost={item._id}
              />
            ) : (
              <PostContainer
                key={index}
                avatar={item.userId.profilePicture}
                title={`${item.userId.fname} ${item.userId.lname}`}
                subheader={item.createdAt}
                desc={item.anDescription}
                img={item.imgUrl}
                postReactionsDb={item.reactions}
                currentUser={currentUser}
                currentPost={item._id}
              />
            )
          )
        )}
      </div>
    </FeedContainerWrapper>
  );
};

export default FeedContainer;
