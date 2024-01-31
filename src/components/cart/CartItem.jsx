/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ value, removeItemFromCart, addtoCart, qty }) => {
  const [cartQty, setcartQty] = useState(qty);

  React.useEffect(() => {
    if (cartQty === qty) return;
    const setData = setTimeout(() => {
      addtoCart({
        _id: value._id,
        qty: cartQty,
      });
    }, 1500);
    return () => clearTimeout(setData);
  }, [cartQty, addtoCart]);

  return (
    <div className="my-cart-contain">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12 d-flex align-items-center justify-content-center m-0 p-0">
          <div className="my-cart-img-box">
            <Link to={`/product/${value._id}`}>
              {' '}
              <img
                src={value.images.find((elem) => elem?.url !== '')?.url}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12">
          <div className="my-cart-list">
            <Link to={`/product/${value._id}`}>
              <h5>{value.name} </h5>
              {/* {value.flavour !== '' && (
                <iconify-icon
                  icon="mdi:lacto-vegetarian"
                  className="veg-icon"
                  style={
                    value.nonVeg
                      ? {
                          color: 'red',
                        }
                      : {
                          color: 'green',
                        }
                  }
                />
              )} */}
            </Link>
            <p>{value.brand}</p>
            {/* <div className="fw-semibold">  {qty * value.price} $</div> */}
            <p className="bin-body ">
              <a href="#">
                <i
                  className="far fa-trash-alt"
                  onClick={() => removeItemFromCart({ _id: value._id })}
                />
              </a>
            </p>
            <div className=" form-box ">
              {/* <div className="d-flex">
                <label for="number"> Qty :</label>
                <input
                  min="1"
                  type="number"
                  defaultValue={qty}
                  onChange={(e) => setcartQty(e.target.value)}
                  className="form-control"
                  id="number"
                />
              </div> */}
            </div>
            {/* <div className="bin-remove-add">
              <p className="bin-body ">
                <a href="#">
                  <i
                    className="far fa-trash-alt"
                    onClick={() => removeItemFromCart({ _id: value._id })}
                  />
                </a>
              </p>
            </div> */}
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12   bin-box ">
          <div className="cart-oty-body">
            <div className="cart-price-text">
              {' '}
              {qty * (value.price ? value.price : value.mrp)} $
            </div>
            <div className=" oty-box">
              <label for="number" className="qty-text">
                Qty{' '}
              </label>
              <input
                min="1"
                type="number"
                defaultValue={qty}
                onChange={(e) =>
                  Number(e.target.value > 0) && setcartQty(e.target.value)
                }
                className="form-control cart-input"
                id="number"
              />
            </div>
            {/* <p className="bin-body ">
            <a href="#">
              <i
                className="far fa-trash-alt"
                onClick={() => removeItemFromCart({ _id: value._id })}
              />
            </a>
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
