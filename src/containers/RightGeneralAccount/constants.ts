export enum RightGeneralAccountTexts {
  FnameLabel = "Fname ",
  LnameLabel = "Lname ",
  Email = "Email ",
  JobTitle = "Job title ",
  Gender = "Gender ",
  Male = "Male",
  Female = "Female",
  DateOfBirth = "Date of birth",
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
  label = "Job Title",
  variant = "outlined",
  className = "input",
  size = "small",
}

export enum KeyboardDatePickerFields {
  variant = "inline",
  inputVariant = "outlined",
  id = "dateofbirth",
  label = "Date of Birth",
  format = "MM/dd/yyyy",
  size = "small",
}

export enum updatedUserSuccessMessage {
  Message = "User updated",
}

export enum MessageInfoCompTexts {
  PART1 = "Want to change password ?",
  PART2 = "Edit Password",
}
