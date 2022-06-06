import { ActionsTypes } from "./constants";



const requestPostComment = (payload: any) => {
  return {
    type: ActionsTypes.REQUEST_POST_COMMENT,
    payload
  };
}; 

const requestPostCommentSuccess = (payload: any) => {
  return {
    type: ActionsTypes.REQUEST_POST_COMMENT_SUCCESS,
    payload,
  };
};

const requestPostCommentError = (payload: String) => {
  return {
    type: ActionsTypes.REQUEST_POST_COMMENT_ERROR,
    payload,
  };
};

const setLoadingPostComment = (payload: any) => {
  return {
    type: ActionsTypes.SET_LOADING_POST_COMMENT,
    payload,
  };
};

export { 
  requestPostComment,
  requestPostCommentSuccess,
  requestPostCommentError,
  setLoadingPostComment,
};
