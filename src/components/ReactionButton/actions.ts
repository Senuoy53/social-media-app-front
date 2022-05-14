import { ActionsTypes } from "./constants";

const setReaction = (payload: string) => {
  return {
    type: ActionsTypes.SET_REACTION,
    payload,
  };
};

export { setReaction };
