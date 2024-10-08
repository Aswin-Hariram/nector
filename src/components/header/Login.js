import "./Login.css";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../../assets/logo.png";
import AppleIcon from '@mui/icons-material/Apple';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import axios from "axios";
export default function Login({ visibile, setVisible }) {
  const [element, setelement] = useState("Login");
  const [undo, setundo] = useState("false");
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [data, setData] = useState([]);
  const [dummy, setDummy] = useState([]);
  function handleLogin(e) {
    e.preventDefault();

    if (element === 'Login') {

      let l_email = email;
      let l_pass = pass;
      if (l_email.length !== 0 && l_pass !== 0) {
        axios.get("http://localhost:8000/userDB")
          .then(result => { setData(result.data); })
          .catch(err => console.log(err));

        if (data.length !== 0) {
          let found = false;
          data.map((value) => {
            if (value.email === l_email) {
              found = true;
              if (value.password !== l_pass) {
                console.log("Incorrect password");
              }
              else {
                console.log("success...");
                setVisible(false);

              }
            }
            
          })
          if (!found) {
            console.log("User not found...");
          }
        }
      }

    }
    else {

      let s_email = email;
      let s_pass = pass;
      let s_cpass = cpass;


      if (s_email.length !== 0 && s_pass.length !== 0 && s_cpass.length) {
        if (s_pass === s_cpass) {

          axios.get("http://localhost:8000/userDB")
            .then((res) => {
              setDummy(res);
              if (dummy.length !== 0) {
                let found = false;
                data.map((value) => {
                  if (value.email === s_email) {
                    found=true;


                  }
                  
                })
                if (!found) {
                  
                  axios.post("http://localhost:8000/userDB", {
                    email: s_email,
                    password: s_cpass
                  })
                    .then(res => {console.log("Signup successfull"); setVisible(false)})
                    .catch(err => console.log(err));
                }
                else{
                  console.log("User already exist");
                }
              }


            })

            .catch(err => console.log(err));

        }
      }


    }

  }

  return (
    <div>
      {undo === "false" ?
        <div className="nector-login-container">

          <div className="nector-login-box">

            <div className="close" onClick={() => { setVisible(false) }}><CloseIcon /></div>

            <div className="nector-logo">

              <img src={Logo} alt="App Logo" />
            </div>
            <h2>{element} in to NEST</h2>
            <div className="buttons">
              <div id={element === "Login" ? "btnlogin" : "btn"}></div>
              <button className="login" onClick={() => { setelement("Login"); }}>Log In</button>
              <button className="login" onClick={() => { setelement("Sign Up") }}>Sign Up</button>
            </div>
            <form name="Login-Form">
              {element === "Login" ?
                <div className="input-group">
                  <label>Email </label>
                  <input type={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email address" required />

                </div>
                : <div className="input-group">

                  <div className="sign">
                    <label>Email</label>
                    <input type={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email address" required />


                  </div>
                  <div className="sign">
                    <label>Create Password</label>
                    <input type={pass} placeholder="Enter your password" required onChange={(e) => { setPass(e.target.value); }} />

                  </div>
                  <div className="sign">
                    <label>Confirm Password</label>
                    <input type={cpass} placeholder="Enter your password again" onChange={(e) => { setCpass(e.target.value) }} required />

                  </div>
                </div>}
              {element === "Login" ?
                <div className="input-group">
                  <label>Password</label>
                  <input type={pass} onChange={(e) => { setPass(e.target.value) }} placeholder="Password" required />
                  <span className="show-password-icon"></span> {/* Use an icon for show/hide password */}
                </div> : <div></div>}
              {element === "Login" ?
                <div className="remember-me">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div> :
                <div className="remember-me">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Confirm your Details</label>
                </div>}
              <button onClick={(e) => { handleLogin(e) }} className="login-btn">{element}</button>
            </form>
            {element === "Login" ?
              <div className="forgot-password">
                <a href="#">Forgot your password?</a>
              </div> : <div></div>}
            {element === "Login" ?
              <div className="social-login-buttons">
                <button className="social-login google" onClick={() => { setVisible(false) }}> <GoogleIcon />   Continue with Google</button>

                <button className="social-login apple"><AppleIcon /> Continue with Apple</button>
              </div> : <div></div>}
          </div>
        </div> : <div></div>}
    </div>
  );
}