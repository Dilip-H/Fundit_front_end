import React, {useState} from 'react';
import "./Investor.css";
import banner_profile from "../../assets/banner-2.png";
import avatar from "../../assets/user_upload.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    invester_avatar: yup.mixed().required(""),
    investor_name: yup.string().required(""),
    Investor_intro: yup.string().required(""),
    investor_industry: yup.string().required(""),
    investor_type: yup.string().required(),
    investor_interested_type: yup.string().required(""),
    amount_ready: yup.mixed().required("")
})

function Investor() {
    const { register, handleSubmit, formState: { errors }} = useForm({
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
        console.log(data);
      };


    return (
        <div className="investor">
             <div className="bgimage__startup" style={{ backgroundImage: banner_profile }}>
            <div className="profile__container">
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
                  />
                  <label htmlFor="photo" className="form-img__file-label"></label>
                  <img src={src} alt={alt} className="form-img__img-preview" />
                 </div>
                 <p> {errors.investor_avatar?.message} </p> 
                <br></br>

                {/* Name of investor */}
                {/*<label style={{color:"white", marginLeft:"20px"}}>Name of Startup (idea/company): </label> */}
                <input
                  {...register("investor_name")}
                  type="text"
                  placeholder="Full Name"
                 />
                <p> {errors.investor_name?.message} </p>
                <br></br>

                  {/* Sector/industry */}
                    <input
                       input 
                       {...register("investor_Industry")}
                       type="text"
                       placeholder="Sector/industry"
                   />
                   <p> {errors.investor_Industry?.message} </p>
                   <br></br>

                   {/* About your idea */}
                    <input
                        {...register("investor_intro")}
                        type="text"
                        placeholder="What type of startup's your ready to invest"
                     />
                     <p> {errors.investor_intro?.message} </p>
                    <br></br>

                     {/* Amount ready */}
                     <input
                        {...register("amount_ready")}
                        type="text"
                        placeholder="Amount your ready to invest in ₹"
                     />
                     <p> {errors.amount_ready?.message} </p>
                    <br></br>

                    {/* Investor_type */}
                    <label style={{color:"white", fontFamily:"Bebas Neue"}}>Investor type</label>
                    <br></br>
                    <select {...register("investor_type")} style={{ width:"20%", height:"20px", borderRadius:"10px"}}>
                      <option value=""></option>
                      <option value="Professional">Professional</option>
                      <option value="Individual">Individual</option>
                      <option value="Skilled">Skilled</option>
                    </select>
                    <p> {errors.investor_type?.message} </p>
                    <br></br>

                    {/* Investor_interested_type */}
                    <label style={{color:"white", fontFamily:"Bebas Neue"}}>Investor interested type</label>
                    <br></br>
                    <select {...register("investor_interested_type")} style={{ width:"20%", height:"20px", borderRadius:"10px"}}>
                      <option value=""></option>
                      <option value="Idea">Idea</option>
                      <option value="Product">Product</option>
                      <option value="Revenue generation">Revenue generation</option>
                      <option value="All">All</option>
                    </select>
                    <p> {errors.investor_interested_type?.message} </p>
                    <br></br>

                     {/* Submit button */}
                     <button
                    className="profile__SubmitButton"
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
