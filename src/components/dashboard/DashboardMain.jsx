/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
// import ProductListing from './ProductListing';
// import BrandListing from './BrandListing';
// import Blogs from './Blogs';
import Categories from './Categories';

// const DashboardMain = ({ homeScreenData, addtoCart, addToWishlist }) => {
const DashboardMain = ({ homeScreenData }) => {
  const [isMobile, setIsMobile] = useState(false);

  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (window.innerWidth > 720 && window.innerWidth < 1200) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  return (
    <>
      <div className="bg-white">
        <section className="banner-wrapper container-xxl">
          <div className="banner ">
            <div className="swiper mySwiper-1">
              <Swiper
                className="swiper-wrapper"
                speed={3000}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                spaceBetween={10}
                modules={[Autoplay, Pagination, Navigation]}
                // slidesPerView={1.1}
                centeredSlides
                loop
              >
                <SwiperSlide className=" swiper-slide">
                  <img
                    src="asstes/img/hero/2.png"
                    className="img-fluied banner-img"
                    alt=""
                  />
                </SwiperSlide>

                <SwiperSlide className=" swiper-slide">
                  <img
                    src="asstes/img/hero/2.png"
                    className="img-fluied banner-img"
                    alt=""
                  />
                </SwiperSlide>

                <SwiperSlide className=" swiper-slide">
                  <img
                    src="asstes/img/hero/2.png"
                    className="img-fluied banner-img"
                    alt=""
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src="asstes/img/hero/2.png"
                    className="img-fluied banner-img"
                    alt=""
                  />
                </SwiperSlide>
                {/* <div className="hero-body">
                  <img src="asstes/img/hero/text-bg.png" alt="" />
                </div> */}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
      <Categories
        category={homeScreenData?.category}
        isMobile={isMobile}
        isTablet={isTablet}
      />
      <div className="container-xxl banner-wrapper pb-0" >
        <div className="banner-info">
          <div className='banner-info-box'>
          <p className='text-about'>Lorem ipsum dolor sit amet consectetur. Risus hac at pulvinar aliquam pulvinar. Aliquet risus lobortis vel pharetra. Arcu ac eros nunc augue urna diam purus faucibus metus. Volutpat integer dolor mi nisl quis sollicitudin at. Enim purus arcu ac sed. Gravida egestas eu dolor ultricies ut ut sed quisque. Pulvinar in ipsum adipiscing tristique sed facilisis viverra accumsan. Sit sit turpis sed risus velit tristique risus. Condimentum amet ipsum orci turpis at ullamcorper pretium. Non semper sed senectus felis. Arcu fringilla euismod ipsum ullamcorper leo dignissim ac egestas ullamcorper. Leo amet.</p></div>
        </div>
      </div>
      {/* <ProductListing
        type="TRENDING NOW"
        products={homeScreenData?.trendingProducts}
        addtoCart={addtoCart}
        addToWishlist={addToWishlist}
        isMobile={isMobile}
        isTablet={isTablet}
      /> */}
      {/* <div className="container ">
        <div className=" col-lg-12  col-md-12 col-sm-12 ">
          <div className="img-bg-box">
            <img src="asstes/img/saveupto brand/Group 35703.png" alt="" />
          </div>
        </div>
      </div> */}
      {/* <div className="container-xxl">
        <div className="offer-section">
          <div className="offer-boday">
            <div className="row">
              <div className=" col-lg-6 col-md-6 col-sm-12 ">
                <div className="offer-contain">
                  <p className="main-text">Save Up to 40% Off</p>
                  <p className="sub-text">
                    Your spot to find the most sophisticated home accessories!
                  </p>
                  <a href="#">
                    <button type="button" className="btn-read-more">
                      Read more
                    </button>
                  </a>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm-12  ">
                <div className="img-box">
                  <img src="asstes/img/brand/home.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <ProductListing
        type="NEW ARRIVAL"
        products={homeScreenData?.newArrivals}
        addtoCart={addtoCart}
        addToWishlist={addToWishlist}
        isMobile={isMobile}
        isTablet={isTablet}
      /> */}
      {/* <BrandListing
        brands={homeScreenData?.brands}
        isMobile={isMobile}
        isTablet={isTablet}
      /> */}
      {/* <Blogs /> */}
    </>
  );
};

export default DashboardMain;
