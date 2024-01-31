import Loader from 'components/common/loader/Loader';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getBlogById } from 'redux/auth/actions';

const BlogDetails = ({ getBlogDetails, selectedBlog, loading }) => {
  const { id } = useParams();

  useEffect(() => {
    getBlogDetails(id);
  }, [getBlogDetails]);

  return (
    <div className="single-blog-section">
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="singal-blog-head">
            <h1>Blog</h1>
            <Link to="/products">Continue Shopping</Link>
          </div>
          <div className="blog-body">
            <div className="blog-contain">
              <div className="blog-img-box col-lg-12 col-md-12 col-sm-12">
                <img src={selectedBlog.image?.url} alt="" />
              </div>
              <h4>{selectedBlog.title}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: selectedBlog.description,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  const { selectedBlog, loading } = user;
  return { selectedBlog, loading };
};
const mapDispatchToProps = (dispatch) => ({
  getBlogDetails: (_id) => dispatch(getBlogById(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);
