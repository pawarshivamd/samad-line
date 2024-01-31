/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

const Categories = ({ category = [], isMobile, isTablet }) => {
  return (
    <div className="cat-round">
      <div className="container-xxl">
        <div className="carte-body">
          <div className="swiper carte-slider">
            <Swiper
              className="swiper-wrapper"
              slidesPerView={isTablet ? 5 : isMobile ? 3 : 5}
              spaceBetween={isTablet ? 5 : isMobile ? 1 : 2}
              navigation
              modules={[Autoplay, Pagination, Navigation]}
            >
              {category?.map((elem) => (
                <SwiperSlide className="swiper-slide" key={elem._id}>
                  <Link to={`/products/category=${elem._id}`}>
                    <div className="carte-contain">
                      <div className="carte carte-img-box ">
                        <a>
                          <img
                            src={elem.image && elem.image?.url}
                            alt={elem.name}
                          />
                        </a>
                      </div>
                      <p className="text-center">
                        <a> {elem.name}</a>
                      </p>
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

export default Categories;
