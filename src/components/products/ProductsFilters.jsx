/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function queryStringToObject(queryString = '') {
  const pairs = queryString.split('&');
  const array = pairs.map((el) => {
    const parts = el.split('=');
    return parts;
  });
  return Object.fromEntries(array);
}

const ProductsFilters = ({ homeScreenData, getProductList, keyword }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  const { brands } = homeScreenData;
  const { params } = useParams();
  const filteredparamsdata = queryStringToObject(params);
  console.log('params', queryStringToObject(params));
  console.log('params', keyword);

  const [sortBy, setSortBy] = useState('');
  const [filterState, setFilterState] = useState({
    brand: [],
    rating: [],
  });
  console.log('params', filterState);
  const toggleSortBy = () => {
    setIsOptionsOpen(!isOptionsOpen); // Toggle the visibility of the options
  };
  const toggleSortRating = () => {
    setIsRatingOpen(!isRatingOpen); // Toggle the visibility of the options
  };

  useEffect(() => {
    if (keyword) {
      setFilterState({ ...filterState, keyword });
    }
  }, [keyword]);

  useEffect(() => {
    if (params) {
      setFilterState({ ...filterState, ...filteredparamsdata });
    }
  }, []);

  const handleChangeFilter = (key, val, reset) => {
    const include = filterState[key].includes(val);
    let updatedFilter = [];
    if (!include) updatedFilter = [...filterState[key], val];
    else updatedFilter = filterState[key].filter((item) => item !== val);
    if (reset) updatedFilter = [];
    setFilterState((oldVal) => {
      return { ...oldVal, [key]: updatedFilter };
    });
    const filter = {
      ...filterState,
      brand: filterState.brand.join(';'),
      rating: filterState.rating.join(';'),
      [key]: updatedFilter.join(';'),
    };
    getProductList({ ...filter, sortBy });
  };

  const changeSortBy = (val) => {
    if (sortBy !== val) setSortBy(val);
    else setSortBy('');
    const filter = {
      ...filterState,
      brand: filterState.brand.join(';'),
      rating: filterState.rating.join(';'),
    };
    // console.log('valuee', filter);
    getProductList({ ...filter, sortBy: val });
  };

  return (
    <div
      className="col-lg-3 col-md-12 col-sm-12  order-lg-1 order-2 order-md-2"
      style={{ borderRight: '1px solid #DEE2E7' }}
    >
      <div className="product-grid-left-section">
        <div className="product-grid-left-box">
          <div className="left-box-main">
            <p
              className="main-white"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: 45,
              }}
              onClick={() => toggleSortBy('')}
            >
              <p>Sort By</p>{' '}
              {/* <p
                style={{ color: '#F9DF23', cursor: 'pointer' }}
                onClick={() => changeSortBy('')}
              >
                Reset
              </p> */}
              <p style={{ color: '#8B96A5', cursor: 'pointer' }}>
                {isOptionsOpen ? (
                  <i className="fas fa-chevron-right" /> // Show right arrow
                ) : (
                  <i className="fas fa-chevron-down" /> // Show down arrow
                )}
              </p>
            </p>
            <div
              className={`${isOptionsOpen ? '' : 'Left-contain'}`}
              style={{ display: isOptionsOpen ? 'none' : 'block' }}
            >
              <p
                className={
                  sortBy === 'ratingHighToLow'
                    ? 'High-light-p-active'
                    : 'High-light-p'
                }
                onClick={() => changeSortBy('ratingHighToLow')}
                style={{ cursor: 'pointer' }}
              >
                <iconify-icon icon="lucide:check-circle" />
                <span className="circle-m">Rating: High To Low</span>
              </p>
              <p
                className={
                  sortBy === 'ratingLowToHigh'
                    ? 'High-light-p-active'
                    : 'High-light-p'
                }
                onClick={() => changeSortBy('ratingLowToHigh')}
                style={{ cursor: 'pointer' }}
              >
                <iconify-icon icon="lucide:check-circle" />
                <span className="circle-m">Rating: Low To High</span>
              </p>
              <p
                className={
                  sortBy === 'costHighToLow'
                    ? 'High-light-p-active'
                    : 'High-light-p'
                }
                onClick={() => changeSortBy('costHighToLow')}
                style={{ cursor: 'pointer' }}
              >
                <iconify-icon icon="lucide:check-circle" />
                <span className="circle-m">Cost: High to Low</span>
              </p>
              <p
                className={
                  sortBy === 'costHighLowToHigh'
                    ? 'High-light-p-active'
                    : 'High-light-p'
                }
                onClick={() => changeSortBy('costHighLowToHigh')}
                style={{ cursor: 'pointer' }}
              >
                <iconify-icon icon="lucide:check-circle" />
                <span className="circle-m">Cost: Low To High</span>
              </p>
            </div>
          </div>
        </div>

        {/* <div className="product-grid-left-box">
          <div className="left-box-main">
            <p
              className="main-white"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: 45,
              }}
            >
              <p>Brands</p>{' '}
              <p
                style={{ color: '#F9DF23', cursor: 'pointer' }}
                onClick={() => handleChangeFilter('brand', '', true)}
              >
                Reset
              </p>
            </p>
            <div className="Left-contain">
              <form action="" method="post">
                {brands &&
                  brands.map((brand) => (
                    <p key={brand._id}>
                      <input
                        type="checkbox"
                        className="check"
                        id={brand.name}
                        value={brand.name}
                        onChange={(e) =>
                          handleChangeFilter('brand', e.target.value)
                        }
                        checked={filterState.brand.includes(brand.name)}
                        style={{ cursor: 'pointer' }}
                      />
                      <label for={brand.name}>{brand.name}</label>{' '}
                    </p>
                  ))}
              </form>
            </div>
          </div>
        </div> */}

        <div className="product-grid-left-box">
          <div className="left-box-main">
            <p
              className="main-white"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: 45,
              }}
              onClick={() => toggleSortRating('')}
            >
              <p>Rating</p>{' '}
              {/* <p
                style={{ color: '#F9DF23', cursor: 'pointer' }}
                onClick={() => handleChangeFilter('rating', '', true)}
              >
                Reset
              </p> */}
              <p style={{ color: '#8B96A5', cursor: 'pointer' }}>
                {isRatingOpen ? (
                  <i className="fas fa-chevron-right" /> // Show right arrow
                ) : (
                  <i className="fas fa-chevron-down" /> // Show down arrow
                )}
              </p>
            </p>
            <div
              className={`${isRatingOpen ? '' : 'Left-contain'}`}
              style={{ display: isRatingOpen ? 'none' : 'block' }}
            >
            {/* 1 */}
                        <p>
                <input
                  type="checkbox"
                  className="check"
                  id="star1"
                  value="1"
                  onChange={(e) => handleChangeFilter('rating', e.target.value)}
                  checked={filterState.rating.includes('1')}
                  style={{ cursor: 'pointer' }}
                />
                <label for="star1" className="star">
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star " />
                  <i className="fas fa-star " />
                  <i className="fas fa-star " />
                  <i className="fas fa-star " />
                </label>{' '}
              </p>

              {/* 2 */}
                            <p>
                <input
                  type="checkbox"
                  className="check"
                  id="star2"
                  value="2"
                  onChange={(e) => handleChangeFilter('rating', e.target.value)}
                  checked={filterState.rating.includes('2')}
                  style={{ cursor: 'pointer' }}
                />
                <label for="star2" className="star">
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star " />
                  <i className="fas fa-star" />
                  <i className="fas fa-star " />
                </label>{' '}
              </p>

              {/* 3 */}
              <p>
                <input
                  type="checkbox"
                  className="check"
                  id="star3"
                  value="3"
                  onChange={(e) => handleChangeFilter('rating', e.target.value)}
                  checked={filterState.rating.includes('3')}
                  style={{ cursor: 'pointer' }}
                />
                <label for="star3" className="star">
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star " />
                </label>{' '}
              </p>
              {/* 4 */}
              <p>
                <input
                  type="checkbox"
                  className="check"
                  id="star4"
                  value="4"
                  onChange={(e) => handleChangeFilter('rating', e.target.value)}
                  checked={filterState.rating.includes('4')}
                  style={{ cursor: 'pointer' }}
                />
                <label for="star4" className="star">
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star" />
                </label>{' '}
              </p>
              {/* 5 */}
                <p>
                <input
                  type="checkbox"
                  className="check"
                  id="star5"
                  value="5"
                  onChange={(e) => handleChangeFilter('rating', e.target.value)}
                  checked={filterState.rating.includes('5')}
                  style={{ cursor: 'pointer' }}
                />
                <label for="star5" className="star">
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                  <i className="fas fa-star no-colour" />
                </label>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilters;
