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

const RequestAQuotePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const powered_by_calendly_img = data.powered_by_calendly_img?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Request a Quote"/>
      <BackgroundImage
        Tag="section"
        className="request-a-quote-hero-section-bg"
        fluid={hero_background}
        alt="request a quote"
      >
        <div id="request-a-quote-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                REQUEST A QUOTE
              </h1>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="request-a-quote-section1">
        <Container>
          <div className="col-lg-12">
            <div className="request-a-quote-container">
              <h2 className="text-blue text-center">Request a Quote / Call Back</h2>
              <p className="text-black">Schedule a time on our calendar to request a call back. At INF, we strive to bring you the best customer service. Our office is open from 9:00 AM - 11:00 PM everyday, to ensure we are there when you need us. </p>

            </div>
          </div>
          <iframe src="https://calendly.com/infhealthcare-support?embed_domain=infplans.com&amp;embed_type=Inline" width="100%" height="100%" frameborder="0"></iframe>
        </Container>
      </section>
    </Layout>
  )
}

export default RequestAQuotePage

export const query = graphql`
  query RequestAQuotePageQuery {
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
    hero_background: file(name: { eq: "request-a-quote-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    powered_by_calendly_img: file(name: { eq: "powered-by-calendly-img" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
