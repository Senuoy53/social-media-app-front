import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AlertComponent from "../../components/AlertComponent";
import ErrorsCustom from "../../components/ErrorsCustom";
import MessageInfoComp from "../../components/MessageInfoComp";
import {
  EmailFields,
  FnameFields,
  FnameRequires,
  JobTitleFields,
  KeyboardDatePickerFields,
  LnameFields,
  LnameRequirers,
  MessageInfoCompTexts,
  RightGeneralAccountTexts,
  updatedUserSuccessMessage,
} from "./constants";
import { useForm } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const RightGeneralAccount = ({
  RightTitle,
  currentUser,
  gender,
  selectedDate,
  loadingUser,
  updatedUserSuccess,
  errorMessage,
  ButtonField,
  onSubmit,
  handleGenderChange,
  handleDateChange,
}: RightGeneralAccountProps) => {
  // Handleform events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  return (
    <>
      <h4 className="gaTitle">{RightTitle}</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="gaForm">
        <div className="input-container">
          {/* Fname */}
          <div className="input-box">
            <label htmlFor="" className="labelText">
              {RightGeneralAccountTexts.FnameLabel}:
              <span className="required">*</span>
            </label>
            <div className="textField-box">
              <TextField
                {...FnameFields}
                {...register("fname", {
                  value: currentUser.fname,
                  ...FnameRequires,
                })}
                className="box"
              />
              {errors.fname && (
                <ErrorsCustom>{errors.fname.message}</ErrorsCustom>
              )}
            </div>
          </div>

          {/* Lname */}
          <div className="input-box">
            <label htmlFor="" className="labelText">
              {RightGeneralAccountTexts.LnameLabel}:
              <span className="required">*</span>
            </label>
            <div className="textField-box">
              <TextField
                {...LnameFields}
                {...register("lname", {
                  value: currentUser.lname,
                  ...LnameRequirers,
                })}
                className="box"
              />
              {errors.lname && (
                <ErrorsCustom>{errors.lname.message}</ErrorsCustom>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="input-box">
            <label htmlFor="" className="labelText">
              {RightGeneralAccountTexts.Email}:
            </label>
            <div className="textField-box">
              <TextField
                {...EmailFields}
                disabled
                {...register("email", {
                  value: currentUser.email,
                })}
                className="box"
              />
            </div>
          </div>

          {/* JobTitle */}
          <div className="input-box">
            <label htmlFor="" className="labelText">
              {RightGeneralAccountTexts.JobTitle}:
            </label>
            <div className="textField-box">
              <TextField
                {...JobTitleFields}
                {...register("jobTitle", {
                  value: currentUser.jobTitle,
                })}
                className="box"
              />
            </div>
          </div>

          {/* Gnder */}
          <div className="input-box">
            <label htmlFor="" className="labelText">
              {RightGeneralAccountTexts.Gender}:
            </label>
            <div className="textField-box">
              <FormControl size="small" className="box box2">
                <InputLabel id="demo-select-small">
                  {RightGeneralAccountTexts.Gender}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="gender"
                  value={gender}
                  label="gender"
                  onChange={handleGenderChange}
                >
                  <MenuItem value="Male">
                    {RightGeneralAccountTexts.Male}
                  </MenuItem>
                  <MenuItem value="Female">
                    {RightGeneralAccountTexts.Female}
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* Date of birth */}
          <div className="input-box">
            <label htmlFor="" className="labelText">
              {RightGeneralAccountTexts.DateOfBirth} :
            </label>
            <div className="textField-box">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  autoOk
                  {...KeyboardDatePickerFields}
                  value={selectedDate}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={(date) => handleDateChange(date)}
                  className="box box2"
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>
        </div>
        <div className="button-container">
          {loadingUser && <div className="loading"></div>}

          <Button variant="contained" className="btn-2 updateBtn" type="submit">
            {ButtonField}
          </Button>
        </div>
        {updatedUserSuccess && (
          <AlertComponent className="alert" severity="success">
            {updatedUserSuccessMessage.Message}
          </AlertComponent>
        )}

        {errorMessage && (
          <AlertComponent className="alert" severity="warning">
            {errorMessage}
          </AlertComponent>
        )}

        <MessageInfoComp
          part1={MessageInfoCompTexts.PART1}
          to="/"
          part2={MessageInfoCompTexts.PART2}
        />
      </form>
    </>
  );
};

export default RightGeneralAccount;
