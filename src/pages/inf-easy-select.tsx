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

const InsuranceQuotePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="INF Visitor Insurance Quote"/>
      <BackgroundImage
        Tag="section"
        className="quote-hero-section-bg"
        fluid={hero_background}
        alt="quote"
      >
        <div id="quote-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                GET A VISITORS INSURANCE QUOTE
              </h1>
              <p className="hero-text text-white text-center">
                The plans may cover medically necessary testing for COVID-19 in accordance with the plan terms, conditions and exclusions, while the person is in the US.
              </p>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="quote-section-1">
        <Container>
          <div className="col-lg-12">
            <div className="quote-container">
              <h2 className="text-center text-blue">Statement on COVID-19 coverage</h2>
              <h3 className="text-black">Statement on COVID-19 Testing </h3>
              <p className="text-black">
                The plans may cover medically necessary testing for COVID-19 in accordance with the plan terms, conditions and exclusions, while the person is in the US. Medically necessary COVID-19 testing and screening will be covered without any cost-sharing (deductible / copay / coinsurance).
              </p>
              <p className="text-black">
                All cost-sharing for office, urgent care center, laboratory, hospital and emergency room visits will be waived when testing for COVID-19, but only to the extent such items and services relate to the furnishing or administration of such testing or to the evaluation of such individual for purposes of determining the need of such individual for such testing.
              </p>
              <h3 className="text-black">Statement on COVID-19 Treatment </h3>
              <p className="text-black">
                The plans may cover medically necessary treatment for COVID-19 in accordance with the plan terms, conditions and exclusions, while the person is in the US. COVID-19 treatment may be covered in the program as any other eligible sickness.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default InsuranceQuotePage

export const query = graphql`
  query InsuranceQuotePageQuery {
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
    hero_background: file(name: { eq: "quote-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
