import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: CommentsState = {};

const commentsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default commentsReducer;
