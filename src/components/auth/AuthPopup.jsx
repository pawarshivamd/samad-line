import React, { useState } from 'react';
import './auth.css';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import Notification from 'components/Notification/Notification';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function AuthPopup({ verifyUserOtp, authPopupState, changePopupState }) {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleForgotPassword = () => {
    changePopupState(false);
    setShowModal(true);
    // setResetEmail('');
  };

  const apiUrl = process.env.REACT_APP_BASE_URL;

  const handleForgetPassword = () => {
    axios
      .post(`${apiUrl}/user/forgetpassword`, { email: resetEmail })
      .then((response) => {
        Notification('Success', 'Password has been sent to your mail');
        console.log(response.data);
        setResetEmail('');
        setShowModal(false);
      })
      .catch((error) => {
        // console.error(error);
        Notification('error', error.response.data.error);
      });
  };

  const handleSubmit = () => {
    verifyUserOtp({ email, password });
  };

  const handleKeyDownlogin = (event) => {
    // Check if the pressed key is Enter (keyCode 13)
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleKeyDownforgetpass = (event) => {
    // Check if the pressed key is Enter (keyCode 13)
    if (event.key === 'Enter') {
      event.preventDefault();
      handleForgetPassword();
    }
  };

  return (
    <div>
      <Modal show={authPopupState}>
        <div
          className="modal-dialog"
          style={{ margin: 0, padding: '13px 26px' }}
        >
          <div className="modal-content">
            <div className="text-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  changePopupState(false);
                  setEmail('');
                  setPassword('');
                }}
              />
            </div>
            <div className="modal-header">
              <div>
                <h4
                  className="modal-title text-center col-md-12"
                  id="staticBackdropLabel"
                >
                  Login
                </h4>
                <p>Please login using your account details.</p>
              </div>
            </div>
            <div className="modal-body" onKeyDown={handleKeyDownlogin}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /> */}
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingRight: '30px' }} // Adjust the padding to make space for the eye button
                />
                <button
                  type="button"
                  // className="fa fa-eye"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
              <div className="col-12 d-flex justify-content-end">
                <span
                  className="forgot-password-link"
                  onClick={handleForgotPassword}
                  style={{
                    cursor: 'pointer',
                    color: '#5b3503de',
                    textDecoration: 'underline',
                  }}
                >
                  Forgot Password?
                </span>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <input
                  type="submit"
                  className="submit-profile"
                  onClick={handleSubmit}
                  value="Login"
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal show={showModal}>
        <div
          className="modal-dialog"
          style={{ margin: 0, padding: '13px 26px' }}
        >
          <div className="modal-content">
            <div className="text-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setShowModal(false);
                  setResetEmail('');
                }}
              />
            </div>
            <div className="modal-header">
              <div>
                <h4
                  className="modal-title text-center col-md-12"
                  id="staticBackdropLabel"
                >
                  Forgot Password
                </h4>
                <p>Please enter your email to change the password.</p>
              </div>
            </div>
            <div className="modal-body" onKeyDown={handleKeyDownforgetpass}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <div className="col-12 d-flex justify-content-center">
                <input
                  type="submit"
                  className="submit-profile"
                  onClick={handleForgetPassword}
                  value="Reset"
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AuthPopup;
