import { useState, useEffect } from "react";
import PostWrapper from './PostWrapper'
import './index.css'
import Modal from "../Modal"
import { BACK_URL_API } from "../../variables";
import axios from "axios";


const Post = () => {
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
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && <Modal toggleModal={toggleModal} categories={categories}/>}
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
    </div>  
  );
}

export default Post