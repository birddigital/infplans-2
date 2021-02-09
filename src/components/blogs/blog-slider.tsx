import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import PostSlider from '../../templates/post/post-slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BlogSlider = ({ className }) => {
  const data = useStaticQuery ( graphql`
    query BlogSliderQuery {
      site {
        meta: siteMetadata {
          title
          description
          siteUrl
          author
          twitter
          adsense
        }
      },
      remark: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        posts: edges {
          post: node {
            html
            frontmatter {
              layout
              title
              path
              category
              author
              tags
              description
              date(formatString: "YYYY/MM/DD")
              image {
                childImageSharp {
                  fluid(maxHeight: 362) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  )

  // Set ImageData.
  const posts = data.remark.posts
  var settings = {
    speed: 1000,
    autoplaySpeed: 3000,
    fadeIn: false,
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="col-md-12">
      <Slider {...settings}>
         {posts.map((post, i) => (
            <PostSlider
              data={post as PostByPathQuery}
              options={{
                isIndex: true,
              }}
              key={i}
            />
           ))}
      </Slider>
    </div>
  )
}

export default BlogSlider
