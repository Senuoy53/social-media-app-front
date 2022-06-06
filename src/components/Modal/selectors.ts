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

const makeSelectLoading = () =>
  createSelector(
    selectFromAnnouncementStateDomain,
    (announcementState: AnnouncementState): boolean =>
      _.get(announcementState, "loading", false) as boolean
  );

const makeSelectCurrentPage = () =>
  createSelector(
    selectFromAnnouncementStateDomain,
    (announcementState: AnnouncementState): number =>
      _.get(announcementState, "currentPage", 0) as number
  );

const makeSelectTotalPages = () =>
  createSelector(
    selectFromAnnouncementStateDomain,
    (announcementState: AnnouncementState): number =>
      _.get(announcementState, "totalPages", 0) as number
  );

const makeSelectLoadingMore = () =>
  createSelector(
    selectFromAnnouncementStateDomain,
    (announcementState: AnnouncementState): boolean =>
      _.get(announcementState, "loadingMore", false) as boolean
  );

const makeSelectSubmitPostClicked = () =>
  createSelector(
    selectFromAnnouncementStateDomain,
    (announcementState: AnnouncementState): boolean =>
      _.get(announcementState, "submitPostClicked", false) as boolean
  );

export {
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectAnnouncement,
  makeSelectLoading,
  makeSelectCurrentPage,
  makeSelectTotalPages,
  makeSelectLoadingMore,
  makeSelectSubmitPostClicked,
};
