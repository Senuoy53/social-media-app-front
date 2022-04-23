import {API} from "../config";

export const checkUid = (id: any) => {
  return fetch(`${API}/checkUID/${id}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};

export const signup = (user: any) => {
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

export const signin = (user: any) => {
    return fetch(`${API}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  export const isAuthenticated = () => {
    if(typeof window.localStorage == 'undefined'){
        return false
    }
    if(localStorage.getItem('jwt')) {
        if(localStorage.getItem('jwt') == null ) {return false} // typescript non-null assertion operator
        return JSON.parse(localStorage.getItem('jwt')!)
    } else {
        return false;
    }
}