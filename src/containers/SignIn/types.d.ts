import { User } from "../../utils/types";

interface ValuesType {
  email: string;
  password: string;
}

interface SigninState {
  signinResData: SigninResData[] | null;
  error: boolean;
  errorMessage: string;
  verificationError: boolean;
}

interface SigninResData {
  accessToken: string;
  refreshToken: string;
  user: User;
  error: string;
}

interface SignInResponse {
  data: SigninResData;
  status: number;
}

export { ValuesType, SigninResData, SigninState, SignInResponse };
