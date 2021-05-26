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

     <section id="plans-section-6">
       <Container>
        <div className="col-lg-12">
         <h3 className="text-blue text-center row-title">INF BMI Plans</h3>
          <div className="row plans-container">

          <div class="tabs">
            <input checked="checked" id="tab1" type="radio" name="tabs" />
              <label for="tab1">Benefits That Come With Inf-BMI Plans</label>
              <div class="tab">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12">
                      <ul>
                        <li>COVID-19 Coverage</li>
                        <li>All plans have 100% Co-Insurance (We cover 100%) and NO DEDUCTIBLE</li>
                        <li>We make all the appointments for you- no more hassle of finding a provider who will accept you plan. We do everything on the backend to make sure it's completely cashless.</li>
                      </ul>
                   </div>
                </div>
              </div>
              <div className="bmi-bg">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="text-blue text-center notice">Important Notice</p>
                    <p className="text-center">Vouchers purchased after arrival are subject to a 3-day waiting period for new sickness coverage and 15-day waiting period for COVID-19 Coverage Vouchers must be extended before expiration to avoid waiting period for new sickness coverage.</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <input id="tab2" type="radio" name="tabs" />
           <label for="tab2">COVID-19 Coverage</label>
            <div class="tab">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <ul>
                      <li>The Beneficiary must always and without exception contact the Emergency Central, who in turn will coordinate a virtual appointment by Telemedicine.</li>
                      <li>According to the opinion provided by the Medical Department, if the Beneficiary presents symptoms related to COVID-19, the Assistance Center will coordinate the relevant medical consultation, according to the safety and health protocols of each country.</li>
                      <li>We will cover the expenses incurred up to the coverage limit indicated in the voucher.</li>
                    </ul>
                   </div>

                    <div className="col-lg-12">
                      <p>The following expenses will be covered under the same limit:</p>
                    </div>

                    <div className="col-lg-12">
                      <ul>
                        <li>Hospital Expenses for COVID-19: In case of requiring hospitalization to stabilize the Beneficiary's condition.</li>
                        <li>Mechanical respirator fees: If the Medical Department, together with the treating doctor, considers the use of a mechanical respirator necessary, the Central will authorize and cover said expense</li>
                      </ul>
                    </div>
                 </div>
                </div>
                <div className="bmi-bg">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="text-blue text-center notice">Important Notice</p>
                      <p className="text-center">Vouchers purchased after arrival are subject to a 3-day waiting period for new sickness coverage and 15-day waiting period for COVID-19 Coverage Vouchers must be extended before expiration to avoid waiting period for new sickness coverage.</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <input id="tab3" type="radio" name="tabs" />
                <label className ="text-center" for="tab3">Pre-Existing Conditions Coverage</label>
                <div class="tab">
                <div className="col-lg-12">
                  <p>The coverage provided for chronic and / or pre-existing diseases includes the following eventualities:</p>

                    <ul>
                      <li>Acute episode or unpredictable event</li>
                      <li>Decompensation of</li>

                      <ul>
                        <li>A Chronic issue</li>
                        <li>A Pre-existing diseases known</li>
                        <li>A previously asymptomatic pre-existing condition </li>
                      </ul>
                     </ul>
                 </div>
          <div className="bmi-bg">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <p className="text-blue text-center notice">Important Notice</p>
                <p className="text-center">Vouchers purchased after arrival are subject to a 3-day waiting period for new sickness coverage and 15-day waiting period for COVID-19 Coverage Vouchers must be extended before expiration to avoid waiting period for new sickness coverage.</p>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
      </Container>
    </section>

    <section id="plans-section-7">
      <Container>
       <div className="col-lg-12">
       <div className="plans-container">
        <h2 className="text-blue text-center">Diplomat America</h2>
          <p>Diplomat America Plan Features:</p>
            <ul>
              <li>Covers COVID-19 or Coronavirus like a New Sickness</li>
              <li>Emergency Medical Evacuation and Repatriation: $500,000</li>
              <li>Return of Mortal Remains: $50,000</li>
              <li>Emergency Medical Reunion: $50,000</li>
              <li>Return of Minor Child: $50,000</li>
              <li>Interruption of Trip: $5,000</li>
              <li>Loss of Baggage: $50 per article; up to a maximum of $250</li>
              <li>Emergency Dental Treatment: $100</li>
              <li>Accidental Death and Dismemberment: $25,000 (Enhanced Benefit Amounts available) with paralysis and coma, seat belt and airbag, felonious assault and home alteration and vehicle modification benefits.</li>
              <li>Athletic & Hazardous Activity Benefit Available Political and Natural Disaster Evacuation: $50,000</li>
            </ul>

            <div className="col-lg-12">
              <p>Diplomat America Plan Features:</p>
            </div>

            <div className="col-lg-12">
              <div className="row mt-4">
                <div className="col-lg-6">
                  <ul>
                    <li>Non-U.S. Citizens visiting the U.S</li>
                  </ul>
                  </div>
                  <div className="col-lg-6">
                  <ul>
                    <li>Parents and relatives visiting the U.S.</li>
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
