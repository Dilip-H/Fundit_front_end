import React, { useState } from 'react';
import "./Startup.css";
import banner_startup from "../../assets/banner-startup.svg";
import avatar from "../../assets/image_upload.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  startup_avatar: yup.mixed()
    .required("You need to upload an image")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 2000000;
    }),
  startup_name: yup.string().required("Name of Startup should be required"),
  startup_Industry: yup.string().required("Sector/industry should be required"),
  startup_intro: yup.string().required("Explain your idea or about your company in one line please"),
  funding_required: yup.number()
    .required("Please enter the amount")
    .integer("Value should be a number")
    .positive("Number should be positive"),
  equity: yup.number()
    .required("Please enter the amount")
    .integer("Value should be a number")
    .positive("Number should be positive"),
  startup_type: yup.string().required("Please Select an option"),
  startup_interested_type: yup.string().required("Please Select an option"),
  startup_pitchdesk: yup.mixed().required("You need to provide a file"),
});

function Startup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
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

  /* for file uploading */
  const onChangeHandler = (e) => {
    console.log(e.target.files[0]);
  };

  /* for overall form submit button */
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="startup">
      <div className="bgimage__startup" style={{ backgroundImage: banner_startup }}>
        <div className="profile-startup__container">
          <h2>Create Your Profile<br></br><h5>Build up your profile.</h5></h2>

          {/* Logo upload */}
          <form onSubmit={handleSubmit(submitForm)}>
            <h4>Attach your startup/company logo:</h4>
            <br></br>
            <div className="form__img-input-container">
              <input
                {...register("startup_avatar")}
                type="file"
                accept=".png, .jpg, .jpeg"
                id="photo"
                className="visually-hidden"
                onChange={handleImg}
              />
              <label htmlFor="photo" className="form-img__file-label" ></label>
              <img src={src} alt={alt} className="form-img__img-preview" />
            </div>
            <p> {errors.startup_avatar?.message} </p>
            <br></br>

            {/* Name of startup */}
            <input style={{width:"80%"}}
              {...register("startup_name")}
              type="text"
              placeholder="Name of Startup (idea/company)"
            />
            <p> {errors.startup_name?.message} </p>
            <br></br>

            {/* Sector/industry */}
            <input style={{width:"80%"}}
              {...register("startup_Industry")}
              type="text"
              placeholder="Sector/industry"
            />
            <p> {errors.startup_Industry?.message} </p>
            <br></br>

            {/* About your idea */}
            <input style={{width:"80%"}}
              {...register("startup_intro")}
              type="text"
              placeholder="About your idea/company"
            />
            <p> {errors.startup_intro?.message} </p>
            <br></br>

            {/* Amount of funding */}
            <input style={{width:"80%"}}
              {...register("funding_required")}
              type="number"
              placeholder="Amount of funding you need in ₹"
            />
            <p> {errors.funding_required?.message} </p>
            <br></br>

            {/* Equity */}
            <input style={{width:"80%"}}
              {...register("equity")}
              type="number"
              placeholder="Equity in exchange"
            />
            <p> {errors.equity?.message} </p>
            <br></br>

            {/* Startup_type */}
            <label style={{ color: "black", fontFamily: "Bebas Neue"}}>Startup type</label>
            <br></br>
            <select {...register("startup_type")} style={{ width: "60%", height: "25px", borderRadius: "15px",  boxShadow: "5px 5px 5px" }}>
              <option value=""></option>
              <option value="Idea">Idea</option>
              <option value="Product">Product</option>
              <option value="Revenue generation">Revenue generation</option>
            </select>
            <p> {errors.startup_type?.message} </p>
            <br></br>

            {/* Startup_interested_type */}
            <label style={{ color: "black", fontFamily: "Bebas Neue" }}>Startup interested type</label>
            <br></br>
            <select {...register("startup_interested_type")} style={{ width: "60%", height: "25px", borderRadius: "15px", boxShadow: "5px 5px 5px"  }}>
              <option value=""></option>
              <option value="Partnership">Partnership</option>
              <option value="Co-founder">Co-founder</option>
              <option value="Skill">Skill</option>
              <option value="All">All</option>
            </select>
            <p> {errors.startup_interested_type?.message} </p>
            <br></br>

            {/* Pitch deck */}
            <label style={{ color: "black", marginLeft: "2px", fontFamily: "Bebas Neue" }}>Note: only .pdf and .doc file format supported</label>
            <input style={{ backgroundColor: "whitesmoke", color: "black", borderRadius: "2px" }}
              {...register("startup_pitchdesk")}
              type="file"
              accept=".doc, .pdf"
              name="file"
              onChange={onChangeHandler}
            />
            <p> {errors.startup_pitchdesk?.message} </p>

            {/* table for team */}


            {/* Submit button */}
            <button
              className="profile-startup__SubmitButton"
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

export default Startup;
