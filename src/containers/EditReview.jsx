/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import API from 'helpers/API';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSingleProduct } from 'redux/actions';
import { addEditUserReview, changeSearchText } from 'redux/auth/actions';

const EditReview = ({ updateReview, id }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    (async () => {
      const {
        data: {
          data: { userReview },
        },
      } = await API.get(`product/${id}`);
      setRating((userReview?.rating && Number(userReview?.rating)) || 0);
    })();
  }, []);

  return (
    <div className="col-lg-3 col-md-3" style={{ display: 'contents' }}>
      <div className="star-rating">
        <a>
          {' '}
          {[...Array(rating)].map((active, i) => (
            <i
              className="fas fa-star active "
              key={active}
              onClick={() => {
                setRating(i + 1);
                updateReview({ rating: i + 1, _id: id });
              }}
              style={{ cursor: 'pointer' }}
            />
          ))}
          {[...Array(5 - rating)].map((inActive, i) => (
            <i
              className="fas fa-star"
              key={inActive}
              onClick={() => {
                setRating(rating + i + 1);
                updateReview({
                  rating: rating + i + 1,
                  _id: id,
                });
              }}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = ({ product, user }) => {
  const { selectedProduct, loading } = product;
  const { keyword } = user;

  return { selectedProduct, keyword, loading };
};
const mapDispatchToProps = (dispatch) => ({
  getProductById: (id) => dispatch(getSingleProduct(id)),
  updateReview: (review, history) =>
    dispatch(addEditUserReview(review, history)),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReview);
