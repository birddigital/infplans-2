import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'

import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'


interface Props {
  data: IndexQueryQuery
  location: Location
}

const AboutPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const about_us_bg = data.about_us_bg?.childImageSharp?.fluid
  const about_us_img = data.about_us_img?.childImageSharp?.fixed

  return (
    <Layout location={location}>
      <Meta site={meta} title="About"/>
      <BackgroundImage
        Tag="section"
        className="hero-section-bg"
        fluid={hero}
        backgroundColor={`#e9f4f8`}
        alt="the body natural"
      >
        <div id="hero-section">
          <Container>
            <div className="col-lg-6">
              <h1 className="text-black">
                About Us
              </h1>
              <p className="hero-text text-black">
                When the right combination of natural health therapies and whole food supplementation comes together to heal the body, we call this synergy.
              </p>
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <div id="about-us-section-2">
        <BackgroundImage
          Tag="section"
          className="about-us-bg"
          fluid={about_us_bg}
          backgroundColor={`#e9f4f8`}
          alt="about us"
        >
          <Container>
            <div class="col text-center bg-light">
              <h2> Our Mission </h2>
              <p>Our purpose is to be the true leaders of healthcare in our community. Health is not merely the absence of symptoms, rather a total well being physically, mentally, and spiritually.

By creating a collaborative wellness center to facilitate many modalities that encompass like minded beliefs from many practitioners we could achieve our purpose.

We whole heartedly believe in our God given abilities not only to survive but more importantly to THRIVE!

Our mission is to teach people how to not need drugs, medication, or surgeries because God made your body so perfectly that it was designed to heal. The healing process has a contingency; it’s very simple, God food over man food.

It is our duty to teach the following:

Your body’s ability to heal is greater than anyone has permitted you to believe.</p>
            </div>
          </Container>
        </BackgroundImage>
      </div>
      <div id="about-us-section1" className="text-center">
        <Container>
          <div className="col-md-12">
            <h2> Welcome to Synergy Nutrition and Wellness.</h2>
            <p className="hero-text text-black">
              When the right combination of natural health therapies and whole food supplementation comes together to heal the body, we call this synergy.            </p>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    hero: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    about_us_bg: file(name: { eq: "spinach" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    about_us_img: file(name: { eq: "apple" }) {
      childImageSharp {
        fixed(width: 120, height: 120, quality: 100) {
          ...GatsbyImageSharpFixed
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
