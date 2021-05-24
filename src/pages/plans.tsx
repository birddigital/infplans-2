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

const PlansPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const elite_network_img = data.elite_network_img?.childImageSharp?.fluid
  const standard_img = data.standard_img?.childImageSharp?.fluid
  const premier_img = data.premier_img?.childImageSharp?.fluid
  const travel_img = data.travel_img?.childImageSharp?.fluid
  const inf_logo = data.inf_logo?.childImageSharp?.fluid



  return (
    <Layout location={location}>
      <Meta site={meta} title="Insurance for Visitors for Parents visiting USA"/>
      <BackgroundImage
        Tag="section"
        className="plans-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="plans hero background"
      >
      <div id="plans-hero-section">
        <Container>
          <div className="col-lg-12">
          <h1 className="text-white text-center">
            INF PLANS
          </h1>
            <p className="text-white text-center">
              We offer insurance plans for international visitors to the United States, Canada, and Mexico from most countries in the world. You should consider International Visitors Accident and Sickness Insurance when traveling outside your home country- especially when staying for a defined period of time.
            </p>
            <button className="hero-btn"> Get a Quote </button>
          </div>
        </Container>
      </div>
      </BackgroundImage>

      <section id="plans-section-1">
       <Container>
        <div className="col-lg-12">
          <div className="plans-container">
           <h2 className="text-blue text-center">Explore Insurance for Visitors for Visitors to USA</h2>
          <p className="text-center">
            We offer insurance plans for visitors to the United States & Canada from any country in the world.  Insurance for Visitors is a necessity when traveling to the United States- especially when staying for an extended period of time. As medical costs continue to climb, it is important to find an insurance plan which fits your needs. For over 30 years, INF has provided unique and innovative accident & sickness insurance to individuals from across the world visiting the United States & Canada. INF offers Insurance for Visitors which cover all pre-existing conditions, all age groups, and pays all eligible claims. INF Plans also come with come with the option for Careington POS Discount Card (a $99 value) for free! Enjoy Dental, Vision, Prescription, & Hearing Discounts with INF Visitor Insurance.
          </p>
         </div>
         </div>
      </Container>
     </section>

     <section id="plans-section-2">
       <Container>
        <div className="col-lg-12">
        <div className="plans-container">
        <div className="row">
          <div className="col-lg-3">
            <Img fluid={elite_network_img} className="plans-img"/>
            <p className="text-blue text-center sub-title">Elite Network</p>
          </div>

          <div className="col-lg-6">
            <h4>Insurance Benefits underwritten by Crum & Forster, SPC:</h4>
              <ul>
                <li>Short-term travel medical coverage (90 days to 364 days)</li>
                <li>Utilizes Multiplan PPO (including Direct Billing)</li>
                <li>Maximum Limits of $75,000 (Age 70-99), or $150,000, $250,000, and $300,000 (Age 0-69)</li>
                <li>Includes Pre-Existing Condition coverage (see plan details)</li>
                <li>Pre-Existing Conditions Coverage up to $20,000 (Age 70-99) or $25,000 (Age 0-69)</li>
                <li>Coverage for non-US residents ages 0-99 years</li>
              </ul>
            <h4>Non-Insurance Benefits (not associated with Crum & Forster SPC):</h4>
              <ul>
                <li>Telehealth Provided by MeMD (available while visiting the US only)</li>
                <li>Dental, Vision, Hearing, and Prescription Discount coordinated by Careington International (available while visiting the US only)</li>
                <li>Membership in INF ($10 membership fee)</li>
              </ul>
          </div>

          <div className="col-lg-3">
            <Img fluid={inf_logo} className="plans-logo"/>
            <p className="text-center">Elite Network</p>
            <button className="plan-btn">Plan Details </button>
            <button className="get-btn">Get a Quote </button>
          </div>
       </div>
      </div>
     </div>
    </Container>
   </section>

   <section id="plans-section-3">
     <Container>
      <div className="col-lg-12">
      <div className="plans-container">
      <div className="row">
        <div className="col-lg-3">
          <Img fluid={standard_img} className="plans-img"/>
          <p className="text-blue text-center sub-title">Standard</p>
        </div>

        <div className="col-lg-6">
          <h4>Insurance Benefits underwritten by Crum & Forster, SPC:</h4>
            <ul>
              <li>Short-term travel medical coverage (30 days to 364 days)</li>
              <li>Direct Billing may be available from providers</li>
              <li>Maximum Limits of $50,000, $100,000, or $150,000</li>
              <li>Coverage for non-US residents ages 0-99 years</li>
            </ul>
          <h4>Non-Insurance Benefits (not associated with Crum & Forster SPC):</h4>
            <ul>
              <li>Telehealth Provided by MeMD (available while visiting the US only)</li>
              <li>Dental, Vision, Hearing, and Prescription Discounts coordinated by Careington International (available while visiting the US only)</li>
              <li>Membership in INF ($10 membership fee)</li>
            </ul>
        </div>

        <div className="col-lg-3">
          <Img fluid={inf_logo} className="plans-logo"/>
          <p className="text-center">Standard</p>
          <button className="plan-btn">Plan Details </button>
          <button className="get-btn">Get a Quote </button>
        </div>
     </div>
    </div>
   </div>
  </Container>
 </section>

    <section id="plans-section-4">
      <Container>
       <div className="col-lg-12">
       <div className="plans-container">
       <div className="row">
         <div className="col-lg-3">
           <Img fluid={premier_img} className="plans-img"/>
           <p className="text-blue text-center sub-title">Premier</p>
         </div>

         <div className="col-lg-6">
           <h4>Insurance Benefits underwritten by Crum & Forster, SPC:</h4>
             <ul>
               <li>Short-term travel medical coverage (90 days to 364 days)</li>
               <li>Direct Billing may be available from providers</li>
               <li>Maximum Limits of $100,000, or $150,000</li>
               <li>Includes Pre-Existing Condition Coverage (See plan details)</li>
               <li>Pre-Existing Conditions Coverage up to $60,000</li>
               <li>Coverage for non-US residents ages 0-99 years</li>
             </ul>
           <h4>Non-Insurance Benefits (not associated with Crum & Forster SPC):</h4>
             <ul>
               <li>Telehealth Provided by MeMD (available while visiting the US only)</li>
               <li>Dental, Vision, Hearing, and Prescription Discounts coordinated by Careington International (available while visiting the US only)</li>
               <li>Membership in INF ($10 membership fee)</li>
             </ul>
         </div>

         <div className="col-lg-3">
           <Img fluid={inf_logo} className="plans-logo"/>
           <p className="text-center">Premier</p>
           <button className="plan-btn">Plan Details </button>
           <button className="get-btn">Get a Quote </button>
         </div>
      </div>
     </div>
    </div>
   </Container>
  </section>

  <section id="plans-section-5">
    <Container>
     <div className="col-lg-12">
     <div className="plans-container">
     <div className="row">
       <div className="col-lg-3">
         <Img fluid={travel_img} className="plans-img"/>
         <p className="text-blue text-center sub-title">Travel USA</p>
       </div>

       <div className="col-lg-6">
         <h4>Insurance Benefits underwritten by Crum & Forster, SPC:</h4>
           <ul>
             <li>Short-term travel medical coverage (90 days to 364 days)</li>
             <li>Utilizes Multiplan PPO (including Direct Billing)</li>
             <li>Maximum Limits of $75,000 (Age 70-99) or $150,000, $250,000, or $300,000 (Age 0-69)</li>
             <li>Coverage for non-US residents ages 0-99 years</li>
           </ul>
         <h4>Non-Insurance Benefits (not associated with Crum & Forster SPC):</h4>
           <ul>
             <li>Telehealth Provided by MeMD (available while visiting the US only)</li>
             <li>Dental, Vision, Hearing, and Prescription Discounts coordinated by Careington International (available while visiting the US only)</li>
             <li>Membership in INF ($10 membership fee)</li>
           </ul>
       </div>

       <div className="col-lg-3">
         <Img fluid={inf_logo} className="plans-logo"/>
         <p className="text-center">Travel USA</p>
         <button className="plan-btn">Plan Details </button>
         <button className="get-btn">Get a Quote </button>
       </div>
    </div>
   </div>
  </div>
 </Container>
</section>


    </Layout>
  )
}

export default PlansPage

export const query = graphql`
  query PlansPageQuery {
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
    hero_background: file(name: { eq: "plans-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    elite_network_img: file(name: { eq: "elite-network-img" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    standard_img: file(name: { eq: "standard-img" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    premier_img: file(name: { eq: "premier-img" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    travel_img: file(name: { eq: "travel-img" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    inf_logo: file(name: { eq: "inf-logo" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
