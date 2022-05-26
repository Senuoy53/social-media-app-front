interface PostShowInfoState {
  postReaction: string;
  postReactionCounter: number;
  postCommentCount: number;
  error: boolean;
  errorMessage: string;
  loading: boolean;
}

interface ReactionButtonProps {
  reaction: string;
  onClick: (e: any) => void;
}
