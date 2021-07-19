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

const ProducersPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Helmet>
        <title>Producers - INF Visitor Insurance</title>
        <meta name="description" content="INF Producer Log In "/>
        <meta name="keywords" content="Insurance for Visitors, INF producer Login, INF Producer Area"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="producers-hero-section-bg"
        fluid={hero_background}
        alt="producers"
      >
        <div id="producers-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                PRODUCERS
              </h1>
              <Link to="/inf-easy-select"><button className="hero-btn"> Get a Quote </button></Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="producers-section1">
        <Container>
          <div className="col-lg-12">
            <div className="embed-container">
              <iframe src="https://adrienb3.sg-host.com/forms/producers-login.php" id="members-login-form"></iframe>
            </div>
          </div>
          {/*<div className="col-lg-12">
            <div className="row producers-container">
              <div className="col-lg-5">
                <Img fluid={infplans_big_logo} className="big-logo"/>
                <h3 className="text-blue text-center">Producer Sign In</h3>
              </div>
              <div className="col-lg-7">
                <form method="POST" action="">
                  <input type="email" id="email" name="email" placeholder="Email Address" />
                  <input type="submit" value="Next" />
                </form>
              </div>
            </div>
          </div>*/}
        </Container>
      </section>
    </Layout>
  )
}

export default ProducersPage

export const query = graphql`
  query ProducersPageQuery {
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
    hero_background: file(name: { eq: "producers-hero-bg" }) {
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
