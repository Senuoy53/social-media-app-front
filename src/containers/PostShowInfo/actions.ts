import { ActionsTypes } from "./constants";

const setPostReaction = (payload: string) => {
  return {
    type: ActionsTypes.SET_POST_REACTION,
    payload,
  };
};

const postReactionCountPlus = () => {
  return {
    type: ActionsTypes.POST_REACTION_COUNT_PLUS,
  };
};

const postReactionCountMinus = () => {
  return {
    type: ActionsTypes.POST_REACTION_COUNT_MINUS,
  };
};


//AS
/* const setPostCommentCount = (payload: {}) => {
  return {
    type: ActionsTypes.SET_POST_COMMENT_COUNT,
    payload,
  };
};
*/
const requestPostCommentCount = () => {
  return {
    type: ActionsTypes.REQUEST_POST_COMMENT_COUNT,
  };
}; 

const requestPostCommentCountSuccess = (payload: any) => {
  return {
    type: ActionsTypes.REQUEST_POST_COMMENT_COUNT_SUCCESS,
    payload,
  };
};

const requestPostCommentCountError = (payload: String) => {
  return {
    type: ActionsTypes.REQUEST_POST_COMMENT_COUNT_ERROR,
    payload,
  };
};

const setLoadingPostCommentCount = (payload: Boolean) => {
  return {
    type: ActionsTypes.SET_LOADING_POST_COMMENT_COUNT,
    payload,
  };
};

export { 
  postReactionCountPlus, 
  postReactionCountMinus, 
  setPostReaction,
  
  requestPostCommentCount,
  requestPostCommentCountSuccess,
  requestPostCommentCountError,
  setLoadingPostCommentCount
};
