import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../loginPage/loginPage.css";
import "./resetPasswordPage.css";
import lg from "../../assets/images/loginBackground.png";
import logo from "../../assets/images/inphamed-login-logo.png";
import OtpPage from "../OtpPage/otpPage";
import SetPasswordPage from "../setPasswordPage/setPasswordPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";


const ResetPasswordPage = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [OtpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
  const [finalOtp, setFinalOtp] = useState("");
  const [verifyclicked, setVerifyClicked] = useState(false);
  const [receivedOtp, setReceivedOtp] = useState('');
  const otpRef = useRef(null);
  const navigate = useNavigate();

  const handleSendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/inphamed/api/v1/auth/forgot/password", {
        email: email
      })
      if(response.status === 200){
        const otp_id = response.data.data;
        sessionStorage.setItem("otp_id", otp_id);
        setOtpVisible(true);
      }
    } catch (error: any) {
      const msg = error.response.data.message;
      toast.error(msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } finally {

    }
  };

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (event: any) => {
    const { value } = event.target;
    console.log(value);
    setEmail(value);
    if (value.trim().length === 0) {
      setEmailError("Email cannot be empty");
    } else {
      validateEmail();
    }
  };

  const updateOtp = (otp: any) => {
    setFinalOtp(otp);
  }

  const handleOTP = async (e: any) => {
    e.preventDefault();
    try{
      const enteredOtp = otp.join('');
      const response = await axios.post("http://localhost:3000/inphamed/api/v1/auth/forgot/password/otpSubmit", {
        otp_id: sessionStorage.getItem("otp_id"),
        otp: enteredOtp
      })
      if(response.status === 200) {
        console.log("response", response);
        sessionStorage.setItem("user_id", response.data.data);
        navigate('/setPassword')
      }
    } catch (error: any) {
      const msg = error.response.data.message;
      toast.error(msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } finally {

    }
  }

  const routeHome = () => {
    navigate('/')
  }

  return (
    <div className="inphamed-login-v1">
      <ToastContainer></ToastContainer>
      <img className="bg-icon" alt="" src={lg} />
      <div className="login-section">
        <Card className="p-4 login-card email-address-details">
          <Card.Body>
            <div className="d-flex flex-column justify-content-center">
              <div onClick={routeHome}>
                <img src={logo} className="logo-image"></img>
              </div>
              <div className="d-flex justify-content-center">
                <span> Your tagline goes here</span>
              </div>
            </div>
            {OtpVisible ? (
              <Form className="py-4">
                <p className="my-4" style={{ fontSize: "14px" }}>
                  Please enter the OTP sent to your email address.
                </p>
                <Form.Group className="mb-3 d-flex flex-column justify-content-center" controlId="formBasicOtp">
                  <Form.Label style={{ textAlign: 'center' }}>OTP</Form.Label>
                  <OtpPage length={4} otp={otp} setOtp={setOtp} onComplete={(otp) => updateOtp(otp)
                  } />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className={`w-100  btn-login ${(finalOtp.length !== 4) ? 'btn-login-disabled' : ''}`}
                  disabled={finalOtp.length !== 4}
                  onClick={handleOTP}
                >
                 <div className="log-in">Verify OTP</div>
                </Button>
              </Form>
            ) : (
              <Form>
                <p className="my-4" style={{ fontSize: "14px" }}>
                  Please enter your email address. We'll send you an email
                  that will allow you to reset your password.
                </p>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@domain.com"
                    className="custom-input"
                    value={email}
                    onChangeCapture={handleEmailChange}
                    onBlur={validateEmail}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3 remember-reset">
                  <a
                    href="#"
                    className="text-decoration-none reset-password-link"
                    onClick={routeHome}
                  >
                    Cancel
                  </a>
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  className={`w-100  btn-login ${(email === "" || emailError !== "") ? 'btn-login-disabled' : ''}`}
                  onClick={handleSendEmail}
                  disabled={(email === "" || emailError !== "")}
                >
                 <div className="log-in">Send Email</div>
                </Button>
              </Form>
            )}
          </Card.Body>
          <Card.Footer className="text-center">
            <p style={{ fontSize: "14px" }}>
              {" "}
              By signing in, you acknowledge and agree to our{" "}
              <span>
                <a className="login-footer">Terms of Use</a>
              </span>{" "}
              and{" "}
              <span>
                <a className="login-footer">Privacy Policy</a>
              </span>
              .
            </p>
            <p style={{ fontSize: "14px" }}>
              {" "}
              Need help? Contact{" "}
              <span>
                <a className="login-footer">Inphamed Customer Care.</a>
              </span>
            </p>
          </Card.Footer>
        </Card>
      </div>
      <div className="about-section">
        <div className="about-with-link">
          <div className="about-content">
            <div className="headline-subheadline">
              <div className="headline">
                <b className="welcome-to-inphamed">Welcome to Inphamed</b>
              </div>
              <div className="subheadline">
                <div className="the-next-generation">The next generation solution - Discover, analyse, and map global innovation knowledge </div>
              </div>
            </div>
            <div className="paragraph">
              <div className="lorem-ipsum-dolor-container">
                <p className="lorem-ipsum-dolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p className="lorem-ipsum-dolor">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="by-signing-in">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </div>
            </div>
          </div>
          <div className="btn-learn-more">
            <div className="log-in">Learn More</div>
          </div>
        </div>
        <div className="bottom-links">
          <div className="bottom-link-bg">
          </div>
          <div className="bottom-links1">
            <div className="copyright">
              <div className="welcome-to-inphamed">© 2024 Inphamed</div>
            </div>
            <img className="separator-icon" alt="" src="Separator.svg" />
            <div className="terms-of-use1">
              <div className="welcome-to-inphamed">Terms of Use</div>
            </div>
            <img className="separator-icon" alt="" src="Separator.svg" />
            <div className="privacy-statement">
              <div className="welcome-to-inphamed">Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
