import styled from "styled-components";
import Header from "../component/Header";
import IMG_MAINLOGO from "../assets/img/logo-main.png";
import BANNER_1 from "../assets/img/banner/banner_w_1.jpg";
import BANNER_2 from "../assets/img/banner/banner_w_2.jpg";
import BANNER_3 from "../assets/img/banner/banner_w_3.jpg";
import Input from "../component/Input";
import Footer from "../component/Footer";
import MainCategory from "../component/MainCategory";
import media from "../constants/media";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SMainContainer = styled.div`
  .container {
    width: 1024px;
    margin: 0 auto;
    .main {
      width: 500px;
      margin: 0 auto;
      padding: 130px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .main-logo {
        width: 225px;
        margin: 20px auto;
      }
      .banner {
        width: 100%;
        .banner-item {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          img {
            border-radius: 8px;
            width: 100%;
          }
        }
        .slick-dots {
          bottom: 15px;
          li {
            width: 3px;
            button::before {
              color: #fff;
            }
            &.slick-active {
              button::before {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  ${media.MOBILE} {
    .container {
      width: 100%;
      .main {
        width: 100%;
        padding: 50px 30px;
        box-sizing: border-box;
        .main-logo {
          width: 180px;
          margin: 20px auto;
        }
        .banner {
          position: absolute;
          bottom: 140px;
          width: 85%;
        }
      }
    }
  }
`;

export const Main = () => {
  const settings = {
    dots: true,
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToScroll: 1, //1장씩 넘어가세요
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <SMainContainer>
      <Header />
      <div className="container">
        <div className="main">
          <img className="main-logo" src={IMG_MAINLOGO} />
          <Slider {...settings} className="banner">
            <div className="banner-item">
              <img src={BANNER_1} />
            </div>
            <div className="banner-item">
              <img src={BANNER_2} />
            </div>
            <div className="banner-item">
              <img src={BANNER_3} />
            </div>
          </Slider>
          <Input />
          <MainCategory />
        </div>
      </div>
      <Footer />
    </SMainContainer>
  );
};
