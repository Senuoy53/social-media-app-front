import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: PostNewCommentState = {
};


const postContainerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.POST_NEW_COMMENT: 
      return {
          ...state,          
        };
   /*  case ActionsTypes.POST_NEW_COMMENT_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        
      };
    case ActionsTypes.POST_NEW_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      }; */
    default:
      return state;
    };
}
export default postContainerReducer;
