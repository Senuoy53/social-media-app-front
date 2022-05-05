interface CheckIdProps {
  value: string;
  error: string;
  onChange: (e: any) => void;
  onClick: (e: any) => void;
}

interface ValuesType {
  userID: string;
}
interface CheckIdState {
  error: boolean;
  errorMessage: string;
  checkIdSuccess: boolean;
  user: null;
}

interface CheckIdResponse {
  data: any;
  status: number;
}

export {
  CheckIdProps,
  ValuesType,
  CheckIdState,
  CheckIdResponse,
  CheckIdResData,
};
