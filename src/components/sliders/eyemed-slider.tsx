import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EyemedSlider = ({ className }) => {
  const data = useStaticQuery ( graphql`
    query EyemedSliderQuery {
      optical_logo: file(name: { eq: "optical-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contacts_logo: file(name: { eq: "contacts-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      lens_logo: file(name: { eq: "lens-logo" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `
  )

  // Set ImageData.
  const optical_logo = data.optical_logo?.childImageSharp?.fluid
  const contacts_logo = data.contacts_logo?.childImageSharp?.fluid
  const lens_logo = data.lens_logo?.childImageSharp?.fluid

  var settings = {
    speed: 1000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="col-md-12 eyemed-slider mt-4">
      <Slider {...settings}>
        <div className="eyemed-content">
          <Img fluid={optical_logo} className="eyemed-logo-img" />
        </div>
        <div className="eyemed-content">
          <Img fluid={contacts_logo} className="eyemed-logo-img" />
        </div>
        <div className="eyemed-content">
          <Img fluid={lens_logo} className="eyemed-logo-img" />
        </div>
      </Slider>
    </div>
  )
}

export default EyemedSlider
