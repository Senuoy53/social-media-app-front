import { CheckIdState } from "../containers/CheckId/types";
import { SignUpState } from "../containers/SignUp/types";
import { ReactionCounterState } from "../components/ReactionsCount/types";
import { AnnouncementState } from "../components/Modal/types";
import { PostCommentState } from "../containers/FeedContainer/types";

interface Action {
  type: string;
  payload?: any;
}

interface User {
  id: string;
  fname: string;
  lname: string;
  email: string;
  password: string;
  verifed: boolean;
}

interface GlobalState {
  signInState: SigninState;
  checkIdState: CheckIdState;
  signUpState: SignUpState;
  reactionCounterState: ReactionCounterState;
  postShowInfoState: PostShowInfoState;
  commentsState: CommentsState;
  announcementState: AnnouncementState;
  postCommentState: PostCommentState;
  navBarState: NavBarState;
  generalAccountSettingsState: GeneralAccountSettingsState;
}

interface ReactionResponse {
  data: any;
  status: number;
}

export { Action, User, GlobalState, ReactionResponse };
