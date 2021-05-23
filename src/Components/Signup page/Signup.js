import React, { useState } from "react";
import "./Signup.css";
import { Link, Redirect, useLocation } from "react-router-dom";
import banner_signup from '../../assets/sign up page.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function useQuery() {
  return new URLSearchParams(useLocation().search)
}


function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [errorMessage, setErrorMessage] = useState(null)

  const query = useQuery()

  if (!query.get("user_type") && !(query.get("user_type") === 'startup' || query.get("user_type") === 'investor')) {
    return <Redirect to="/" />
  }

  const submitForm = (data) => {
    //Getting QUERY PARAMS for user_type
    const user_type = query.get("user_type")

    const requestObject = {
      email: data.email,
      password: data.password,
      user_type: user_type
    }

    axios.post('http://localhost:4000/register', requestObject)
      .then(response => {
        if (response.data.message === 'Account already exists for email') {
          setErrorMessage('Account already exists.')
        }
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <div className="signup">
      <div className="bgimage__signup" style={{ backgroundImage: banner_signup }}>
        <div className="signup__container">
          <h1>Sign Up<br></br><h6>Let's get you started</h6></h1>

          <form onSubmit={handleSubmit(submitForm)}>
            <input
              {...register("email")}
              type="text"
              placeholder="Enter your email"
            />
            <p> {errors.email && "Please enter a valid email address."} </p>
            <br></br>

            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
            />
            <p> {errors.password && "Your Password must contain atleast 4 characters."} </p>
            <br></br>

            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password..."
            />
            <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
            <br></br>

            <button
              className="login__signUpButton"
              type="submit"
              id="submit">
              Sign up
              </button>
            <br></br>
            <br></br>

            {errorMessage && <p>{errorMessage}</p>}

            <div className="signin__part">
              <p>Already have an account? &nbsp;
                  <Link to="/signin" style={{ color: "white", textDecoration: "none" }}>
                  <b>Sign-in</b>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Signup;