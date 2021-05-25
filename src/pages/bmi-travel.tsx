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

const BMITravelPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const bmi_logo = data.bmi_logo?.childImageSharp?.fluid
  const book1_icon = data.book1_icon?.childImageSharp?.fluid
  const book2_icon = data.book2_icon?.childImageSharp?.fluid


  return (
    <Layout location={location}>
      <Meta site={meta} title="INF BMI Travel Assist Plans for Travelers with Pre-Existing Plans"/>
      <BackgroundImage
        Tag="section"
        className="bmi-travel-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="bmi travel hero background"
      >
        <div id="bmi-travel-hero-section">
          <Container>
            <div className="col-lg-12">
            <h1 className="text-white text-center">
                INF BMI INSURANCE
              </h1>
              <p className="text-white text-center">
                INF-BMI plans provide assistance for international trips with no deductible or copayments and provides coverage for full pre-existing conditions, acute onset of pre-existing conditions, and COVID-19 as per the limits in the policy.
              </p>
              <button className="hero-btn"> Get a Quote </button>
            </div>
            <div className="col-lg-8">
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="bmi-travel-section-1">
       <Container>
        <div className="col-lg-12">
          <div className="bmi-travel-container">
           <h2 className="text-blue text-center">What is INF-BMI Travel Assist?</h2>
           <div className="row mt-4">
         <div className="col-lg-8">
          <p>INF-BMI plans provide assistance for international trips with no deductible or copayments and provides coverage for full pre-existing conditions, acute onset of pre-existing conditions, and COVID-19 as per the limits in the policy.</p>
          <p>INF recommends enrolling in the Ultra Plus, VIP, VIP Plus- which provides comprehensive coverage for pre-existing, acute onset of pre-existing conditions, and COVID-19. INF-BMI plans can provide these innovative visitor insurance options.</p>
         </div>
          <div className="col-lg-4">
            <Img fluid={bmi_logo} className="bmi-logo"/>
            <p className="text-blue text-center sub-title">INF BMI Travel Brochure</p>
            <button className="inf-btn"> Click to Get a Quote </button>
          </div>
      </div>
    </div>
    </div>
  </Container>
  </section>

  <section id="bmi-travel-section-2">
    <Container>
      <div className="col-lg-12">
        <h4 className="text-center text-white">Benefits that come with INF-BMI Plans</h4>
              <ul>
                <li className="text-white">COVID-19 Coverage</li>
                <li className="text-white">All plans have 100% Co-Insurance (We cover 100%) and NO DEDUCTIBLE</li>
                <li className="text-white">We make all the appointments for you- no more hassle of finding a provider who will accept you plan. We do everything on the backend to make sure it's completely cashless.</li>
                <li className="text-white">We provide all members with free Careington 500 Dental Plan ($100 value). Just send your voucher number to support[at]infplans.com with a request and we will issue you a dental card at no cost!</li>
              </ul>
       </div>
    </Container>
  </section>

  <section id="bmi-travel-section-3">
   <Container>
    <div className="col-lg-12">
    <div className="bmi-travel-container">
       <h2 className="text-blue text-center">COVID-19 Coverage</h2>
       <ul>
         <li>The Beneficiary must always and without exception contact the Emergency Central, <strong>Who in turn will coordinate a virtual appointment by Telemedicine</strong></li>
         <li>According to the opinion provided by the Medical Department, if the Beneficiary presents symptoms related to COVID-19, the Assistance Center will coordinate the relevant medical consultation, according to the safety and health protocols of each country</li>
         <li>We will cover the expenses incurred up to the coverage limit indicated in the voucher.</li>
         <li>The following expenses will be covered under the same limit:</li>
            <ul>
            <li><strong>Hospital Expenses for COVID-19:</strong> In case of requiring hospitalization to stabilize the Beneficiary's condition.</li>
            <li><strong>Mechanical respirator fees:</strong> If the Medical Department, together with the treating doctor, considers the use of a mechanical respirator necessary, the Central will authorize and cover said expense</li>
            </ul>
       </ul>

       <div className="blue-bg">
        <p className="text-center text-white">**Important Notice**</p>
        <p className="text-center text-white">Vouchers purchased after arrival are subject to a 3-day waiting period for new sickness coverage and 15-day waiting period for COVID-19 Coverage</p>
        <p className="text-center text-white">Vouchers must be extended before expiration to avoid waiting period for new sickness coverage.</p>
       </div>
     </div>
     </div>
  </Container>
 </section>

 <section id="bmi-travel-section-4">
   <Container>
     <div className="col-lg-12">
       <h3 className="text-blue text-center row-title">BMI Plan 60 days Travel Assistance Cost</h3>
       <p className="text-center">*Quotes are for 61 days to get the optimal pricing.</p>
     </div>
   </Container>
  </section>

  <section id="bmi-travel-section-5">
    <Container>
      <div className="col-lg-12">
        <h3 className="text-blue text-center row-title">Plan Options With Policy Maximums</h3>
      </div>
    </Container>
   </section>

   <section id="bmi-travel-section-6">
     <Container>
       <div className="col-lg-12">
         <h3 className="text-blue text-center row-title">Pre-Existing Conditions Coverage</h3>
          <p>The coverage provided for chronic and / or pre-existing diseases includes the following eventualities:</p>
            <ul>
              <li>Acute episode or unpredictable event</li>
              <li>Decompensation of</li>
                <ul>
                  <li>A Chronic issue</li>
                  <li>A Pre-existing diseases known</li>
                  <li>A previously asymptomatic pre-existing condition</li>
                </ul>
            </ul>
       </div>
     </Container>
    </section>

    <section id="bmi-travel-section-7">
      <Container>
        <div className="col-lg-12">
          <h3 className="text-blue text-center row-title">Benefits for BMI Travel Assist</h3>
        </div>
      </Container>
     </section>

     <section id="bmi-travel-section-8">
       <Container>
         <div className="col-lg-12">
           <h3 className="text-blue text-center row-title">Plan Options for Visitors to USA</h3>
           <p className="text-center">Different plan options according to the type and length of the trip, whether for business, pleasure, studies, and regardless if you travel by air, sea or land.​</p>
         </div>
       </Container>
      </section>

      <section id="bmi-travel-section-9">
        <Container>
          <div className="col-lg-12">
            <h3 className="text-blue text-center row-title">Related Articles</h3>
          </div>

          <div className="col-lg-12">
           <div className="row">
            <div className="col-lg-6">
             <h4 className="text-center">What is Full Pre-Existing Coverage?</h4>
              <Img fluid={book1_icon} className="book-icon"/>
              <button className="read-btn">Read Now</button>
             </div>
           <div className="col-lg-6">
             <h4 className="text-center">How is a Pre-Existing Condition Determined?</h4>
             <Img fluid={book2_icon} className="book-icon"/>
             <button className="read-btn">Read Now</button>
           </div>
          </div>
          </div>
        </Container>
       </section>


    </Layout>
  )
}

export default BMITravelPage

export const query = graphql`
  query BMITravelPageQuery {
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
    hero_background: file(name: { eq: "bmi-travel-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bmi_logo: file(name: { eq: "bmi-logo" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    book1_icon: file(name: { eq: "book1-icon" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    book2_icon: file(name: { eq: "book2-icon" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
