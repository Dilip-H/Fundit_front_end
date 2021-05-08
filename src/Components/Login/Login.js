import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            {...register("email")}
            type="text"
            placeholder="Email..."
          />
          <p> {errors.email?.message} </p>

          <input
            {...register("password")}
            type="password"
            placeholder="Password..."
          />
          <p> {errors.password?.message} </p>

          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password..."
          />
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>

          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;