import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";

import _ from "lodash";

const selectFromCheckIdStateDomain = (
  globalState: GlobalState
): ReactionButtonState => globalState.reactionButtonState;

const makeSelectReaction = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (reactionButtonState: ReactionButtonState): string =>
      _.get(reactionButtonState, "reaction", "")
  );
export { makeSelectReaction };
