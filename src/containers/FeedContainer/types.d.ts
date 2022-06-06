interface PostCommentState{
    postComment:{[key: string]:{
        total: number,
        comments:any[],
    }}
    error: boolean;
    errorMessage: string;
    loading: { isLoading: boolean,
               idOfLoadingPostComment: String
              };
    rerender: number;
}

interface ActionInterface {
    type: "REQUEST_POST_COMMENT"
    payload: ActionPayload // whichever
  }

interface PostCommentResponse{
    data: any,
    status: number,
}