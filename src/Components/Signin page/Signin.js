import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import banner_signin from '../../assets/banner-signin.svg';
import signin_image_1 from "../../assets/banner-signin-img-1.svg"
import signin_image_2 from "../../assets/banner-signin-img-2.svg"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { currentServerUrl } from "../../const";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    axios.post(`${currentServerUrl}/login`, {
      email: data.email,
      password: data.password
    }, {
      withCredentials: true
    }).then(res => {
      console.log(res.data.message)
    }).catch(err => {

    })
  };
  return (
    <div className="signin">
        <div className="bgimage__signin" style={{ backgroundImage: banner_signin }}>
        <img src={signin_image_1} className="signin_image_1" alt=""/>
        <img src={signin_image_2} className="signin_image_2" alt=""/>

        <div className="signin__container">
          <h1>Welcome back!<br></br><h6>Please Sign-in</h6></h1>

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

            <button
              className="login__signInButton"
              type="submit"
              id="submit">
              Sign in
              </button>
            <br></br>
            <br></br>

            <div className="signup__part">
              <p>New User? please &nbsp;
                <Link to="/signup" style={{color: "black", textDecoration: "none"}}>
                  <b>Sign-up</b>
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