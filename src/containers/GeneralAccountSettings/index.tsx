import { useState } from "react";
import ButtonCustom from "../../components/ButtonCustom";
import GeneralAccountSettingWrapper from "./GeneralAccountSettingWrapper";
import DefaultProfilePicture from "../../assets/img/profil.jpg";
// Password confirmation error
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  EmailFields,
  FnameFields,
  FnameRequires,
  JobTitleFields,
  LnameFields,
  LnameRequirers,
} from "./constants";

// import DateMomentUtils from "@date-io/moment"; // choose your lib
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import MessageInfoComp from "../../components/MessageInfoComp";

interface IDateTimePickerComponent {
  label: string;
}

const GeneralAccountSetting = () => {
  const [profileImg, setProfileImg] = useState<any>(DefaultProfilePicture);
  const [imageFile, setImageFile] = useState<any>("");

  const [selectedDate, handleDateChange] =
    useState<MaterialUiPickersDate | null>(new Date());

  // Password confirmation error
  // Handleform events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // image handler
  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log(reader.result);
        setProfileImg(reader.result as string);
        setImageFile(e.target.files[0]);
        // console.log(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // emptyImageBox
  const emptyImageBox = (e: any) => {
    //  to stop loading the page
    // e.preventDefault();
    setProfileImg(DefaultProfilePicture);
    setImageFile("");
  };

  //   clickUpdate
  const clickUpdate = () => {};

  // handleChangeDate
  // const handleChangeDate = (newDate: any) => {
  //   setDate(newDate);
  // };

  return (
    <GeneralAccountSettingWrapper>
      <div className="generalAccountContainer">
        <h3 className="containerTitle">General Account Setting</h3>
        <div className="generalAccountBox">
          <div className="gaLeft">
            <h4 className="gaTitle">Profile picture</h4>
            <div className="img-holder">
              <img
                src={profileImg}
                alt=""
                id="img-profil"
                className="img-profil"
              />
            </div>
            <input
              type="file"
              name="photo"
              id="input-upload"
              accept="image/*"
              onChange={imageHandler}
            />

            <div className="img-label">
              <label htmlFor="input-upload" className="img-upload">
                Choose a picture
              </label>
              <ButtonCustom className="btn-2" onClick={emptyImageBox}>
                No picture
              </ButtonCustom>
            </div>
          </div>
          {/* MiddleLine */}
          <div className="middleLine"></div>
          <div className="gaRight">
            <h4 className="gaTitle">Basic Info</h4>
            <form onSubmit={handleSubmit(clickUpdate)} className="gaForm">
              <div className="input-container">
                {/* Fname */}
                <div className="input-box">
                  <label htmlFor="" className="labelText">
                    Fname :<span className="required">*</span>
                  </label>
                  <div className="textField-box">
                    <TextField
                      {...FnameFields}
                      {...register("fname", {
                        //   value: checkedFname,
                        ...FnameRequires,
                      })}
                      className="box"
                    />
                    {errors.fname && (
                      <p className="errors">{errors.fname.message}</p>
                    )}
                  </div>
                </div>

                {/* Lname */}
                <div className="input-box">
                  <label htmlFor="" className="labelText">
                    Lname :<span className="required">*</span>
                  </label>
                  <div className="textField-box">
                    <TextField
                      {...LnameFields}
                      {...register("lname", {
                        //   value: checkedLname,
                        ...LnameRequirers,
                      })}
                      className="box"
                    />
                    {errors.lname && (
                      <p className="errors">{errors.lname.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="input-box">
                  <label htmlFor="" className="labelText">
                    Email :
                  </label>
                  <div className="textField-box">
                    <TextField
                      {...EmailFields}
                      disabled
                      {...register("email", {
                        //   value: checkedEmail,
                      })}
                      className="box"
                    />

                    {/* {errorMessage && <p className="errors">{errorMessage}</p>} */}
                  </div>
                </div>

                {/* JobTitle */}
                <div className="input-box">
                  <label htmlFor="" className="labelText">
                    Job title :
                  </label>
                  <div className="textField-box">
                    <TextField
                      {...JobTitleFields}
                      {...register("jobTitle", {
                        //   value: checkedLname,
                      })}
                      className="box"
                    />
                  </div>
                </div>

                {/* Gnder */}
                <div className="input-box">
                  <label htmlFor="" className="labelText">
                    Gender :
                  </label>
                  <div className="textField-box">
                    <FormControl
                      // sx={{ m: 1, minWidth: 120 }}
                      // sx={{ minWidth: 210 }}
                      size="small"
                      className="box box2"
                    >
                      <InputLabel id="demo-select-small">Gender</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="gender"
                        // value="age"
                        label="Gender"
                        // onChange={handleChange}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                {/* Date of birth */}
                <div className="input-box">
                  <label htmlFor="" className="labelText">
                    Date of birth :
                  </label>
                  <div className="textField-box">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        autoOk
                        variant="inline"
                        inputVariant="outlined"
                        id="dateofbirth"
                        label="Date of Birth"
                        format="MM/dd/yyyy"
                        size="small"
                        value={selectedDate}
                        InputAdornmentProps={{ position: "start" }}
                        onChange={(date) => handleDateChange(date)}
                        className="box box2"
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </div>
              </div>
              <ButtonCustom className="btn-2 updateBtn" onClick={emptyImageBox}>
                Update
              </ButtonCustom>

              <MessageInfoComp
                part1="Want to change password ?"
                to="/"
                part2="Edit Password"
              />
            </form>
          </div>
        </div>
      </div>
    </GeneralAccountSettingWrapper>
  );
};

export default GeneralAccountSetting;
