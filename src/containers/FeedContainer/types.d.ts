interface PostCommentState{
    postComment:{[key: string]:{
        total: number,
        comments:string[],
    }}
    error: boolean;
    errorMessage: string;
    loading: boolean;
}

interface ActionInterface {
    type: "REQUEST_POST_COMMENT"
    payload: ActionPayload // whichever
  }