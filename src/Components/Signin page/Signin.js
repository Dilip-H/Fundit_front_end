import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import banner_signup from '../../assets/sign in page.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    console.log(data);
  };
  return (
    <div className="signin">
      <div className="bgimage__signin" style={{ backgroundImage: banner_signup }}>
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
                <Link to="/signup" style={{color: "white", textDecoration: "none"}}>
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