/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

const AboutUs = () => {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-2" style={{ borderRight: '1px solid #E9E9E9' }}>
          <span style={{ display: 'none' }}>.</span>
        </div>
        <div className="col-lg-9" style={{ minHeight: 'calc(100vh - 115px)' }}>
          <div className="container">
            {' '}
            <div className="policy">
              <div className="container">
                <div className="policy-hed  ">
                  <h1>About Us</h1>
                </div>
              </div>

              <div className="policy-body">
                <div className="policy-box1">
                  <div>
                    <p>
                      In order to pursue her passion in Home Accessories,
                      Mrs.Michelle Chehwan founded Espace Carre in 2013
                    </p>
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

export default AboutUs;
