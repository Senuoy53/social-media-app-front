interface PostShowInfoState {}

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
  commentCount?: number;
}

interface ReactionResponse {
  data: any;
  status: number;
}
