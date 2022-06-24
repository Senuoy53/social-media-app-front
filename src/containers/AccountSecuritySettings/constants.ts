export enum ActionsTypes {
  REQUEST_RENEW_PASSWORD = "REQUEST_RENEW_PASSWORD",
  REQUEST_RENEW_PASSWORD_SUCCESS = "REQUEST_RENEW_PASSWORD_SUCCESS",
  REQUEST_RENEW_PASSWORD_ERROR = "REQUEST_RENEW_PASSWORD_ERROR",
  SET_RENEW_PASSWORD_SUCCESS = "SET_RENEW_PASSWORD_SUCCESS",
}

export enum ButtonFields {
  UPDATE_PASSWORD = "Update password",
}

export enum AccountSecurityTexts {
  containerTitle = "Account Security Settings",
  AsTitle = "Password Change",
  CurrentPassword = "Current Password",
  NewPassword = "New Password",
  ReTypePassword = "Re-Type password",
}

export enum CurrentPasswordFields {
  id = "currentpassword",
  label = "CurrentPassword",
}

export const currentPasswordRequires = {
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

export enum NewPasswordFields {
  id = "newpassword",
  label = "NewPassword",
}

export const newPasswordRequires = {
  required: "New Password is required",
  pattern: {
    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    message:
      "New Password should include at least one uppercase, one numeric value and one special character",
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

export enum ValidateRenewPasswordError {
  MESSAGE = "You should enter a new password ",
}

export enum ReTypePasswordFields {
  label = "ReTypePassword",
}

export const ReTypePasswordRequires = {
  required: "You should retype your new password",
};

export enum ValidateReTypePasswordError {
  MESSAGE = "The passwords do not match",
}

export enum renewPasswordSuccessMessage {
  Message = "Password renewed",
}

export enum MessageInfoCompTexts {
  PART1 = "forgot password ?",
  PART2 = "Reset Password",
}
