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

const DiplomatInternationalPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="INF Visitor Insurance - Visitors Insurance & Travel Insurance"/>
      <BackgroundImage
        Tag="section"
        className="hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt=""
      >
        <div id="hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-black">
                Diplomat International Plan Page
              </h1>
              <p className="hero-text text-black">
                subtitle here
              </p>
              <ButtonBlack path="/contact" label="Button Text" />
            </div>
            <div className="col-lg-8">
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <div id="your-id-here">
        <Container>
        </Container>
      </div>
    </Layout>
  )
}

export default DiplomatInternationalPage

export const query = graphql`
  query DiplomatInternationalPageQuery {
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
    hero_background: file(name: { eq: "bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
