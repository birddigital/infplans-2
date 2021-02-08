import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'

import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'


interface Props {
  data: IndexQueryQuery
  location: Location
}

const AboutPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="About"/>
      <BackgroundImage
        Tag="section"
        className="hero-section-bg"
        fluid={hero}
        backgroundColor={`#e9f4f8`}
        alt="the body natural"
      >
        <div id="hero-section">
          <Container>
            <div className="col-md-6">
              <h1 className="text-black">
                We Are Synergy
              </h1>
              <p className="hero-text text-black">
                When the right combination of natural health therapies and whole food supplementation comes together to heal the body, we call this synergy.
              </p>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <div id="about-us-section1" className="text-center">
        <Container>
          <div className="col-md-12">
            <h2> Welcome to Synergy Nutrition and Wellness.</h2>
            <p className="hero-text text-black">
              When the right combination of natural health therapies and whole food supplementation comes together to heal the body, we call this synergy.            </p>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    hero: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
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
