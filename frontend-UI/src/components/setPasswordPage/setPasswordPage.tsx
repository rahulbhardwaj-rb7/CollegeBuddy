import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../loginPage/loginPage.css";
import lg from "../../assets/images/loginBackground.png";
import logo from "../../assets/images/inphamed-login-logo.png";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoInfo } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import { IconButton, colors } from "@mui/material";

const SetPasswordPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNewPassword = (event: any) => {
    const { value } = event.target;
    setNewPassword(value);
  };

  const handleConfirmPassword = (event: any) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };

  const navigate = useNavigate();

  const routeHome = () => {
    navigate("/");
  };

  const validatePassword = (e : any) => {
    e.preventDefault();
    const password = newPassword;
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    ) {
      setPasswordError("");
      handleSubmit();
    } else {
      setPasswordError(
        "Password must contain at least 8 characters, including uppercase, lowercase, numeric, and special characters."
      );
    }
  };

  const handleSubmit = async () => {
    try {
      if (newPassword === confirmPassword) {
        const userId = sessionStorage.getItem("user_id");

        if (!userId) {
          throw new Error("User ID not found in session storage");
        }

        const response = await axios.put(
          "http://localhost:3000/inphamed/api/v1/auth/forgot/password/updatePassword",
          {
            userID: userId,
            password: newPassword,
          }
        );

        if (response.status === 200) {
          toast.success("Password Changed Successfully", {
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
          navigate("/");
        }
      } else {
        throw new Error("Passwords must match");
      }
    } catch (error: any) {
      let errorMsg = "An error occurred";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMsg = error.response.data.message;
      } else if (error.message) {
        errorMsg = error.message;
      }
      toast.error(errorMsg, {
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
    }
  };

  return (
    <div className="inphamed-login-v1">
      <img className="bg-icon" alt="" src={lg} />
      <div className="login-section">
        <Card className="login-card px-4">
          <Card.Body>
            <div className="justify-content-center">
              <div onClick={routeHome}>
                <img src={logo} className="logo-image"></img>
              </div>
              <div className="d-flex justify-content-center mb-">
                <span> Your tagline goes here</span>
              </div>
            </div>
            <Form className="mt-4">
              <Form.Group
                className="mb-4 text-start"
                controlId="formBasicEmail"
              >
                <Form.Label>
                  Enter New Password
                  <Tooltip
                    title={
                      <div>
                        <h6>Password must contains:</h6>
                        <ul>
                          <li>At least 1 uppercase letter</li>
                          <li>At least 1 lowercase letter</li>
                          <li>At least 1 special character</li>
                          <li>At least 1 numeric digit</li>
                          <li>Minimum length of 8 characters</li>
                        </ul>
                      </div>
                    }
                    placement="right-start"
                    arrow
                  >
                    <IconButton>
                      <GoInfo />
                    </IconButton>
                  </Tooltip>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  className={`custom-input input-error`}
                  value={newPassword}
                  onChange={handleNewPassword}
                />
                {(passwordError !== "") && <Form.Text className="text-danger" style={{ fontSize: '13px' }}>{passwordError}</Form.Text>}
              </Form.Group>

              {/* <Form.Group className="mb-3 position-relative" controlId="formBasicPassword"> */}
              <Form.Group
                className="mb-4 position-relative text-start"
                controlId="formBasicPassword"
              >
                <Form.Label>Confirm password</Form.Label>
                {/* <div className="password-wrapper">
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Confirm password"
                    className={`custom-input input-error`}
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                  />
                </div> */}
                <div className="password-wrapper">
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    onChange={handleConfirmPassword}
                    placeholder="Confirm password"
                    className={`custom-input input-error`}
                  />
                  <span
                    className="password-toggle-icon"
                    onClick={togglePasswordVisibility}
                  >
                    <i
                      className={
                        passwordVisible ? "fas fa-eye" : "fas fa-eye-slash"
                      }
                    ></i>
                  </span>
                </div>
              </Form.Group>

              <Button
                type="submit"
                onClick={validatePassword}
                className={`w-100 mt-4 btn-login ${
                  newPassword !== "" &&
                  confirmPassword !== "" &&
                  newPassword === confirmPassword
                    ? ""
                    : "btn-login-disabled"
                }`}
                disabled={
                  newPassword == "" ||
                  confirmPassword == "" ||
                  newPassword !== confirmPassword
                }
              >
                <div className="log-in">Submit</div>
              </Button>
            </Form>
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
                <div className="the-next-generation">
                  The next generation solution - Discover, analyse, and map
                  global innovation knowledge{" "}
                </div>
              </div>
            </div>
            <div className="paragraph">
              <div className="lorem-ipsum-dolor-container">
                <p className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
                <p className="lorem-ipsum-dolor">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p className="by-signing-in">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="btn-learn-more">
            <div className="log-in">Learn More</div>
          </div>
        </div>
        <div className="bottom-links">
          <div className="bottom-link-bg"></div>
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

export default SetPasswordPage;
