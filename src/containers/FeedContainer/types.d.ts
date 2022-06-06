interface PostCommentState{
    postComment:{[key: string]:{
        total: number,
        comments:any[],
    }}
    error: boolean;
    errorMessage: string;
    loading: boolean;
    rerender: number;
}

interface ActionInterface {
    type: "REQUEST_POST_COMMENT"
    payload: ActionPayload // whichever
  }