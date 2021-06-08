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
import { Helmet } from 'react-helmet'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const MembersPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>MyINF Member Portal</title>
        <meta name="description" content="Manage your entire Insurance for Visitors policy from MyINF Portal"/>
        <meta name="keywords" content="Dr Rao Visitors Coverage, Rao Insurance for Visitors, KV Rao Visitor Insurance, Rao Visitors Coverage, KV Rao Insurance, KV Rao Insurance for Visitors, India Network, India Network Insurance for Visitors, indnet, india network foundation, india health network insurance,INF Visitor Insurance, INF Insurance, INF Insurance for Visitors, INF Visitor Insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="members-hero-section-bg"
        fluid={hero_background}
        alt="members"
      >
        <div id="members-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INSURED PORTAL
              </h1>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="members-section1">
        <Container>
          <div className="col-lg-12">
            <div className="row members-container">
              <div className="col-lg-12">
                <h3 className="text-blue text-center row-title">Welcome to INF Member Portal. Extend existing plans, apply new ones, print ID cards, Dental and Vision Discount cards.</h3>
              </div>
              <div className="col-lg-12">
                <div className="row mt-5 members-row-container">
                  <div className="col-lg-5">
                    <Img fluid={infplans_big_logo} className="big-logo"/>
                    <h3 className="text-blue text-center">Insured Login</h3>
                  </div>
                  <div className="col-lg-7">
                    <form method="POST" action="">
                      <input type="email" id="email" name="email" placeholder="Email Address" />
                      <input type="submit" value="Next" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default MembersPage

export const query = graphql`
  query MembersPageQuery {
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
    hero_background: file(name: { eq: "members-hero-bg" }) {
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
