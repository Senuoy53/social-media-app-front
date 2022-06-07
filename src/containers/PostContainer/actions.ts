import { ActionsTypes } from './constants';

const postNewComment = (payload: any) => {
  return {
    type: ActionsTypes.POST_NEW_COMMENT,
    payload
  };
}; 

/* const postNewCommentSuccess = (payload: any) => {
  return {
    type: ActionsTypes.POST_NEW_COMMENT_SUCCESS,
    payload,
  };
};

const postNewCommentError = (payload: any) => {
  return {
    type: ActionsTypes.POST_NEW_COMMENT_ERROR,
    payload,
  };
}; */

export { 
  postNewComment,
  /* postNewCommentSuccess,
  postNewCommentError */
};
