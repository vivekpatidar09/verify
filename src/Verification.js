import React, { useState } from "react";
import "./Verification.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReCAPTCHA from "react-google-recaptcha";


function Verification() {
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobilenumber: "",
    url: "",
  });

  const [errors, setErrors] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    var validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } 
    
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }
    
    if (!formData.mobilenumber.trim()) {
      validationErrors.mobilenumber = "mobile number is required";
    }

    else if (!Number(formData.mobilenumber)) {
      validationErrors.mobilenumber = "mobile number is not valid";
    }
    
    if (!formData.url.trim()) {
      validationErrors.url = "url is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("submitted");
    }
  };


   
  // POP UP msg
  const [modal, setModal] = useState(false);
  
  const toggleModal = () => {
    setModal(pop)
  }

  const pop = () => {
  if (formData.username === '' || formData.email === '' || formData.mobilenumber === '' || formData.url === '') {
    setErrors('Please fill in all fields');
    setModal(modal)
  }

  else(
    setModal(!modal)
  )
}

  return (
    <div className="main-container">
      <div className="upper-div">
        <h3 className="logo">Logo</h3>
        <h1>Verify Authenticity</h1>
      </div>

      <div class="card-container">
        <form class="form" action="" onSubmit={handleSubmit}>
          <div className="inner-div1">

            <div>
              <input
                placeholder="User Name"
                class="username input"
                type="text"
                name="username"
                onChange={handleChange}
              />
              {errors && errors.username && <span>{errors.username}</span>}
            </div>

            <div>
              <input
                placeholder="Email ID"
                class="username input"
                type="text"
                name="email"
                onChange={handleChange}
              />
              {errors && errors.email && <span>{errors.email}</span> }
            </div>

            <div>
              <input
                placeholder="Mobile Number"
                class="username input"
                type="text"
                name="mobilenumber"
                onChange={handleChange}
              />
              {errors && errors.mobilenumber && <span>{errors.mobilenumber}</span>}
            </div>

            <div style={{marginBottom:"10px"}}>
              <input placeholder="URL" class="password input" type="password" name="url" onChange={handleChange} />
              {errors && errors.url && <span>{errors.url}</span>}
            </div>

            <ReCAPTCHA sitekey="6Lf19FspAAAAAKli-kEZ3tG2b0tUuWnmeSAcYxPq"/>

            <button class="btn" type="submit" onClick={toggleModal}>
              Submit
            </button>
          </div>

        {modal && (
          <div className="inner-div2">
          <div style={{display:"flex", alignItems:"center"}} >
            <CheckCircleIcon style={{ margin: "35px", fontSize: 40, color:"#3DA54E",}}></CheckCircleIcon>
          </div>

          <div>
            <h4>Appreciate your Submission</h4>
            <p>
              The Given URL "
              <a href="">
                <span>http://www.namsbel.com/</span>
              </a>
              " is genuine and trustworthy.
            </p>
          </div>
        </div>
        )}
          
        </form>
      </div>

      <div className="footer-div">
        <h3 className="logo">Logo</h3>

        <a href="">
          <h3>Privacy Policy</h3>
        </a>
        <a href="">
          <h3>About Us</h3>{" "}
        </a>
        <a href="">
          <h3>Services</h3>{" "}
        </a>
      </div>

      <h4
        style={{
          background: "white",
          padding: "0px 26px",
          color: "#64b0a3",
          fontWeight: 500,
        }}
      >
        Copyright@2024 Cybersyan
      </h4>
    </div>
  );
}

export default Verification;
