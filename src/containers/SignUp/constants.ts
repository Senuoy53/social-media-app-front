export enum ActionsTypes {
  REQUEST_SIGN_UP = "REQUEST_SIGN_UP",
  REQUEST_SIGN_UP_SUCCESS = "REQUEST_SIGN_UP_SUCCESS",
  REQUEST_SIGN_UP_ERROR = "REQUEST_SIGN_UP_ERROR",
  SET_SIGN_UP_SUCCESS = "SET_SIGN_UP_SUCCESS",
}

export enum SubTitle {
  SIGN_UP = "Sign Up",
}

export enum FnameFields {
  id = "fname",
  label = "Fname",
  variant = "outlined",
  className = "input",
  size = "small",
}

export const FnameRequires = {
  required: "First name is required",
  minLength: {
    value: 4,
    message: "Minimum require length is 4",
  },
  maxLength: {
    value: 20,
    message: "Maximum require length is 20",
  },
};

export const LnameRequirers = {
  minLength: {
    value: 4,
    message: "Minimum require length is 4",
  },
  maxLength: {
    value: 20,
    message: "Maximum require length is 20",
  },
};

export enum LnameFields {
  id = "lname",
  label = "Lname",
  variant = "outlined",
  className = "input",
  size = "small",
}

export enum EmailFields {
  id = "email",
  label = "Email",
  variant = "outlined",
  className = "input",
  size = "small",
}

export enum InputLabels {
  PASSWORD = "Password",
  CONFIRM_PASSWORD = "Confirm Password",
}

export enum PassworFields {
  id = "password",
  label = "Password",
}

export const PasswordRequires = {
  required: "Password is required",
  pattern: {
    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    message:
      "Password should include at least one uppercase, one numeric value and one special character",
  },
  minLength: {
    value: 8,
    message: "Minimum require length is 8",
  },
  maxLength: {
    value: 20,
    message: "Maximum require length is 20",
  },
};

export enum ConPassworFields {
  label = "Confirm Password",
}

export const ConPasswordRequires = {
  required: "Confirm password is required",
};

export enum ValidatePassworError {
  MESSAGE = "The passwords do not match",
}

export enum SignupSuccessMessage {
  Message = "Signed up, please verify your email",
}
