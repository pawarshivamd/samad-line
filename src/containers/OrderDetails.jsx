/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classnames from 'classnames';
import Loader from 'components/common/loader/Loader';
import OrderItem from 'components/order/OrderItem';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeSearchText, getOrderById } from 'redux/auth/actions';

const OrderDetails = ({ getOrderDetails, selectedOrder, loading }) => {
  const { id } = useParams();
  const {
    orderDetails,
    _id,
    orderItems,
    currentOrderStatus,
    shippingAddress,
    total,
    tax,
    subTotal,
    discount,
  } = selectedOrder;

  const [initOrderState, setInitOrderState] = useState([
    'Order Placed',
    'Order Confirmed',
    'Out For Delivery',
    'Order Delivered',
  ]);

  useEffect(() => {
    if (orderDetails)
      setInitOrderState((oldval) =>
        oldval.splice(orderDetails.orderTrack.length),
      );
  }, [orderDetails]);

  useEffect(() => {
    getOrderDetails(id);
  }, [id]);

  useEffect(() => {
    setInitOrderState([
      'Order Placed',
      'Order Confirmed',
      'Out For Delivery',
      'Order Delivered',
    ]);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="Order-Details-traking-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8  ">
            <div className="Order-ID-body">
              <div
                className={classnames(
                  'Order-ID-box',
                  currentOrderStatus &&
                    currentOrderStatus.status === 'Order Delivered' &&
                    'my-order-img-box-green',
                  currentOrderStatus &&
                    currentOrderStatus.status === 'Cancelled' &&
                    'my-order-img-box-red',
                )}
              >
                {currentOrderStatus &&
                [
                  'Order Placed',
                  'Order Confirmed',
                  'Out For Delivery',
                ].includes(currentOrderStatus.status) ? (
                  <img src="/asstes/img/order-logo/package.png" alt="" />
                ) : (
                  <img src="/asstes/img/order-logo/package 1.png" alt="" />
                )}
              </div>
              <div className="order-id-list">
                <h5>Order ID: #{_id}</h5>
                <p>
                  {orderItems && orderItems.length} Items .{' '}
                  {currentOrderStatus && currentOrderStatus.status}
                </p>
              </div>
            </div>
            <div className="traking-progress-section">
              <div className="stepper-wrapper">
                {orderDetails &&
                  orderDetails.orderTrack.map((track) => (
                    <div
                      key={track._id}
                      className={classnames('stepper-item', 'completed')}
                    >
                      <div className="step-head-name">{track.status}</div>
                      <div
                        className={classnames(
                          'step-counter',
                          currentOrderStatus &&
                            currentOrderStatus.status === 'Order Delivered' &&
                            'my-order-img-box-green',
                        )}
                      >
                        <iconify-icon icon="ph:check" />
                      </div>
                      <div className="step-name">
                        {moment(track.createdAt).format('Do MMMM YYYY')}
                      </div>
                      <div className="step-name">
                        {moment(track.createdAt).format('h:mm a')}
                      </div>
                    </div>
                  ))}
                {initOrderState.map((track) => (
                  <div className="stepper-item active" key={track}>
                    <div className="step-head-name disactive">{track}</div>
                    <div className="step-counter">
                      <iconify-icon icon="ph:check" />
                    </div>
                    {/* <div className="step-name disactive">
                        Expected by,1 <sup>th</sup>Jan, 9:50pm{' '}
                      </div> */}
                  </div>
                ))}
              </div>
            </div>

            <div className="traking-progress-section-mobile">
              <div className="traking-body">
                {orderDetails &&
                  orderDetails.orderTrack.map((track) => (
                    <div className={classnames('stepper-item')} key={track}>
                      <iconify-icon
                        icon="mdi:check-circle"
                        className={classnames('completed')}
                        style={{
                          color:
                            currentOrderStatus &&
                            currentOrderStatus.status === 'Order Delivered'
                              ? 'green'
                              : '#F9DF23',
                        }}
                      />

                      <div>
                        <div>{track.status}</div>
                        <div>
                          {moment(track.createdAt).format('Do MMMM YYYY')}
                          <br />
                          {moment(track.createdAt).format('h:mm a')}
                        </div>
                      </div>
                    </div>
                  ))}

                {initOrderState.map((track) => (
                  <div className="stepper-item discompleted" key={track}>
                    <iconify-icon
                      icon="mdi:check-circle"
                      className="line-none"
                    />
                    <div>
                      <div>{track}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className=" order-details-traking-section ">
              {orderItems &&
                orderItems.map((item) => (
                  <OrderItem
                    key={item.key}
                    item={item}
                    currentOrderStatus={currentOrderStatus}
                  />
                ))}
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="col-lg-10 col-md-12 ">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <div className="delivery-address-details ">
                    <p className="Shipping-details">Shipping Details</p>
                    <div className=" name-addres-details">
                      <h6>
                        {shippingAddress && shippingAddress.firstName}{' '}
                        {shippingAddress && shippingAddress?.lastName}
                      </h6>
                      <p>
                        {shippingAddress && shippingAddress.addressLine1},
                        <br />
                        {shippingAddress && shippingAddress.addressLine2},
                        <br />
                        {shippingAddress && shippingAddress.city}
                        {shippingAddress && shippingAddress.country}
                        <br />
                        +961 {shippingAddress && shippingAddress.phoneNo}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <div className="total-box ">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="4" className="Price-detal ">
                            Price Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" />
                          <td className="subtotal ">Subtotal :</td>
                          <td />
                          <td className="text-end price-text">{subTotal} $</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td className="discount">Discount :</td>
                          <td className="text-end" />
                          <td className="text-end price-text">
                            <span className="me-2">-</span> {discount} $
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td className="info-btn">
                            Tax
                            <i className="bi bi-info-circle" />
                            <span className="ms-3">:</span>{' '}
                          </td>
                          <td className="text-end" />
                          <td className="text-end price-text">
                            <span className="me-2">+</span> {tax} $
                          </td>
                        </tr>
                        <tr className="total-border">
                          <th scope="row" />
                          <th className="fw-semibold total-text">Total :</th>
                          <td className="" />
                          <th className="text-end fw-semibold total-text">
                            {' '}
                            {total} $
                          </th>
                        </tr>
                      </tbody>
                    </table>
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

const mapStateToProps = ({ product, user }) => {
  const { selectedProduct } = product;
  const { keyword, selectedOrder, loading } = user;

  return { selectedProduct, keyword, loading, selectedOrder };
};
const mapDispatchToProps = (dispatch) => ({
  getOrderDetails: (_id) => dispatch(getOrderById(_id)),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
