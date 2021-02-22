import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { Link } from 'gatsby'
import React from 'react'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import styled from 'styled-components'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import ButtonBlack from 'components/button/button-black'

interface Props {
  location: Location
}

const AboutPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="About" />
      <BackgroundImage
        Tag="section"
        className="hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="the body natural"
      >
        <div id="hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-black">
                Your Title Here
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

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
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
