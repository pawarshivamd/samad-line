/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

const BrandListing = ({ brands = [], isMobile, isTablet }) => {
  return (
    <div className="brnad-home-section">
      <div className="container-fluid">
        <div className="brand-section">
          <div className=" trending-head" style={{ height: 70 }}>
            <h1 className="dead-link">BRAND RANGE</h1>
          </div>
          <div className="swiper brandslider">
            <Swiper
              className="swiper-wrapper"
              modules={[Autoplay, Pagination, Navigation]}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              slidesPerView={isTablet ? 3 : isMobile ? 1 : 5}
            >
              {brands.map((elem) => (
                <SwiperSlide className="swiper-slide" key={elem._id}>
                  <Link to={`/products/brand=${elem.name}`}>
                    <div className="text-center mt-2 brand-img-box">
                      <img src={elem.image} alt="" />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandListing;
