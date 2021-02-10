import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'
import { Link } from 'gatsby'
import { IndexQueryQuery, PostByPathQuery } from '../../../types/graphql-types'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import Video from "components/video"

interface Props {
  data: IndexQueryQuery
  location: Location
}

const EssentialOilsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const product1 = data.product1?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Essential Oils" />
      <section id="hero-section" class="hero-section">
        <Container>
          <div className="col-lg-6">
            <h1 className="text-black">
              Essential Oils
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
      <section id="products-section-1" className="text-center page-section">
        <Container>
          <div className="col-lg-3">
            <div className="product-column">
              <Img fluid={product1} />
              <p className="text-center text-pink">
                Marco Pharma
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-column">
              <Img fluid={product1} />
              <p className="text-center text-pink">
                Marco Pharma
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-column">
              <Img fluid={product1} />
              <p className="text-center text-pink">
                Marco Pharma
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-column">
              <Img fluid={product1} />
              <p className="text-center text-pink">
                Marco Pharma
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-column">
              <Img fluid={product1} />
              <p className="text-center text-pink">
                Marco Pharma
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-column">
              <Img fluid={product1} />
              <p className="text-center text-pink">
                Marco Pharma
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-column">
              <Img fluid={product1} />
              <p className="text-center text-pink">
                Marco Pharma
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-column">
              <Img fluid={product1} />
              <p className="text-center text-pink">
                Marco Pharma
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default EssentialOilsPage

export const query = graphql`
  query EssentialOilsQuery {
    hero: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    product1: file(relativePath: { eq: "images/marco-pharma.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
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