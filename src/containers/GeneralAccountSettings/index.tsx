import { useEffect, useState } from "react";
import ButtonCustom from "../../components/ButtonCustom";
import GeneralAccountSettingWrapper from "./GeneralAccountSettingWrapper";
import DefaultProfilePicture from "../../assets/img/profil.jpg";
// Password confirmation error
import { useForm } from "react-hook-form";
import {
  Alert,
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
  KeyboardDatePickerFields,
  LnameFields,
  LnameRequirers,
} from "./constants";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import MessageInfoComp from "../../components/MessageInfoComp";
import {
  requestUpdateUser,
  requestUpdateUserError,
  setLoadingUser,
  setUpdatedUserSuccess,
} from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectSigninResData } from "../SignIn/selectors";
import { collections } from "../../utils/constants";

import { firebaseConfig } from "../../variables";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  makeSelectErrorMessage,
  makeSelectLoadingUser,
  makeSelectUpdatedUserSuccess,
} from "./selectors";

//firebase iniialisation
const app = initializeApp(firebaseConfig);

// CheckId selectors
const generalAccountSettingsState = createStructuredSelector({
  loadingUser: makeSelectLoadingUser(),
  updatedUserSuccess: makeSelectUpdatedUserSuccess(),
  errorMessage: makeSelectErrorMessage(),
});

const GeneralAccountSetting = () => {
  const [profileImg, setProfileImg] = useState<any>(DefaultProfilePicture);
  const [imageFile, setImageFile] = useState<any>("");
  const [pictureClicked, setPictureClicked] = useState<boolean>(false);

  // Selectors

  const { loadingUser, updatedUserSuccess, errorMessage } = useSelector(
    generalAccountSettingsState
  );

  // useDispatch
  const dispatch = useDispatch();

  let jwt: string | null = "";
  let currentUser: any = "";
  // Get user from localstorage
  if (typeof window.localStorage !== "undefined") {
    jwt = localStorage.getItem("jwt");
    currentUser = JSON.parse(jwt!).user;
  }

  // console.log("currentUser:", currentUser);

  const [selectedDate, handleDateChange] =
    useState<MaterialUiPickersDate | null>(
      currentUser?.dateOfBirth || new Date()
    );

  const [gender, setGender] = useState(currentUser?.gender);

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
        // set setPictureClicked to true
        setPictureClicked(true);
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
    // console.log("emty the mage box");
    // set setPictureClicked to true
    setPictureClicked(true);
    setProfileImg(DefaultProfilePicture);
    setImageFile("");
  };

  // handleGenderChange
  const handleGenderChange = (e: any) => {
    setGender(e.target.value);
  };

  // uploadImageToFirebase function
  const uploadImageToFirebase = async (image: any) => {
    let URL;
    try {
      const storage = getStorage();
      const fileName = `${collections.users}/${currentUser._id}/profilePicture`;
      const storageRef = ref(storage, fileName);

      await uploadBytes(storageRef, image).then(() => {
        console.log("image uploaded successfully to firebase");
      });
      await getDownloadURL(ref(storage, fileName)).then((url) => {
        console.log("getDownloadURL success");
        // console.log(url);
        URL = url;
      });
    } catch (error) {
      console.error(
        "There was an error uploading a file to Cloud Storage:",
        error
      );
      URL = "";
    }
    return URL;
  };

  //   clickUpdate
  const clickUpdate = async (data: any) => {
    if (
      data.fname !== currentUser.fname ||
      data.lname !== currentUser.lname ||
      data.jobTitle !== currentUser.jobTitle ||
      gender !== currentUser.gender ||
      selectedDate !== currentUser.dateOfBirth ||
      pictureClicked
    ) {
      // set loadingUser to true
      dispatch(setLoadingUser(true));
      // set updatedUserSuccess to false
      dispatch(setUpdatedUserSuccess(false));
      // set errorMessage to null
      dispatch(requestUpdateUserError(""));

      // ======= Check if image is not selected =======
      if (!imageFile && profileImg === DefaultProfilePicture) {
        // console.log("imagefile null", imageFile);
        // set setPictureClicked to false
        setPictureClicked(false);

        // Update
        dispatch(
          requestUpdateUser({
            userId: currentUser._id,
            fname: data.fname,
            lname: data.lname,
            profilePicture: "",
            jobTitle: data.jobTitle,
            gender: gender,
            dateOfBirth: selectedDate,
          })
        );
      } else if (!imageFile && profileImg !== DefaultProfilePicture) {
        // console.log(
        //   "imagefile null : ",
        //   "profile img !==profil  : ",
        //   imageFile,
        //   profileImg
        // );
        // set setPictureClicked to false
        setPictureClicked(false);

        // Update
        dispatch(
          requestUpdateUser({
            userId: currentUser._id,
            fname: data.fname,
            lname: data.lname,
            jobTitle: data.jobTitle,
            gender: gender,
            dateOfBirth: selectedDate,
          })
        );
      } else if (imageFile) {
        // set setPictureClicked to false
        setPictureClicked(false);
        // upload photo to firebase storage
        let url = await uploadImageToFirebase(imageFile);
        console.log(url);
        dispatch(
          requestUpdateUser({
            userId: currentUser._id,
            fname: data.fname,
            lname: data.lname,
            profilePicture: url,
            jobTitle: data.jobTitle,
            gender: gender,
            dateOfBirth: selectedDate,
          })
        );
      }
    }
  };

  // Get the profilePicture if exists
  useEffect(() => {
    //
    if (currentUser?.profilePicture) {
      setProfileImg(currentUser.profilePicture);
    }
  }, []);

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
                        value: currentUser.fname,
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
                        value: currentUser.lname,
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
                        value: currentUser.email,
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
                        value: currentUser.jobTitle,
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
                    <FormControl size="small" className="box box2">
                      <InputLabel id="demo-select-small">Gender</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="gender"
                        // value="gender"
                        value={gender}
                        label="gender"
                        // value={user.gender}
                        onChange={handleGenderChange}
                        // {...register("gender", {
                        //   // value: currentUser.gender,
                        // })}
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

                <Button
                  variant="contained"
                  className="btn-2 updateBtn"
                  type="submit"
                >
                  Update
                </Button>
              </div>
              {updatedUserSuccess && (
                <Alert
                  sx={{
                    padding: "2px 3px",
                    marginTop: "-20px",
                    marginBottom: "3px",
                  }}
                  severity="success"
                >
                  User updated
                </Alert>
              )}

              {errorMessage && (
                <Alert
                  sx={{
                    padding: "2px 3px",
                    marginTop: "-20px",
                    marginBottom: "3px",
                  }}
                  severity="warning"
                >
                  {errorMessage}
                </Alert>
              )}

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
