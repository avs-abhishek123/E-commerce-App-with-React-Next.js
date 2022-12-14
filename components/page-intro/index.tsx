import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';
import React, { useState, useEffect } from 'react';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      }
      else {
        setTheme('light');
    }
  };
  useEffect(() => {
    // localStorage.setItem('theme', theme);
    document.body.className = theme;
    }, [theme]);
  return (
    <section className="page-intro">
      <div className={theme}>
        <Swiper navigation effect="fade" className="swiper-wrapper">
          <SwiperSlide>
            <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
              <div className="container">
                <div className="page-intro__slide__content">
                  <h2>Summer <br/>Sale</h2>
                  <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
              <div className="container">
                <div className="page-intro__slide__content">
                  <h2>Make your house into a home</h2>
                  <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="shop-data">
          <div className="container">
            <ul className="shop-data__items">
              <li>
                <i className="icon-shipping"></i>
                <div className="data-item__content">
                  <h4>Free Shipping</h4>
                  <p>On purchases over $199</p>
                </div>
              </li>

              <li>
                <i className="icon-shipping"></i>
                <div className="data-item__content">
                  <h4>99% Satisfied Customers</h4>
                  <p>Our clients' opinions speak for themselves</p>
                </div>
              </li>
              <li>
                <i className="icon-cash"></i>
                <div className="data-item__content">
                  <h4>Originality Guaranteed</h4>
                  <p>30 days warranty for each product from our store</p>
                </div>
              </li>
              <li>
                <ul>
                <li>
                  <p>Mode</p><br />
                </li>
                <li>
                <label className="switch">
                  <input type="checkbox" />
                    <span className="slider round" onClick={toggleTheme}></span>
                </label>
                </li>
                {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
                </ul>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};

export default PageIntro