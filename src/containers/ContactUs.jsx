import Notification from "components/Notification/Notification";
import API from "helpers/API";
import React, { useState } from "react";

const ContactUs = () => {
  const [ContactDetails, setContactDetails] = useState({});
  const handleChange = (e) => {
    setContactDetails((oldState) => {
      return { ...oldState, [e.target.name]: e.target.value };
    });
  };
  console.log("ContactDetails", ContactDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !ContactDetails.name ||
      !ContactDetails.email ||
      !ContactDetails.message ||
      !ContactDetails.number ||
      !ContactDetails.subject
    ) {
      // Handle error, show a message, or prevent form submission
      Notification("error", "Please fill in all fields");
      return;
    }

    try {
      const {
        data: { message },
      } = await API.post("/order/contactus", ContactDetails);
      if (message) Notification("success", "Thank you for contacting us");
      setContactDetails({
        name: "",
        number: "",
        subject: "",
        message: "",
        email: "",
      });
    } catch {
      Notification("error", "Something Went Wrong");
    }
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-1">
          <span style={{ display: "none" }}>.</span>
        </div>
        <div className="col-lg-10">
          <div className="contact-section">
            <div className="container">
              <div className="contact-header">
                <div className="col-lg-12 col-md-12 text-center">
                  {/* <div className="contact">
              Contact <span /> us{' '}
      </div> */}
                </div>
              </div>
              <div className="row from-contact-body">
                <div className="col-lg-12 col-md-12 order-lg-1 order-2 order-md-2">
                  <div
                    className="col-lg-12  contact-body"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <div className="contact-box ">
                      <h4 className="pb-3 ">Contact Way</h4>
                      <div className="d-flex row col-12">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="row">
                            <div className="col-1 align-items-center justify-content-center d-flex">
                              <div className=" icon-box ">
                                <i className="fas fa-phone-alt" />
                              </div>
                            </div>
                            <div className="col-10 contact-detailes ">
                              <div className="ps-1 py-2 ">
                                <p>
                                  Tel:
                                  <a
                                    href="tel:877-67-88-99"
                                    className="num-email-colour"
                                  >
                                    {" "}
                                    877-67-88-99
                                  </a>
                                </p>
                                <p>
                                  E-Mail:{" "}
                                  <a
                                    href="mailto:shop@store.com"
                                    className="num-email-colour"
                                  >
                                    {" "}
                                    shop@store.com{" "}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="row">
                            <div className="col-1 align-items-center justify-content-center d-flex">
                              <div className=" icon-box">
                                <i className="fas fa-map-marker-alt" />
                              </div>
                            </div>
                            <div className="col-10  contact-detailes">
                              <div className="ps-1 py-2">
                                <a
                                  href="https://maps.app.goo.gl/NuMgXHQAUjt1zVK1A"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <p>20 Margaret st, London</p>
                                  <p>Great britain, 3NM98-LK</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="row">
                            <div className="col-1 align-items-center justify-content-center d-flex ">
                              <div className="text-center icon-box">
                                <i className="far fa-question-circle" />
                              </div>
                            </div>
                            <div className="col-10 contact-detailes">
                              <div className="ps-1 py-2">
                                <p>Support Forum</p>
                                <p>For over 24hr</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="row">
                            <div className="col-1 align-items-center justify-content-center d-flex">
                              <div className="text-center icon-box">
                                <i className="fas fa-tag" />
                              </div>
                            </div>
                            <div className="col-10 ">
                              <div className="ps-1 py-1">
                                <p>Free standard shipping</p>
                                <p>on all orders.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 order-lg-2 order-1 order-md-1">
                  <div className="get-touch-body">
                    <h4 className="pb-3 ">Get In Touch</h4>
                    <p style={{}} className="own-espace-text">
                      {/* Your Own Espace */}
                    </p>
                    <p className="own-espace-text">
                      {" "}
                      {/* Uncover a unique and sophisticated home accessories
                      collection */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mattis neque ultrices tristique amet erat vitae eget dolor
                      los vitae lobortis quis bibendum quam.
                    </p>

                    <form>
                      <div className="">
                        <div className="row justify-content-between">
                          <div className="first-name col-lg-6 col-md-6 col-sm-12">
                            <input
                              type="text"
                              placeholder="Your Name*"
                              required
                              name="name"
                              onChange={handleChange}
                              value={ContactDetails.name}
                            />
                          </div>

                          <div className="number col-lg-6 col-md-6 col-sm-12">
                            <input
                              type="number"
                              placeholder="Contact Number"
                              required
                              name="number"
                              value={ContactDetails.number}
                              onChange={(e) => {
                                const newValue = e.target.value;
                                if (newValue.length <= 10) {
                                  setContactDetails((oldState) => {
                                    return {
                                      ...oldState,
                                      number: e.target.value,
                                    };
                                  });
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="email-name col-lg-6 col-md-6 col-sm-12">
                            <input
                              type="email"
                              placeholder="Your E-mail"
                              required
                              name="email"
                              onChange={handleChange}
                              value={ContactDetails.email}
                            />
                          </div>
                          <div className="Subject col-lg-6 col-md-6 col-sm-12">
                            <input
                              type="text"
                              placeholder="Subject*"
                              required
                              onChange={handleChange}
                              name="subject"
                              value={ContactDetails.subject}
                            />
                          </div>
                        </div>
                        <div className=" row">
                          <div className="message col-lg-8 col-md-12 col-sm-12">
                            <textarea
                              name="message"
                              rows="5"
                              cols=""
                              placeholder="Type Your Messege*"
                              required
                              onChange={handleChange}
                              value={ContactDetails.message}
                            />
                          </div>
                          <div className=" text-end col-lg-4 col-sm-12 d-flex  justify-content-end">
                            <div className="submit-btn">
                              <input
                                type="submit"
                                placeholder="Submit"
                                value="Submit"
                                onClick={(e) => handleSubmit(e)}
                              />
                            </div>
                          </div>
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
  );
};

export default ContactUs;
