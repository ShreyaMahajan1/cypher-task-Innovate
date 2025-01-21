import React, { useEffect } from 'react';
import ApiServices from './ApiServices';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
export default function Userprofile() {
  const [newEmployeePassword, setNewEmployeePassword] = useState('');
  const [oldpassword,setoldpassword] = useState('');
  const [load,setload]=useState(false);
  let obj = {
    margin:"0 auto",
    display:"block"
  }
  const [confirmpassword,setconfirmpassword] = useState('');
  const changepassword =(e)=>{
    e.preventDefault();
    if(confirmpassword != newEmployeePassword){
      console.log("false");
      toast.warning("New Password &  Confirmed Password Does not match")
    }
    else{
      console.log("true");  
      let data = {
        _id:sessionStorage.getItem("_id"),
        currentpassword:oldpassword,
        newpassword:newEmployeePassword
      }
      var token = sessionStorage.getItem('token');
      ApiServices.changepasswordadmin(data,{ Headers: { authorization: token } })
      .then((res)=>{
        if(res.data.success){
          // console.log("change updated",res);
          toast.success(res.data.message);
          setload(true);
          setTimeout(() => {
            
            window.location.reload();
          },2000);
        }
        else{
          toast.warning(res.data.message)
        }
      })
      .catch(err=>{
        console.log(err);
        toast.warning("something went wrong");
        // toast.warning(res.message);
      })
      setload(false);
    }

}
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Profile</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Profile Update</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <ToastContainer/>
        <ClipLoader loading={load}  size={100} cssOverride={obj}/>
      <div className={load && "display-screen"}>
        <section className="section profile">
          <div className="row">
            <div className='col-lg-1 col md -12'></div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                 
                  <h2>Admin</h2>
                  <h4>{sessionStorage.getItem("email")}</h4>
                  <h5><b>Change Password</b></h5>
                  <form onSubmit={changepassword}>
                        <div className="row mb-3">
                          <label
                            htmlFor="currentPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Current Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              id="currentPassword"
                              value={oldpassword}
                              onChange={(e)=>{
                              setoldpassword(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="newPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              className="form-control"
                              id="newPassword"
                              value={newEmployeePassword}
                              onChange={(e)=>{
                                setNewEmployeePassword(e.target.value)
                              }}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="renewPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Re-enter New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="renewpassword"
                              type="password"
                              className="form-control"
                              id="renewPassword"
                              value={confirmpassword}
                              onChange={(e)=>{
                                setconfirmpassword(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Change Password
                          </button>
                        </div>
                      </form>
                  {/* <h3>Web Developer</h3> */}
                  {/* <div className="social-links mt-2">
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          
          </div>
        </section>
        </div>
      </main>
      {/* End #main */}
    
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  )
}