import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: PostCommentState = {
  rerender: 0,
  postComment: {'': {   
                        total: 0,
                        comments:['']
                    }},
  error: false,
  errorMessage: "",
  loading: { isLoading: false,
             idOfLoadingPostComment: ""
            }
};


const postCommentReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_POST_COMMENT_SUCCESS: 
      let postId = Object.keys(action.payload)[0]
      if(state.postComment.hasOwnProperty(postId) && action.payload[postId].comments[0]._id !== state.postComment[postId].comments[0]._id){
        let newState = { ...state}
        newState.postComment[postId].comments = [...newState.postComment[postId].comments, ...action.payload[postId].comments]
        return {...newState,
                rerender: state.rerender + 1}
      }else{
        return {
          ...state,
          postComment: {...state.postComment,
                        ...action.payload
                        },            
        };
      }
    case ActionsTypes.REQUEST_POST_COMMENT_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        
      };
    case ActionsTypes.SET_LOADING_POST_COMMENT:
      return {
        ...state,
        loading: action.payload,
        rerender: state.rerender + 1
      };

    default:
      return state;
  }
};

export default postCommentReducer;
