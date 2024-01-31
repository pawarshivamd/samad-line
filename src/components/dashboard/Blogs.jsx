/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlog } from 'redux/auth/actions';

const Blogs = ({ blogs, getBlogList }) => {
  useEffect(() => {
    getBlogList();
  }, [getBlogList]);

  return Boolean(blogs.length) ? (
    <div className="blog-setion">
      <div className=" trending-head">
        <h1>BLOG</h1>
      </div>
      <div className="blog-body">
        {blogs.slice(0, 3).map((blog) => (
          <div className="blog-contaion" key={blog._id}>
            <div className="blog-img-box">
              <img src={blog.image?.url} alt="" />
            </div>
            <div className="blog-footer">
              <h1>{blog.title}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: blog.description,
                }}
                className="ellipseAfter3Line"
              />
              <Link to="blog">
                Explore page <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = ({ user }) => {
  const { blogs } = user;
  return { blogs };
};
const mapDispatchToProps = (dispatch) => ({
  getBlogList: () => dispatch(getBlog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
