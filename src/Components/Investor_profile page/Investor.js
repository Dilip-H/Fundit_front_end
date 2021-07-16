import React, { useState } from 'react';
import "./Investor.css";
import banner_investor from "../../assets/banner-investor.svg";
import avatar from "../../assets/user_upload.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { currentServerUrl } from '../../const';

const schema = yup.object().shape({
  investor_avatar: yup.mixed()
    .required("You need to upload an image")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 2000000;
    }),
  investor_name: yup.string().required("Name of Investor should be required"),
  investor_intro: yup.string().required("This is a required field"),
  investor_industry: yup.string().required("Sector/industry should be required"),
  investor_type: yup.string().required(),
  investor_interested_type: yup.string().required(),
  amount_ready: yup.number()
    .required("Please enter the amount")
    .integer("Value should be a number")
    .positive("Number should be positive")
})

function Investor() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  /* img upload */
  /* state */
  const [{ alt, src }, setImg] = useState({
    src: avatar,
    alt: "upload"
  });

  /* img method */
  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name
      });
    }
  };

  /* for overall form submit button */
  const submitForm = (data) => {

    //This is where you send the text-fields of investor to the backend
    axios.post(`${currentServerUrl}/investor`,
      {
        investor_name: data.investor_name,
        investor_intro: data.investor_intro,
        investor_industry: data.investor_industry,
        investor_type: data.investor_type,
        investor_interested_type: data.investor_interested_type,
        amount_ready: data.amount_ready
      },
      { withCredentials: true })
      .then(res => {

        //This is where you send the avatar to the backend
        console.log(res.data.message)
        const file = new FormData()
        file.append("investor_avatar", data.investor_avatar[0])
        axios.post(`${currentServerUrl}/investor/avatar`, file, { withCredentials: true })
          .then(avatarRes => {
            console.log(avatarRes.data.message)
          }).catch(err => console.log("failed at /investor/avatar", err))

      }).catch(err => console.log("failed at /investor", err))
  };


  return (
    <div className="investor">
     <div className="bgimage__investor" style={{ backgroundImage: banner_investor }}>
        <div className="profile-investor__container">
          <h2>Create Your Profile<br></br><h5>Build up your profile.</h5></h2>
         
          {/* Profile pic upload */}
          <form onSubmit={handleSubmit(submitForm)}>
            <h4>Upload your profile picture:</h4>
            <br></br>
            <div className="form__img-input-container">
              <input
                {...register("investor_avatar")}
                type="file"
                accept=".png, .jpg, .jpeg"
                id="photo"
                className="visually-hidden"
                onChange={handleImg}
                required
              />
              <label htmlFor="photo" className="form-img__file-label"></label>
              <img src={src} alt={alt} className="form-img__img-preview" />
            </div>
            {errors.investor_avatar && <p>{errors.investor_avatar}</p>}
            <br></br>

            {/* Name of investor */}
            <input style={{width:"80%"}}
              {...register("investor_name")}
              type="text"
              placeholder="Full Name"
            />
            <p> {errors.investor_name?.message} </p>
            <br></br>

            {/* Sector/industry */}
            <input style={{width:"80%"}}
              {...register("investor_industry")}
              type="text"
              placeholder="Sector/industry"
            />
            <p> {errors.investor_industry?.message} </p>
            <br></br>

            {/* About your idea */}
            <input style={{width:"80%"}}
              {...register("investor_intro")}
              type="text"
              placeholder="What type of startup's your ready to invest"
            />
            <p> {errors.investor_intro?.message} </p>
            <br></br>

            {/* Amount ready */}
            <input style={{width:"80%"}}
              {...register("amount_ready")}
              type="number"
              placeholder="Amount your ready to invest in ₹"
            />
            <p> {errors.amount_ready?.message} </p>
            <br></br>

            {/* Investor_type */}
            <label style={{ color: "black", fontFamily: "Bebas Neue" }}>Investor type</label>
            <br></br>
            <select {...register("investor_type")} style={{ width: "60%", height: "25px", borderRadius: "15px",  boxShadow: "5px 5px 5px" }}>
              <option value=""></option>
              <option value="professional">Professional</option>
              <option value="individual">Individual</option>
              <option value="skilled">Skilled</option>
            </select>
            <p> {errors.investor_type?.message} </p>
            <br></br>

            {/* Investor_interested_type */}
            <label style={{ color: "black", fontFamily: "Bebas Neue" }}>Investor interested type</label>
            <br></br>
            <select {...register("investor_interested_type")} style={{ width: "60%", height: "25px", borderRadius: "15px",  boxShadow: "5px 5px 5px" }}>
              <option value=""></option>
              <option value="idea">Idea</option>
              <option value="product">Product</option>
              <option value="revenue generation">Revenue generation</option>
              <option value="all">All</option>
            </select>
            <p> {errors.investor_interested_type?.message} </p>
            <br></br>

            {/* Submit button */}
            <button
              className="profile-investor__SubmitButton"
              type="submit"
              id="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Investor
