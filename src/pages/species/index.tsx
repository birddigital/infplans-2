import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'

import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import { Link } from 'gatsby'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const Species: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Product" />
      <div id="hero-section">
        <Container>
        </Container>
      </div>
    </Layout>
  )
}

export default Species

export const query = graphql`
  query SpeciesQuery {
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
