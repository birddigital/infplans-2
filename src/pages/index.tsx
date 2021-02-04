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
          <div className="container-small row">
            <div className="col-md-3">
              <div className="rounded service-column">
                <Img fixed={column_1_img} className="service-image" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="rounded service-column">
                <Img fixed={column_1_img} className="service-image" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="rounded service-column">
                <Img fixed={column_1_img} className="service-image" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="rounded service-column">
                <Img fixed={column_1_img} className="service-image" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="rounded service-column">
                <Img fixed={column_1_img} className="service-image" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div id="home-products-sections">
        <ContainerFluid>
          <div className="col-md-12">
            <h2 className="text-light">Our Product</h2>
          </div>
          <div className="col-md-2">One</div>
          <div className="col-md-2 col-half-offset">
            <div class="product-column rounded bg-white">

            </div>
          </div>
          <div className="col-md-2 col-half-offset">
            <div class="product-column rounded bg-white">

            </div>
          </div>
          <div className="col-md-2 col-half-offset">
            <div class="product-column rounded bg-white">

            </div>
          </div>
          <div className="col-md-2 col-half-offset">
            <div class="product-column rounded bg-white">

            </div>
          </div>
          <div className="col-md-2 col-half-offset">
            <div class="product-column rounded bg-white">

            </div>
          </div>
        </ContainerFluid>
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
        fixed(width: 170, height: 170, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    },
    animals: file(name: { eq: "animals-img" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
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
