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

const DiplomatInternationalPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="INF Visitor Insurance - Visitors Insurance & Travel Insurance"/>
      <BackgroundImage
        Tag="section"
        className="diplomat-international-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="diplomat international hero background"
      >
        <div id="diplomat-international-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                DIPLOMAT INTERNATIONAL
              </h1>
              <p className="text-white text-center">
                Diplomat International plan provides Accident & Sickness medical coverage and Accidental Death & Dismemberment (AD&D) benefits for anyone traveling, living, working or going to school outside their home country, but not to the United States.
              </p>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

    <section id="diplomat-international-section-1">
      <Container>
        <div className="col-lg-12">
         <div className="diplomat-international-container">
           <h2 className="text-blue text-center">What is the Diplomat International Plan</h2>
            <p><strong>This plan will cover COVID-19 as a new sickness.</strong> Our Diplomat International plan provides Accident & Sickness medical coverage and Accidental Death & Dismemberment (AD&D) benefits for anyone traveling, living, working or going to school outside their home country, but not to the United States. This plan also provides Emergency Medical Evacuation & Repatriation, 24-Hour Multilingual Worldwide Assistance Services (U.S. Board Certified Physicians on staff 24/7) and much more. This plan is great for international students, business and tourists, study abroad, international exchange students, church or missionary travelers, and more. Coverage for this plan is based on a per day rate. Minimum period of coverage is <strong>5 days</strong> and the maximum period of coverage is <strong>365 days</strong>.
            </p>
         </div>
        </div>
       </Container>
      </section>

        <section id="diplomat-international-section-2">
          <Container>
          <div className="col-lg-12">
            <div className="diplomat-international-container">
             <h2 className="text-blue text-center">Who Should Purchase the Diplomat International Plan?</h2>
              <p>Travel insurance designed to cover Global Citizens traveling outside their Country except to the United States. This valuable travel protection is ideal for students, business and leisure travelers, study abroad, international exchange students, tourists, holiday travelers, and church or missionary travelers. </p>
              <p>Why do you need international travel Insurance? Nationalized or government sponsored health plans rarely provide adequate medical coverage for injuries or illnesses which occur in the United States. Most travelers are unaware of how expensive medical care is in different parts of the World.</p>
           </div>
          </div>
         </Container>
        </section>

    <section id="diplomat-international-section-3">
      <Container>
        <div className="col-lg-12">
         <h4 className="text-center text-white">Diplomat International Plan Features: </h4>
        </div>
        <div className="col-lg-12">
        <div className="row mt-4">
          <div className="col-lg-6">
            <ul>
              <li className="text-white">Covers COVID-19 or Coronavirus like a New Sickness</li>
              <li className="text-white">Emergency Medical Evacuation and Repatriation: $500,000</li>
              <li className="text-white">Return of Mortal Remains: $50,000</li>
              <li className="text-white">Emergency Medical Reunion: $50,000</li>
              <li className="text-white">Return of Minor Child: $50,000</li>
              <li className="text-white">Interruption of Trip: $5,000</li>
              <li className="text-white">Loss of Baggage: $50 per article; up to a maximum of $250</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
            <li className="text-white">Emergency Dental Treatment: $100</li>
            <li className="text-white">Accidental Death and Dismemberment: $25,000 (Enhanced Benefit Amounts available) with paralysis and coma, seat belt and airbag, felonious assault and home alteration and vehicle modification benefits.</li>
            <li className="text-white">Athletic & Hazardous Activity Benefit Available Political and Natural Disaster Evacuation: $50,000</li>
            </ul>
         </div>
        </div>
      </div>
      <div className="col-lg-12">
       <h4 className="text-center text-white second-title">This plan is designed for:</h4>
      </div>

      <div className="col-lg-12">
      <div className="row mt-4">
      <div className="col-lg-6">
       <ul>
         <li className="text-white">Non-U.S. Citizens visiting the U.S</li>
       </ul>
      </div>
      <div className="col-lg-6">
       <ul>
        <li className="text-white">Parents and relatives visiting the U.S.</li>
       </ul>
      </div>
      </div>
    </div>
    </Container>
   </section>

      <section id="diplomat-america-section-4">
        <Container>
          <div className="col-lg-12">
            <h3 className="text-blue text-center row-title">Diplomat International Benefits</h3>

              <div className="international-tab">
                <input checked="checked" id="international-tabone" type="radio" name="diplomat-international" />
                <input id="international-tabtwo" type="radio" name="diplomat-international" />

                <nav>
                  <ul>
                    <li className="international-tabone">
                      <label for="international-tabone">Covered Medical Expenses (All Policies)</label>
                    </li>
                      <li className="international-tabtwo">
                      <label for="international-tabtwo">Co-Insurance</label>
                    </li>
                  </ul>
                </nav>

                <section>
                  <div className="international-tabone">
                   <div className="col-lg-12">
                    <div className="row">
                      <p className="text-center expenses-content">Expenses that are incurred for medical care and supplies which are: (a) necessary and customary; (b) prescribed by a Physician for the therapeutic treatment of a disablement; (c) are not excluded under the policy; (d) are not more than the Reasonable and Customary charges (as determined by the Company); and (e) are incurred within 365 days for US Citizens or 180 days for Non US Citizens from the date of the disablement will be considered.</p>
                    </div>

                  <div className="col-lg-12">
                    <ul className="medical-expenses">
                      <li>Expenses made by a Hospital for room and board, floor nursing and other services, including Expenses for professional services, except personal services of a non-medical nature, provided, however, that Expenses do not exceed the Hospital’s average charge for semi-private room and board accommodation.</li>
                      <li>Charges made for Intensive Care or Coronary Care charges and nursing services;</li>
                      <li>Expenses made for diagnosis, Treatment and surgery by a Physician.</li>
                      <li>Charges made for an operating room.</li>
                      <li>Charges made for Outpatient Treatment, same as any other Treatment covered on an  Inpatient basis. This includes ambulatory Surgical centers, Physician’s Outpatient visits/examinations, clinic care, and Surgical opinion consultations.</li>
                      <li>Expenses made for administration of anesthetics.</li>
                      <li>Expenses for medication, x-ray services, laboratory tests and services, the use of radium and radio-active isotopes, oxygen, blood transfusions, iron lungs, and medical Treatment.</li>
                      <li>Expenses for physiotherapy, if recommended by a Physician, for the Treatment of a specific Disablement and administered by a licensed physiotherapist; With regards to chiropractic care, eligible charges up to $50.00 per visit, with a maximum of 10 visits.</li>
                      <li>Dressings, drugs, and medicines that are prescribed by a Physician.</li>
                      <li>Hotel room charge, when the insured, otherwise necessarily confined in a Hospital, shall be under the care of a duly qualified  Physician in a hotel room owing to the unavailability of a  Hospital room.</li>
                    </ul>
                  </div>

                  <div className="content-bg">
                    <p className="age">Persons up to age 69 are eligible for all plans;</p>
                    <p className="age">Persons age 70-79 are eligible for plans A and B;</p>
                    <p className="age">Persons age 80+ are limited to $20,000.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Deductible Choices -</strong> $0, $50, $100, $250, $500, $1,000, $2,500, $5000 per person per policy period.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Unexpected Recurrence of a Pre-Existing Condition (U.S. Citizens ) –</strong>  Limited coverage under Your Medical Expense Benefit is provided for Medical Expenses that result from a sudden and unforeseen recurrence of a Pre-existing Condition.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Emergency Medical Evacuation – </strong>  Benefits are paid for Covered Expense incurred up to $500,000 for any covered Injury or Illness that requires immediate transportation from the place where You are located (due to inadequate medical facilities).</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Repatriation –</strong> If it is determined by the Assistance Company and your Physician that it is Medically Necessary for You to return to Your primary place of residence because of an unforeseen Sickness or Injury which is acute or life-threatening, the Transportation Expense incurred within 90 days from the date of the Covered Loss will be paid for Your return to Your Home Country or to a medical facility closest to Your primary place of residence.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Return of Mortal Remains –</strong> If death occurs, Benefits will be paid for Reasonable and Customary Covered Expenses to return Your remains to Your Home Country.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Emergency Medical Reunion –</strong> If it is determined by the Assistance Company and your Physician that it is necessary for You to have an Emergency Medical Evacuation, this Plan will arrange to bring an individual of Your choice, from Your current Home Country, to be at Your side while You are hospitalized and then accompany You during Your return home.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Return of Minor Child(ren) –</strong> Should the Insured Person be traveling alone with a Minor Child(ren) and be hospitalized because of a covered Illness or Injury and Your Minor Child(ren) is left unattended, the Assistance Company will arrange for a one way economy fare(s) to Your current Home Country.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>In Hospital Indemnity (U.S. Citizens ) –</strong> If You are confined to a Hospital as a registered Inpatient as the result of an Illness or Injury which first occurs during Your Period of Coverage and that Illness or Injury is covered under this Plan, this plan will pay benefits up to $100 per day of confinement up to a maximum of 10 days.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Interruption of Trip – </strong> If Your trip is interrupted due to the Death of an Immediate Family Member or serious damage to your residence, benefits will be paid up to $5,000 for the Expense of economy travel less the value of applied credit from an unused return travel ticket to return You home to Your area of principal residence.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Loss of Baggage –</strong> This plan will reimburse You for loss, theft, or damage to Your baggage or personal effects checked with a Common Carrier, after coverage provided by a Common Carrier.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Political and Natural Disaster Evacuation – </strong> Coverage is provided up to $50,000 if the Insured requires emergency evacuation due to situations which place him/her in Imminent Bodily Harm or due to a Natural Disaster.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Emergency Dental Treatment (Accident) –</strong> Benefits are paid for Reasonable and Customary Expense for emergency Dental Treatment to natural teeth.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Emergency Dental Treatment (Palliative) – </strong> Benefits are paid up to $100 for emergency Treatment for the relief of pain to natural teeth.</p>
                  </div>

                  <div className="content-bg">
                    <p>*Some Exclusions Apply*</p>
                  </div>
                  </div>
                  </div>

                <div className="international-tabtwo">
                  <div className="col-lg-12">
                    <p className="text-center"><strong>Accidental Death, Dismemberment, Loss of Sight, and Speech and Hearing –</strong> The amount of the Principal Sum is $25,000 (unless the Enhanced AD&D Benefit is purchased). <strong>Enhanced AD&D Benefit</strong> (If Benefit Purchased) – The Principal Sum is increased from $25,000 to the selected amount not to exceed $1,000,000 of coverage.  The Enhanced AD&D Benefit is not available to children under 18 years of age.</p>

                  <div className="content-bg">
                    <p>If within 365 days after the date of a covered accident, the Insured Person’s Injury results in death or dismemberment, this Plan provides the following benefits for loss of:</p>
                  </div>

                  <table className="first">
                    <tr className="text-center text-white title">
                      <th className="content">Description of Loss</th>
                      <th>Indemnity</th>
                    </tr>

                    <tr className="text-center">
                      <td className="first-content">Life</td>
                      <td className="second-content">Principal Sum</td>
                    </tr>

                    <tr className="text-center">
                      <td className="first-content">Both Hands or Both Feet or Sight of Both Eyes</td>
                      <td className="second-content">Principal Sum</td>
                    </tr>

                    <tr className="text-center">
                      <td className="first-content">One Hand and One Foot</td>
                      <td className="second-content">Principal Sum</td>
                    </tr>

                    <tr className="text-center">
                      <td className="first-content">Either Hand or Foot and Sight of One Eye</td>
                      <td className="second-content">Principal Sum</td>
                    </tr>

                    <tr className="text-center">
                      <td className="first-content">Either Hand or Foot or Sight of One Eye</td>
                      <td className="second-content">One-Half the Principal Sum</td>
                    </tr>
                  </table>

                  <table className="second">
                    <tr className="text-center text-white title">
                      <th>Type of Paralysis (Loss)</th>
                      <th>Indemnity</th>
                    </tr>

                    <tr className="text-center">
                      <td>Quadriplegia</td>
                      <td>$25,000</td>
                    </tr>

                    <tr className="text-center">
                      <td>Paraplegia</td>
                      <td>$18,750</td>
                    </tr>

                    <tr className="text-center">
                      <td>Hemiplegia</td>
                      <td>$12,500</td>
                    </tr>

                    <tr className="text-center">
                      <td>Uniplegia</td>
                      <td>$6,250</td>
                    </tr>
                  </table>

                  <div className="content-bg">
                    <p><strong>Coma Benefit –</strong> If a covered Injury renders an Insured Person Comatose within 90 days of the date of the accident that caused the Injury, and if the Coma continues for a period of 30 consecutive days, The Company will pay a monthly benefit equal to 1% of the maximum amount.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Seat Belt and Airbag Benefit  –</strong> The Company will pay a benefit if the Insured Person suffers accidental death while operating, or riding as a passenger in an Automobile and he/she was wearing a properly fastened seat belt, properly installed by a factory authorized dealer and was positioned in a seat protected by a properly functioning Supplemental Restraint System, properly installed by a factory authorized dealer that inflates on impact.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Felonious Assault Benefit –</strong> The Company will pay a benefit if an Insured Person suffers one or more losses for which benefits are payable under the Accidental Dismemberment Benefit or Coma Benefit provided by the plan as a result of a Felonious Assault.</p>
                  </div>

                  <div className="content-bg">
                    <p><strong>Home Alteration and Vehicle Modification –</strong> The Company will pay Covered Home Alteration and Vehicle Modification Expenses that are incurred within one year after the date of the accident causing such loss(es).</p>
                  </div>

                  <div className="content-bg">
                    <p>*Some Exclusions Apply*</p>
                  </div>
                </div>
                </div>
               </section>
             </div>
          </div>
       </Container>
      </section>

    </Layout>
  )
}

export default DiplomatInternationalPage

export const query = graphql`
  query DiplomatInternationalPageQuery {
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
    hero_background: file(name: { eq: "diplomat-international-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
