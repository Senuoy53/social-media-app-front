import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: PostCommentState = {
  postComment: {'': {   
                        total: 0,
                        comments:['']
                    }},
  error: false,
  errorMessage: "",
  loading: false,
};


const postCommentReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_POST_COMMENT_SUCCESS: 
      return {
        ...state,
        postComment: {...state.postComment, ...action.payload},
      };
    case ActionsTypes.REQUEST_POST_COMMENT_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case ActionsTypes.SET_LOADING_POST_COMMENT:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
};

export default postCommentReducer;
