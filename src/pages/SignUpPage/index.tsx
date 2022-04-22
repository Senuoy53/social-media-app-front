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

  const clickCheckId = (event: any) => {
    event.preventDefault();
    setValues({ ...values, error: "" });

    if (!values.id) {
      setValues({ ...values, error: "Please enter a User ID!!!" });
    } else {
      checkId(id).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, checkIdSuccess: false });
          return "";
        } else {
          setValues({
            ...values,
            id: id,
            name: data.name,
            email: data.email,
            error: "",
            checkIdSuccess: true,
          });
        }
      });
    }
  };

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
