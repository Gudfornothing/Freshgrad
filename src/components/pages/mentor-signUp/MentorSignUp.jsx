import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
  RegionSelect,
  PhonecodeSelect
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";


const MentorSignUp = () => {

  const [region, setRegion] = useState("");
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  
  const [firstName , setFirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
const [cpassword , setCpassword] = useState('')
const [mobile , setMobile] = useState('')
const [tmc , setTmc] = useState(false)

function handleForm(e){
  e.preventDefault()
  console.log(`Country:${country} State:${state} City:${city} FirstName:${firstName} LastName: ${lastName} Email: ${email} Mobile:${mobile} Password:${password} ConfirmPAssword:${cpassword} T&C:${tmc}`);
  
}
  return (
    <div>
      <div>
  <div className="bg_nav-slid bg-white">
    <div className="navbar-area ledu-area otherpages-menu">
      <div className="mobile-responsive-nav">
        <div className="container">
          <div className="mobile-responsive-menu">
            <div className="logo">
              <Link to="/">
                <img src="/src/assets/images/logos/logo-full.png" height={50} className="logo-one rounded-pill" alt="logo" />
              </Link >
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-nav nav-area">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light p-0">
            <Link className="navbar-brand" to="/">
              <img src="/src/assets/images/logos/logo-full.png" className="logo-one rounded-pill" alt="Logo" />
            </Link >
            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul className="navbar-nav w-100 ms-5">
                <li className="nav-item">
                  <Link to="/training-program" className="nav-link">
                    Training Programs
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/recruitor-manager" className="nav-link">
                    Recruiter
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/trainer-mentors" className="nav-link active">
                    Mentorship</Link >
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">
                    Contact Us
                  </Link >
                </li>
              </ul>
            <div className="nav-widget-form me-3 d-none d-md-none d-lg-block">
  <form className="browser-default right position-relative">
    <input id="search-input" placeholder="Search" type="text" className="browser-default search-field" name="q" defaultValue autoComplete="off" aria-label="Search box" />
    <label htmlFor="search-input"><i className="ri-search-line" /></label>
    <i className="material-icons">cancel</i>
    <div className="search-popup">
      <div className="search-content">
        <ul className="popup-list">
          <li ><Link className="grey-text" to="#">Google</Link ></li>
          <li ><Link className="grey-text" to="#">Apple</Link ></li>
          <li ><Link className="grey-text" to="#">Microsoft</Link ></li>
          <li ><Link className="grey-text" to="#">Github</Link ></li>
        </ul>
      </div>
    </div>
  </form> 
</div>

              <div className="others-options login__signup gap-2 d-flex align-items-center">
                <div className="optional-item">
                  <Link to="/signin" className="defaultsignin rounded-pill">Sign In</Link >
                </div>
                <div className="optional-item">
                  <Link to="/signup" className="default-btn two rounded-pill">Sign up</Link >
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="side-nav-responsive">
        <div className="container">
          <div className="dot-menu">
         <div className="circle-inner">
  <span className="ri-search-line" />
</div>

          </div>
          <div className="mobilelogin gap-2 d-flex align-items-center">
            <div className="optional-item">
              <Link to="/signin" className="defaultsignin rounded-pill">Sign In</Link >
            </div>
            <div className="optional-item">
              <Link to="/signup" className="default-btn two rounded-pill">Sign up</Link >
            </div>
          </div>
          <div className="container">
  <div className="side-nav-inner">
    <div className="side-nav justify-content-center align-items-center">
      <div className="side-item">
        <form className="search-form">
          <input type="search" className="form-control" placeholder="Search courses" />
          <button type="submit">
            <i className="ri-search-line" />
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
  <div className="header_space" />
  <div className="user-area p-0 p-md-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 p-0 d-none d-md-block d-lg-block">
          <div className="user_login">
            <img src="/src/assets/images/login_2.gif" className="imgk-fluid w-100" alt="login-banner" />
          </div>
        </div>
        <div className="col-lg-6 d-flex p-0">
          <div className="user-all-form userlogin position-relative">
            <div className="login_bottom">
              <img src="/src/assets/images/login-bottom.png"  />
            </div>
            <div className="contact-form m-0 py-0">
             <img src="/src/assets/images/logos/logo-full.png" className="logo_login rounded-pill" alt="Logo" />

              <h3 className="user-title"> Sign up for an account</h3>
              <ul className="nav tabs_signup justify-content-start gap-2">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/signup">Student</Link >
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recruitor">Recruiter</Link >
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/mentor">Mentor</Link >
                </li>
              </ul>
              <div className="pt-3 text-center">
                <Link to="#" className="linkedbtn"><i className="ri-linkedin-box-fill" /> Linkedin</Link >
                <h6 className="text-center m-0 mt-2">Or Continue with</h6>
              </div>
              <form id="contactForms" onSubmit={handleForm}>
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <h5>Location</h5>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-floating form-group">
                    <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder=" Country"
        region={region}
      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-floating form-group">
                    <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder=" State"
      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-floating form-group">
                    <CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder=" City"
      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-floating form-group">
                      <input type="text" className="form-control" id="floatingInput" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                      <label htmlFor="floatingInput">First Name</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-floating form-group">
                      <input type="text" className="form-control" id="floatingInput"  value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                      <label htmlFor="floatingInput">Last Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-floating form-group">
                      <input type="email" className="form-control" id="floatingInput" value={email} onChange={(e)=>setEmail(e.target.value)} />
                      <label htmlFor="floatingInput">Email ID</label>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-floating form-group">
                      <input type="password" className="form-control" id="floatingPassword"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-floating form-group">
                      <input type="password" className="form-control" id="floatingPassword" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} />
                      <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                  </div>
                  <div className="col-lg-12 position-relative">
                    <div className="form-floating form-group">
                      <input type="text" id="mobile_code" className="form-control"  name="name" /><label htmlFor="floatingInput" value={mobile} onChange={(e)=>setMobile(e.target.value)}>Mobile Number</label>
                    </div>
                  </div>
                  <div className="col-lg-12 form-condition">
                    <div className="agree-label">
                      <input type="checkbox" id="chb1"value={tmc} onChange={(e)=>setTmc(e.target.checked)} />
                      <label htmlFor="chb1" className="small text-muted">
                        All your information is collected, stored and processed as per our data
                        processing guidelines. By signing up on FreshGard, you agree to our <Link to="#">Privacy
                          Policy</Link > and <Link to="#">Terms of Use</Link >
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button className='"default-btn w-100 rounded"' type='submit'>Sumbit form</button>
                    <Link to="/student-step" type="submit" className="default-btn w-100 rounded">
                      Sign Up
                    </Link >
                    <h6 className="mt-4 text-center fw-normal text-muted">Already have an account? <Link className="fw-bold" to="/signin">Login</Link ></h6>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default MentorSignUp
