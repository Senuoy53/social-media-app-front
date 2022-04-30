import { BACK_URL } from "../variables";

export const checkSimUser = (id: any) => {
  return fetch(`${BACK_URL}/checkSimUser/${id}`, {
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
  return fetch(`${BACK_URL}/signup`, {
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
  return fetch(`${BACK_URL}/signin`, {
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

export const authenticate = (data: any, next: () => any) => {
  if (typeof window.localStorage !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = () => {
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    //  Take accessToken
    let accessToken = JSON.parse(jwt!).accessToken;
    //  Take refreshToken
    let refreshToken = JSON.parse(jwt!).refreshToken;
    fetch(`${BACK_URL}/signout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({ refreshToken: refreshToken }),
    })
      .then((res) => {
        localStorage.removeItem("jwt");
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
  return;
};

/*   export const isAuthenticated = () => {
    if(typeof window.localStorage == 'undefined'){
        return false
    }
    if(localStorage.getItem('jwt')) {
        if(localStorage.getItem('jwt') == null) {return false} // typescript non-null assertion operator
        return JSON.parse(localStorage.getItem('jwt')!)
    } else {
        return false;
    }
} */
