interface PostContainerProps {
  avatar?: string;
  title: string;
  subheader: string;
  desc: string;
  img?: string;
  postId: string;
}

interface PostCommentType{
  [key: string]:{
      total: number,
      comments:string[],
  }
}

