import React from 'react';

const PrivacyNPolicy = () => {
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
                  <h1>Privacy policy</h1>
                </div>
              </div>

              <div className="policy-body">
                <div className="policy-box1">
                  <div>
                    <p>
                      We value your privacy. This policy explains how we handle
                      your personal information. We collect basic info like your
                      name and email when you use our site. We use this to
                      process your orders and improve our service. We keep this
                      data safe and don’t share it with others without your
                      permission.
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

export default PrivacyNPolicy;
