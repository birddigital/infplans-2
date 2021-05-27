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
import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown";

interface Props {
  data: IndexQueryQuery
  location: Location
}

const PremierPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid
  const section2_img_right = data.section2_img_right?.childImageSharp?.fluid
  const section2_img_left = data.section2_img_left?.childImageSharp?.fluid
  const book_icon = data.book_icon?.childImageSharp?.fluid
  const cta_bg = data.cta_bg?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Premier Pre-Existing Insurance for Visitors for Visitors to USA"/>
      <BackgroundImage
        Tag="section"
        className="premier-hero-section-bg"
        fluid={hero_background}
        alt="premier"
      >
        <div id="premier-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INF PREMIER IVAS PLAN
              </h1>
              <p className="hero-text text-white text-center">
                The Premier IVAS Plan is one of the INF's flagship Insurance programs for visitors to the United States, Canada and Mexico. By enrolling in the INF Premier IVAS Insurance Plan, you also become a member of the INF*.
              </p>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="premier-section1">
        <Container>
          <div className="premier-container">
            <h2 className="text-blue text-center">What is INF Premier International Visitor Accident & Sickness Insurance (IVAS)?</h2>
            <div className="row mt-5">
              <div className="col-lg-8">
                <p className="text-black">The Premier IVAS Plan is one of the INF's flagship Insurance programs for visitors to the United States, Canada and Mexico. By enrolling in the INF Premier IVAS Insurance Plan, you also become a member of the INF*.</p>
                <p className="text-black">INF Premier IVAS plan provides coverage for pre-existing conditions as defined in the plan, as per policy limitations, exclusions and maximums, with no benefit waiting period.</p>
                <a href="#" className="read-more">READ MORE <FaAngleDoubleDown className="double-arrow-down" /></a>
              </div>
              <div className="col-lg-4">
                <Img fluid={infplans_big_logo} className="big-logo"/>
                <h3 className="text-blue text-center">INF Premier IVAS Plan</h3>
                <button className="row-btn"> Click to Get a Quote </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default PremierPage

export const query = graphql`
  query PremierPageQuery {
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
    hero_background: file(name: { eq: "premier-hero-bg" }) {
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
    section2_img_right: file(name: { eq: "traveler-section2-img-right" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    section2_img_left: file(name: { eq: "traveler-section2-img-left" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    book_icon: file(name: { eq: "book-icon" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    cta_bg: file(name: { eq: "cta-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
