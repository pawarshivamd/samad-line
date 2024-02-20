import React from "react";
import { Link } from "react-router-dom";
import NoAddressFound from "components/notFound/NoAddressFound";
import AddressBox from "./AddressBox";

function AddressMain({
  addresses,
  setDeliveryAddress,
  deleteAddress,
  addressToDeliver,
}) {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-1">
          <span style={{ display: "none" }}>.</span>
        </div>
        <div className="col-lg-9">
          <div
            className="delivery-section"
            style={{ background: "#FFFFFF", minHeight: "calc(100vh - 115px)" }}
          >
            <div className="container">
              <div className="row  ">
                {addresses.length ? (
                  <div className="col-lg-7 col-md-8">
                    <div className="address-body">
                      <div className="Address-head">
                        <p>Select Delivery Address</p>
                        <p>
                          <Link to="/user/address/new">+ Add New Address</Link>
                        </p>
                      </div>
                      {addresses.map(
                        ({
                          _id,
                          addressType,
                          shippingAddress,
                          billingAddress,
                        }) => (
                          <AddressBox
                            key={_id}
                            _id={_id}
                            addressType={addressType}
                            shippingAddress={shippingAddress}
                            billingAddress={billingAddress}
                            setDeliveryAddress={setDeliveryAddress}
                            deleteAddress={deleteAddress}
                            addressToDeliver={addressToDeliver}
                          />
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <NoAddressFound />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressMain;
