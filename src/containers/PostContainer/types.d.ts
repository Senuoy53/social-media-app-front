interface PostContainerProps {
  avatar?: any;
  title: string;
  subheader: string;
  desc: string;
  img?: string;
  postReactionsDb: any;
  currentUser: any;
  currentPost: string;
  // ref?: any;
}

interface PostCommentType{
  [key: string]:{
      total: number,
      comments:string[],
  }
}

interface PostNewCommentState {
};

interface PostNewCommentResponse {
  data: any;
  status: number;
}
