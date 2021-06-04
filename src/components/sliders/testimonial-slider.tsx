import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

const TestimonialHomeSlider = ({ className }) => {
  const data = useStaticQuery ( graphql`
    query TestimonialHomeSliderQuery {
      quote_testimonial_img: file(name: { eq: "quote-testimonial-img" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vijay_img: file(name: { eq: "vijay-img" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      testi_bg: file(name: { eq: "testi-bg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `
  )

  // Set ImageData.
  const testi_1 = data.testi_1?.childImageSharp?.fluid
  const quote_testimonial_img = data.quote_testimonial_img?.childImageSharp?.fluid
  const vijay_img = data.vijay_img?.childImageSharp?.fluid
  const testi_bg = data.testi_bg?.childImageSharp?.fluid


  var settings = {
    speed: 1000,
    autoplaySpeed: 10000,
    fadeIn: false,
    autoplay: true,
    dots: false,
    prevArrow: <FaChevronLeft />,
    nextArrow: <FaChevronRight />,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <BackgroundImage
      Tag="section"
      fluid={testi_bg}
      alt="testimonial"
      id="testimonial-bg-section"
    >
    <div className="col-md-12 testimonial-slider">
      <Img fluid={quote_testimonial_img} className="quote-img" />
      <Slider {...settings}>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3">
              <Img fluid={vijay_img} className="testi-img" />
            </div>
            <div className="col-lg-9">
              <h3 className="testi-name text-white">VIJAY SEETHARAM</h3>
              <p className="text-white testi-content">I've used INF before in the past many times.. this time i actually had to use the insurance. The staff was very kind and helpful in every way. My dad had a minor stroke- Greg roberts was there with me and texted me every day to make sure if i needed anything. They are really there for you when you need them.</p>
              <div className="star-icons">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3">
              <Img fluid={vijay_img} className="testi-img" />
            </div>
            <div className="col-lg-9">
              <h3 className="testi-name text-white">VIJAY SEETHARAM</h3>
              <p className="text-white testi-content">I've used INF before in the past many times.. this time i actually had to use the insurance. The staff was very kind and helpful in every way. My dad had a minor stroke- Greg roberts was there with me and texted me every day to make sure if i needed anything. They are really there for you when you need them.</p>
              <div className="star-icons">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </BackgroundImage>
  )
}

export default TestimonialHomeSlider
