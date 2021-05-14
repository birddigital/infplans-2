import React from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import styled from 'styled-components'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import ButtonBlack from 'components/button/button-black'
import {FiClock} from '@react-icons/all-files/fi/FiClock'
import {FiPhoneCall} from '@react-icons/all-files/fi/FiPhoneCall'
import {FiMail} from '@react-icons/all-files/fi/FiMail'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const ContactUsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Contact Us about Insurance for Visitors Questions"/>
      <BackgroundImage
        Tag="section"
        className="contact-hero-section-bg"
        fluid={hero_background}
        alt="contact us"
      >
        <div id="contact-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                CONTACT US
              </h1>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="contact-section1">
        <Container>
          <div className="col-lg-12">
            <div className="row contact-container">
              <div className="col-lg-7">
                <div className="left-content">
                  <h2 className="text-blue text-center">Contact Us Today</h2>
                  <form method="POST" action="">
                    <input type="text" id="name" name="name" placeholder="Your Name*" />
                    <input type="email" id="email" name="email" placeholder="Your Email Address*" />
                    <input type="tel" id="phone" name="phone" placeholder="Your Phone Number*" />
                    <textarea id="message" name="message" placeholder="Your Message*" />
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
              <div className="col-lg-5 right-content">
                <h2 className="text-white text-center">Business Hours</h2>
                <div className="business-hours">
                <FiClock className="contact-icon"/><h3 className="text-white hours-subtitle">Days and Time</h3>
                <p className="text-white">Monday - Friday : 9:00 AM - 11:00 PM EST</p>
                <p className="text-white">Saturday - Sunday : 10:00 AM - 9:00 PM EST</p>
                </div>
                <div className="business-hours">
                  <FiPhoneCall className="contact-icon"/><h3 className="text-white hours-subtitle">Support Via Phone</h3>
                  <p className="text-white">Phone:  408-540-3601</p>
                </div>
                <div className="business-hours">
                  <FiMail className="contact-icon"/><h3 className="text-white hours-subtitle">Support Via Email</h3>
                  <p className="text-white">support @infplans.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default ContactUsPage

export const query = graphql`
  query ContactUsPageQuery {
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
    },
    hero_background: file(name: { eq: "contact-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
