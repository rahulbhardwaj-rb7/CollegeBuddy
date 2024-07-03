import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../loginPage/loginPage.css"
import lg from "../../assets/images/loginBackground.png"
import logo from "../../assets/images/inphamed-login-logo.png"

const SetPasswordPage = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNewPassword = (event: any) => {
    const {value} = event.target;
    setNewPassword(value);
  }

  const handleConfirmPassword = (event: any) => {
    const {value} = event.target;
    setConfirmPassword(value);
  }

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleResetPassword = () => {
    navigate('/reset-password');
  };

  const routeHome = () => {
    navigate('/')
  }

  const handleSubmit = (e: any) => {
    e.preventDefault;
    routeHome();
  }

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
                <span> Your tagline goes here
                </span>
              </div>
            </div>
            <Form className="mt-4">
              <Form.Group className="mb-4 text-start" controlId="formBasicEmail">
                <Form.Label>Enter New Password</Form.Label>
                <Form.Control type="password" placeholder="Enter new password" className={`custom-input input-error`} value={newPassword} onChange={handleNewPassword} />
              </Form.Group>

              {/* <Form.Group className="mb-3 position-relative" controlId="formBasicPassword"> */}
              <Form.Group className="mb-4 position-relative text-start" controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <div className="password-wrapper">
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Confirm password"
                    className={`custom-input input-error`}
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                  />
                </div>
              </Form.Group>

              <Button type="submit" onClick={handleSubmit} className={`w-100 mt-4 btn-login ${(newPassword !== "" && confirmPassword !== "" && (newPassword === confirmPassword)) ? '' : 'btn-login-disabled'}`} disabled={(newPassword == "" || confirmPassword == "" || (newPassword !== confirmPassword))} >
                <div className="log-in">Submit</div>
              </Button>
            </Form>

          </Card.Body>
          <Card.Footer className="text-center">
            <p style={{ fontSize: '14px' }}> By signing in, you acknowledge and agree to our <span><a className="login-footer">Terms of Use</a></span> and <span><a className="login-footer">Privacy Policy</a></span>.</p>
            <p style={{ fontSize: '14px' }}> Need help? Contact <span><a className="login-footer">Inphamed Customer Care.</a></span></p>
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

export default SetPasswordPage;
