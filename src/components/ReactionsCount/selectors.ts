import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";

import _ from "lodash";

const selectFromCheckIdStateDomain = (
  globalState: GlobalState
): ReactionCounterState => globalState.reactionCounterState;

const makeSelectReactionCounter = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (reactionCounterState: ReactionCounterState): number =>
      _.get(reactionCounterState, "reactionCounter", 0)
  );
export { makeSelectReactionCounter };
