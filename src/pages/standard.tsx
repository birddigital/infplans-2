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
import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown";

interface Props {
  data: IndexQueryQuery
  location: Location
}

const StandardPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid
  const section2_img_right = data.section2_img_right?.childImageSharp?.fluid
  const section2_img_left = data.section2_img_left?.childImageSharp?.fluid
  const book_icon = data.book_icon?.childImageSharp?.fluid
  const cta_bg = data.cta_bg?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="Cost-Effective Insurance for Visitors to USA - INF Visitor Care"/>
      <BackgroundImage
        Tag="section"
        className="standard-hero-section-bg"
        fluid={hero_background}
        alt="standard"
      >
        <div id="standard-hero-section">
          <Container>
            <div className="col-lg-12">
              <h1 className="text-white text-center">
                INF STANDARD IVAS PLAN
              </h1>
              <p className="hero-text text-white text-center">
                The INF Standard IVAS plan is an accident & sickness insurance program for INF members visiting the United States Canada, or Mexico. By enrolling in the INF Elite IVAS Plan, you also become a member of the India Network Foundation.
              </p>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="standard-section1">
        <Container>
          <div className="standard-container">
            <h2 className="text-blue text-center">INF Standard International Visitor Accident & Sickness Insurance (IVAS)</h2>
            <div className="row mt-5">
              <div className="col-lg-8">
                <p className="text-black">The INF Standard IVAS plan is an accident & sickness insurance program for INF members visiting the United States Canada, or Mexico. By enrolling in the INF Elite IVAS Plan, you also become a member of the India Network Foundation*. This plan pays eligible medical expense benefits for covered expenses that result from a covered accident or sickness, as per the terms and conditions listed in the plan.</p>
                <a href="#" className="read-more">READ MORE <FaAngleDoubleDown className="double-arrow-down" /></a>
              </div>
              <div className="col-lg-4">
                <Img fluid={infplans_big_logo} className="big-logo"/>
                <h3 className="text-blue text-center">INF Standard IVAS Plan</h3>
                <button className="row-btn"> Click to Get a Quote </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="standard-section2">
        <Container>
          <div className="col-lg-12">
            <h3 className="text-white text-center">As a member of INF you will also have access to additional Non-Insurance Features when traveling to the USA including:</h3>
          </div>
          <div className="col-lg-12">
            <div className="row mt-5">
              <div className="col-lg-6">
                <ul>
                  <li className="text-white"> Access to a Careington discount program at no additional cost with the INF Standard International Visitor Accident & Sickness Insurance as part of its membership and community service. Careington coordinates this discount program, which provides savings on Dental, Vision, Prescription, & Hearing products & services in the United States. For example, you may see savings of up to 50% for Dental procedures! For more information on benefits of the discount program, please visit our page on the Discount Card Program. This Discount card program is not an insurance product and is not insured by Crum & Forster SPC. This is not insurance.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <Img fluid={section2_img_right} className="section2-img1"/>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row mt-5">
              <div className="col-lg-5">
                <Img fluid={section2_img_left} className="section2-img2"/>
              </div>
              <div className="col-lg-7">
                <ul>
                  <li className="text-white">INF membership also provides access to MeMD- a telehealth feature which allows members to get medical care from the comfort of their own home. While in the United States, MeMD allows members to schedule an appointment with a healthcare provider that is credentialed, certified and highly trained, and typically arrange medical care within 1 hour. The doctor will video or audio chat with you and if required, send a prescription to the nearest pharmacy (note that prescriptions may require out of pocket expense if they are not eligible expenses). MeMD can be used for any non life threatening condition. This is not an insurance product and is not insured by Crum & Forster SPC. MeMD only provides access to and helps arrange the telehealth visits. Any eligible benefits are paid under the terms of the IVAS Standard insurance policy.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="standard-section3">
        <Container>
          <div className="col-lg-12">
            <h2 className="text-blue text-center">INF Standard IVAS Coverages</h2>
            <p className="text-black text-center tab-row-title">*The Standard Plan has no coverage for pre-existing conditions.</p>
            <div className="standard-coverages-tab">
              <input checked="checked" id="standard-coverages-tab1" type="radio" name="standard-coverages" />
              <input id="standard-coverages-tab2" type="radio" name="standard-coverages" />
              <nav>
                <ul>
                  <li className="standard-coverages-tab1">
                    <label for="standard-coverages-tab1">INF Standard IVAS Plan Medical Expense Options  <br/> <span className="text-black age-title">Age 0-69</span></label>
                  </li>
                  <li className="standard-coverages-tab2">
                    <label for="standard-coverages-tab2">INF Standard IVAS Plan Medical Expense Options <br/> <span className="text-black age-title">Age 70-99</span></label>
                  </li>
                </ul>
              </nav>
              <section>
                <div className="standard-coverages-tab1">
                  <p className="text-black text-center tab-row-title">$50,000 Total Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$75</p>
                      <p className="tab-content text-black">$100</p>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500</p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                  <p className="text-black text-center tab-row-title">$100,000 Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$75</p>
                      <p className="tab-content text-black">$100</p>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500</p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                  <p className="text-black text-center tab-row-title">$150,000 Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$75</p>
                      <p className="tab-content text-black">$100</p>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500</p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                </div>
                <div className="standard-coverages-tab2">
                  <p className="text-black text-center tab-row-title">$50,000 Total Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500 </p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                  <p className="text-black text-center tab-row-title">$100,000 Maximum Per Accident or Sickness Expense Benefits</p>
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Deductible Per Covered Accident or Sickness Expense</p>
                      </div>
                      <p className="tab-content text-black">$250</p>
                      <p className="tab-content text-black">$500 </p>
                      <p className="tab-content text-black">$1,000</p>
                      <p className="tab-content text-black">$2,500</p>
                      <p className="tab-content text-black">$5,000</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <section id="standard-section4">
        <Container>
          <div className="col-lg-12">
          <h2 className="text-blue text-center">INF Premier IVAS - Specific Schedule of Benefits </h2>
          <p className="text-black text-center tab-row-title">$100,000 Total Maximum Per Accident or Sickness Expense Benefits</p>

            <div className="standard-benefits1-tab">
              <input checked="checked" id="standard-benefits1-tab1" type="radio" name="standard-benefits1" />
              <input id="standard-benefits1-tab2" type="radio" name="standard-benefits1" />
              <input id="standard-benefits1-tab3" type="radio" name="standard-benefits1" />
              <nav>
                <ul>
                  <li className="standard-benefits1-tab1">
                    <label for="standard-benefits1-tab1">100k Premier | Medical Out-Patient Benefits (Services Rendered Require Less Than 24 Hours Stay)<br/> Age 0-99</label>
                  </li>
                  <li className="premier-benefits1-tab2">
                    <label for="standard-benefits1-tab2">100k Premier  | ​Medical in-Patient Benefits (Services Rendered Require More Than 24 Hours Stay) <br/> Age 0-99</label>
                  </li>
                  <li className="standard-benefits1-tab3">
                    <label for="standard-benefits1-tab3" className="label-content">100k Premier | Other Covered Services <br/> Age 0-99</label>
                  </li>
                </ul>
              </nav>
              <section>
                <div className="standard-benefits1-tab1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Surgical Room & Supply Expenses</p>
                      <p className="tab-content text-black">Hospital Emergency Room</p>
                      <p className="tab-content text-black">Doctor Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">X-rays & Laboratory Procedures</p>
                      <p className="tab-content text-black">CAT Scan, PET Scan, or MRI Scan</p>
                      <p className="tab-content text-black">Prescription Drug Expenses</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $1,100 maximum</p>
                      <p className="tab-content text-black">Up to $500</p>
                      <p className="tab-content text-black">Up to $5,000 maximum</p>
                      <p className="tab-content text-black">Up to $1,250 maximum</p>
                      <p className="tab-content text-black">​Up to $1,250 maximum</p>
                      <p className="tab-content text-black">Up to $100 per visit; subject to 1 visit per day, up to a maximum of 10 visits</p>
                      <p className="tab-content text-black">Up to $650 maximum</p>
                      <p className="tab-content text-black">Up to $650 additional</p>
                      <p className="tab-content text-black">Up to $150 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits1-tab2">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content2 text-black">Hospital Room & Board Charges</p>
                      <p className="tab-content text-black">Hospital Intensive Care Unit Room & Board Charges</p>
                      <p className="tab-content text-black">Doctor Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">Consultation visits when requested by a Doctor</p>
                      <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Charges up to $1,750 per day to a maximum of 30 days</p>
                      <p className="tab-content text-black">Up to an additional $750 maximum per day to a maximum of 8 Days</p>
                      <p className="tab-content text-black">Up to $5,000 maximum</p>
                      <p className="tab-content text-black">Up to $1,250 maximum</p>
                      <p className="tab-content text-black">Up to $1,250 maximum</p>
                      <p className="tab-content text-black">Up to $100 maximum a visit, 1 visit per day, up to a maximum 30 visits</p>
                      <p className="tab-content text-black">Up to $450 maximum</p>
                      <p className="tab-content2 text-black">Up to $1,100 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits1-tab3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Ambulance Expenses</p>
                      <p className="tab-content text-black">Rehabilitative Braces or Appliances</p>
                      <p className="tab-content text-black">Dental Treatment (Injury )</p>
                      <p className="tab-content text-black">Chemotherapy and/or Radiation Therapy</p>
                      <p className="tab-content text-black">Physical & Occupational Therapy: Inpatient and Outpatient</p>
                      <p className="tab-content text-black">Private Duty Nurse</p>
                      <p className="tab-content text-black">Pregnancy or Childbirth (Conception must occur after the actual start of the Trip)</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Other Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $450 maximum</p>
                      <p className="tab-content text-black">Up to $1,100 maximum</p>
                      <p className="tab-content text-black">Up to $500</p>
                      <p className="tab-content text-black">Up to $1,150 maximum</p>
                      <p className="tab-content text-black">Up to $45 per visit max, 1 Visit per day to 12 visits maximum</p>
                      <p className="tab-content text-black">Up to $500 maximum</p>
                      <p className="tab-content2 text-black">Up to $5,000 maximum</p>
                    </div>
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Additional Benefits</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">Emergency Medical Evacuation</p>
                      <p className="tab-content text-black">Repatriation of Remains</p>
                      <p className="tab-content text-black">Accidental Death & Dismemberment</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">Up to $20,000 maximum</p>
                      <p className="tab-content text-black">Up to $15,000 maximum​</p>
                      <p className="tab-content text-black">$25,000 Principal Sum</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
        <Container>
          <div className="col-lg-12 mt-4">
          <p className="text-black text-center tab-row-title">Premier $150,000 Schedule of Benefits</p>

            <div className="standard-benefits2-tab">
              <input checked="checked" id="standard-benefits2-tab1" type="radio" name="standard-benefits2" />
              <input id="standard-benefits2-tab2" type="radio" name="standard-benefits2" />
              <input id="standard-benefits2-tab3" type="radio" name="standard-benefits2" />
              <nav>
                <ul>
                  <li className="standard-benefits2-tab1">
                    <label for="standard-benefits2-tab1">150k Premier | Medical in-Patient Benefits (Services Rendered Require More Than 24 Hours Stay)<br/> Age 0-69</label>
                  </li>
                  <li className="standard-benefits2-tab2">
                    <label for="standard-benefits2-tab2">150k Premier | Medical Out-Patient Benefits (Services Rendered Require Less Than 24 Hours Stay)<br/> Age 0-69</label>
                  </li>
                  <li className="standard-benefits2-tab3">
                    <label for="standard-benefits2-tab3" className="label-content">150k Premier | Other Covered Services<br/> Age 0-69</label>
                  </li>
                </ul>
              </nav>
              <section>
                <div className="standard-benefits2-tab1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Hospital Room & Board Charges</p>
                      <p className="tab-content text-black">Hospital Intensive Care Unit Room & Board Charges</p>
                      <p className="tab-content text-black">Doctors Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">Consultation visits when requested by a Doctor</p>
                      <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $1,900 per day to a maximum of 30 days</p>
                      <p className="tab-content text-black">Up to an additional $850 per day to a maximum of 8 days</p>
                      <p className="tab-content text-black">Up to $6,000 maximum</p>
                      <p className="tab-content text-black">Up to $1,500 maximum</p>
                      <p className="tab-content text-black">Up to $1,500 maximum</p>
                      <p className="tab-content text-black">Up to $125 per visit, 1 visit per day, up to a maximum of 30 visits</p>
                      <p className="tab-content text-black">Up to $500 maximum</p>
                      <p className="tab-content2 text-black">Up to $1,200 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits2-tab2">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Surgical Room and Supply Expenses:</p>
                      <p className="tab-content text-black">Hospital Emergency Room</p>
                      <p className="tab-content text-black">Doctor Surgical Expenses</p>
                      <p className="tab-content text-black">Anesthetics</p>
                      <p className="tab-content text-black">Assistant Surgeon Expenses</p>
                      <p className="tab-content text-black">Doctor Non-Surgical Treatment/Examination Expenses</p>
                      <p className="tab-content text-black">X-rays, laboratory procedures</p>
                      <p className="tab-content text-black">CAT Scan, PET Scan, or MRI</p>
                      <p className="tab-content text-black">Prescription Drug Expenses</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $1,200 maximum</p>
                      <p className="tab-content text-black">Up to $750</p>
                      <p className="tab-content text-black">Up to $6,000 maximum</p>
                      <p className="tab-content text-black">​Up to $1,500 maximum</p>
                      <p className="tab-content text-black">​Up to $1,500 maximum</p>
                      <p className="tab-content text-black">Up to $125 per visit; subject to 1 visit per day, to a maximum of 10 visits</p>
                      <p className="tab-content text-black">Up to $750 maximum</p>
                      <p className="tab-content text-black">Up to an additional $1,000</p>
                      <p className="tab-content text-black">Up to $200 maximum</p>
                    </div>
                  </div>
                </div>
                <div className="standard-benefits2-tab3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Covered Medical Services</p>
                      </div>
                      <p className="tab-content text-black">Ambulance Expenses</p>
                      <p className="tab-content text-black">Rehabilitative Braces or Appliances</p>
                      <p className="tab-content text-black">Dental Treatment (Injury )</p>
                      <p className="tab-content text-black">Chemotherapy and/or Radiation Therapy</p>
                      <p className="tab-content text-black">Physical & Occupational Therapy: Inpatient and Outpatient</p>
                      <p className="tab-content text-black">Private Duty Nurse</p>
                      <p className="tab-content text-black">Pregnancy or Childbirth (Conception must occur after the actual start of the Trip)</p>
                    </div>
                    <div className="col-lg-6">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Other Benefits</p>
                      </div>
                      <p className="tab-content text-black">Up to $500 maximum</p>
                      <p className="tab-content text-black">Up to $1,200 maximum</p>
                      <p className="tab-content text-black">Up to $500</p>
                      <p className="tab-content text-black">Up to $1,250 maximum</p>
                      <p className="tab-content text-black">Up to $50 per visit max, 1 Visit per day up to 12 visits maximum</p>
                      <p className="tab-content text-black">Up to $500 maximum</p>
                      <p className="tab-content2 text-black">Up to $5,500 maximum</p>
                    </div>
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Additional Benefits</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">Emergency Medical Evacuation</p>
                      <p className="tab-content text-black">Repatriation of Remains</p>
                      <p className="tab-content text-black">Accidental Death & Dismemberment</p>
                    </div>
                    <div className="col-lg-6">
                      <p className="tab-content text-black">Up to $20,000 maximum</p>
                      <p className="tab-content text-black">Up to $15,000 maximum​</p>
                      <p className="tab-content text-black">$25,000 Principal Sum</p>
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

export default StandardPage

export const query = graphql`
  query StandardPageQuery {
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
    hero_background: file(name: { eq: "standard-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    infplans_big_logo: file(name: { eq: "infplans-big-logo" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    section2_img_right: file(name: { eq: "standard-section2-img-right" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    section2_img_left: file(name: { eq: "standard-section2-img-left" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    book_icon: file(name: { eq: "book-icon" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    cta_bg: file(name: { eq: "cta-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
