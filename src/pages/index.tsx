import React from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

interface Props {
  data: IndexQueryQuery
  location: Location
}

const HomePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const international_health_protection = data.international_health_protection?.childImageSharp?.fluid
  const travel_insurance = data.travel_insurance?.childImageSharp?.fluid
  const covers_preexisting_conditions = data.covers_preexisting_conditions?.childImageSharp?.fluid
  const trustpilot_background = data.trustpilot_background?.childImageSharp?.fluid
  const trustpilot_stars = data.trustpilot_stars?.childImageSharp?.fluid
  
  return (
    <Layout location={location}>
      <Meta site={meta} title="INF Visitor Insurance - Visitors Insurance & Travel Insurance" />
      <BackgroundImage
        Tag="section"
        className="hero-section-bg"
        fluid={hero_background}
        alt="Find the right coverage for your trip"
        id="home-hero-section-background"
      >
        <div id="home-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                Find the right coverage <br />for your trip
              </h1>
            </div>
            <div className="col-lg-8">
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <div id="home-services-section">
        <ContainerFluid>
          <div className="col-lg-4 service-column text-center">
            <div className="service-icon">
              <Img fluid={international_health_protection} />
            </div>
            <h3 className="text-black">International Health Protection</h3>
            <p>We provide international visitor accident & sickness insurance for visiting parents, relatives, students, and temporary workers traveling outside of their home country to the United States, Canada or Mexico.</p>
            <a href="#" className="service-link">Learn More <BsArrowRight className="right-arrow" /></a>
          </div>
          <div className="col-lg-4 service-column text-center">
            <div className="service-icon">
              <Img fluid={travel_insurance} />
            </div>
            <h3 className="text-black">Travel Insurance </h3>
            <p>You are able to access international visitor accident & sickness insurance, find coverage options for pre-existing medical conditions, and help ease the possible financial burden due to unforeseen medical expenses during your stay in the United States, Canada, or Mexico.</p>
            <a href="#" className="service-link">Learn More <BsArrowRight className="right-arrow" /></a>
          </div>
          <div className="col-lg-4 service-column text-center">
            <div className="service-icon">
              <Img fluid={covers_preexisting_conditions} />
            </div>
            <h3 className="text-black">Covers Pre Existing Conditions</h3>
            <p>Our A-rated underwriting partners provide the strong financial support needed from an insurance company to continue offering International Visitor Accident and Sickness plans with pre-existing conditions coverage.</p>
            <a href="#" className="service-link">Learn More <BsArrowRight className="right-arrow" /></a>
          </div>
        </ContainerFluid>
      </div>
      <BackgroundImage
        Tag="section"
        className="trustpilot-section"
        fluid={trustpilot_background}
        alt="trustpilot review"
        id="truspilot-section-background"
      >
        <Container>
          <div className="col-lg-6">
            <h3 className="text-white text-center">
              Our customer say
            </h3>
            <h2 className="text-white text-center">
              EXCELLENT
            </h2>
            <div className="trustpilot-stars">
              <Img fluid={trustpilot_stars} />
            </div>
            <h4><strong>4.9</strong> out of 5 on <strong>196</strong> reviews</h4>
          </div>
        </Container>

      </BackgroundImage>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
      }
    },
    hero_background: file(name: { eq: "home-hero-background" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    international_health_protection: file(name: { eq: "international-health-protection-icon" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    travel_insurance: file(name: { eq: "travel-insurance-icon" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    covers_preexisting_conditions: file(name: { eq: "covers-preexisting-conditions-icon" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    trustpilot_background: file(name: { eq: "trustpilot-reviews-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    trustpilot_stars: file(name: { eq: "trustpilot-stars" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
