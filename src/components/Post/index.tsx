import { useState, useEffect } from "react";
import PostWrapper from "./PostWrapper";
//import './index.css'
import Modal from "../Modal";
import { API_URL } from "../../variables";
import axios from "axios";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import ButtonCustom from "../ButtonCustom";
import { ButtonField } from "../../utils/constants";

const useStyles = makeStyles(() => ({
  title: {
    color: "grey",
  },
}));

const Post = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState([]);

  // Get user from localstorage
  let jwt = localStorage.getItem("jwt");
  let user = JSON.parse(jwt!).user;

  const getCategories = async () => {
    if (typeof window.localStorage !== "undefined") {
      let jwt = localStorage.getItem("jwt");
      let accessToken = JSON.parse(jwt!).accessToken;

      const { data } = await axios.get(`${API_URL}/categories`, {
        headers: {
          authorization: "Bearer " + accessToken,
        },
      });
      setCategories(data);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <PostWrapper>
        <div onClick={toggleModal} className="post">
          <Card
            sx={{
              width: 1.0 /* {
          sx: 1.0, // 100%
          sm: 400,
          md: 600,
        } */,
            }}
          >
            <CardHeader
              avatar={<Avatar alt="avatar" src={user.profilePicture} />}
              action={
                <ButtonCustom className="btn-2">
                  {ButtonField.POST}
                </ButtonCustom>
              }
              title="Whats on your mind ? "
              classes={{
                title: classes.title,
              }}
            />
          </Card>
        </div>
        {modal && (
          <Modal
            toggleModal={toggleModal}
            categories={categories}
            user={user}
          />
        )}
      </PostWrapper>
    </div>
  );
};

export default Post;
