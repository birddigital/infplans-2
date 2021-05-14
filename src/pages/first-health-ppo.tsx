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

interface Props {
  data: IndexQueryQuery
  location: Location
}

const ProviderSearchPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="INF List of Doctors & Hospitals - INF Visitor Insurance"/>
      <BackgroundImage
        Tag="section"
        className="provider-search-hero-section-bg"
        fluid={hero_background}
        alt="provider search"
      >
        <div id="provider-search-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                DOCTORS & HOSPITALS
              </h1>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="provider-search-section1">
        <Container>
          <div className="col-lg-12">
            <div className="provider-search-container">
              <h2 className="text-blue text-center">​INF Plans Providers Directory</h2>
              <div className="row mt-4">
                <div className="col-lg-8">
                  <p className="text-black">When enrolled in an INF International Visitor Accident and Sickness Plan with Multiplan PPO Network, you have the option to visit one of our In-Network Providers. Our Elite and Travel USA plans (when visiting USA) use the Multiplan Provider Network. A PPO (Preferred Provider Organization) is a network of doctors, hospitals, urgent care clinics, & specialists who offer preferred rates to lower coinsurance for members. If you go to an In-Network provider, you may be afforded several benefits.</p>
                </div>
                <div className="col-lg-4">
                  <Img fluid={infplans_big_logo} className="big-logo"/>
                </div>
                <div className="col-lg-12">
                  <p className="text-black">For example, the health care provider may bill the insurance directly, meaning you will not have to pay out of pocket in advance for many of these eligible expenses. Copays and coinsurance are lower when using in-network providers.</p>
                </div>
              </div>
            </div>

            <div className="provider-search-container mt-5">
              <h2 className="text-blue text-center">Multiplan Network PPO Providers</h2>
              <div className="row mt-3">
                <div className="col-lg-8">
                  <p className="text-black">When making an appointment with an INF International Visitor Accident and Sickness Insurance Plan make sure to say the following: <strong>"I have an accident & sickness insurance plan which uses the Multiplan PPO. I found your contact in the Provider Directory. Do you accept plans which work with the Mutliplan PPO?"</strong></p>
                </div>
                <div className="col-lg-4">
                  <Img fluid={infplans_big_logo} className="big-logo"/>
                  <button className="row2-btn"> View our USA PPO Network </button>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default ProviderSearchPage

export const query = graphql`
  query ProviderSearchPageQuery {
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
    hero_background: file(name: { eq: "provider-search-hero-bg" }) {
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
