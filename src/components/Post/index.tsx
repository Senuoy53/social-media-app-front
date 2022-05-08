import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import avatar from '../../assets/img/avatar.jpg';
import Moroccotech from '../../assets/img/Moroccotech.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faImage, faUserSecret} from "@fortawesome/free-solid-svg-icons"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PostWrapper from './PostWrapper'


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


const Post = () => {

  const classes = useStyles();
  const [modal, setModal] = useState(true);
  const [values, setValues] = useState({
    type: 'type',
    category: 'category',
  });

  const {type, category} = values

  const toggleModal = () => {
    setModal(!modal);
  };

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

  return (
    <div>
    <PostWrapper>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='top-bar'>
              <CloseIcon onClick={toggleModal}/>
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
                <MenuItem value="type">
                  <em>type</em>
                </MenuItem>
                <MenuItem value="1">Annoucement</MenuItem>
                <MenuItem value="2">Survey</MenuItem>
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
                <MenuItem value="1">General</MenuItem>
                <MenuItem value="2">Information Technology</MenuItem>
                <MenuItem value="3">Human Resources</MenuItem>
                <MenuItem value="4">Other</MenuItem>
                </Select>
              </div>
              
            </div>
            <div className='top-bar-buttom' >&nbsp;</div>
            <div className='content'>
              <div className="custom-text-area">
              <div className='avatar'>
                <Avatar alt="avatar" src={avatar} sx={{ width: 66, height: 66, mr:3 }}/>
              </div>
              <textarea className="text-area" name="w3review">Write something ...</textarea>
              </div>
              <div className='image-box'>
                <img src={Moroccotech}/>
              </div>
              <div className='buttons'>
                <div className='button-left-side'>
                  <FontAwesomeIcon icon={faImage} color="green" size="3x"/>
                </div>
                <div className='button-right-side'>
                  <Tooltip title="Anonymous">
                    <IconButton>
                      <FontAwesomeIcon icon={faUserSecret} color="grey" size="2x"/>
                    </IconButton>
                  </Tooltip>
                  <Button variant="contained"  style={{width: '120px', height: '50px', fontSize:'18px'}}>Post</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam 
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
         magnam soluta molestias accusamus, maiores numquam nam rerum amet porro
          aspernatur. Quam officiis sint atque placeat amet repudiandae corrupti 
          totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur
           quas, dolore exercitationem repellendus illum, quisquam architecto cum 
           autem? Fuga ab perferendis et ut deserunt laboriosam ipsam perspiciatis 
           consequuntur, modi molestias sint, adipisci nam, sit labore voluptatem quibusdam. 
           Similique neque eum vel officiis sed perferendis corrupti saepe </p>
      </PostWrapper>
    </div>
    
  );
}

export default Post