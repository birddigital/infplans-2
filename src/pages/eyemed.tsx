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
import EyemedSlider from 'components/sliders/eyemed-slider'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const EyemedPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const secure_img = data.secure_img?.childImageSharp?.fluid
  const privacy_img = data.privacy_img?.childImageSharp?.fluid


  return (
    <Layout location={location}>
      <Meta site={meta} title="Eyemed - Vision Insurance"/>
      <BackgroundImage
        Tag="section"
        className="eyemed-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="eyemed hero background"
      >
        <div id="eyemed-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                EYEMED-VISION INSURANCE
              </h1>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="eyemed-section-2">
        <ContainerFluid>
          <EyemedSlider />
        </ContainerFluid>
      </section>

      <section id="eyemed-section-3">
        <Container>
          <div className="col-lg-12">
            <p className="text-center">Your information is governed by our privacy policy. By entering your name and information above and clicking the Get Quote button, you are consenting to receive a call or emails regarding your Insurance Health, Dental, Vision, Supplement, Medicare Advantage, Medicare Supplement, and Prescription Drug Plan options (at any phone number or email address you provide) from a SASid representative or one of our licensed insurance agent business partners, and you agree such call may use an automatic telephone dialing system or an artificial or prerecorded voice to deliver messages. This agreement is not a condition of enrollment.</p>
            <p className="text-center">SASid, Inc. Agency CA License #0D43589. EyeMed Vision Care & Insurance Services, LLC. Agency CA License #0F30752. Shannon Kennedy, whose principal place of business is in Wisconsin, is licensed to transact insurance business in California under license number #OD43589.</p>

            <Img fluid={secure_img} className="secure-img" />
            <Img fluid={privacy_img} className="privacy-img" />

            <p>Powered by InsuranceTPA.com</p>
            <p className="text-center">Underwritten by Fidelity Security Life Insurance Company and Fidelity Security Life Insurance Company of New York, and administered by First American Administrators and InsuranceTPA.com and serviced by EyeMed. Policy numbers VC-133/VCN-12; form numbers M-9157/M-9159/MN-17/MN-19.</p>
          </div>
        </Container>
      </section>

    </Layout>
  )
}

export default EyemedPage

export const query = graphql`
  query EyemedPageQuery {
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
    hero_background: file(name: { eq: "eyemed-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    secure_img: file(name: { eq: "secure-img" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    privacy_img: file(name: { eq: "privacy-img" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`