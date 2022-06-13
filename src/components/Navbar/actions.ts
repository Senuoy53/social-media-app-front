import { ActionsTypes } from "./constants";

const setEvBtnClicked = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_EVENT_BTN_CLICKED,
    payload,
  };
};

export { setEvBtnClicked };
