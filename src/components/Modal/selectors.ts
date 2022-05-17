import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";
import { AnnouncementState } from "./types";
import _ from "lodash";

const selectFromAnnouncementStateDomain = (
  globalState: GlobalState
): AnnouncementState => globalState.announcementState;

const makeSelectError = () =>
  createSelector(
    selectFromAnnouncementStateDomain,
    (announcementState: AnnouncementState): boolean =>
      _.get(announcementState, "error", false)
  );

const makeSelectErrorMessage = () =>
  createSelector(
    selectFromAnnouncementStateDomain,
    (announcementState: AnnouncementState): string =>
      _.get(announcementState, "errorMessage", "")
  );

const makeSelectAnnouncement = () =>
  createSelector(
    selectFromAnnouncementStateDomain,
    (announcementState: AnnouncementState): string[] =>
      _.get(announcementState, "announcement", null) as string[]
  );

export { makeSelectError, makeSelectErrorMessage, makeSelectAnnouncement };
