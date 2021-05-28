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
        <p className="text-center text-white notice">Vouchers purchased after arrival are subject to a 3-day waiting period for new sickness coverage and 15-day waiting period for COVID-19 Coverage</p>
        <p className="text-center text-white notice">Vouchers must be extended before expiration to avoid waiting period for new sickness coverage.</p>
       </div>
     </div>
     </div>
  </Container>
 </section>

 <section id="bmi-travel-section-4">
   <Container>
     <div className="col-lg-12">
       <h3 className="text-blue text-center row-title">BMI Plan 60 days Travel Assistance Cost</h3>

        <table>
          <tr className="text-center text-white">
            <th>Name of the Plan</th>
            <th>Trip Duration (60 days)</th>
            <th>Plan Cost (0-65)</th>
            <th>Plan Cost* (66-74)</th>
            <th>Plan Cost* (75-84)</th>
          </tr>

          <tr className="text-center">
            <td>Classico</td>
            <td>Policy Max $10K</td>
            <td>$151.53</td>
            <td>$151.89</td>
            <td>$455.67</td>
          </tr>

          <tr className="text-center">
            <td>Ultra</td>
            <td>Policy Max: $30K</td>
            <td>$183.00</td>
            <td>$265.35</td>
            <td>$796.05</td>
          </tr>

          <tr className="text-center">
            <td>Ultra Plus</td>
            <td>Policy Max: $60K</td>
            <td>$230.26</td>
            <td>$417.24</td>
            <td>$1,251.72</td>
          </tr>

          <tr className="text-center">
            <td>VIP</td>
            <td>Policy Max: $100K</td>
            <td>$303.40</td>
            <td>$530.70</td>
            <td>$1,592.10</td>
          </tr>

          <tr className="text-center">
            <td>VIP Plus</td>
            <td>Policy Max: $250K</td>
            <td>$425.00</td>
            <td>$730.17</td>
            <td>NA</td>
          </tr>
        </table>

       <p className="text-center">*Quotes are for 61 days to get the optimal pricing.</p>
     </div>
   </Container>
  </section>

  <section id="bmi-travel-section-5">
    <Container>
      <div className="col-lg-12">
        <h3 className="text-blue text-center row-title">Plan Options With Policy Maximums</h3>

        <table>
          <tr className="text-center text-white">
            <th className="option">Coverage Option</th>
            <th>Coverage Limit (No deductible / 100% coverage)</th>
          </tr>

          <tr className="text-center">
            <td className="option">Classico</td>
            <td>$10,000</td>
          </tr>

          <tr className="text-center">
            <td className="option">Ultra</td>
            <td>$30,000</td>
          </tr>

          <tr className="text-center">
            <td className="option">Ultra 50</td>
            <td>$50,000</td>
          </tr>

          <tr className="text-center">
            <td className="option">Ultra Plus</td>
            <td>$60,000</td>
          </tr>

          <tr className="text-center">
            <td className="option">VIP</td>
            <td>$100,000</td>
          </tr>

          <tr className="text-center">
            <td className="option">VIP Plus</td>
            <td>$250,000</td>
          </tr>
        </table>

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
              <li className="conditions">Decompensation of</li>
                <ul>
                  <li>A Chronic issue</li>
                  <li>A Pre-existing diseases known</li>
                  <li>A previously asymptomatic pre-existing condition</li>
                </ul>
            </ul>
          </div>

          <div className="conditions-tab">
            <input checked="checked" id="conditions-tabone" type="radio" name="conditions" />
            <input id="conditions-tabtwo" type="radio" name="conditions" />
            <input id="conditions-tabthree" type="radio" name="conditions" />

            <nav>
              <ul>
                <li className="conditions-tabone">
                  <label for="conditions-tabone">Medical Benefits | $0 Deductible Plans With 100% Coverage</label>
                </li>
               <li className="conditions-tabtwo">
                 <label for="conditions-tabtwo">Travel Assistance Benefits</label>
                </li>
                <li className="conditions-tabthree">
                  <label for="conditions-tabthree">Other Plan Benefits</label>
                 </li>
              </ul>
            </nav>

      <section>
        <div class="conditions-tabone">
          <table>
            <tr className="text-center text-white">
              <th>Benefits</th>
              <th>Classico</th>
              <th>Ultra</th>
              <th>Ultra Plus</th>
              <th>VIP</th>
              <th>VIP Plus</th>
            </tr>

            <tr className="text-center">
              <td>​Medical Assistance for Accident</td>
              <td>​$10,000</td>
              <td>$30,000</td>
              <td>​$60,000</td>
              <td>​$100,000</td>
              <td>​$250,000</td>
            </tr>

            <tr className="text-center">
              <td>​Medical Assistance for Illness</td>
              <td>​$10,000</td>
              <td>$30,000</td>
              <td>​$60,000</td>
              <td>​$100,000</td>
              <td>​$250,000</td>
            </tr>

            <tr className="text-center">
              <td>​Medical Assistance in Case of Pre-Existing Medical Condition</td>
              <td>$300</td>
              <td>$500</td>
              <td>​​$700</td>
              <td>​$2,000</td>
              <td>$6,000</td>
            </tr>

            <tr className="text-center">
              <td>Medical Assistance for COVID-19 up to 64 years old</td>
              <td>Included</td>
              <td>Included</td>
              <td>​Included</td>
              <td>​Included</td>
              <td>​Included</td>
            </tr>

            <tr className="text-center">
              <td>​​Medical Assistance for COVID-19 - 65 to 70 years old country of origin</td>
              <td>​$0</td>
              <td>$30,000</td>
              <td>$30,000</td>
              <td>​$30,000</td>
              <td>​$30,000</td>
            </tr>

            <tr className="text-center">
              <td>​Prescription Drugs</td>
              <td>Included</td>
              <td>Included</td>
              <td>​Included</td>
              <td>​Included</td>
              <td>​Included</td>
            </tr>

            <tr className="text-center">
              <td>​​Dental Emergency</td>
              <td>​$150</td>
              <td>$300</td>
              <td>​$​750</td>
              <td>​$1,500</td>
              <td>​$1,750</td>
            </tr>
          </table>
        </div>
      </section>
        </div>
     </Container>
    </section>

    <section id="bmi-travel-section-7">
      <Container>
        <div className="col-lg-12">
          <h3 className="text-blue text-center row-title">Benefits for BMI Travel Assist</h3>

          <table>
            <tr className="text-center text-white">
              <th>Medical Benefits </th>
              <th>Non-Medical Benefits </th>
            </tr>

            <tr>
              <td>
                <ul className="medical">
                  <li>Medical assistance for accident or illness</li>
                  <li>Medical assistance for COVID-19</li>
                  <li>Prescription drugs</li>
                  <li>Dental emergency</li>
                  <li>​Repatriation or sanitary transfer</li>
                </ul>
              </td>

              <td>
                <ul className="non-medical">
                  <li>Accidental death</li>
                  <li>Repatriation of mortal remains</li>
                  <li>Transportation of family member due to hospitalization</li>
                  <li>Hotel expenses due to convalescence</li>
                  <li>Late arrival</li>
                  <li>Return due to death of family member</li>
                  <li>Early return due to serious disaster at home</li>
                  <li>Lost or delayed luggage</li>
                  <li>Delayed or cancelled flight</li>
                  <li>Theft or loss of passport during a trip</li>
                </ul>
              </td>
            </tr>
         </table>

        </div>
      </Container>
     </section>

     <section id="bmi-travel-section-8">
       <Container>
         <div className="col-lg-12">
           <h3 className="text-blue text-center">Plan Options for Visitors to USA</h3>
           <p className="text-center content">Different plan options according to the type and length of the trip, whether for business, pleasure, studies, and regardless if you travel by air, sea or land.​</p>

           <div className="options-tab">
             <input checked="checked" id="options-tabone" type="radio" name="options" />
             <input id="options-tabtwo" type="radio" name="options" />
             <input id="options-tabthree" type="radio" name="options" />
             <input id="options-tabfour" type="radio" name="options" />
             <input id="options-tabfive" type="radio" name="options" />
             <input id="options-tabsix" type="radio" name="options" />

             <nav>
               <ul>
                 <li className="options-tabone">
                   <label for="options-tabone">Daily Plan</label>
                 </li>
                <li className="options-tabtwo">
                  <label for="options-tabtwo">Family Plan</label>
                 </li>
                 <li className="options-tabthree">
                   <label for="options-tabthree">Student Plan</label>
                  </li>
                  <li className="options-tabfour">
                    <label for="options-tabfour">Extended Stay Plan</label>
                   </li>
                   <li className="options-tabfive">
                     <label for="options-tabfive">Multi-Trip Annual Plan</label>
                    </li>
                    <li className="options-tabsix">
                      <label for="options-tabsix">Corporate Plan</label>
                     </li>
               </ul>
             </nav>

          <section>
            <div className="options-tabone">
            <div className="col-lg-12">
              <ul className="plan-options">
                <li>Offers protection for a single round trip</li>
                <li>Minimum 5 day - Maximum 90 consecutive days of travel</li>
                <li>Pay for the exact days of your trip</li>
              </ul>

              <p>Optional:</p>

              <ul className="plan-options">
                <li>Expectant Mother</li>
                <li>Preexisting Condition</li>
                <li>COVID-19 for people over 70 years old</li>
              </ul>
            </div>
            </div>

            <div className="options-tabtwo">
            <div className="col-lg-12">
              <ul className="plan-options">
                <li>Designed for families consisting of 2 adults (spouses or not) over 21 years old</li>
                <li>Up to 3 children under 21 years of age</li>
                <li>Minimum 5 days - Maximum 90 consecutive days of travel</li>
                <li>Three people minimum purchase for this plan.</li>
              </ul>
            </div>
            </div>

            <div className="options-tabthree">
            <div className="col-lg-12">
              <ul className="plan-options">
                <li>Designed for international students up to 45 years old</li>
                <li>Minimum 4 months - Maximum 12 consecutive months of travel.</li>
              </ul>
            </div>
            </div>

            <div className="options-tabfour">
            <div className="col-lg-12">
              <ul className="plan-options">
                <li>Ideal for parents staying in the USA for long-term pleasure trips</li>
                <li>Minimum two months (60 days)</li>
                <li>Maximum one calendar year (365 consecutive days of travel).</li>
              </ul>
            </div>
            </div>

            <div className="options-tabfive">
            <div className="col-lg-12">
              <ul className="plan-options">
                <li>Ideal if you travel for pleasure multiple times during a calendar year </li>
                <li>Four plan options: Max. 30, 45, 60 or 90 consecutive days of travel.</li>
                <li>​Optional: COVID-19 for people over 70 years old</li>
              </ul>
            </div>
            </div>

            <div className="options-tabsix">
            <div className="col-lg-12">
              <ul className="plan-options">
                <li>Ideal for companies with a large number of travelers</li>
                <li>The plan is pre-purchased from 250 or more days of assistance</li>
                <li>The plan has a validity of 365 days from its purchase</li>
                <li>Self-management platform for better control and distribution of each traveler.</li>
              </ul>
            </div>
            </div>
          </section>
           </div>
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
