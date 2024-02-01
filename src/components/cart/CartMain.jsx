/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import useRazorpay from 'react-razorpay';
import API from "helpers/API";
import EmptyCart from "components/notFound/EmptyCart";
import Notification from "components/Notification/Notification";
import CartItem from "./CartItem";

function CartMain({
  cart,
  removeItemFromCart,
  addtoCart,
  addressToDeliver,
  // currentUser,
}) {
  const history = useNavigate();
  // const [Razorpay] = useRazorpay();
  // const { lastName, firstName, mobileNo } = currentUser;

  // const [oldOrderState, setOldOrderState] = useState(
  //   JSON.parse(localStorage.getItem('order_Details')),
  // );

  const handlePayment = async (addressId) => {
    try {
      if (!addressId) {
        Notification("info", "Please Select An Address");
        return;
      }

      // const cartLimitExceeded = cart.products.some(
      //   (product) => product.qty > product.stock,
      // );

      // if (cartLimitExceeded) {
      //   Notification('error', 'Product limit exceeded ');
      //   return;
      // }
      const exceededProducts = cart.products.filter(
        (product) => product.qty > product.stock
      );

      if (exceededProducts.length > 0) {
        exceededProducts.forEach((product) => {
          Notification(
            "error",
            `Limit exceeded for ${product.name}. Available stock: ${product.stock}`
          );
        });
        return;
      }
      // let orderState = {};
      // if (oldOrderState) {
      //   orderState = { ...oldOrderState };
      // } else {
      const {
        data: { message },
      } = await API.post("/order", {
        addressId,
      });
      if (message) Notification("success", message);
      //   const {
      //     data: {
      //       data: { id, amount },
      //     },
      //   } = order;
      //   orderState = { id, amount };
      //   setOldOrderState({ id, amount });
      // }

      // const { id, amount } = orderState;
      // localStorage.setItem('order_Details', JSON.stringify({ id, amount }));
      // const options = {
      //   key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      //   amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      //   currency: 'INR',
      //   name: 'Gym Cart',
      //   description: 'Test Transaction',
      //   image:
      //     'https://rons-fitness-dev.s3.ap-northeast-1.amazonaws.com/1680499818975.webp',
      //   order_id: id,
      //   prefill: {
      //     name: firstName + lastName,
      //     contact: mobileNo,
      //   },
      //   notes: {
      //     address: 'Razorpay Corporate Office',
      //   },
      //   theme: {
      //     color: '#3399cc',
      //   },
      //   handler: (response) => {
      //     localStorage.removeItem('order_Details');
      //     if (response.razorpay_payment_id) history('/user/orders');
      //   },
      // };
      // const rzp1 = new Razorpay(options);
      // rzp1.open();
      history("/user/orders");
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Cart", cart);

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-1" style={{ borderRight: "1px solid #E9E9E9 " }}>
          <span style={{ display: "none" }}>.</span>
        </div>
        <div className="col-lg-10">
          <div className="cart-section">
            <div className="container">
              {cart && cart?.products && cart?.products.length === 0 ? (
                <EmptyCart />
              ) : (
                <div className="row">
                  <div className="col-lg-8 com-md-9 col-sm-12">
                    <div className="my-cart-body">
                      <div className=" my-cart-head">
                        <h1 style={{ zIndex: 1 }}>
                          My Cart<span>({cart && cart?.products.length})</span>
                        </h1>
                        <p>
                          <Link to="/user/wishlist"> My Wishlist</Link>
                        </p>
                      </div>
                      {cart &&
                        cart?.products.map((value) => (
                          <CartItem
                            value={value}
                            removeItemFromCart={removeItemFromCart}
                            addtoCart={addtoCart}
                            qty={value.qty}
                            key={value._id}
                          />
                        ))}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-7 col-sm-12">
                    <div className="total-box">
                      <table className="table">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              colSpan="4"
                              className="Price-detal "
                            >
                              Price Details
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <th scope="row" />
                            <td className="subtotal">Subtotal :</td>
                            <td className="text-end price-text">
                              {cart?.subTotal} $
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" />
                            <td className="discount">Discount :</td>
                            <td className="text-end price-text">
                              <span className="me-2 ">-</span> {cart?.discount}{" "}
                              $
                            </td>
                          </tr>
                          <tr>
                            <th scope="row" />
                            <td className="info-btn">
                              Tax
                              {/* <i className="bi bi-info-circle" /> */}
                              <span className="ms-3">:</span>{" "}
                            </td>
                            <td className="text-end price-text">
                              <span className="me-2">+</span> {cart?.tax} $
                            </td>
                          </tr>
                          <tr className="total-border">
                            <th scope="row" />
                            <th className="total-text">Total :</th>
                            <th className="text-end  total-text ">
                              {cart?.totalPrice} $
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {addressToDeliver ? (
                      <div className="Delivery-fix-body">
                        <div className="Delivery-at-contain">
                          <div className="icon-box">
                            <iconify-icon icon="mdi:map-marker-outline" />{" "}
                          </div>
                          <div style={{ width: "88%" }}>
                            <div className="Delivery-at">
                              <p>
                                {" "}
                                Delivery at{" "}
                                <span className="tag">
                                  {" "}
                                  {addressToDeliver?.addressType}
                                </span>
                              </p>{" "}
                              <span className="">
                                <Link to="/user/address" className="Change">
                                  <a>Change</a>
                                </Link>
                              </span>
                            </div>
                            <p
                              className="addres"
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {addressToDeliver?.shippingAddress.addressLine1}
                              <br />
                              {/* {addressToDeliver?.shippingAddress.addressLine2} */}
                            </p>
                          </div>
                        </div>
                        <a
                          onClick={() =>
                            handlePayment(
                              addressToDeliver && addressToDeliver._id
                            )
                          }
                          className="place-btn"
                        >
                          <p>Place Order</p>
                        </a>
                      </div>
                    ) : (
                      <div className="Delivery-fix-body">
                        <div className="Delivery-at-contain">
                          <div className="icon-box">
                            <iconify-icon icon="mdi:map-marker-outline" />{" "}
                          </div>
                          <div>
                            <div className="Delivery-at">
                              <Link to="/user/address/new" className="Change">
                                <p style={{ margin: "auto", color: "#F9DF23" }}>
                                  Select Delivery Address
                                </p>{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <a
                          onClick={() =>
                            handlePayment(
                              addressToDeliver && addressToDeliver._id
                            )
                          }
                          className="place-btn"
                          style={{ cursor: "pointer" }}
                        >
                          <p>Place Order</p>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartMain;
