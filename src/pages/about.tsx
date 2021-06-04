import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { Link } from 'gatsby'
import React from 'react'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import styled from 'styled-components'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import ButtonBlack from 'components/button/button-black'

interface Props {
  location: Location
}

const AboutPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid


  return (
    <Layout location={location}>
      <Meta site={meta} title="About Us - INF Visitor Insurance" />
      <BackgroundImage
        Tag="section"
        className="about-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="about hero background"
      >
        <div id="about-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                ABOUT US
              </h1>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="about-section-1">
        <Container>
          <div className="col-lg-12">
            <div className="about-container">
              <h2 className="text-blue text-center">Who is INF?</h2>
              <Img fluid={infplans_big_logo} className="big-logo"/>
              <p className="text-blue text-center sub-title">"At the core of INF is a community organization..."</p>
              <p>INF (the India Network Foundation) is an organization that provides innovative international visitor accident and sickness insurance options for international travelers as well as various non insurance benefits.We provide international visitor accident & sickness insurance for visiting parents, relatives, students, and temporary workers traveling outside of their home country to the United States, Canada or Mexico. INF provides some plan options which can cover pre-existing conditions, meaning we may cover any pre-existing condition up to the stated limits.</p>
              <p>As a member of INF, you are able to access international visitor accident & sickness insurance, find coverage options for pre-existing medical conditions, and help ease the possible financial burden due to unforeseen medical expenses during your stay in the United States, Canada, or Mexico.</p>
              <p>INF IVAS plans can provide coverage for pre-existing conditions, as defined in the applicable insurance policies.</p>
              <p>As a community organization, we are able to offer insurance programs for non-US citizens visiting the United States, Canada, or Mexico.</p>
              <p>All INF IVAS plans use Multiplan Network.</p>
              <p>Most INF International Visitor Accident and Sickness plans provide coverage for pre-existing conditions. Our A-rated underwriting partners provide the strong financial support needed from an insurance company to continue offering International Visitor Accident and Sickness plans with pre-existing conditions coverage.</p>
              <p>If you have any questions about INF or our organization, please email us at support[at]infplans.com.</p>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
      }
    },
    hero_background: file(name: { eq: "request-a-quote-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    infplans_big_logo: file(name: { eq: "infplans-big-logo" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
