interface SignUpProps {
  checkedId: string;
  checkedFname: string;
  checkedLname: string;
  checkedEmail: string;
}

interface SignUpState {
  error: boolean;
  errorMessage: string;
  signUpSuccess: boolean;
  user: null;
}

interface SignUpResponse {
  data: any;
  status: number;
}

export { SignUpProps, SignUpState, SignUpResponse };
