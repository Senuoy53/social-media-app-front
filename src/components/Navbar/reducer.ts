import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: NavBarState = {
  evBtnClicked: false,
};

const NavBarReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.SET_EVENT_BTN_CLICKED:
      return { ...state, evBtnClicked: action.payload };

    default:
      return state;
  }
};

export default NavBarReducer;
