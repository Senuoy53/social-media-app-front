import { useState } from "react";
import CheckId from "../../containers/CheckId";
import SignUp from "../../containers/SignUp";

const SignUpPage = () => {
  const API = "http://localhost:8000/api";

  const [values, setValues] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    error: "",
    checkIdSuccess: false,
    signupSuccess: false,
  });

  const {
    id,
    name,
    surname,
    email,
    password,
    checkIdSuccess: CheckIdSuccess,
    error,
  } = values;

  const handleChange = (val: any) => (event: any) => {
    setValues({ ...values, error: "", [val]: event.target.value });
  };

  const checkId = (id: any) => {
    return fetch(`${API}/readUID/${id}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const signup = (user: any) => {
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
      });
  };

  const clickCheckId = (event: any) => {
    event.preventDefault();
    setValues({ ...values, error: "" });
    console.log("id :", values.id);
    if (!values.id) {
      setValues({ ...values, error: "Please enter a User ID!!!" });
    } else {
      checkId(id).then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error, checkIdSuccess: false });
          return "";
        } else {
          setValues({
            ...values,
            id: data.id,
            name: data.name,
            email: data.email,
            error: "",
            checkIdSuccess: true,
          });
        }
      });
    }
  };
  //add surname backend
  const clickSignup = (event: any) => {
    event.preventDefault();
    setValues({ ...values, signupSuccess: false });
    signup({ id, name, email, password }).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error, signupSuccess: false });
        return "";
      } else if (data.errors) {
        setValues({ ...values, error: data.errors, signupSuccess: false });
        return "";
      } else {
        setValues({
          ...values,
          name: "",
          surname: "",
          email: "",
          password: "",
          error: "",
          signupSuccess: true,
        });
      }
    });
  };

  // const CheckIdForm = () => (
  //   <div>
  //     <h1>CheckID</h1>
  //     <form>
  //       <label className="text-muted">ID </label>
  //       <input type="text" onChange={handleChange("id")} value={id} />
  //       <button onClick={clickCheckId}>Check ID</button>
  //     </form>
  //   </div>
  // );

  // const signUpForm = () => (
  //   <div>
  //     <h1>CheckID</h1>
  //     <form>
  //       <label className="text-muted">Name</label>
  //       <input type="text" value={name} onChange={handleChange("name")} />
  //       <label className="text-muted">Surname</label>
  //       <input type="text" value={surname} onChange={handleChange("surname")} />
  //       <label className="text-muted">Email</label>
  //       <input type="email" value={email} disabled />
  //       <label className="text-muted">Password</label>
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={handleChange("password")}
  //       />

  //       <button onClick={clickSignup}>SignUp</button>
  //     </form>
  //   </div>
  // );

  return (
    <>
      <>
        {!CheckIdSuccess ? (
          <CheckId
            value={id}
            error={values.error}
            onChange={handleChange("id")}
            onClick={clickCheckId}
          />
        ) : (
          <SignUp
            checkedId={id}
            checkedName={name}
            checkedSurname={surname}
            checkedEmail={email}
          />
        )}
        {/* {JSON.stringify(values)} */}
      </>
    </>
  );
};

export default SignUpPage;
