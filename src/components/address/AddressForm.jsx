/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const countryCode = process.env.REACT_APP_COUNTRY_CODE || '+961';

const AddressForm = ({ address, setAddress, saveAddress }) => {
  const history = useNavigate();
  const reg = new RegExp('^[0-9]{0,10}$');
  const { shippingAddress, billingAddress, addressType, _id } = address;
  const [setAsAbove, setsetAsAbove] = useState(true);

  const changeDetails = (type, key, value) => {
    if (setAsAbove) {
      if (type === 'shippingAddress')
        setAddress((oldVal) => {
          return {
            ...oldVal,
            shippingAddress: {
              ...oldVal.shippingAddress,
              [key]: value,
            },
            billingAddress: {
              ...oldVal.billingAddress,
              [key]: value,
            },
          };
        });
    } else {
      setAddress((oldVal) => {
        return {
          ...oldVal,
          [type]: {
            ...oldVal[type],
            [key]: value,
          },
        };
      });
    }
  };
  const changeAddressType = (value) => {
    setAddress((oldVal) => {
      return {
        ...oldVal,
        addressType: value,
      };
    });
  };

  const setBillingAsShipping = () => {
    if (!setAsAbove) {
      setAddress((oldVal) => {
        return {
          ...oldVal,
          billingAddress: { ...shippingAddress },
        };
      });
    }
    setsetAsAbove(!setAsAbove);
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-2" style={{ borderRight: '1px solid #E9E9E9 ' }}>
          <span style={{ display: 'none' }}>.</span>
        </div>
        <div className="col-lg-9">
          <div className="Checkout-section">
            <div className="container">
              <div className="col-lg-11 ">
                <div className="Checkout-header" style={{ zIndex: 1 }}>
                  <h4>Address </h4>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="Checkout-left-body">
                      <div className="Shipping-body">
                        {/* <div className=" d-flex justify-content-between">
                          <p className="billing-p">Shipping address</p>
                        </div> */}
                        {/* <div>
                          <p>Checkout</p>
                        </div> */}
                        <div className="col-lg-6 col-md-8 col-sm-12">
                          {/* <p className="checkout-login">
                    Already have an account?<a href="#">Log in</a> for faster
                    checkout
                  </p> */}
                        </div>

                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (!Object.values(address).includes('" "')) {
                              saveAddress(
                                {
                                  shippingAddress,
                                  billingAddress,
                                  addressType,
                                  _id,
                                },
                                history,
                              );
                            }
                          }}
                        >
                          <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-between">
                              <input
                                type="text"
                                required
                                placeholder="First name"
                                className="checkout-input-wid col-12"
                                value={shippingAddress.firstName}
                                onChange={(e) =>
                                  changeDetails(
                                    'shippingAddress',
                                    'firstName',
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6">
                              <input
                                type="text"
                                required
                                placeholder="Last name"
                                className="checkout-input-wid col-12"
                                value={shippingAddress?.lastName}
                                onChange={(e) =>
                                  changeDetails(
                                    'shippingAddress',
                                    'lastName',
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                              <input
                                required
                                className="col-12"
                                type="text"
                                // placeholder="Flat, house no, Building, company, Apartment"
                                placeholder="Address line - 1"
                                value={shippingAddress.addressLine1}
                                onChange={(e) =>
                                  changeDetails(
                                    'shippingAddress',
                                    'addressLine1',
                                    e.target.value,
                                  )
                                }
                              />{' '}
                              {/* <br /> */}
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <input
                                required
                                className="col-12"
                                type="text"
                                // placeholder="Area , street, sector ,village "
                                placeholder="Address line - 2"
                                value={shippingAddress.addressLine2}
                                onChange={(e) =>
                                  changeDetails(
                                    'shippingAddress',
                                    'addressLine2',
                                    e.target.value,
                                  )
                                }
                              />{' '}
                              <br />
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                              <input
                                required
                                className="col-12"
                                type="text"
                                placeholder="City"
                                value={shippingAddress.city}
                                onChange={(e) =>
                                  changeDetails(
                                    'shippingAddress',
                                    'city',
                                    e.target.value,
                                  )
                                }
                              />
                              <br />
                            </div>
                            {/*
                            <div className="col-lg-3 col-md-6 col-sm-12">
                              <input
                                required
                                type="number"
                                placeholder="Pincode"
                                className="checkout-input-wid col-12"
                                value={shippingAddress.pinCode}
                                onChange={(e) => {
                                  if (e.target.value.length < 7) {
                                    changeDetails(
                                      'shippingAddress',
                                      'pinCode',
                                      e.target.value,
                                    );
                                  }
                                }}
                              />
                            </div> */}

                            {/* <div className="col-lg-6">
                      <input
                        required
                        id=""
                        name="cars"
                        placeholder="State"
                        className="checkout-input-wid"
                        value={shippingAddress.state}
                        onChange={(e) =>
                          changeDetails(
                            'shippingAddress',
                            'state',
                            e.target.value,
                          )
                        }
                      />
                    </div> */}
                            {/* <div className="col-lg-6">
                      <input
                        required
                        id=""
                        name="cars"
                        placeholder="Country"
                        className="checkout-input-wid"
                        value={shippingAddress.country}
                        onChange={(e) =>
                          changeDetails(
                            'shippingAddress',
                            'country',
                            e.target.value,
                          )
                        }
                      />
                    </div> */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                              <input
                                required
                                type="tel"
                                placeholder="Number"
                                className="checkout-input-wid col-12"
                                value={shippingAddress.phoneNo}
                                onChange={(e) => {
                                  const input = e.target.value;
                                  const numericPart = input.slice(
                                    countryCode.length,
                                  );
                                  if (reg.test(numericPart)) {
                                    changeDetails(
                                      'shippingAddress',
                                      'phoneNo',
                                      `${countryCode}${numericPart}`,
                                    );
                                  }
                                }}
                              />
                            </div>

                            <button
                              type="submit"
                              style={{ display: 'none' }}
                              id="shipping_btn"
                            />
                            <div className="address-types-body">
                              <p className="mt-3">Address type</p>
                              {/* <div className="d-flex">
                    <div className="d-flex  align-items-center me-3">
                      <input
                        type="radio"
                        value="Home"
                        name="address"
                        id="Home"
                        checked={addressType === 'home'}
                        onChange={() => changeAddressType('home')}
                      />{' '}
                      <label className="ms-2" for="Home">
                        Home
                      </label>
                    </div>
                    <div className="d-flex  align-items-center mx-3">
                      <input
                        type="radio"
                        value="Office"
                        name="address"
                        id="Office"
                        checked={addressType === 'office'}
                        onChange={() => changeAddressType('office')}
                      />
                      <label className="ms-2" for="Office">
                        Office
                      </label>
                    </div>
                    <div className="d-flex  align-items-center mx-3">
                      <input
                        type="radio"
                        value="Other"
                        name="address"
                        id="Other"
                        checked={addressType === 'other'}
                        onChange={() => changeAddressType('other')}
                      />
                      <label className="ms-2" for="Other">
                        Other
                      </label>
                    </div>
                  </div> */}
                            </div>
                            <div className="col-12">
                              <input
                                required
                                type="button"
                                value="Home"
                                className={classNames(
                                  'address-btn ',
                                  addressType === 'home' && 'activeAddressType',
                                )}
                                style={{
                                  height: 35.5,

                                  borderRadius: 0,
                                }}
                                onClick={() => changeAddressType('home')}
                              />

                              <input
                                type="button"
                                value="Office"
                                className={classNames(
                                  'address-btn  ',
                                  addressType === 'office' &&
                                    'activeAddressType',
                                )}
                                style={{
                                  margin: '0 10px',
                                  height: 35.5,

                                  borderRadius: 0,
                                }}
                                onClick={() => changeAddressType('office')}
                              />

                              <input
                                type="button"
                                value="Other"
                                className={classNames(
                                  'address-btn ',
                                  addressType === 'other' &&
                                    'activeAddressType',
                                )}
                                style={{
                                  height: 35.5,

                                  borderRadius: 0,
                                }}
                                onClick={() => changeAddressType('other')}
                              />
                            </div>
                            <div className="d-flex  my-3">
                              <input
                                style={{ cursor: 'pointer' }}
                                value="Save & Continue"
                                className="shipping-btn"
                                onClick={() => {
                                  const btn =
                                    document.getElementById('shipping_btn');
                                  btn.click();
                                }}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-12 col-sm-12"
                    style={{ display: 'none' }}
                  >
                    <div className="billing-body">
                      <div className=" d-flex justify-content-between">
                        <p className="billing-p">Billing addresss</p>
                        <div className="Left-contain">
                          <form action="" method="post">
                            <p>
                              <input
                                type="checkbox"
                                className="check"
                                id="same as"
                                value="same as"
                                style={{
                                  cursor: 'pointer',
                                  marginRight: 5,
                                  accentColor: '#F9DF23',
                                }}
                                checked={setAsAbove}
                                onClick={() => setBillingAsShipping()}
                              />
                              <label for="same as">Same As Shipping</label>{' '}
                            </p>
                          </form>
                        </div>
                      </div>

                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="col-12 d-flex justify-content-between">
                          <input
                            type="text"
                            required
                            placeholder="First name"
                            className="checkout-input-wid"
                            value={billingAddress.firstName}
                            onChange={(e) =>
                              changeDetails(
                                'billingAddress',
                                'firstName',
                                e.target.value,
                              )
                            }
                          />
                          <input
                            type="text"
                            required
                            placeholder="Last name"
                            className="checkout-input-wid"
                            value={billingAddress?.lastName}
                            onChange={(e) =>
                              changeDetails(
                                'billingAddress',
                                'lastName',
                                e.target.value,
                              )
                            }
                          />
                        </div>
                        <input
                          required
                          className="col-12"
                          type="text"
                          placeholder="Flat, house no, Building, company, Apartment"
                          value={billingAddress.addressLine1}
                          onChange={(e) =>
                            changeDetails(
                              'billingAddress',
                              'addressLine1',
                              e.target.value,
                            )
                          }
                        />
                        <br />
                        <input
                          required
                          className="col-12"
                          type="text"
                          placeholder="Area , street, sector ,village "
                          value={billingAddress.addressLine2}
                          onChange={(e) =>
                            changeDetails(
                              'billingAddress',
                              'addressLine2',
                              e.target.value,
                            )
                          }
                        />
                        <br />
                        <input
                          required
                          className="col-12"
                          type="text"
                          placeholder="City"
                          value={billingAddress.city}
                          onChange={(e) =>
                            changeDetails(
                              'billingAddress',
                              'city',
                              e.target.value,
                            )
                          }
                        />
                        <br />
                        <div className="col-12 d-flex justify-content-between">
                          <input
                            required
                            type="number"
                            placeholder="Pincode"
                            className="checkout-input-wid"
                            value={billingAddress.pinCode}
                            onChange={(e) => {
                              if (e.target.value.length < 7) {
                                changeDetails(
                                  'billingAddress',
                                  'pinCode',
                                  e.target.value,
                                );
                              }
                            }}
                          />

                          <input
                            required
                            id=""
                            name="cars"
                            placeholder="State"
                            className="checkout-input-wid"
                            value={billingAddress.state}
                            onChange={(e) =>
                              changeDetails(
                                'billingAddress',
                                'state',
                                e.target.value,
                              )
                            }
                          />
                        </div>
                        <div className="col-12 d-flex justify-content-between">
                          <input
                            required
                            id=""
                            name="cars"
                            placeholder="Country"
                            className="checkout-input-wid"
                            value={billingAddress.country}
                            onChange={(e) =>
                              changeDetails(
                                'billingAddress',
                                'country',
                                e.target.value,
                              )
                            }
                          />

                          <input
                            required
                            type="tel"
                            placeholder="Number"
                            minlength="10"
                            maxlength="10"
                            className="checkout-input-wid"
                            value={billingAddress.phoneNo}
                            onChange={(e) => {
                              const input = e.target.value;
                              const numericPart = input.slice(
                                countryCode.length,
                              );
                              if (reg.test(numericPart)) {
                                changeDetails(
                                  'billingAddress',
                                  'phoneNo',
                                  `${countryCode}${numericPart}`,
                                );
                              }
                            }}
                          />
                        </div>
                        <div className="address-types-body">
                          <p>Address type</p>
                          {/* <div className="d-flex">
                    <div className="d-flex  align-items-center me-3">
                      <input
                        type="radio"
                        value="Home"
                        name="address"
                        id="Home"
                        checked={addressType === 'home'}
                        onChange={() => changeAddressType('home')}
                      />{' '}
                      <label className="ms-2" for="Home">
                        Home
                      </label>
                    </div>
                    <div className="d-flex  align-items-center mx-3">
                      <input
                        type="radio"
                        value="Office"
                        name="address"
                        id="Office"
                        checked={addressType === 'office'}
                        onChange={() => changeAddressType('office')}
                      />
                      <label className="ms-2" for="Office">
                        Office
                      </label>
                    </div>
                    <div className="d-flex  align-items-center mx-3">
                      <input
                        type="radio"
                        value="Other"
                        name="address"
                        id="Other"
                        checked={addressType === 'other'}
                        onChange={() => changeAddressType('other')}
                      />
                      <label className="ms-2" for="Other">
                        Other
                      </label>
                    </div>
                  </div> */}
                        </div>
                        <input
                          required
                          type="button"
                          value="Home"
                          className={classNames(
                            'shipping-btn  btn-views-active',
                            addressType === 'home' && 'btn-views-active',
                          )}
                          style={{
                            height: 35.5,
                            padding: '0 30px',
                            borderRadius: 0,
                          }}
                          onClick={() => changeAddressType('home')}
                        />
                        <input
                          type="button"
                          value="Office"
                          className={classNames(
                            'shipping-btn  btn-views-active',
                            addressType === 'office' && 'btn-views-active',
                          )}
                          style={{
                            margin: '0 10px',
                            height: 35.5,
                            padding: '0 30px',
                            borderRadius: 0,
                          }}
                          onClick={() => changeAddressType('office')}
                        />
                        <input
                          type="button"
                          value="Other"
                          className={classNames(
                            'shipping-btn  btn-views-active',
                            addressType === 'other' && 'btn-views-active',
                          )}
                          style={{
                            height: 35.5,
                            padding: '0 30px',
                            borderRadius: 0,
                          }}
                          onClick={() => changeAddressType('other')}
                        />
                        <div className="d-flex justify-content-end my-3">
                          {/* <input
                    type="submit"
                    value="Save & Continue"
                    className="shipping-btn"
                    onClick={() => {
                      console.log('called');
                      const btn = document.getElementById('shipping_btn');
                      btn.click();
                    }}
                  /> */}
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
    </div>
  );
};

export default AddressForm;
