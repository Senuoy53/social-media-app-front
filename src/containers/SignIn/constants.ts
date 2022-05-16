export enum ActionsTypes {
  REQUEST_SIGN_IN = "REQUEST_SIGN_IN",
  REQUEST_SIGN_IN_SUCCESS = "REQUEST_SIGN_IN_SUCCESS",
  REQUEST_SIGN_IN_ERROR = "REQUEST_SIGN_IN_ERROR",
  SET_VERIFICATION_ERROR = "SET_VERIFICATION_ERROR",
  SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE",
}

export enum SubTitle {
  SIGN_IN = "Sign In",
}

export enum NoteMessage {
  PART_1 = "Please login with your",
  PART_2 = "NttData email",
}

export enum EmailFields {
  id = "email",
  label = "Email",
  variant = "outlined",
  className = "input",
  name = "email",
}

export enum PasswordLabel {
  Password = "Password",
}

export enum PasswordFields {
  id = "password",
  name = "password",
  label = "Password",
}

export enum VerificationError {
  MESSAGE = "Please verify your email",
}

export enum MessageInfo {
  DONT_HAVE_ACCOUNT = "Don't Have An Account?",
  CREATE_ONE = "Create One",
  FORGOTTEN_PASSWORD = "Forgotten Password?",
  RESET_IT = "Reset It",
}
