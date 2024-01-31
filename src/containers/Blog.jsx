import Loader from 'components/common/loader/Loader';
import moment from 'moment';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlog } from 'redux/auth/actions';

const Blog = ({ blogs, getBlogList, homeScreenData, loading }) => {
  const { trendingProducts } = homeScreenData;

  useEffect(() => {
    getBlogList();
  }, [getBlogList]);

  return (
    <div className="blog-section">
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="blog-section-header">
            <h1>BLOG</h1>
            <p>
              <Link to="/products">Continue Shopping</Link>
            </p>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="blog-body">
                {blogs.map((blog) => (
                  <div className="blog-contain" key={blog._id}>
                    <div className="blog-img-box col-lg-12">
                      <img src={blog.image?.url} alt="" />
                    </div>
                    <h4>{blog.title}</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: blog.description,
                      }}
                      className="ellipseAfter3Line"
                    />
                    <Link to={`/blog/${blog._id}`}>Read More </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="blog-right-body">
                <div className="blog-right-section-1">
                  <div className="blog-right-head-1">
                    <p>Recent Post</p>
                  </div>
                  {blogs.map((blog) => (
                    <div className="blog-right-contain" key={blog._id}>
                      <div className="col-lg-3 col-md-2 col-sm-3 blog-right-img-box">
                        <Link to={`/blog/${blog._id}`}>
                          <img src={blog.image?.url} alt="" />
                        </Link>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-9 px-3">
                        <Link to={`/blog/${blog._id}`}>
                          {' '}
                          <h4>{blog.title}</h4>
                        </Link>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: blog.description,
                          }}
                          className="ellipseAfter3Line"
                        />
                        <p> {moment(blog.createdAt).format('Do MMMM YYYY')}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className=" blog-right-section-2">
                  <div className="blog-right-head-2">
                    <p>Tranding Product</p>
                  </div>
                  {trendingProducts?.map((product) => (
                    <div className="blog-right-contain-2" key={product._id}>
                      <div className="col-lg-3 col-md-2 col-sm-3 blog-right-img-box-2">
                        <div className="img-contain">
                          <Link to={`/product/${product._id}`}>
                            <img
                              src={
                                product.images.find((el) => el?.url !== '')?.url
                              }
                              alt=""
                              className=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-9 px-3">
                        <Link to={`/product/${product._id}`}>
                          <h4 style={{ marginBottom: 10 }}> {product.name}</h4>
                        </Link>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                          className="ellipseAfter3Line"
                        />
                        <p>
                          {' '}
                          {moment(product.createdAt).format('Do MMMM YYYY')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ user, product }) => {
  const { blogs, loading } = user;
  const { homeScreenData } = product;
  return { blogs, homeScreenData, loading };
};
const mapDispatchToProps = (dispatch) => ({
  getBlogList: () => dispatch(getBlog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
