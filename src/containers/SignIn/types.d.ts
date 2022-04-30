import { User } from "../../utils/types";

interface Action {
  type: string;
  payload?: any;
}

interface ValuesType {
  email: string;
  password: string;
}

interface SigninState {
  signinResData: SigninResData[] | null;
  error: boolean;
  errorMessage: string;
  signinForm: SigninForm;
}

interface SigninForm {
  email: string;
  password: string;
}

interface SigninResData {
  accessToken: string;
  refreshToken: string;
  user: User;
  error: string;
}

interface SignInResponse {
  error: boolean;
  message: string;
  data: SigninResData;
  status: number;
}

export {
  Action,
  ValuesType,
  SigninResData,
  SigninState,
  SigninForm,
  SignInResponse,
};
