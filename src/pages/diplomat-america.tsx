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

const DiplomatAmericaPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Diplomat America Application - Visitors Insurance & Travel Insurance"/>
      <BackgroundImage
        Tag="section"
        className="diplomat-america-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="diplomat america hero background"
      >
        <div id="diplomat-america-hero-section">
          <Container>
            <div className="col-lg-12">
            <h1 className="text-white text-center">
              DIPLOMAT AMERICA
            </h1>
              <p className="text-white text-center">
                Diplomat America plan provides Accident and Sickness medical coverage, Accidental Death and Dismemberment benefits, Travel Assistance for Non-U.S. citizens and Non-U.S. residents traveling to the United States.
              </p>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="diplomat-america-section-1">
       <Container>
        <div className="col-lg-12">
          <div className="diplomat-america-container">
           <h2 className="text-blue text-center">What is Diplomat America Plan</h2>
          <p className="text-center">
            <strong>This plan will cover COVID-19 as a new sickness.</strong> Diplomat America plan provides Accident and Sickness medical coverage, Accidental Death and Dismemberment benefits, Travel Assistance for Non-U.S. citizens and Non-U.S. residents traveling to the United States. This plan is great for international students, business and tourists, study abroad, international exchange students, church or missionary travelers, and more. Coverage for this plan is based on a per day rate. Minimum period of coverage is <strong>15 days</strong> and the maximum period of coverage is <strong>365 days.</strong>
          </p>
         </div>
         </div>
      </Container>
     </section>

     <section id="diplomat-america-section-2">
      <Container>
       <div className="col-lg-12">
         <div className="diplomat-america-container">
          <h2 className="text-blue text-center">Who Should Purchase the Diplomat America</h2>
         <p className="text-center">
          Travel insurance designed to cover Non-U.S. Citizens and Non-U.S. Residents traveling to the United States. This valuable travel protection is ideal for students, business and leisure travelers, study abroad, international exchange students, tourists, holiday travelers, and church or missionary travelers.
         </p>
         <p className="second-content text-center">
          Why do you need international travel Insurance? Nationalized or government sponsored health plans rarely provide adequate medical coverage for injuries or illnesses which occur in the United States. Most travelers are unaware of how expensive medical care is in the United States. Not to mention, that U.S. medical facilities may not recognize insurance provided by a “foreign” insurance company and could deny services or demand up-front payment for treatment.
         </p>
        </div>
        </div>
     </Container>
    </section>

    <section id="diplomat-america-section-3">
      <Container>
        <div className="col-lg-12">
          <h4 className="text-center text-white">Diplomat America Plan Features: </h4>
        </div>
        <div className="col-lg-12">
          <div className="row mt-4">
            <div className="col-lg-6">
              <ul>
                <li className="text-white">Interruption of Trip: $5,000</li>
                <li className="text-white">Loss of Baggage: $50 per article; up to a maximum of $250</li>
                <li className="text-white">Emergency Dental Treatment: $100</li>
                <li className="text-white">Return of Minor Child: $50,000</li>
                <li className="text-white">Accidental Death and Dismemberment: $25,000 (Enhanced Benefit Amounts available) with paralysis and coma, seat belt and airbag, felonious assault and home alteration and vehicle modification benefits.</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
              <li className="text-white">Covers COVID-19 or Coronavirus like a New Sickness</li>
              <li className="text-white">Emergency Medical Evacuation and Repatriation: $500,000</li>
              <li className="text-white">Return of Mortal Remains: $50,000</li>
              <li className="text-white">Emergency Medical Reunion: $50,000</li>
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
         <h3 className="text-blue text-center row-title">Diplomat America Benefits</h3>
          <div className="row diplomat-america-container">
            <div className="col-lg-6">
              <h4 className="text-center">Covered Medical Expenses (All Policies)</h4>
            </div>
            <div className="col-lg-6">
              <h4 className="text-center" >Co-Insurance</h4>
            </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <p className="text-center first-content">After you pay the selected deductible, the plan pays <strong>80% up to $5,000</strong> of eligible costs, then <strong>100% to the Medical Maximum.</strong> There will be an additional $250 deductible for each <strong>emergency room visit as a result of an Illness. The emergency room deductible will be waived if hospital admittance is within 12 hours of the incident.</strong></p>
                <p className="text-center"><strong>Deductible Choices:</strong> $0, $50, $100, $250, $500, $1,000, $2,500, $5000 (per person per policy period).</p>
              <div>
           </div>
         </div>
        </div>
       </div>
      </div>
      </div>
     </Container>
    </section>

    <section id="diplomat-america-section-5">
      <Container>
        <div className="col-lg-12">
         <h3 className="text-blue text-center row-title">Miscellaneous Information</h3>
          <div className="row diplomat-america-container">
            <div className="col-lg-3">
              <h4 className="text-center">Exclusions</h4>
            </div>
            <div className="col-lg-3">
              <h4 className="text-center" >Claims</h4>
            </div>
            <div className="col-lg-3">
              <h4 className="text-center" >Premium Refund / Cancellation</h4>
            </div>
            <div className="col-lg-3">
              <h4 className="text-center" >Accident Death & Dismemberment Benefits</h4>
            </div>

          <div className="col-lg-12">
            <div className="row">
                <p className="text-center">Enhanced AD&D Benefit Rates (Per Person / Month) *Enhanced AD&D amount and additional rate apply to age 18+</p>
              </div>

          <div className="col-lg-12">
            <div className="row mt-4">
              <div className="col-lg-6">
                <ul>
                  <li>$100,000 Total Coverage ................ $6.00</li>
                  <li>$250,000 Total Coverage .................$18.00</li>
                </ul>
              </div>
             <div className="col-lg-6">
                <ul>
                  <li>$750,000 Total Coverage................... $58.00</li>
                  <li>$1,000,000 Total Coverage................. $78.00</li>
                </ul>
            </div>
          </div>
        </div>
        </div>
       </div>
      </div>
     </Container>
    </section>

    <section id="diplomat-america-section-6">
      <Container>
        <div className="col-lg-12">
         <h3 className="text-blue text-center row-title">Enroll in Diplomat America Below</h3>
          <div className="row diplomat-america-container">
            <div className="col-lg-12">
              <h4 className="text-blue text-center">Visitor Application</h4>
              <form>
              <select id="coverage" name="coverage">
                <option value="coverage">Coverage Area</option>
                <option value="coverage">Coverage Area</option>
              </select>
              </form>

              <p className="text-center">Traveller Ages</p>
              <div className="col-lg-12">
              <div className="row">
              <div className="col-lg-6">
              <form>
              <select id="traveller" name="traveller">
                <option value="traveller">Traveller One Range</option>
                <option value="traveller">Traveller One Range</option>
              </select>
              </form>
              </div>

              <div className="col-lg-6">
              <button className="visit-btn"> +Add Traveller </button>
              </div>
              </div>
              </div>

              <form>
              <select id="dependents" name="dependents">
                <option value="dependents">Minor Dependents (0-17)</option>
                <option value="dependents">Minor Dependents (0-17)</option>
              </select>
              </form>

              <p className="text-center">Plan Selection</p>
              <div className="col-lg-12">
              <div className="row">
              <div className="col-lg-6">
              <form>
              <select id="plan" name="plan">
                <option value="plan">Select Plan</option>
                <option value="plan">Select Plan</option>
              </select>
              </form>
              </div>

              <div className="col-lg-6">
              <form>
              <select id="maximum" name="maximum">
                <option value="maximum">Select Policy Maximum</option>
                <option value="maximum">Select Policy Maximum</option>
              </select>
              </form>
              </div>
              </div>
              </div>

              <div className="col-lg-12">
              <div className="row">
              <div className="col-lg-6">
              <form>
              <select id="deductible" name="deductible">
                <option value="deductible">Select Policy Deductible</option>
                <option value="deductible">Select Policy Deductible</option>
              </select>
              </form>
              </div>

              <div className="col-lg-6">
              <form>
              <select id="add" name="add">
                <option value="add">Add (Accidental Death & Dismemberment)</option>
                <option value="add">Add (Accidental Death & Dismemberment)</option>
              </select>
              </form>
              </div>
              </div>
              </div>

              <div className="col-lg-12">
              <div className="row">
              <div className="col-lg-6">
              <button className="visit-btn1"> Reset </button>
              </div>
              <div className="col-lg-6">
              <button className="visit-btn2"> Next </button>
              </div>
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

export default DiplomatAmericaPage

export const query = graphql`
  query DiplomatAmericaPageQuery {
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
    hero_background: file(name: { eq: "diplomat-america-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
