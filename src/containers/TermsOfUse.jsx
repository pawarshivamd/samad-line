import React from "react";

const TermsOfUse = () => {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-1">
          <span style={{ display: "none" }}>.</span>
        </div>
        <div className="col-lg-11" style={{ minHeight: "calc(100vh - 115px)" }}>
          <div className="container">
            {" "}
            <div className="policy">
              <div className="container">
                <div className="policy-hed  ">
                  <h1>Terms of Use</h1>
                </div>
              </div>

              <div className="policy-body">
                <div className="policy-box1">
                  <div>
                    <p>
                      Using Our <br />
                      Site Welcome to our website! By using our site, you agree
                      to these terms. Please use our site responsibly. Don’t
                      copy or misuse the content here. We provide information
                      about our products and services. Remember, prices and
                      details can change. If you have any questions, feel free
                      to contact us.
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

export default TermsOfUse;
