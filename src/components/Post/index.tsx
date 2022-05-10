import { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import avatar from '../../assets/img/avatar.jpg';
import Moroccotech from '../../assets/img/Moroccotech.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faImage, faUserSecret, faXmark} from "@fortawesome/free-solid-svg-icons"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PostWrapper from './PostWrapper'
import { BACK_URL_API } from "../../variables";
import axios from "axios";

import firebaseConfig from "../../services/firebase"
import { initializeApp } from 'firebase/app';

import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";

import { v4 as uuidv4 } from 'uuid'

const app = initializeApp(firebaseConfig);

const color = "white";

const useStyles = makeStyles({
  select: {
    "&:before": {
      borderColor: color
    },
    "&:after": {
      borderColor: color
    }
  },
  icon: {
    fill: color
  },
  root: {
    color: color,
}
});
//userId: localStorage.getItem('myCat').user

const Post = () => {
  //image previeww//image previeww//image previeww
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState('')

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview('')
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
  //image previeww//image previeww//image previeww

  const classes = useStyles();
  const [modal, setModal] = useState(true);
  const [values, setValues] = useState({
    type: 'annoucement',
    category: 'category',
    description: '',
    imgUrl:'',
    isAnonym: false,
    error:'',
    loading: false,
  });

  const [categories, setCategories] = useState([])
  
  const {type, category,description,imgUrl, isAnonym, error, loading} = values

  useEffect(()=>{
    init()
  },[])

  const init = () => {
    getCategories()
  }

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
      console.log(data)
      setCategories(data);
    }
  }
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClickDeleteImage = () => {
    setSelectedFile(undefined)
    setPreview('')
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

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
      isAnonym: !isAnonym
    })
  }

  const uploadImageToFirebase = async (image:any) => {
    try {
      const storage = getStorage();
      const fileName = uuidv4()
      const storageRef = ref(storage, fileName);
      uploadBytes(storageRef, image).then((snapshot) => {
        console.log('Image Uploaded');
        getDownloadURL(ref(storage, fileName)).then((url)=>{
          setValues({...values, imgUrl: url})
          console.log(url)
        })
      });
    } catch (error) {
      console.error('There was an error uploading a file to Cloud Storage:', error);
    }
  }
  const addPost = async (json:any) => {
    if (typeof window.localStorage !== "undefined") {
      let jwt = localStorage.getItem("jwt");
      let accessToken = JSON.parse(jwt!).accessToken;
    
      const { data } = await axios.post(
        `${BACK_URL_API}/announcements/create`,
        json,
        {
          headers: {
            authorization: "Bearer " + accessToken,
          }
        },
      );
      return data;
    }
   }

  const SubmitPost = async () => {
    setValues({ ...values, error: '', loading: true});
    let userId = JSON.parse(localStorage.getItem('jwt')!).user._id; 
    let found = false
    let categoryId = ''
    for (var i = 0; i < categories.length && !found; i++) {
      if (categories[i]['categoryName'] === category) {
        categoryId = categories[i]['_id']
        found = true;
        break;
      }
    }

    if (selectedFile != undefined) {
      await uploadImageToFirebase(selectedFile)
    }

    const json = { 
        userId: userId,
        categoryId: categoryId,
        anDescription: description,
        imgUrl: imgUrl,
        anIsAnonymous: isAnonym,
      };
    console.log(JSON.stringify(json))
    addPost(json)
 }
  

  const PostModal = () => (
    <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='top-bar'>
              <FontAwesomeIcon icon={faXmark} color="white" size="2x" className="post-close-button" onClick={toggleModal}/>
              <h2>Create post</h2>
              <div className='selects'>
                <Select
                  className={classes.select}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                      root: classes.root
                    }
                    }}
                  value={type}
                  name='type'
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
                      root: classes.root
                    }
                    }}
                  value={category}
                  name="category"
                  onChange={handleChange}
                >
                <MenuItem value="category">
                  <em>category</em>
                </MenuItem>
                {categories.map( (category,index) => (
                  <MenuItem key={index} value={category["categoryName"]}>{category["categoryName"]}</MenuItem>
                  ))
                }
                </Select>
              </div>
              
            </div>
            <div className='top-bar-buttom' >&nbsp;</div>
            <div className='content'>
              <div className="custom-text-area">
              <div className='avatar'>
                <Avatar alt="avatar" src={avatar} sx={{ width: 66, height: 66, mr:3 }}/>
              </div>
              <textarea className="text-area" name="description" placeholder="Write something ..." onChange={handleChange}/>
              </div>
              {selectedFile && <div className='image-box'>
                <FontAwesomeIcon icon={faXmark} color="grey" size="2x" className="image-close-button" onClick={handleClickDeleteImage}/>
                <img src={preview} />
              </div>}
              <div className='buttons'>
                <div className='button-left-side'>
                <div className="image-upload">
                  <label htmlFor="file-input">
                  <FontAwesomeIcon icon={faImage} color="green" size="3x"/>
                  </label>
                  <input id="file-input" type="file" onChange={onSelectFile}/>
                </div>
                 {/*  <FontAwesomeIcon icon={faImage} color="green" size="3x" onClick={handleClickShowImage}/> */}
                </div>
                <div className='button-right-side'>
                  <Tooltip title="Anonymous">
                    <IconButton onClick={handleAnonymClick}>
                      {isAnonym ? <FontAwesomeIcon icon={faUserSecret} color="black" size="2x"/>
                                : <FontAwesomeIcon icon={faUserSecret} color="grey" size="2x"/>
                    }
                    </IconButton>
                  </Tooltip>
                  <Button variant="contained" onClick={SubmitPost} style={{width: '120px', height: '50px', fontSize:'18px'}}>Post</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
  )

  return (
    <div>
    <PostWrapper>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && PostModal()}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam 
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores numquam nam rerum amet porro
        aspernatur. Quam officiis sint atque placeat amet repudiandae corrupti 
        totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur
        quas, dolore exercitationem repellendus illum, quisquam architecto cum 
        autem? Fuga ab perferendis et ut deserunt laboriosam ipsam perspiciatis 
        consequuntur, modi molestias sint, adipisci nam, sit labore voluptatem quibusdam. 
        Similique neque eum vel officiis sed perferendis corrupti saepe
      </p>
    </PostWrapper>
    </div>
    
  );
}

export default Post