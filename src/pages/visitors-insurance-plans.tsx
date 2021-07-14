import React, { useState, useEffect } from 'react'
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
import { Helmet } from 'react-helmet'


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
  const standard_popup_logo = data.standard_popup_logo?.childImageSharp?.fluid
  const book_icon = data.book_icon?.childImageSharp?.fluid
  const [popupStatus, setPopupStatus] = useState(false);
  const [popupNumber, setPopupNumber] = useState(1);
  const [popupReady, setPopupReady] = useState(false);

  function openModal() {
    setPopupStatus(true);
    setPopupReady(true);
    setPopupNumber(1);
  }

  function closeModal() {
    setPopupStatus(false);
    setPopupNumber(0);
    setPopupReady(false);
  }

  return (
    <Layout location={location}>
      <Helmet>
        <title>Insurance for Visitors for Parents visiting USA</title>
        <meta name="description" content="Insurance for Visitors for Visitors to USA. Insurance for Visitors for Parents to USA"/>
        <meta name="keywords" content="Insurance for Visitors, visitor insurance, travel insurance, travel medical insurance, visitor medical insurance"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
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
          <Link to="/inf-easy-select">
            <button className="hero-btn"> Get a Quote </button>
          </Link>
          </div>
        </Container>
      </div>
      </BackgroundImage>

      <section id="plans-section-1">
       <Container>
        <div className="col-lg-12">
          <div className="plans-container">
           <h2 className="text-blue text-center">Explore Insurance for Visitors </h2>
          <p className="text-center">
            We offer insurance plans for international visitors to the United States, Canada, and Mexico from most countries in the world. You should consider International Visitors Accident and Sickness Insurance when traveling outside your home country- especially when staying for a defined period of time. It is important to find an insurance plan which fits your needs. For over 30 years, INF has provided unique and innovative accident & sickness insurance to individuals from across the world visiting the United States, Canada, and Mexico.
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
        <div class="box">
          <div class="ribbon ribbon-top-left">
            <span>Most Popular</span>
          </div>
        </div>
          <div className="col-lg-3">
            <Img fluid={elite_network_img} className="plans-img"/>
            <p className="text-blue text-center sub-title">Elite Network</p>
          </div>

          <div className="col-lg-6">
            <h4>Insurance Benefits underwritten by Crum & Forster, SPC:</h4>
              <ul>
                <li>Short-term travel medical coverage (90 days to 364 days)</li>
                <li>Utilizes UnitedHealthcare Options PPO (including Direct Billing)</li>
                <li>Maximum Limits of $75,000 (Age 70-99), or $150,000, $250,000, and $300,000 (Age 0-69)</li>
                <li>Includes Pre-Existing Condition coverage (see plan details)</li>
                <li>Pre-Existing Conditions Coverage up to $20,000 (Age 70-99) or $25,000 (Age 0-69)</li>
                <li>Coverage for non-US residents ages 0-99 years</li>
              </ul>
            <h4>Non-Insurance Benefits (not associated with Crum & Forster SPC):</h4>
              <ul>
                <li>Telehealth Provided by MDLive (available while visiting the US only)</li>
                <li>Dental, Vision, Hearing, and Prescription Discount coordinated by Careington International (available while visiting the US only)</li>
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
              <li>Telehealth Provided by MDLive (available while visiting the US only)</li>
              <li>Dental, Vision, Hearing, and Prescription Discounts coordinated by Careington International (available while visiting the US only)</li>
            </ul>
        </div>

        <div className="col-lg-3">
          <Img fluid={inf_logo} className="plans-logo"/>
          <p className="text-center">Standard</p>
            <button className="plan-btn">Plan Details</button>
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
               <li>Telehealth Provided by MDLive (available while visiting the US only)</li>
               <li>Dental, Vision, Hearing, and Prescription Discounts coordinated by Careington International (available while visiting the US only)</li>
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
             <li>Utilizes UnitedHealthcare Options PPO (including Direct Billing)</li>
             <li>Maximum Limits of $75,000 (Age 70-99) or $150,000, $250,000, or $300,000 (Age 0-69)</li>
             <li>Coverage for non-US residents ages 0-99 years</li>
           </ul>
         <h4>Non-Insurance Benefits (not associated with Crum & Forster SPC):</h4>
           <ul>
             <li>Telehealth Provided by MDLive (available while visiting the US only)</li>
             <li>Dental, Vision, Hearing, and Prescription Discounts coordinated by Careington International (available while visiting the US only)</li>
           </ul>
       </div>

       <div className="col-lg-3">
         <Img fluid={inf_logo} className="plans-logo"/>
         <p className="text-center">Traveler USA</p>
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
          <div class="container py-4">
             <div class="row">
                 <div class="col-md-12">
                     <div class="d-flex">
                         <ul id="tabsJustified" class="nav nav-pills flex-column">
                           <Img fluid={standard_popup_logo} className="popup-logo"/>
                             <li class="nav-item"><a href="#ivas-coverage"  data-toggle="tab" id="ivas-coverage" class="nav-link small active" aria-controls="ivas-coverage" aria-selected="true">INF Standard IVAS Coverages</a></li>
                             <li class="nav-item"><a href="#ivas-benefits"  data-toggle="tab" id="ivas-benefits" class="nav-link small" aria-controls="ivas-coverage" aria-selected="false">INF Standard IVAS Schedule of Benefits</a></li>
                             <li class="nav-item"><a href="#ivas-description"  data-toggle="tab" id="ivas-description" class="nav-link small" aria-controls="ivas-coverage" aria-selected="false">INF Standard IVAS Plan Description</a></li>
                         </ul>
                         <div class="tab-content p-3 w-100">
                           <button type="button" className="close" data-dismiss="modal">&times;</button>
                             <div id="ivas-coverage" class="tab-pane fade active show" role="tabpanel" aria-labelledby="ivas-coverage">
                             <div class="tabcontent">
                             <div className="col-lg-12 ivas-standard">
                               <h2 className="text-blue text-center">INF Standard IVAS Coverages</h2>
                               <p className="text-black text-center tab-row-title">*The Standard Plan has no coverage for pre-existing conditions.</p>
                               <div className="coverages-tab">
                                 <input checked="checked" id="coverages-tabone" type="radio" name="standard-coverages" />
                                 <input id="coverages-tabtwo" type="radio" name="standard-coverages" />
                                 <nav>
                                   <ul>
                                     <li className="coverages-tabone">
                                       <label for="coverages-tabone">INF Standard IVAS Plan Medical Expense Options  <br/> <span className="text-black age-title">Age 0-69</span></label>
                                     </li>
                                     <li className="coverages-tabtwo">
                                       <label for="coverages-tabtwo">INF Standard IVAS Plan Medical Expense Options <br/> <span className="text-black age-title">Age 70-99</span></label>
                                     </li>
                                   </ul>
                                 </nav>
                                 <section>
                                   <div className="coverages-tabone">
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
                                   <div className="coverages-tabtwo">
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
                             </div>
                             </div>

                             <div id="ivas-benefits" class="tab-pane fade show" role="tabpanel" aria-labelledby="ivas-benefits">
                             <div class="tabcontent">
                             <div className="col-lg-12 ivas-standard">
                             <h2 className="text-blue text-center">INF Standard IVAS Schedule of Benefits </h2>
                             <p className="text-black text-center tab-row-title">$50,000 Policy Max</p>

                               <div className="ivas-in-tab">
                                 <input checked="checked" id="ivas-in-tabone" type="radio" name="ivas in benefits" />
                                 <input id="ivas-in-tabtwo" type="radio" name="ivas in benefits" />
                                 <input id="ivas-in-tabthree" type="radio" name="ivas in benefits" />
                                 <nav>
                                   <ul>
                                     <li className="ivas-in-tabone">
                                       <label for="ivas-in-tabone">In-Patient Services</label>
                                     </li>
                                     <li className="ivas-in-tabtwo">
                                       <label for="ivas-in-tabtwo">Out-Patient Services</label>
                                     </li>
                                     <li className="ivas-in-tabthree">
                                       <label for="ivas-in-tabthree">Other Benefits</label>
                                     </li>
                                   </ul>
                                 </nav>
                                 <section>
                                   <div className="ivas-in-tabone">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Hospital Room & Board</p>
                                         <p className="tab-content1 text-black">Hospital Intensive Care Unit Room & Board</p>
                                         <p className="tab-content2 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content2 text-black">Anesthetics</p>
                                         <p className="tab-content2 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content3 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content4 text-black">Consultation visits when requested by a Doctor</p>
                                         <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content text-black">Charges up to $1,300 per day maximum<br /> Up to 30 days</p>
                                         <p className="tab-content3 text-black">Up to an additional $525 maximum additional per day | Up to 8 Days</p>
                                         <p className="tab-content2 text-black">Up to $3,000 maximum</p>
                                         <p className="tab-content2 text-black">Up to $750 maximum</p>
                                         <p className="tab-content2 text-black">​Up to $750 maximum</p>
                                         <p className="tab-content3 text-black">Up to $60 maximum per visit, 1 visit per day, to 30 visits</p>
                                         <p className="tab-content1 text-black">Up to $400 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,000 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-in-tabtwo">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Surgical Room & Supply Expenses</p>
                                         <p className="tab-content1 text-black">Hospital Emergency</p>
                                         <p className="tab-content1 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content1 text-black">Anesthetics</p>
                                         <p className="tab-content1 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content2 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content1 text-black">X-rays & laboratory procedures</p>
                                         <p className="tab-content1 text-black">CAT Scan, PET Scan, or MRI</p>
                                         <p className="tab-content1 text-black">Prescription Drug Expenses</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $1,000 maximum</p>
                                         <p className="tab-content1 text-black">Up to $350</p>
                                         <p className="tab-content1 text-black">Up to $3,000 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $750 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $750 maximum</p>
                                         <p className="tab-content text-black">Up to $60 per visit maximum | 1 visit per day <br />Up to 10 visits</p>
                                         <p className="tab-content1 text-black">Up to $400 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $400 additional</p>
                                         <p className="tab-content1 text-black">Up to $100 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-in-tabthree">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Ambulance Expenses</p>
                                         <p className="tab-content1 text-black">Rehabilitative Braces or Appliances</p>
                                         <p className="tab-content2 text-black">Dental Treatment (Injury )</p>
                                         <p className="tab-content1 text-black">Chemotherapy and/or Radiation Therapy</p>
                                         <p className="tab-content2 text-black">Physical & Occupational Therapy</p>
                                         <p className="tab-content1 text-black">Private Duty Nurse</p>
                                         <p className="tab-content text-black">Pregnancy or Childbirth (Conception must Occur After Trip Begins)</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Other Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $400 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,000 maximum</p>
                                         <p className="tab-content text-black">​Up to $450. There are no benefits for dental services for immediate relief of pain.</p>
                                         <p className="tab-content1 text-black">Up to $1,000 maximum</p>
                                         <p className="tab-content text-black">Up to $35 per visit max, 1 Visit per day to 12 visits</p>
                                         <p className="tab-content1 text-black">Up to $400 maximum</p>
                                         <p className="tab-content3 text-black">Up to $4,500 maximum</p>
                                       </div>
                                       <div className="column-tab additional-benefits">
                                         <p className="text-white column-tab-title">Additional Benefits</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">Emergency Medical Evacuation Benefit</p>
                                         <p className="tab-content1 text-black">Repatriation of Remains Benefit</p>
                                         <p className="tab-content1 text-black">Accidental Death & Dismemberment</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">$15,000 maximum</p>
                                         <p className="tab-content1 text-black">$10,000 maximum​</p>
                                         <p className="tab-content1 text-black">$25,000 Principal Sum</p>
                                       </div>
                                     </div>
                                   </div>
                                 </section>
                               </div>
                             </div>

                             <div className="col-lg-12 mt-4 ivas-standard">
                             <p className="text-black text-center tab-row-title">$100,000 Policy Max</p>

                               <div className="ivas-out-tab">
                                 <input checked="checked" id="ivas-out-tabone" type="radio" name="ivas out benefits" />
                                 <input id="ivas-out-tabtwo" type="radio" name="ivas out benefits" />
                                 <input id="ivas-out-tabthree" type="radio" name="ivas out benefits" />
                                 <nav>
                                   <ul>
                                     <li className="ivas-out-tabone">
                                       <label for="ivas-out-tabone">In-Patient Services</label>
                                     </li>
                                     <li className="ivas-out-tabtwo">
                                       <label for="ivas-out-tabtwo">Out-Patient Services</label>
                                     </li>
                                     <li className="ivas-out-tabthree">
                                       <label for="ivas-out-tabthree">Other Benefits</label>
                                     </li>
                                   </ul>
                                 </nav>
                                 <section>
                                   <div className="ivas-out-tabone">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Hospital Room & Board</p>
                                         <p className="tab-content1 text-black">Hospital Intensive Care Unit Room & Board</p>
                                         <p className="tab-content2 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content2 text-black">Anesthetics</p>
                                         <p className="tab-content2 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content3 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content4 text-black">Consultation visits when requested by a Doctor</p>
                                         <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content text-black">Charges up to $1,750 per day maximum<br /> Up to 30 days</p>
                                         <p className="tab-content3 text-black">Up to an additional $750 per day <br />Up to 8 Days</p>
                                         <p className="tab-content2 text-black">Up to $5,000 maximum</p>
                                         <p className="tab-content2 text-black">Up to $1,250 maximum</p>
                                         <p className="tab-content2 text-black">Up to $1,250 maximum</p>
                                         <p className="tab-content3 text-black">Up to $100 maximum per visit, 1 visit per day, to 30 visits</p>
                                         <p className="tab-content1 text-black">Up to $450 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,100 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-out-tabtwo">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Surgical Room & Supply Expenses</p>
                                         <p className="tab-content1 text-black">Hospital Emergency</p>
                                         <p className="tab-content1 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content1 text-black">Anesthetics</p>
                                         <p className="tab-content1 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content2 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content1 text-black">X-rays & laboratory procedures</p>
                                         <p className="tab-content1 text-black">CAT Scan, PET Scan, or MRI</p>
                                         <p className="tab-content1 text-black">Prescription Drug Expenses</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $1,100 maximum</p>
                                         <p className="tab-content1 text-black">Up to $500</p>
                                         <p className="tab-content1 text-black">Up to $5,000 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $1,250 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $1,250 maximum</p>
                                         <p className="tab-content text-black">Up to $100 per visit maximum | 1 visit per day <br/>Up to 10 visits</p>
                                         <p className="tab-content1 text-black">Up to $650 maximum</p>
                                         <p className="tab-content1 text-black">Up to $650 additional</p>
                                         <p className="tab-content1 text-black">Up to $150 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-out-tabthree">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Ambulance Expenses</p>
                                         <p className="tab-content1 text-black">Rehabilitative Braces or Appliances</p>
                                         <p className="tab-content2 text-black">Dental Treatment (Injury )</p>
                                         <p className="tab-content1 text-black">Chemotherapy and/or Radiation Therapy</p>
                                         <p className="tab-content2 text-black">Physical & Occupational Therapy</p>
                                         <p className="tab-content1 text-black">Private Duty Nurse</p>
                                         <p className="tab-content text-black">Pregnancy or Childbirth (Conception must Occur After Trip Begins)</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Other Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $450 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,100 maximum</p>
                                         <p className="tab-content text-black">​Up to $500. There are no benefits for dental services for immediate relief of pain.</p>
                                         <p className="tab-content1 text-black">Up to $1,150 maximum</p>
                                         <p className="tab-content text-black">Up to $45 per visit max, 1 Visit per day up to 12 visits</p>
                                         <p className="tab-content1 text-black">Up to $500 maximum</p>
                                         <p className="tab-content3 text-black">Up to $5,000 maximum</p>
                                       </div>
                                       <div className="column-tab additional-benefits">
                                         <p className="text-white column-tab-title">Additional Benefits</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">Emergency Medical Evacuation Benefit</p>
                                         <p className="tab-content1 text-black">Repatriation of Remains Benefit</p>
                                         <p className="tab-content1 text-black">Accidental Death & Dismemberment</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">$20,000 maximum</p>
                                         <p className="tab-content1 text-black">$15,000 maximum​</p>
                                         <p className="tab-content1 text-black">$25,000 Principal Sum</p>
                                       </div>
                                     </div>
                                   </div>
                                 </section>
                               </div>
                             </div>

                             <div className="col-lg-12 mt-4 ivas-standard">
                             <p className="text-black text-center tab-row-title">$150,000 Policy Max</p>

                               <div className="ivas-other-tab">
                                 <input checked="checked" id="ivas-other-tabone" type="radio" name="ivas other benefits" />
                                 <input id="ivas-other-tabtwo" type="radio" name="ivas other benefits" />
                                 <input id="ivas-other-tabthree" type="radio" name="ivas other benefits" />
                                 <nav>
                                   <ul>
                                     <li className="ivas-other-tabone">
                                       <label for="ivas-other-tabone">In-Patient Services</label>
                                     </li>
                                     <li className="ivas-other-tabtwo">
                                       <label for="ivas-other-tabtwo">Out-Patient Services</label>
                                     </li>
                                     <li className="ivas-other-tabthree">
                                       <label for="ivas-other-tabthree">Other Benefits</label>
                                     </li>
                                   </ul>
                                 </nav>
                                 <section>
                                   <div className="ivas-other-tabone">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Hospital Room & Board</p>
                                         <p className="tab-content1 text-black">Hospital Intensive Care Unit Room & Board</p>
                                         <p className="tab-content2 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content2 text-black">Anesthetics</p>
                                         <p className="tab-content2 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content3 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content4 text-black">Consultation visits when requested by a Doctor</p>
                                         <p className="tab-content text-black">Pre-Admission Tests within 14 days before hospital admission</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">In-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content text-black">Charges up to $1,900 per day maximum<br /> Up to 30 days</p>
                                         <p className="tab-content3 text-black">Up to an additional $850 maximum per maximum additional a day | Up to 8 Days</p>
                                         <p className="tab-content2 text-black">Up to $6,000 maximum</p>
                                         <p className="tab-content2 text-black">Up to $1,500 maximum</p>
                                         <p className="tab-content2 text-black">Up to $1,500 maximum</p>
                                         <p className="tab-content3 text-black">Up to $125 maximum per visit, 1 visit per day, to 30 visits</p>
                                         <p className="tab-content1 text-black">Up to $500 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,200 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-other-tabtwo">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Surgical Room and Supply Expenses</p>
                                         <p className="tab-content1 text-black">Hospital Emergency</p>
                                         <p className="tab-content1 text-black">Doctor Surgical Expenses</p>
                                         <p className="tab-content1 text-black">Anesthetics</p>
                                         <p className="tab-content1 text-black">Assistant Surgeon Expenses</p>
                                         <p className="tab-content2 text-black">Doctor's Non-Surgical Treatment/Examination Expenses</p>
                                         <p className="tab-content1 text-black">X-rays & laboratory procedures</p>
                                         <p className="tab-content1 text-black">CAT Scan, PET Scan, or MRI</p>
                                         <p className="tab-content1 text-black">Prescription Drug Expenses</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Out-Patient Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $1,200 maximum</p>
                                         <p className="tab-content1 text-black">Up to $750 maximum</p>
                                         <p className="tab-content1 text-black">Up to $6,000 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $1,500 maximum</p>
                                         <p className="tab-content1 text-black">​Up to $1,500 maximum</p>
                                         <p className="tab-content text-black">Up to $125 per visit maximum | 1 visit per day <br/>Up to 10 visits</p>
                                         <p className="tab-content1 text-black">Up to $750 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1000 additional</p>
                                         <p className="tab-content1 text-black">Up to $200 maximum</p>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="ivas-other-tabthree">
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Covered Medical Services</p>
                                         </div>
                                         <p className="tab-content1 text-black">Ambulance Expenses</p>
                                         <p className="tab-content1 text-black">Rehabilitative Braces or Appliances</p>
                                         <p className="tab-content2 text-black">Dental Treatment (Injury )</p>
                                         <p className="tab-content1 text-black">Chemotherapy and/or Radiation Therapy</p>
                                         <p className="tab-content2 text-black">Physical & Occupational Therapy</p>
                                         <p className="tab-content1 text-black">Private Duty Nurse</p>
                                         <p className="tab-content text-black">Pregnancy or Childbirth (Conception must Occur After Trip Begins)</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="column-tab">
                                           <p className="text-white column-tab-title">Other Medical Benefits</p>
                                         </div>
                                         <p className="tab-content1 text-black">Up to $500 maximum</p>
                                         <p className="tab-content1 text-black">Up to $1,200 maximum</p>
                                         <p className="tab-content text-black">​Up to $550. There are no benefits for dental services for immediate relief of pain.</p>
                                         <p className="tab-content1 text-black">Up to $1,250 maximum</p>
                                         <p className="tab-content text-black">Up to $50 per visit max, 1 Visit per day to 12 visits</p>
                                         <p className="tab-content1 text-black">Up to $550 maximum</p>
                                         <p className="tab-content3 text-black">Up to $5,500 maximum</p>
                                       </div>
                                       <div className="column-tab additional-benefits">
                                         <p className="text-white column-tab-title">Additional Benefits</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">Emergency Medical Evacuation Benefit</p>
                                         <p className="tab-content1 text-black">Repatriation of Remains Benefit</p>
                                         <p className="tab-content1 text-black">Accidental Death & Dismemberment</p>
                                         <p className="tab-content1 text-black">Intercollegiate Sports</p>
                                       </div>
                                       <div className="col-lg-6">
                                         <p className="tab-content1 text-black">$25,000 maximum</p>
                                         <p className="tab-content1 text-black">$20,000 maximum​</p>
                                         <p className="tab-content1 text-black">$25,000 Principal Sum</p>
                                         <p className="tab-content1 text-black">None</p>
                                       </div>
                                     </div>
                                   </div>
                                 </section>
                               </div>
                             </div>
                             </div>
                             <div id="ivas-description" class="tab-pane fade show" role="tabpanel" aria-labelledby="ivas-description">
                             <div class="tabcontent">
                             <div className="col-lg-12 ivas-standard">
                               <h2 className="text-blue text-center">INF Standard IVAS Plan Description</h2>
                             </div>
                             <div className="col-lg-12 ">
                               <div className="row mt-4 justify-content-center">
                                 <div className="col-lg-5 text-center">
                                   <h3 className="text-black">Read More for Age 0-69 </h3>
                                   <Img fluid={book_icon} className="book-icon-img"/>
                                   <a href="https://infplans.com/policy_pdf/INF_Standard_0_69_Description_of_Benefits.pdf" target="_blank">
                                     <button className="read-now-btn"> Read Now </button>
                                   </a>
                                 </div>
                                 <div className="col-lg-5 text-center">
                                   <h3 className="text-black">Read More for Age 70-99 </h3>
                                   <Img fluid={book_icon} className="book-icon-img"/>
                                   <a href="https://infplans.com/policy_pdf/INF_Standard_Policy_Document_70_99.pdf" target="_blank">
                                     <button className="read-now-btn"> Read Now </button>
                                   </a>
                                </div>
                              </div>
                            </div>
                          </div>
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
        <h3 className="text-blue text-center row-title">INF BMI Plans</h3>
         <div className="row">

         <div className="bmi-plans-tab">
           <input checked="checked" id="bmi-plans-tabone" type="radio" name="bmi-plans" />
           <input id="bmi-plans-tabtwo" type="radio" name="bmi-plans" />
           <input id="bmi-plans-tabthree" type="radio" name="bmi-plans" />

           <nav>
             <ul>
               <li className="bmi-plans-tabone">
                 <label for="bmi-plans-tabone">Benefits That Come With Inf-BMI Plans</label>
               </li>
               <li className="bmi-plans-tabtwo">
                 <label for="bmi-plans-tabtwo" className="title">COVID-19 Coverage</label>
               </li>
               <li className="bmi-plans-tabthree">
                 <label for="bmi-plans-tabthree">Pre-Existing Conditions Coverage</label>
               </li>
             </ul>
           </nav>

           <section>
             <div className="bmi-plans-tabone">
             <div className="col-lg-12 inf-bmi-plans">
               <div className="row">
                   <ul className="covid-coverage">
                     <li>COVID-19 Coverage</li>
                     <li>All plans have 100% Co-Insurance (We cover 100%) and NO DEDUCTIBLE</li>
                     <li>We make all the appointments for you- no more hassle of finding a provider who will accept you plan. We do everything on the backend to make sure it's completely cashless.</li>
                   </ul>
             </div>
           </div>
           <div className="bmi-bg">
           <div className="col-lg-12 bmi-content1">
               <div className="col-lg-12 bmi-content2">
                 <p className="text-blue text-center notice">Important Notice</p>
                 <p className="text-center notice-content">Vouchers purchased after arrival are subject to a 3-day waiting period for new sickness coverage and 15-day waiting period for COVID-19 Coverage</p>
                 <p className="text-center notice-content">Vouchers must be extended before expiration to avoid waiting period for new sickness coverage.</p>
               </div>
           </div>
           </div>
         </div>

         <div className="bmi-plans-tabtwo">
          <div className="col-lg-12 inf-bmi-plans">
               <ul>
                 <li>The Beneficiary must always and without exception contact the Emergency Central, who in turn will coordinate a virtual appointment by Telemedicine.</li>
                 <li>According to the opinion provided by the Medical Department, if the Beneficiary presents symptoms related to COVID-19, the Assistance Center will coordinate the relevant medical consultation, according to the safety and health protocols of each country.</li>
                 <li>We will cover the expenses incurred up to the coverage limit indicated in the voucher.</li>

                 <p className="expense-content">The following expenses will be covered under the same limit:</p>

                 <li>Hospital Expenses for COVID-19: In case of requiring hospitalization to stabilize the Beneficiary's condition.</li>
                 <li>Mechanical respirator fees: If the Medical Department, together with the treating doctor, considers the use of a mechanical respirator necessary, the Central will authorize and cover said expense</li>
              </ul>
           </div>
           <div className="bmi-bg">
           <div className="col-lg-12 bmi-content1">
               <div className="col-lg-12 bmi-content2">
                 <p className="text-blue text-center notice">Important Notice</p>
                 <p className="text-center notice-content">Vouchers purchased after arrival are subject to a 3-day waiting period for new sickness coverage and 15-day waiting period for COVID-19 Coverage</p>
                 <p className="text-center notice-content">Vouchers must be extended before expiration to avoid waiting period for new sickness coverage.</p>
               </div>
           </div>
           </div>
          </div>

           <div className="bmi-plans-tabthree">
            <div className="col-lg-12 inf-bmi-plans">
               <div className="col-lg-12 covid-coverage">
                   <p className="covid-content">The coverage provided for chronic and / or pre-existing diseases includes the following eventualities:</p>
                <ul>
                   <li>Acute episode or unpredictable event</li>
                   <li>Decompensation of</li>
                <ul className="decom">
                  <li>A Chronic issue</li>
                  <li>A Pre-existing diseases known</li>
                  <li>A previously asymptomatic pre-existing condition </li>
                </ul>
              </ul>
             </div>
             </div>
             <div className="bmi-bg">
             <div className="col-lg-12 bmi-content1">
                 <div className="col-lg-12 bmi-content2">
                   <p className="text-blue text-center notice">Important Notice</p>
                   <p className="text-center notice-content">Vouchers purchased after arrival are subject to a 3-day waiting period for new sickness coverage and 15-day waiting period for COVID-19 Coverage</p>
                   <p className="text-center notice-content">Vouchers must be extended before expiration to avoid waiting period for new sickness coverage.</p>
                 </div>
             </div>
             </div>
          </div>
         </section>
        </div>
       </div>
      </div>
     </Container>
    </section>

   <section id="plans-section-8">
     <Container>
      <div className="col-lg-12">
      <div className="plans-container">
       <h2 className="text-blue text-center">Diplomat America</h2>
         <p>Diplomat America Plan Features:</p>
           <ul className="plan-features">
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

             <p>This plan is designed for:</p>

             <div className="row">
               <div className="col-lg-6">
                 <ul className="plan-design">
                   <li>Non-U.S. Citizens visiting the U.S</li>
                 </ul>
                 </div>
                 <div className="col-lg-6">
                 <ul className="plan-design">
                   <li>Parents and relatives visiting the U.S.</li>
                 </ul>
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
    standard_popup_logo: file(name: { eq: "standard-popup-logo" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
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
  }
`
