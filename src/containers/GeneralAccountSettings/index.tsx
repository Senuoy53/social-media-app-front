import { useEffect, useState } from "react";
import GeneralAccountSettingWrapper from "./GeneralAccountSettingWrapper";
import DefaultProfilePicture from "../../assets/img/profil.jpg";

import { ButtonFields, GeneralAccountTexts } from "./constants";

import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import {
  requestUpdateUser,
  requestUpdateUserError,
  setLoadingUser,
  setUpdatedUserSuccess,
} from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collections } from "../../utils/constants";

import {
  makeSelectErrorMessage,
  makeSelectLoadingUser,
  makeSelectUpdatedUserSuccess,
} from "./selectors";
import {
  getCurrentUserFromLocalStorage,
  uploadImageToFirebase,
} from "../../utils/app-utils";

import LeftGeneralAccount from "../LeftGeneralAccount";
import RightGeneralAccount from "../RightGeneralAccount";

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

  let currentUser: any = "";
  // getCurrentUserFromLocalStorage function
  currentUser = getCurrentUserFromLocalStorage();

  // console.log("currentUser:", currentUser);

  const [selectedDate, handleDateChange] =
    useState<MaterialUiPickersDate | null>(
      currentUser?.dateOfBirth || new Date()
    );

  const [gender, setGender] = useState(currentUser?.gender);

  // image handler
  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // set setPictureClicked to true
        setPictureClicked(true);
        setProfileImg(reader.result as string);
        setImageFile(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // emptyImageBox
  const emptyImageBox = (e: any) => {
    //  to stop loading the page
    // e.preventDefault();
    // set setPictureClicked to true
    setPictureClicked(true);
    setProfileImg(DefaultProfilePicture);
    setImageFile("");
  };

  // handleGenderChange
  const handleGenderChange = (e: any) => {
    setGender(e.target.value);
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
        const fileName = `${collections.users}/${currentUser._id}/profilePicture`;
        let url = await uploadImageToFirebase(imageFile, fileName);
        // console.log(url);
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
    // Get the profilePicture if exists in database
    if (currentUser?.profilePicture) {
      setProfileImg(currentUser.profilePicture);
    }

    // set updatedUserSuccess to false
    dispatch(setUpdatedUserSuccess(false));
    // set errorMessage to null
    dispatch(requestUpdateUserError(""));
  }, []);

  return (
    <GeneralAccountSettingWrapper>
      <div className="generalAccountContainer">
        <h3 className="containerTitle">{GeneralAccountTexts.containerTitle}</h3>
        <div className="generalAccountBox">
          <div className="gaLeft">
            <LeftGeneralAccount
              LeftTitle={GeneralAccountTexts.LeftTitle}
              profileImg={profileImg}
              ButtonFields1={ButtonFields.CHOOSE_A_PICTURE}
              ButtonFields2={ButtonFields.NO_PICTURE}
              onChange={imageHandler}
              onClick={emptyImageBox}
            />
          </div>
          {/* MiddleLine */}
          <div className="middleLine"></div>
          <div className="gaRight">
            <RightGeneralAccount
              RightTitle={GeneralAccountTexts.RightTitle}
              currentUser={currentUser}
              selectedDate={selectedDate}
              gender={gender}
              loadingUser={loadingUser}
              updatedUserSuccess={updatedUserSuccess}
              errorMessage={errorMessage}
              ButtonField={ButtonFields.UPDATE}
              onSubmit={clickUpdate}
              handleGenderChange={handleGenderChange}
              handleDateChange={handleDateChange}
            />
          </div>
        </div>
      </div>
    </GeneralAccountSettingWrapper>
  );
};

export default GeneralAccountSetting;
