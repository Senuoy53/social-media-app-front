interface PostShowInfoState {
  // postReaction: string;
  // postReactionCounter: number;
  postReactions: PostReactions[];
}

interface PostReactions {
  userId: string;
  postId: string;
  reaction: any;
  postReactionCounter: number;
}

interface ReactionButtonProps {
  reaction: string;
  onClick: (e: any) => void;
}

interface PostShowInfoProps {
  postReactionsDb: any;
  currentUser: any;
  currentPost: string;
}
