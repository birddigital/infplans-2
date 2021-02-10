import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'



import { IndexQueryQuery, PostByPathQuery } from '../../../types/graphql-types'
import Post from '../../templates/post/post'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import styled from 'styled-components'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import ServiceShape from '../../../content/images/services_shape.png'
import Horse from '../../../content/images/horse.png'
import Milk from '../../../content/images/milk.png'
import Smiley from '../../../content/images/smiley.png'
import NutritionCoaching from '../../../content/images/nutrition_coaching.png'
import Dog from '../../../content/images/dog.png'
import Video from "components/video"


interface Props {
  data: IndexQueryQuery
  location: Location
}

const ServicesPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const horse = data.horse?.childImageSharp?.fluid
  const milk = data.milk?.childImageSharp?.fluid
  const smiley = data.smiley?.childImageSharp?.fluid
  const nutrition_coaching = data.nutrition_coaching?.childImageSharp?.fluid
  const dog = data.dog?.childImageSharp?.fluid
  const services_shape = data.services_shape?.childImageSharp?.fixed

  return (
    <Layout location={location}>
      <Meta site={meta} title="Services"/>
      <section id="hero-section" className="hero-section">
        <Container>
          <div className="col-lg-6">
            <h1 className="text-black">
              Services
            </h1>
            <p className="hero-text text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan arcu sed metus congue, quis tincidunt massa tempus.
            </p>
            <Link to="/contact">
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
      <section id="services-section-1" className="text-center page-section">
        <Container>
            <div className="col-lg-12">
              <div className="row service-row">
                <div className="col-lg-3">
                  <div className="rounded service-column">
                    <Img fixed={services_shape} className="service-shape" />
                    <div className="service-content">
                      <Img fluid={nutrition_coaching} className="service-img" />
                      <p className="text-center">Nutrition <br />Coaching</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <h3 className="text-left text-black">Nutrition Coaching</h3>
                  <p className="text-black text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="row service-row">
                <div className="col-lg-3">
                  <div className="rounded service-column">
                    <Img fixed={services_shape} className="service-shape" />
                    <div className="service-content">
                      <Img fluid={smiley} className="service-img" />
                      <p className="text-center">The Emotion <br />Code</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <h3 className="text-left">The Emotion Code</h3>
                  <p className="text-black text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="row service-row">
                <div className="col-lg-3">
                  <div className="rounded service-column">
                    <Img fixed={services_shape} className="service-shape" />
                    <div className="service-content">
                      <Img fluid={dog} className="service-img" />
                      <p className="text-center">The Body <br />Code</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <h3 className="text-left">The Body Code</h3>
                  <p className="text-black text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="row service-row">
                <div className="col-lg-3">
                  <div className="rounded service-column">
                    <Img fixed={services_shape} className="service-shape" />
                    <div className="service-content">
                      <Img fluid={milk} className="service-img" />
                      <p className="text-center">Nutrition Response Testing for Animals</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <h3 className="text-left">Nutrition Response Testing for Animals</h3>
                  <p className="text-black text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="row service-row">
                <div className="col-lg-3">
                  <div className="rounded service-column">
                    <Img fixed={services_shape} className="service-shape" />
                    <div className="service-content">
                      <Img fluid={horse} className="service-img" />
                      <p className="text-center">Equine Touch Bodywork</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <h3 className="text-left">Equine Touch Bodywork</h3>
                  <p className="text-black text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </Container>
      </section>
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
  query ServicesMainPageQuery {
    hero: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    services_shape: file(name: { eq: "services_shape" }) {
      childImageSharp {
        fixed(width: 206, height: 206, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    horse: file(name: { eq: "horse" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    milk: file(name: { eq: "milk" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    smiley: file(name: { eq: "smiley" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    nutrition_coaching: file(name: { eq: "apple" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    dog: file(name: { eq: "dog" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
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