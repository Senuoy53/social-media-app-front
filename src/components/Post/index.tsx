import { useState, useEffect } from "react";
import PostWrapper from './PostWrapper'
import './index.css'
import Modal from "../Modal"
import { BACK_URL_API } from "../../variables";
import axios from "axios";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button'
import { makeStyles } from "@material-ui/core";



import avatar from '../../assets/img/avatar.jpg';


const useStyles = makeStyles(() => ({
  title: {
    color: 'grey',
  }
}));



const Post = () => {

  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState([])
  
  useEffect(()=>{
    getCategories()
  },[]) 
  
  const getCategories = async () => {
    if (typeof window.localStorage !== "undefined") {
      let jwt = localStorage.getItem("jwt");
      let accessToken = JSON.parse(jwt!).accessToken;
      const { data } = await axios.get(
        `${BACK_URL_API}/categories`,
          {
            headers: {
              authorization: "Bearer " + accessToken,
            }
          }
          );
      setCategories(data);
    }
  }

  const toggleModal = () => {
    setModal(!modal);
  };
  
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      <div onClick={toggleModal} className='post'>
          <Card sx={{
        width: {
          sx: 1.0, // 100%
          sm: 400,
          md: 600,
        },
      }}>
            <CardHeader
              avatar={
                <Avatar alt="avatar" src={avatar}/>
              }
              action={
                <Button variant="contained" size="medium" sx={{
                  margin: "5px 0 0 10px",
                }}>
                  Post
                </Button>
              }
              title="Whats on your mind ? "
              classes={{
                title: classes.title,
              }} 
            />
          </Card>
      </div>
      {modal && <Modal toggleModal={toggleModal} categories={categories}/>}
    </div>  
  );
}

export default Post