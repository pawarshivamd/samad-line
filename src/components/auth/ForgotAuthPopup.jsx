// import React, { useState } from 'react';
// import './auth.css';
// import { Modal } from 'react-bootstrap';
// import API from 'helpers/API';
// import Notification from 'components/Notification/Notification';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// function ForgotAuthPopup({ userDetails, authPopupState, changePopupState }) {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showOldPassword, setShowOldPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);

//   const changePassword = async (req) => {
//     try {
//       const res = await API.post('/user/change-password', req);
//       const { status } = res; // Make API call
//       console.log(res.data); // Log the response
//       if (status === 200) {
//         // Handle successful signup
//         Notification('success', 'Password changed successfully!');
//         changePopupState(false);
//       } else {
//         // Handle signup failure
//         // Notification('error', 'Change failed. Please try again.');
//         Notification('error', 'Please Enter Required Fields');
//         // Additional logic if needed
//       }
//       // Handle success or other logic based on the response
//     } catch (error) {
//       Notification('Error:', error.response.data);
//       console.error('Error:', error.response.data); // Log any errors
//       // Handle errors or display error messages to the user
//     }
//   };
//   const handleSubmit = () => {
//     if (newPassword === confirmPassword) {
//       changePassword({ oldPassword, newPassword, email: userDetails.email });
//       // Clear the form fields after submission
//       setOldPassword('');
//       setNewPassword('');
//       setConfirmPassword('');
//     } else {
//       // Handle password mismatch error
//       // You can display an error message or perform any other action here
//     }
//   };

//   return (
//     <div>
//       <Modal show={authPopupState}>
//         <div
//           className="modal-dialog"
//           style={{ margin: 0, padding: '13px 26px' }}
//         >
//           <div className="modal-content">
//             <div className="text-end">
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//                 onClick={() => changePopupState(false)}
//               />
//             </div>
//             <div className="modal-body">
//               <div style={{ position: 'relative' }}>
//                 <input
//                   // type="password"
//                   type={showOldPassword ? 'text' : 'password'}
//                   placeholder="Old Password"
//                   name="oldPassword"
//                   value={oldPassword}
//                   onChange={(e) => setOldPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   // className="fa fa-eye"
//                   onClick={() => setShowOldPassword(!showOldPassword)}
//                   style={{
//                     position: 'absolute',
//                     right: '5px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     border: 'none',
//                     background: 'transparent',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {showOldPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//                 </button>
//               </div>
//               <div style={{ position: 'relative' }}>
//                 <input
//                   // type="password"
//                   type={showNewPassword ? 'text' : 'password'}
//                   placeholder="New Password"
//                   name="newPassword"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   // className="fa fa-eye"
//                   onClick={() => setShowNewPassword(!showNewPassword)}
//                   style={{
//                     position: 'absolute',
//                     right: '5px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     border: 'none',
//                     background: 'transparent',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//                 </button>
//               </div>
//               <div style={{ position: 'relative' }}>
//                 <input
//                   // type="password"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   placeholder="Confirm Password"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   // className="fa fa-eye"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   style={{
//                     position: 'absolute',
//                     right: '5px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     border: 'none',
//                     background: 'transparent',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {showConfirmPassword ? (
//                     <VisibilityIcon />
//                   ) : (
//                     <VisibilityOffIcon />
//                   )}
//                 </button>
//               </div>
//               <div className="col-12 d-flex justify-content-center">
//                 <input
//                   type="submit"
//                   className="submit-profile"
//                   onClick={handleSubmit}
//                   value="Submit"
//                   style={{ textAlign: 'center', cursor: 'pointer' }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default ForgotAuthPopup;

import React, { useState } from 'react';
import './auth.css';
import { Modal } from 'react-bootstrap';
import API from 'helpers/API';
import Notification from 'components/Notification/Notification';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function ForgotAuthPopup({ userDetails, authPopupState, changePopupState }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  const changePassword = async (req) => {
    try {
      const res = await API.post('/user/change-password', req);
      const { status, data } = res;
      console.log(res);
      if (status === 200) {
        Notification('success', 'Password changed successfully!');
        changePopupState(false);
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setPasswordMatchError('');
      } else {
        Notification('error', data.error);
      }
    } catch (error) {
      Notification('Error:', error.response.data);
      console.error('Error:', error.response.data);
    }
  };

  const handleSubmit = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      // Set an error message if any of the fields is empty
      Notification('error', 'Please fill in all the required fields');
    } else if (newPassword === confirmPassword) {
      changePassword({ oldPassword, newPassword, email: userDetails.email });
    } else {
      setPasswordMatchError('New Password and Confirm Password must match');
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
                  setOldPassword('');
                  setNewPassword('');
                  setConfirmPassword('');
                  setPasswordMatchError('');
                }}
              />
            </div>
            <div className="modal-body">
              <div style={{ position: 'relative' }}>
                <input
                  type={showOldPassword ? 'text' : 'password'}
                  placeholder="Old Password"
                  name="oldPassword"
                  value={oldPassword}
                  autoComplete="new-password"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowOldPassword(!showOldPassword)}
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
                  {showOldPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  name="newPassword"
                  autoComplete="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
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
                  {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                  {showConfirmPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </button>
              </div>
              {passwordMatchError && (
                <div style={{ color: 'red', marginTop: '5px' }}>
                  {passwordMatchError}
                </div>
              )}
              <div className="col-12 d-flex justify-content-center">
                <input
                  type="submit"
                  className="submit-profile"
                  onClick={handleSubmit}
                  value="Submit"
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

export default ForgotAuthPopup;
