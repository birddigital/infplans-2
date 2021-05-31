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

const FAQPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Frequently Asked Questions about Insurance for Visitors"/>
      <BackgroundImage
        Tag="section"
        className="faqs-hero-section-bg"
        fluid={hero_background}
        alt="faqs"
      >
        <div id="faqs-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INSURANCE FOR VISITORS FAQS
              </h1>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

    <section id="faqs-section1">
      <Container>
        <div className="col-lg-12">
          <div className="faqs-container">
            <h2 className="text-blue text-center">Frequently Asked Questions about Insurance for Visitors</h2>
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">INF Visitor Insurance FAQ</h4>
                    <p className="faqs-section1-content">Learn the Basics of Insurance for Visitors</p>
                    <button className="faqs-section1-btn"> Learn More </button>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">How to use Insurance Visitors</h4>
                    <p className="faqs-section1-content">Learn how to properly use Insurance for Your Visitor</p>
                    <button className="faqs-section1-btn"> Learn More </button>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">Use the Plan Finder Tool</h4>
                    <p className="faqs-section1-content">Use our Plan Finder Tool to select the perfect plan for your family</p>
                    <button className="faqs-section1-btn"> Learn More </button>
                  </div>
                </div>
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">Health Tips for Travelers</h4>
                    <p className="faqs-section1-content">Some quick tips on how to ensure the safety of your visitors</p>
                    <button className="faqs-section1-btn"> Learn More </button>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="faqs-section1-column text-center">
                    <h4 className="faqs-section1-title">Insurance Features for Visitors</h4>
                    <p className="faqs-section1-content">Read about our plan features to help you choose the right plan.</p>
                    <button className="faqs-section1-btn"> Learn More </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="faqs-section2">
        <Container>
          <div className="col-lg-12">
            <h4 className="text-center text-white">Learn about INF Plans</h4>
          </div>
          <div className="col-lg-12">
            <div className="row mt-4">
              <div className="col-lg-6">
                <ul>
                  <Link to="/"><li className="text-white">INF Standard Plan - FAQ</li></Link>
                  <Link to="/"><li className="text-white">INF Premier Plan - FAQ</li></Link>
                  <Link to="/"><li className="text-white">INF Elite Network Plan - FAQ</li></Link>
                  <Link to="/"><li className="text-white">INF TripShield International </li></Link>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <Link to="/"><li className="text-white">INF SelectCare Plan - FAQ</li></Link>
                  <Link to="/"><li className="text-white">INF Choice Plan - FAQ</li></Link>
                  <Link to="/"><li className="text-white">INF Advantage Plan - FAQ</li></Link>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="faqs-section3">
        <Container>
          <div className="col-lg-12">
            <div className="faqs-container">
              <h2 className="text-blue text-center">Insurance for Visitors Topics of Interest</h2>
              <div className="col-lg-12">
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <ul>
                      <Link to="/"><li className="text-black">Visitor Accident & Sickness Insurance for Green Card holders</li></Link>
                      <Link to="/"><li className="text-black">Visitor Accident & Sickness Insurance for Visitors with USA with Pre-Existing Conditions</li></Link>
                      <Link to="/"><li className="text-black">Medical Insurance for Visitors to USA from India</li></Link>
                      <Link to="/"><li className="text-black">Top tips for Traveling Seniors</li></Link>
                      <Link to="/"><li className="text-black">Tourist Health Insurance for USA Travel</li></Link>
                      <Link to="/"><li className="text-black">How to deal with denied travel insurance claims</li></Link>
                      <Link to="/"><li className="text-black">Visitor Medical Insurance for USA Travel</li></Link>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <Link to="/"><li className="text-black">Green Card Insurance for Parents</li></Link>
                      <Link to="/"><li className="text-black">Best Insurance for Visitors for Seniors</li></Link>
                      <Link to="/"><li className="text-black">Medical Insurance for Green Card Holders</li></Link>
                      <Link to="/"><li className="text-black">Top Insurnace for Visitors Reviews </li></Link>
                      <Link to="/"><li className="text-black">Travel Insurance for Visitors Above 80 years</li></Link>
                      <Link to="/"><li className="text-black">Travel Insurance options for Seniors & Elderly Visitors</li></Link>
                      <Link to="/"><li className="text-black">Insurance for Visitors Options for Seniors</li></Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="faqs-section4">
        <Container>
          <div className="col-lg-12">
            <h4 className="text-center text-white">Pre-Existing Condition Insurance for Visitors​</h4>
          </div>
          <div className="col-lg-12">
            <div className="row mt-4">
              <div className="col-lg-6">
                <ul>
                  <Link to="/"><li className="text-white">Insurance for Visitors: Difference betweeen Acute Onet & Full Pre-Ex</li></Link>
                  <Link to="/"><li className="text-white">Full Pre-Existing Insurance FAQ</li></Link>
                  <Link to="/"><li className="text-white">Pre-Existing Conditions: What is Covered by Insurance for Visitors?</li></Link>
                  <Link to="/"><li className="text-white">Differences between Acute Onset & Full Pre-Existing Coverage </li></Link>
                  <Link to="/"><li className="text-white">Insurance for Visitors with Pre-Existing Conditions</li></Link>
                  <Link to="/"><li className="text-white">Full Pre-Existing Insurance for Visitors</li></Link>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <Link to="/"><li className="text-white">Pre-Existing Condition Coverage: What is Acute Onset?</li></Link>
                  <Link to="/"><li className="text-white">Pre-Existing Coverage Plans for Non-US Citizens</li></Link>
                  <Link to="/"><li className="text-white">How are Pre-Existing Conditions Determined?</li></Link>
                  <Link to="/"><li className="text-white">INF vs Acute Onset Plans</li></Link>
                  <Link to="/"><li className="text-white">What is "Real Pre-Existing Coverage"?</li></Link>
                  <Link to="/"><li className="text-white">Full Pre-Existing Insurance for Visitors Options</li></Link>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="faqs-section5">
        <Container>
          <div className="col-lg-12">
            <div className="faqs-container">
              <h2 className="text-blue text-center">Frequently Asked Questions</h2>
              <div className="col-lg-12">
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <ul>
                      <Link to="/"><li className="text-black">Insurance for Visitors for Parents</li></Link>
                      <Link to="/"><li className="text-black">Which Doctor Can I Visit?</li></Link>
                      <Link to="/"><li className="text-black">Why Should I enroll in Insurance for Visitors from the US?​</li></Link>
                      <Link to="/"><li className="text-black">What will I need to complete my Insurance for Visitors Application?</li></Link>
                      <Link to="/"><li className="text-black">What is Visitor Medical Insurance?</li></Link>
                      <Link to="/"><li className="text-black">Limited vs. Comprehensive</li></Link>
                      <Link to="/"><li className="text-black">Top 5 Reasons to ask when Purchasing Insurance for Visitors</li></Link>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <Link to="/"><li className="text-black">Why do I need to file a Insurance for Visitors Claim?</li></Link>
                      <Link to="/"><li className="text-black">How do I file a Insurance for Visitors Claim?</li></Link>
                      <Link to="/"><li className="text-black">Dental Discount Coverage Provided by Careington</li></Link>
                      <Link to="/"><li className="text-black">Insurance for Visitors Terminology </li></Link>
                      <Link to="/"><li className="text-black">Why INF Visitor Insurance?</li></Link>
                      <Link to="/"><li className="text-black">What is the best Insurance for Visitors?</li></Link>
                    </ul>
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

export default FAQPage

export const query = graphql`
  query FAQPageQuery {
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
    hero_background: file(name: { eq: "faqs-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
