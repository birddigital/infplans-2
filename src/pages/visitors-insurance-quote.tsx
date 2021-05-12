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

const VisitorInsuranceQuotePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="INF Visitor Insurance Quote"/>
      <BackgroundImage
        Tag="section"
        className="get-a-quote-hero-section-bg"
        fluid={hero_background}
        alt="get a quote"
      >
        <div id="get-a-quote-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                GET A VISITORS INSURANCE QUOTE
              </h1>
              <p className="hero-text text-white text-center">
                INF has provided insurance options for millions of travelers since 1988. Built during the early-ages of the internet, INF has always been a technology first company.
              </p>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="get-a-quote-section-1">
        <Container>
          <div className="col-lg-12">
            <h2 className="text-center text-blue">Why choose INF Insurance? </h2>
            <p className="text-black text-center">
              INF has provided insurance options for millions of travelers since 1988. Built during the early-ages of the internet, INF has always been a technology first company. INF was the first company to allow insurance applications Online and over fax, and the first company to incorporate technology into their claims process. INF uses technology to bring better products, services, and customer experience to travelers across the globe.
            </p>
            <p className="text-black text-center">
              Get the Peace of Mind while you are traveling knowing you'll be covered no matter what. INF covers <a href="/">All Pre-Existing Conditions</a> with <a href="/">no acute onset limitation</a> for visitors to/from the United States & Canada.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default VisitorInsuranceQuotePage

export const query = graphql`
  query VisitorInsuranceQuotePageQuery {
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
    hero_background: file(name: { eq: "get-a-quote-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
