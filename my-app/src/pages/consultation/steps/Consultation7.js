
import React, { useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../../../lib/axios";
import Loader from "../../../components/comonContainer/Loader";

function Consultation7({formData, setStep, nextStep,setError }) {
  const [permission, setPermission] = useState("");
  const [permissionErr, setPermissionErr] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if(!permission){
      setPermissionErr("permissionis required");
    }else {
      const apiUrl = "/api/save-consultation";
      const payload = {
        name: formData.name,
        type_of_project: formData.type_of_project,
        type_of_property:formData.type_of_property,
        email: formData.email,
        phone: formData.phone,
        permission:permission
      }
      try {
        const response = await apiClient.post(apiUrl, payload);
        if(response.status = 200) {
          setStep(8);
        }
      } catch (error) {
        console.error('Failed to fetch data:',error);
        setLoading(false);
        // if(error.response.data.errors.email[0]){
          setStep(5);
          // setError(error.response.data.errors.email[0])
        // }
        // console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="consultationPage">
      <div className="position-absolute w-100">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6">
              <Link to="/" className="loginLogo">
                <img src="assets/images/amuma-main-logo.svg" alt="" />
              </Link>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="container vh-100 d-flex align-items-center justify-content-start">
        <div className="consultationContent">
          <form>
            <div className="row">
              <div className="col-md-6 pe-md-5">
                <h2>Thank you. we will get in touch with you soon</h2>
                <p>Your permission is required for us to send you the content.</p>
                <ul className="consultationRadioBtn">
                  <li>
                    <input
                      type="radio"
                      name="permission"
                      id="accept"
                      onChange={() => setPermission("1")}
                    />
                    <label htmlFor="accept" className="px-3">
                      accept
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="permission"
                      id="deny"
                      onChange={() => setPermission("0")}
                    />
                    <label htmlFor="deny" className="px-3">
                      deny
                    </label>
                  </li>
                  {permissionErr && <p className="text-danger">{permissionErr}</p>}  
                </ul>
                {loading ? <Loader/> : 
                <button onClick={handleSubmit} className="btn btn-secondary">
                  submit
                </button>
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Consultation7;

