import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Video from "components/video"



interface Props {
  data: IndexQueryQuery
  location: Location
}

const ContactPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const services_shape = data.services_shape?.childImageSharp?.fixed

  return (
    <Layout location={location}>
      <Meta site={meta} title="Contact"/>
      <section id="hero-section" class="hero-section">
        <Container>
          <div className="col-lg-6">
            <h1 className="text-black">
              Contact
            </h1>
            <p className="hero-text text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan arcu sed metus congue, quis tincidunt massa tempus.
            </p>
            <Link to="contact">
              <button className="btn btn-sm btn-outline-dark contact-us-btn no-border-radius btn-black">
                <strong>
                  Contact Us <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </strong>
              </button>
            </Link>
          </div>
          <div className="col-lg-6">
            <Video
              videoSrcURL="https://www.youtube.com/embed/u31qwQUeGuM"
              videoTitle="Official Music Video on YouTube"
            />
          </div>
        </Container>
      </section>
      <div id="contact-us-section1" className="text-center">
        <Container>
          <div className="col-md-12">
            <h2>Contact us about your health conditions</h2>
            <p className="hero-text text-black">
              The practitioners at Synergy Nutrition and Wellness want you to know that help is possible and available for your health conditions. Please complete the survey below. A practitioner will spend one hour testing your body to determine the underlying causes of your health and will not require blood work or x-rays. This testing is very gentle and non-invasive. The practitioner will use precise and scientific muscle testing to determine what your body needs. This one hour testing will also determine which foods are contributing to your condition. 
            </p>
            <form action="/" id="contact-us-form">
              <input type="text" id="name" name="name" placeholder="Name*" required/>
              <input type="email" id="email" name="email" placeholder="Email*" required />
              <input type="tel" id="phone" name="phone" placeholder="Phone*" required />
              <textarea id="subject" name="subject" rows="5" placeholder="Include any other symptoms or information about your health problems:" required></textarea> 
              <input type="submit" value="Send" /> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
           </form>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    hero: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    services_shape: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        adsense
      }
    }
  }
`
