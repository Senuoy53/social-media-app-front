export enum ActionsTypes {}
// REQUEST_SIGN_UP = "REQUEST_SIGN_UP",
// REQUEST_SIGN_UP_SUCCESS = "REQUEST_SIGN_UP_SUCCESS",
// REQUEST_SIGN_UP_ERROR = "REQUEST_SIGN_UP_ERROR",
// SET_SIGN_UP_SUCCESS = "SET_SIGN_UP_SUCCESS",

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
  required: "Last name is required",
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

export enum JobTitleFields {
  id = "jobTitle",
  label = "JobTitle",
  variant = "outlined",
  className = "input",
  size = "small",
}

// export enum InputLabels {
//   PASSWORD = "Password",
//   CONFIRM_PASSWORD = "Confirm Password",
// }

// export enum ConPassworFields {
//   label = "Confirm Password",
// }

// export enum ValidatePassworError {
//   MESSAGE = "The passwords do not match",
// }

// export enum SignupSuccessMessage {
//   Message = "Signed up, please verify your email",
// }
