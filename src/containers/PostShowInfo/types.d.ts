interface PostShowInfoState {
  postReaction: string;
  postReactionCounter: number;
}

interface ReactionButtonProps {
  reaction: string;
  onClick: (e: any) => void;
}

interface CommmentCountResponse {
  data: any;
  status: number;
}

interface PostShowInfoProp {
  postId: string;
  commentCount?: number;
}
