import "./Login.css";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../../assets/logo.png";
import AppleIcon from '@mui/icons-material/Apple';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import axios from "axios";
export default function Login({ visibile, setStatus, setVisible }) {
  const [element, setelement] = useState("Login");
  const [undo, setundo] = useState("false");
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  useEffect(() => {

    axios.get("https://json-server-sik9.onrender.com/userDB")
      .then(result => { setData(result.data); })
      .catch(err => console.log(err));
  }, []);

  function Valid() {
    if (!email.match(email_regex)) {
      setMessage("Enter valid Email Address....");
      return false;
    }
    else if (!pass.match(pass_regex)) {
      setMessage("Enter Strong Password...");
      return false;
    }
    else {
      return true;
    }
  }

  function Login() {
    let l_email = email;
    let l_pass = pass;
    if (l_email.length !== 0 && l_pass !== 0 && Valid()) {


      if (data.length !== 0) {
        let found = false;
        data.map((value) => {

          if (value.email === l_email) {
            found = true;
            if (value.password !== l_pass) {
              setMessage("Incorrect password");
            }
            else {


              localStorage.setItem("loginStatus", "true");
              localStorage.setItem("email", email);
              console.log(localStorage.getItem("loginStatus"));
              window.location.reload();
              window.location.replace("/");
              console.log("success...");
              setVisible(false);
              setStatus("true");

            }
          }

        })
        if (!found) {
          console.log("User not found...");
          setMessage("User not found...")
        }
      }
    }

  }

  function Signup() {
    if (data.length !== 0) {

      const obj = data.find(item => item.email === email);
      if (obj === undefined) {
        if (email.length !== 0 && pass.length !== 0 && cpass.length !== 0 && pass === cpass) {
          if (Valid()) {
            axios.post("https://json-server-sik9.onrender.com/userDB",
              {
                email: email,
                password: pass,
                cart: []
              }
            ).then((res) => {
              localStorage.setItem("loginStatus", "true");
              localStorage.setItem("email", email);
              console.log(localStorage.getItem("loginStatus"));
              console.log(res);

              console.log("Signup Successful..");
              window.location.reload();
              window.location.replace("/");
              setVisible(false);
              setStatus("true");

            })
              .catch((err) => console.log(err));
          }
        }
        else {
          alert("Input field cannot be empty!!!");
        }
      }
      else {
        setMessage("User already exist...")
        console.log("User already exist...");
      }
    }
    else {
      if (email.length !== 0 && pass.length !== 0 && cpass.length !== 0 && pass === cpass) {
        if (Valid()) {
          axios.post("https://json-server-sik9.onrender.com/userDB",
            {
              email: email,
              password: pass,
              cart: []
            }
          ).then((res) => {
            localStorage.setItem("loginStatus", "true");
            localStorage.setItem("email", email);
            console.log(localStorage.getItem("loginStatus"));
            console.log(res);
            console.log("Signup Successful..");
            window.location.reload();
            window.location.replace("/");

            setVisible(false);
            setStatus("true");

          })
            .catch((err) => console.log(err));
        }
      }
    }
  }
  function handleLogin(e) {
    e.preventDefault();

    if (element === 'Login') {

      Login();
    }
    else {


      Signup();
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
              <p className="error-message">{message}</p>
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