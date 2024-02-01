import React, { useState } from "react";
import "./auth.css";
import { Modal } from "react-bootstrap";
import Notification from "components/Notification/Notification";
import API from "helpers/API";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// const countryCode = process.env.REACT_APP_COUNTRY_CODE || '+961';

function SignupPopup({ signupPopupState, changeSignupPopupState }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobileNo") {
      let formattedValue = value;

      // Ensure the value starts with "+961"
      if (!value.startsWith("+961")) {
        formattedValue = `+961${value}`;
      }

      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  console.log("formData", formData);

  const validateForm = () => {
    const { name, email, password, confirmPassword, mobileNo } = formData;
    console.log(mobileNo);
    const errorsData = {};

    // Validation logic
    if (!name.trim()) {
      errorsData.name = "Name is required";
      Notification("error", "Name is required");
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errorsData.name = "Name should only contain letters and spaces";
      Notification("error", "Name should only contain letters and spaces");
    }

    // Validate email using a regular expression
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   errorsData.email = 'Enter a valid email address';
    // }

    // if (!email.trim()) {
    //   errorsData.email = 'Email is required';
    // } else if (
    //   !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    //   /[;]+/.test(email)
    // ) {
    //   errorsData.email = 'Invalid email format';
    // }

    if (!email.trim()) {
      errorsData.email = "Email is required";
      Notification("error", "Email is required");
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      /[;]+/.test(email) ||
      /\.com.+$/i.test(email) // Check if there are characters after ".com" (case-insensitive)
    ) {
      errorsData.email = "Invalid email format";
      Notification("error", "Please enter valid email");
    }

    // if (mobileNo !== '' && mobileNo.trim() && !/^[0-9]{8}$/.test(mobileNo)) {
    //   errorsData.mobileNo =
    //     'Invalid phone number format. Must be 8 digits and only contain numbers.';
    // }

    // Extract the numeric part of mobileNo (ignoring the country code)
    const numericPart = mobileNo.replace("+961", "");

    // Check if the numeric part is not empty and doesn't match the specified format
    if (numericPart.trim() && !/^[0-9]{8}$/.test(numericPart)) {
      errorsData.mobileNo =
        "Invalid phone number format. Must be 8 digits and only contain numbers.";
      Notification(
        "error",
        "Invalid phone number format. Must be 8 digits and only contain numbers."
      );
    }

    if (password.length < 6) {
      errorsData.password = "Password must be at least 6 characters";
      Notification("error", "Password must be at least 6 characters");
    }

    if (password !== confirmPassword) {
      errorsData.confirmPassword = "Confirm password must match with Password";
      Notification("error", "Confirm password must match with Password");
    }

    setErrors(errorsData);
    return Object.keys(errorsData).length === 0;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await API.post("/user/signup", formData);
        console.log("formdata", formData);
        const { data, status } = response;
        console.log("datatest", data);
        if (status === 201) {
          // Handle successful signup
          Notification("success", "Signup successful!");
          changeSignupPopupState(false); // Close the signup modal or perform any other action
          localStorage.setItem("userData", JSON.stringify(formData));
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobileNo: "",
          });
          // Additional logic if needed
        } else {
          // Handle signup failure
          Notification("error", data.error);
          // Additional logic if needed
        }
      } catch (error) {
        console.log(error);
        // Handle error from API request
        Notification("error", "Error during signup. Please try again.");
        // Additional logic if needed
      }
    } else {
      // Notification('error', 'Please fill in the required fields correctly');
    }
  };

  const handleKeyDown = (event) => {
    // Check if the pressed key is Enter (keyCode 13)
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div>
      <Modal show={signupPopupState} className="modal-d" left>
        <div className="modal-box" style={{ margin: 0, padding: "13px 26px" }}>
          <div className="modal-content">
            <div className="text-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  changeSignupPopupState(false);
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    mobileNo: "",
                  });
                  setErrors({});
                }}
              />
            </div>
            <div className="modal-header">
              <div>
                <h4
                  className="modal-title text-center col-md-12"
                  id="staticBackdropLabel"
                >
                  Sign Up
                </h4>
                <p>Please fill in your details to create an account.</p>
              </div>
            </div>
            <div className="modal-body" onKeyDown={handleKeyDown}>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onInput={(e) => {
                  // Remove any non-alphabetic characters and non-whitespace characters from the input
                  e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                }}
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <div style={{ position: "relative" }}>
                <input
                  // type="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ paddingRight: "30px" }}
                />
                <button
                  type="button"
                  // className="fa fa-eye"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
              <div style={{ position: "relative" }}>
                <input
                  // type="password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={{ paddingRight: "30px" }}
                />
                <button
                  type="button"
                  // className="fa fa-eye"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {showConfirmPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
              {/* <input
                type="tel"
                placeholder="Contact Number"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                maxLength="13" // Set maximum length to 10 digits
              /> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  className="pt-2 pb-2 ps-3 pe-3"
                  style={{ marginRight: "5px", border: "1px solid black" }}
                >
                  +961
                </span>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  name="mobileNo"
                  // value={formData.mobileNo}
                  value={
                    formData.mobileNo.startsWith("+961")
                      ? formData.mobileNo.slice(4)
                      : formData.mobileNo
                  }
                  onChange={handleChange}
                  maxLength="8" // Set maximum length to 10 digits
                />
              </div>
              {errors.mobileNo && <p className="error">{errors.mobileNo}</p>}
              <div className="col-12 d-flex justify-content-center">
                <input
                  type="submit"
                  className="submit-profile"
                  onClick={handleSubmit}
                  value="Sign Up"
                  style={{ textAlign: "center", cursor: "pointer" }}
                  // onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SignupPopup;
