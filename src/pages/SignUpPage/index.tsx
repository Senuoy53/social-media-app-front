import { useState } from "react";
import CheckId from "../../containers/CheckId";
import SignUp from "../../containers/SignUp";
import {checkUid} from "../../apiCall/auth"

const SignUpPage = () => {

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

  const clickCheckId = (event: any) => {
    event.preventDefault();
    setValues({ ...values, error: "" });

    if (!values.id) {
      setValues({ ...values, error: "Please enter a User ID!!!" });
    } else {
      checkUid(id).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, checkIdSuccess: false });
          return "";
        } else {
          if(data.email){
          setValues({
            ...values,
            id: id,
            name: data.name,
            email: data.email,
            error: "",
            checkIdSuccess: true,
          })};
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
