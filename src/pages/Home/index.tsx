import { Link } from "react-router-dom";
import { axiosApi } from "../../utils/request";
import { BACK_URL } from "../../variables";
import Post from '../../components/Post'

const signout = () => {
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    //  Take accessToken
    let accessToken = JSON.parse(jwt!).accessToken;
    //  Take refreshToken
    let refreshToken = JSON.parse(jwt!).refreshToken;

    axiosApi({
      method: "POST",
      url: `${BACK_URL}/signout`,
      headers: {
        Accept: "application/json",
        authorization: "Bearer " + accessToken,
      },
      data: { refreshToken: refreshToken },
    })
      .then((res) => {
        console.log("singout res", res);
        localStorage.removeItem("jwt");
      })
      .catch((err) => {
        console.log("singout err", err.response.data.error);
      });
  }
};

const Home = () => {
  return (
    <div>
      <Post/>
      <Link to="/signin" onClick={signout}>
        <button>LOGOUT</button>
      </Link>
    </div>
  );
};

export default Home;
