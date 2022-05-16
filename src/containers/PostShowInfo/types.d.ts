interface PostShowInfoState {
  postReaction: string;
  postReactionCounter: number;
}

interface ReactionButtonProps {
  reaction: string;
  onClick: (e: any) => void;
}
