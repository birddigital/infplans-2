import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'

import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import { Link } from 'gatsby'
import EssentialOils from '../../content/images/essential-oils-img.png'
import Herbs from '../../content/images/herbs-img.png'
import WholeFoodSupplements from '../../content/images/whole-foods-supplements-img.png'
import Homeopathic from '../../content/images/homeopathic-remedies-img.png'
import FormIcon from '../../content/images/form-icon.png'
import Animals from '../../content/images/animals.png'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const HomePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const column_1_img = data.column_1_img?.childImageSharp?.fixed
  const animals = data.animals?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} />
      <div id="hero-section">
        <Container>
          <div className="col-md-4">
            <h1 className="text-black">
              The Body <br />Natural
            </h1>
            <p className="hero-text text-black">
              Nutrition Response Testing <br />For Animals 
            </p>
            <Link to="contact-us">
              <button className="btn btn-sm btn-outline-dark contact-us-btn no-border-radius btn-black">
                <strong>
                  Contact Us <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </strong>
              </button>
            </Link>
          </div>
          <div className="col-md-8">
            <Img fluid={hero} alt="the body natural" />
          </div>
        </Container>
      </div>
      <div id="home-services-section">
        <Container>
          <div className="col">
            <div className="rounded service-column">
              <Img fixed={column_1_img} className="service-image" />
            </div>
          </div>
          <div className="col">
            <div className="rounded service-column">
              <Img fixed={column_1_img} className="service-image" />
            </div>
          </div>
          <div className="col">
            <div className="rounded service-column">
              <Img fixed={column_1_img} className="service-image" />
            </div>
          </div>
          <div className="col">
            <div className="rounded service-column">
              <Img fixed={column_1_img} className="service-image" />
            </div>
          </div>
          <div className="col">
            <div className="rounded service-column">
              <Img fixed={column_1_img} className="service-image" />
            </div>
          </div>
        </Container>
        <Container>
          <div class="col-md-12">
            <img src={Animals} className="service-image-animals" />
          </div>
        </Container>
      </div>
      <div id="home-products-sections" className="text-center">
        <Container>
          <div className="col-md-12">
            <h2 className="text-light text-center">Our Product</h2>
          </div>
          <div className="col">
            <div className="product-column bg-white">
              <div className="product-container">
                <img src={EssentialOils} alt="essential oils" />
              </div>
              <p className="text-center single-line">Essential Oils</p>
            </div>
          </div>
          <div className="col">
            <div className="product-column bg-white">
              <div className="product-container">
                <img src={EssentialOils} alt="herbs" />
              </div>
              <p className="text-center single-line">Herbs</p>
            </div>
          </div>
          <div className="col">
            <div className="product-column bg-white">
              <div className="product-container">
                <img src={EssentialOils} alt="whole food supplements" />
              </div>
              <p className="text-center">Whole Food Supplements</p>
            </div>
         </div>
          <div className="col">
            <div className="product-column bg-white">
              <div className="product-container">
                <img src={EssentialOils} alt="homeopathic remedies" />
              </div>
              <p className="text-center">Homeopathic Remedies</p>
            </div>
          </div>
          <div className="col">
            <div className="product-column bg-white">
              <div className="product-container">
                <img src={EssentialOils} alt="laser therapy" />
              </div>
              <p className="text-center single-line">Laser Therapy</p>
            </div>
          </div>
        </Container>
      </div>
      <div id="home-new-patients-section">
        <Container>
          <div class="col-md-12">
            <h2 class="text-white text-light">
              New Patients
            </h2>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <div className="form-column text-center">
                  <div class="icon-container rounded-circle">
                    <img src={FormIcon} />
                  </div>
                  <p className="text-light">New Patient Routing Form</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-column text-center">
                  <div class="icon-container rounded-circle">
                    <img src={FormIcon} />
                  </div>
                  <p className="text-light">New Patient Introduction Form</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-column text-center">
                  <div class="icon-container rounded-circle">
                    <img src={FormIcon} />
                  </div>
                  <p className="text-light">Food Intake Form</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">

          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
    hero: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    column_1_img: file(name: { eq: "column-image" }) {
      childImageSharp {
        fixed(width: 186, height: 186, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },
    animals: file(name: { eq: "animals" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
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
