/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import moment from 'moment/moment';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { likeDislikeProductReview } from 'redux/auth/actions';

const ProductReviews = ({ reviews = [], likeDislikeReview }) => {
  return (
    <section className="container">
      <div className="all-revies-body">
        <h4>Customer Reviews ({reviews.length})</h4>
        {reviews.map((elem) => (
          <Review
            key={elem._id}
            elem={elem}
            likeDislikeReview={likeDislikeReview}
          />
        ))}
      </div>
    </section>
  );
};

const Review = ({ elem, likeDislikeReview }) => {
  const [liked, setLiked] = useState(elem.isLiked || false);
  const [disLiked, setDisLiked] = useState(elem.isDisliked || false);
  const [likeCount, setLikeCount] = useState(elem.likeCount || 0);
  const [disLikeCount, setDisLikeCount] = useState(elem.disLikeCount || 0);
  return (
    <div className="customer-body">
      <div className="row">
        <div className="col-md-1">
          <div className="profile-face">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-11 comant-body">
          <h5>{elem.name}</h5>
          <p>{elem.comment}</p>
          <div className="like-star">
            <div className="star-color">
              <p>
                <i className="fas fa-star  me-1" />
                {elem.rating} | {moment(elem.createdAt).format('YYYY-MM-DD')}
              </p>
            </div>
            <div className="thumbs-up-like-unlike-body">
              {liked ? (
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  onClick={() => {
                    setLiked(!liked);
                    setLikeCount((old) => old - 1);
                    if (disLiked) {
                      setDisLiked(!disLiked);
                      setDisLikeCount((old) => old - 1);
                    }
                    likeDislikeReview(elem._id, true);
                  }}
                  style={{ cursor: 'pointer', color: '#F9DF23' }}
                />
              ) : (
                <i
                  className="bi bi-hand-thumbs-up"
                  onClick={() => {
                    setLiked(!liked);
                    setLikeCount((old) => old + 1);
                    if (disLiked) {
                      setDisLiked(!disLiked);
                      setDisLikeCount((old) => old - 1);
                    }
                    likeDislikeReview(elem._id, true);
                  }}
                  style={{ cursor: 'pointer', color: '#F9DF23' }}
                />
              )}
              <span className="mx-2">{likeCount}</span>{' '}
              {disLiked ? (
                <i
                  className="bi bi-hand-thumbs-down-fill"
                  onClick={() => {
                    if (liked) {
                      setLiked(!liked);
                      setLikeCount((old) => old - 1);
                    }
                    setDisLiked(!disLiked);
                    setDisLikeCount((old) => old - 1);
                    likeDislikeReview(elem._id, false);
                  }}
                  style={{ cursor: 'pointer', color: '#F9DF23' }}
                />
              ) : (
                <i
                  className="bi bi-hand-thumbs-down"
                  onClick={() => {
                    if (liked) {
                      setLiked(!liked);
                      setLikeCount((old) => old - 1);
                    }
                    setDisLiked(!disLiked);
                    setDisLikeCount((old) => old + 1);
                    likeDislikeReview(elem._id, false);
                  }}
                  style={{ cursor: 'pointer', color: '#F9DF23' }}
                />
              )}
              <span className="mx-2">{disLikeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ product, user }) => {
  const { homeScreenData } = product;
  const { keyword } = user;
  return { homeScreenData, keyword };
};
const mapDispatchToProps = (dispatch) => ({
  likeDislikeReview: (_id, liked) =>
    dispatch(likeDislikeProductReview(_id, liked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductReviews);
