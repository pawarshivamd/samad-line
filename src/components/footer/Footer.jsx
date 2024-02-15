/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div
          className="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <div className="col-lg-3 col-md-6 col-sm-6 footer-left-body ">
            <div className="footer-icon-box">
              <img src="../asstes/img/logo/logo.png" alt="logo" />
            </div>
            {/* <p className="gym-icon-size">
              2023 <i className="far fa-copyright" />
              GymCart <br />
              All Right Reserved
            </p> */}
            {/* <div className="icon-footer-box">
              <div>
                <i className="fab fa-facebook-f" />
              </div>
              <div>
                <i className="fab fa-instagram" />
              </div>
              <div>
                <i className="fab fa-twitter" />
              </div>
              <div>
                <i className="fab fa-linkedin-in" />
              </div>
            </div> */}
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-12">
            <ul className="list-group footer-list">
              <li className="list-group-item">
                <a href="#" className="active">
                  Category
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="">
                  Sports Nutrition
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="">
                  Vitamins & Supplements
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="">
                  Fitness
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="">
                  Health Food & Drinks
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div className="col-lg-3 col-md-6 col-sm-12 ">
            <ul className="list-group footer-list">
              <li className="list-group-item">
                <a href="#" className="active">
                  Company
                </a>
              </li>
              <li className="list-group-item">
                <Link className="nav-link " to="/contact-us">
                  Contact us
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/about-us" className="d-flex ">
                  About us
                </Link>
              </li>
            </ul>
          </div> */}
          {/* <div className="col-lg-3 col-md-6 col-sm-12 ">
            <ul className="list-group footer-list ">
              <li className="list-group-item">
                <a href="#" className="active">
                  Quick Link
                </a>
              </li>
              <li className="list-group-item">
                <Link to="/terms-of-use" className="d-flex ">
                  Terms of use{' '}
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/privacy-n-policy" className="d-flex ">
                  Privacy Policy
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/refund-policy" className="">
                  Refund Policy
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/shipping-policy" className="">
                  Shipping policy
                </Link>
              </li>
            </ul>
™          </div> */}
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <a
              className="icon-footer-box "
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/samadline_expertise/?hl=en"
            >
              Instagram <i className="fab fa-instagram" />
            </a>
            <a
              className="icon-footer-box mt-2 "
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/SamadLine1970"
            >
              Facebook
              <svg
                width="20"
                height="20"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.938477"
                  y="0.413574"
                  width="49.4248"
                  height="49.4248"
                  rx="24.7124"
                  fill="#3B3B3B"
                />
                <path
                  d="M25.6511 3.55615C13.7588 3.55615 4.08105 13.2339 4.08105 25.1262C4.08105 37.0184 13.7588 46.6962 25.6511 46.6962C37.5433 46.6962 47.2211 37.0184 47.2211 25.1262C47.2211 13.2339 37.5433 3.55615 25.6511 3.55615ZM25.6511 7.15115C35.6002 7.15115 43.6261 15.177 43.6261 25.1262C43.6304 29.4293 42.0874 33.5906 39.2785 36.8505C36.4696 40.1105 32.5822 42.2518 28.3257 42.8837V30.3677H33.445L34.2485 25.1675H28.3257V22.3274C28.3257 20.1704 29.0357 18.2525 31.0543 18.2525H34.2988V13.7156C33.729 13.6383 32.5229 13.4712 30.2437 13.4712C25.4839 13.4712 22.6942 15.9841 22.6942 21.7109V25.1675H17.8014V30.3677H22.6942V42.8387C18.4966 42.1478 14.6813 39.987 11.9302 36.7422C9.17903 33.4975 7.67118 29.3802 7.67605 25.1262C7.67605 15.177 15.7019 7.15115 25.6511 7.15115Z"
                  fill="white"
                />
              </svg>
              {/* <i className="fab fa-facebook" /> */}
            </a>
            <a
              className="icon-footer-box mt-2 "
              target="_blank"
              rel="noreferrer"
              href="#"
            >
              Whatsapp <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <p className="copy-right-text">
            {/* Copyrights &copy; {currentYear} All Rights Reserved | Powered by */}
            {currentYear} &copy; samad line All Right Reserved
            <a
              href="http://creativecartel.me/"
              target="_blank"
              rel="noreferrer"
              className="copy-right-text ms-1"
            >
              {/* <b>Creative Cartel</b> */}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
