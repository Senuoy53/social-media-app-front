import { useState, useEffect } from "react";
import ModalWrapper from "./ModalWrapper";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Alert } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faUserSecret,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { firebaseConfig } from "../../variables";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {
  emptyAnnouncementData,
  setAnnouncementData,
  setSubmitPostClicked,
} from "./actions";
import ButtonCustom from "../ButtonCustom";
import { ButtonField } from "../../utils/constants";

//firebase iniialisation
const app = initializeApp(firebaseConfig);

//Mui styling
const color = "white";
const useStyles = makeStyles({
  select: {
    "&:before": {
      borderColor: color,
    },
    "&:after": {
      borderColor: color,
    },
  },
  icon: {
    fill: color,
  },
  root: {
    color: color,
  },
});

//Modal (popup) component
const Modal = ({ toggleModal, categories, user }: any) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    type: "annoucement",
    category: "category",
    description: "",
    imgUrl: "",
    isAnonym: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { type, category, description, imgUrl, isAnonym } = values;

  //Photo preview separate to component
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  // useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  //Photo preview End

  const handleClickDeleteImage = () => {
    setSelectedFile(undefined);
    setPreview("");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleAnonymClick = () => {
    setValues({
      ...values,
      isAnonym: !isAnonym,
    });
  };

  const uploadImageToFirebase = async (image: any) => {
    let URL;
    try {
      const storage = getStorage();
      const fileName = uuidv4();
      const storageRef = ref(storage, fileName);

      await uploadBytes(storageRef, image).then(() => {
        console.log("image uploaded successfully to firebase");
      });
      await getDownloadURL(ref(storage, fileName)).then((url) => {
        console.log("getDownloadURL success");
        console.log(url);
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

  const SubmitPost = async () => {
    setError(false);
    if (category == "category" || description == "") {
      setError(true);
      return;
    }
    // setLoading(true);
    let userId = JSON.parse(localStorage.getItem("jwt")!).user._id;
    let found = false;
    let categoryId = "";
    let url;
    for (var i = 0; i < categories.length && !found; i++) {
      if (categories[i]["categoryName"] === category) {
        categoryId = categories[i]["_id"];
        found = true;
        break;
      }
    }
    if (selectedFile != undefined) {
      url = await uploadImageToFirebase(selectedFile);
    }

    // Empty the announcement state
    dispatch(emptyAnnouncementData([]));

    // change SubmitPostClicked to true
    dispatch(setSubmitPostClicked(true));

    // Call the action to setAnnouncementData to backEnd/DB
    dispatch(
      setAnnouncementData({
        userId: userId,
        categoryId: categoryId,
        anDescription: description,
        imgUrl: url,
        anIsAnonymous: isAnonym,
      })
    );
    toggleModal();
  };

  return (
    <ModalWrapper>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <div className="top-bar">
            <FontAwesomeIcon
              icon={faXmark}
              color="white"
              size="2x"
              className="post-close-button"
              onClick={toggleModal}
            />
            <h2>Create post</h2>
            <div className="selects">
              <Select
                className={classes.select}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                    root: classes.root,
                  },
                }}
                value={type}
                name="type"
                onChange={handleChange}
              >
                <MenuItem value="annoucement">
                  <em>annoucement</em>
                </MenuItem>
                {/* <MenuItem value="1">Annoucement</MenuItem>
                      <MenuItem value="2">Survey</MenuItem> */}
              </Select>
              <Select
                className={classes.select}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                    root: classes.root,
                  },
                }}
                value={category}
                name="category"
                onChange={handleChange}
              >
                <MenuItem value="category">
                  <em>category</em>
                </MenuItem>
                {categories.map((category: any, index: number) => (
                  <MenuItem key={index} value={category["categoryName"]}>
                    {category["categoryName"]}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="top-bar-buttom">&nbsp;</div>
          <div className="content">
            {error && (
              <Alert sx={{ mt: 2 }} severity="warning" id="alert">
                Category and Description are required
              </Alert>
            )}
            <div className="custom-text-area">
              <div className="avatar">
                <Avatar
                  alt="avatar"
                  src={user.profilePicture}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
              </div>

              <div>
                <textarea
                  className="text-area"
                  name="description"
                  placeholder="Write something ..."
                  onChange={handleChange}
                />
                {selectedFile && (
                  <div className="image-box">
                    <FontAwesomeIcon
                      icon={faXmark}
                      color="grey"
                      size="2x"
                      className="image-close-button"
                      onClick={handleClickDeleteImage}
                    />
                    <img src={preview} />
                  </div>
                )}
              </div>
            </div>

            <div className="buttons">
              <div className="button-left-side">
                <div className="image-upload">
                  <label htmlFor="file-input">
                    <FontAwesomeIcon icon={faImage} color="green" size="3x" />
                  </label>
                  <input id="file-input" type="file" onChange={onSelectFile} />
                </div>
              </div>
              <div className="button-right-side">
                <Tooltip title="Post as annonymous will hide your avatar and username, other users can still see, comment, react to the post">
                  <IconButton onClick={handleAnonymClick}>
                    {isAnonym ? (
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        color="black"
                        size="2x"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        color="grey"
                        size="2x"
                      />
                    )}
                  </IconButton>
                </Tooltip>
                <ButtonCustom className="btn-2" onClick={SubmitPost}>
                  {ButtonField.POST}
                </ButtonCustom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
