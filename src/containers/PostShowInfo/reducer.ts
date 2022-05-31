import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: PostShowInfoState = {};

const postShowInfoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postShowInfoReducer;
