import { signout } from "../../apiCall/auth";
import {Link} from 'react-router-dom'

const Home = () => {

  return (
    <>
      <h1>Hello, Home is secure</h1>
      <Link to="/signin" onClick={()=>signout()}><button>LOGOUT</button></Link>
    </>
  )
};

export default Home;
