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
import IframeResizer from 'iframe-resizer-react'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const PremiumsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const [firstStep,setFirstStep]= useState(true);
  const [secondStep,setSecondStep]= useState(false);
  const [thirdStep,setThirdStep]= useState(false);
  const [fourthStep,setFourthStep]= useState(false);

  function showSecondStep() {
    setFirstStep(false);
    setSecondStep(true);
    setThirdStep(false);
  }
  function showThirdStep() {
    setFirstStep(false);
    setSecondStep(false);
    setThirdStep(true);
  }

  function showFourthStep() {
    setFirstStep(false);
    setSecondStep(false);
    setThirdStep(false);
    setFourthStep(true);
  }

  return (
    <Layout location={location}>
      <Helmet>
        <title>INF Plan Premiums</title>
        <meta property="og:site_name" content="INF Visitor Insurance"/>
        <meta name="description" content="This page talks about premiums for INF True Pre-Existing Coverage plans for visitors and parents traveling to the United States"/>
        <meta name="keywords" content="Dr Rao Visitors Coverage, Rao Insurance for Visitors, KV Rao Visitor Insurance, Rao Visitors Coverage, KV Rao Insurance, KV Rao Insurance for Visitors, India Network, India Network Insurance for Visitors, indnet, india network foundation, india health network insurance,pre-existing conditions, pre-existing medical conditions, visitor medical insurance, visitors medical insurance, health insurance, medical Insurance for Visitors to USA, inbound usa,health Insurance for Visitors to US, USA visitor insurance, Visitor Medical Insurance for USA visitors, Compare and review visitor insurance, Buy International Travel medical insurance and visitor Health insurance for USA, Visitor medical Insurance, Medical Insurance for Non-US Citizens,visitor medical insurance, visitors medical insurance, health insurance, medical Insurance for Visitors to USA, inbound usa, health Insurance for Visitors to US, USA visitor insurance, student medical insurance, students medical insurance, health insurance, medical insurance for international students to USA, health insurance  for students to US, USA student insurance, major medical insurance, worldwide medical insurance, health insurance, medical Insurance for Visitors outside USA, health Insurance for Visitors outside US"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BackgroundImage
        Tag="section"
        className="premium-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="inf premium hero background"
      >
        <div id="premium-hero-section">
          <Container>
            <div className="col-lg-12">
            <h1 className="text-white text-center">
                PREMIUMS
              </h1>
              <Link to="/inf-easy-select">
                <button className="hero-btn"> Get a Quote </button>
              </Link>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="premium-section-1">
          <IframeResizer
            log
            src="https://adrienb3.sg-host.com/forms/premiums/inf-easy-select-premiums.php"
            style={{ width: '1px', minWidth: '100%', border: 'none', minHeight: '900px'}}
            heightCalculationMethod= "lowestElement"
            scrolling="auto"
          />
      </section>

    {/* <section id="premium-section-1">
       <Container>
         { firstStep ? (
           <div className="col-lg-12 ">
            <div className="blue-bg">
              <h3 className="text-white text-center">WHAT KIND OF PLAN ARE YOU LOOKING FOR? {firstStep}</h3>
              <div className="row">
                <div className="col-lg-4">
                  <button className="premium1-btn" onClick={showSecondStep}>Network</button>
                </div>

                <div className="col-lg-4">
                 <button className="premium2-btn" onClick={showSecondStep}>Fixed</button>
                </div>

                <div className="col-lg-4">
                 <button className="premium3-btn" onClick={showSecondStep}>Any</button>
                </div>
              </div>
            </div>
          </div>
         ): (
           null
         )
       }

        {secondStep ? (
          <div className="col-lg-12" id="age-selector">
           <div className="blue-bg">
             <h3 className="text-white text-center mb-4">WHAT IS THE AGE GROUP OF<br /> YOUR VISITOR?</h3>
              <form id="" method="" action="">
                <div className="select-container">
                  <div className="text-center select">
                    <select id="premium-selector" onChange={showThirdStep}>
                      <option hidden>Select Age Group</option>
                      <option value="0-15" >0-15</option>
                      <option value="16-20" >16-20</option>
                      <option value="20-24" >20-24</option>
                      <option value="25-29" >25-29</option>
                      <option value="30-34" >30-34</option>
                      <option value="35-39" >35-39</option>
                      <option value="40-44" >40-44</option>
                      <option value="45-49" >45-49</option>
                      <option value="50-54" >50-54</option>
                      <option value="55-59" >55-59</option>
                      <option value="60-64" >60-64</option>
                      <option value="65-69" >65-69</option>
                      <option value="70-74" >70-74</option>
                      <option value="75-79" >75-79</option>
                      <option value="80-84" >80-84</option>
                      <option value="85-89" >85-89</option>
                      <option value="90-94" >90-94</option>
                      <option value="95-99" >95-99</option>
                    </select>
                  </div>
                </div>
              </form>
           </div>
         </div>
        ) : (
          null
        )
      }

      {thirdStep ? (
        <div className="col-lg-12">
         <div className="blue-bg text-center">
           <h3 className="text-white">ARE YOU LOOKING FOR PRE-EXISTING CONDITIONS COVERAGE?</h3>
           <h4 className="text-white">
             (EG DIABETES,  BP ETC)
           </h4>
             <form id="custom-radio-buttons" method="" action="">
             <div className="radio-wrapper">
               <input type="radio" id="radio1" name="option" value="yes" onClick={showFourthStep}/>
               <label for="radio1">
                 <span className="outer">
                   <span className="inner animated"></span>
                 </span>
                   Yes
               </label>
             </div>
             <div className="radio-wrapper">
               <input type="radio" id="radio2" name="option"  value="no" onClick={showFourthStep}/>
               <label for="radio2">
                 <span className="outer">
                   <span className="inner animated"></span>
                 </span>
                   No
               </label>
             </div>
            </form>
         </div>
       </div>
      ): (
        null
      )
    }

      {fourthStep ? (

        /*}<div className="col-lg-12" id="filtered-section">
            <div className="blue-background">
            <div className="row">
              <div className="col-lg-3 ">
               <p className="text-white text-center filter">Filter By :</p>
              </div>
              <div className="col-lg-3 premium-button">
                <a href="#" className="drop-btn1 dropdown-toggle" data-toggle="dropdown">Age</a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item" >0-15</a>
                    <a href="#"className="dropdown-item" >16-20</a>
                    <a href="#"className="dropdown-item" >20-24</a>
                    <a href="#"className="dropdown-item" >25-29</a>
                    <a href="#"className="dropdown-item" >30-34</a>
                    <a href="#"className="dropdown-item" >35-39</a>
                    <a href="#"className="dropdown-item" >40-44</a>
                    <a href="#"className="dropdown-item" >45-49</a>
                    <a href="#"className="dropdown-item" >50-54</a>
                    <a href="#"className="dropdown-item" >55-59</a>
                    <a href="#"className="dropdown-item" >60-64</a>
                    <a href="#"className="dropdown-item" >75-79</a>
                    <a href="#"className="dropdown-item" >80-84</a>
                    <a href="#"className="dropdown-item" >85-89</a>
                    <a href="#"className="dropdown-item" >90-94</a>
                    <a href="#"className="dropdown-item" >95-99</a>
                  </div>
                </div>
                <div className="col-lg-3 premium-button ">
                    <a href="#" className="drop-btn2 dropdown-toggle" data-toggle="dropdown">Any</a>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item" >Any</a>
                      <a href="#"className="dropdown-item" >Fixed</a>
                      <a href="#"className="dropdown-item" >Network</a>
                    </div>
                  </div>
                  <div className="col-lg-3 premium-button ">
                      <a href="#" className="drop-btn3 dropdown-toggle" data-toggle="dropdown">Included Prex</a>
                      <div className="dropdown-menu">
                        <a href="#" className="dropdown-item" >Included Prex</a>
                        <a href="#"className="dropdown-item" >Do not Include Prex</a>
                      </div>
                  </div>
                  </div>
                </div>


          <p className="table-title">ULTRA PLUS</p>
          <div className="col-lg-12">
            <div className="row">
              <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">PlanMax</p>
                  </div>
                <p className="tab-contents text-black">$60000</p>
              </div>

              <div className="col">
                <div className="column-tab">
                  <p className="text-white column-tab-title">PlanDed</p>
                </div>
                  <p className="tab-contents text-black">$0</p>
              </div>

              <div className="col">
                <div className="column-tab">
                  <p className="text-white column-tab-title">Pre-existing Maximum</p>
                </div>
                  <p className="tab-contents text-black">$700</p>
              </div>

              <div className="col">
                <div className="column-tab">
                  <p className="text-white column-tab-title">Pre-existing Deductible</p>
                </div>
                  <p className="tab-contents text-black">$0</p>
              </div>

              <div className="col">
                <div className="column-tab">
                  <p className="text-white column-tab-title2">60 Days Price</p>
                </div>
                  <p className="tab-contents2">$202.80</p>
              </div>
            </div>
            </div>

            <p className="table-title">VIP</p>
            <div className="col-lg-12">
              <div className="row">
                <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">PlanMax</p>
                    </div>
                  <p className="tab-contents text-black">$100000</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">PlanDed</p>
                  </div>
                    <p className="tab-contents text-black">$0</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Pre-existing Maximum</p>
                  </div>
                    <p className="tab-contents text-black">$2000</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">Pre-existing Deductible</p>
                  </div>
                    <p className="tab-contents text-black">$0</p>
                </div>

                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title2">60 Days Price</p>
                  </div>
                    <p className="tab-contents2">$303.00</p>
                </div>
              </div>
              </div>

              <p className="table-title">VIP PLUS</p>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">PlanMax</p>
                      </div>
                    <p className="tab-contents text-black">$250000</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">PlanDed</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Maximum</p>
                    </div>
                      <p className="tab-contents text-black">$6000</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Deductible</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title2">60 Days Price</p>
                    </div>
                      <p className="tab-contents2">$424.80</p>
                  </div>
                </div>


                <p className="table-title">INF ELITE</p>
                  <div className="row">
                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">PlanMax</p>
                    </div>
                      <p className="tab-contents text-black">$150000</p>
                  </div>

                     <div className="col">
                       <div className="column-tab">
                         <p className="text-white column-tab-title">PlanDed</p>
                       </div>
                         <p className="tab-contents text-black">$500</p>
                     </div>

                    <div className="col">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Pre-existing Maximum</p>
                      </div>
                        <p className="tab-contents text-black">$25000</p>
                    </div>

                    <div className="col">
                      <div className="column-tab">
                        <p className="text-white column-tab-title">Pre-existing Deductible</p>
                      </div>
                        <p className="tab-contents text-black">$1500</p>
                    </div>

                    <div className="col">
                      <div className="column-tab">
                        <p className="text-white column-tab-title2">60 Days Price</p>
                      </div>
                        <p className="tab-contents2">$354.60</p>
                    </div>
                </div>


                <p className="table-title">INF ELITE 90</p>
                  <div className="row">
                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">PlanMax</p>
                    </div>
                      <p className="tab-contents text-black">$150000</p>
                  </div>

                     <div className="col">
                       <div className="column-tab">
                         <p className="text-white column-tab-title">PlanDed</p>
                       </div>
                         <p className="tab-contents text-black">$500</p>
                     </div>

                    <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Maximum</p>
                    </div>
                      <p className="tab-contents text-black">$25000</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Deductible</p>
                    </div>
                      <p className="tab-contents text-black">$1500</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title2">60 Days Price</p>
                    </div>
                      <p className="tab-contents2">$354.60</p>
                  </div>
                </div>

              <p className="table-title">INF PREMIER</p>
                <div className="row">
                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">PlanMax</p>
                  </div>
                    <p className="tab-contents text-black">$100000</p>
                </div>

                   <div className="col">
                     <div className="column-tab">
                       <p className="text-white column-tab-title">PlanDed</p>
                     </div>
                       <p className="tab-contents text-black">$500</p>
                   </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Maximum</p>
                    </div>
                      <p className="tab-contents text-black">$15000</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Deductible</p>
                    </div>
                      <p className="tab-contents text-black">$1000</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title2">60 Days Price</p>
                    </div>
                      <p className="tab-contents2">$1309.50</p>
                  </div>
                </div>

              <p className="table-title">INF TRAVELER USA</p>
                <div className="row">
                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">PlanMax</p>
                  </div>
                    <p className="tab-contents text-black">$150000</p>
                </div>

                 <div className="col">
                   <div className="column-tab">
                     <p className="text-white column-tab-title">PlanDed</p>
                   </div>
                     <p className="tab-contents text-black">$500</p>
                 </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Maximum</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Deductible</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title2">60 Days Price</p>
                    </div>
                      <p className="tab-contents2">$119.70</p>
                  </div>
                </div>

              <p className="table-title">INF TRAVELER USA 90</p>
                <div className="row">
                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">PlanMax</p>
                  </div>
                    <p className="tab-contents text-black">$150000</p>
                </div>

                 <div className="col">
                   <div className="column-tab">
                     <p className="text-white column-tab-title">PlanDed</p>
                   </div>
                     <p className="tab-contents text-black">$50</p>
                 </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Maximum</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Deductible</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title2">60 Days Price</p>
                    </div>
                      <p className="tab-contents2">$158.40</p>
                  </div>
                </div>

              <p className="table-title">DIPLOMAT AMERICA</p>
                <div className="row">
                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">PlanMax</p>
                  </div>
                    <p className="tab-contents text-black">$50000</p>
                </div>

                 <div className="col">
                   <div className="column-tab">
                     <p className="text-white column-tab-title">PlanDed</p>
                   </div>
                     <p className="tab-contents text-black">$0</p>
                 </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Maximum</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Deductible</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title2">60 Days Price</p>
                    </div>
                      <p className="tab-contents2">$41.55</p>
                  </div>
                </div>

              <p className="table-title">INF STANDARD</p>
                <div className="row">
                <div className="col">
                  <div className="column-tab">
                    <p className="text-white column-tab-title">PlanMax</p>
                  </div>
                    <p className="tab-contents text-black">$50000</p>
                </div>

                   <div className="col">
                     <div className="column-tab">
                       <p className="text-white column-tab-title">PlanDed</p>
                     </div>
                       <p className="tab-contents text-black">$75</p>
                   </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Maximum</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title">Pre-existing Deductible</p>
                    </div>
                      <p className="tab-contents text-black">$0</p>
                  </div>

                  <div className="col">
                    <div className="column-tab">
                      <p className="text-white column-tab-title2">60 Days Price</p>
                    </div>
                      <p className="tab-contents2">$40.20</p>
                  </div>
                </div>
              </div>
           </div>
      ) : (
        null)
      }
       </Container>
      </section> */}

      <section id="premium-section-2">
       <Container>
            <div className="col-lg-6">
              <div className="premium-container network">
                <p className="ribbon-premiums">Benefit Type</p>
                <p className="title text-center text-blue">Network</p>
                {/*}<p className="content text-center">This plan uses Preferred Provider Network (PPO). The plan pays 80 percent of the negotiated amount for covered medical expenses. For example- if you have a $10,000 bill, and network benefit may bring that down to $4000 and 80% of that $4000 will be paid by the plan ($3200) and you pay $800. This plan is recommended for anyone above 50 years of age.</p> */}
                <p className="content text-center">
                  This plan uses Preferred Provider Network (PPO). The plan pays 80 or 90 percent of the negotiated amount for covered medical expenses. For example- if you have a $10,000 bill, and network benefit may bring that down to $4000 and 80% will be paid by the plan ($3200) and you pay $800.
                </p>
              </div>
           </div>

          <div className="col-lg-6">
             <div className="premium-container fixed">
              <p className="ribbon-premiums">Benefit Type</p>
              <p className="title text-center text-blue">Fixed</p>
              <p className="content text-center">The plan will pay based off a schedule of benefits. Schedule of Benefits is a list of covered medical services. Next to each item on the list is a dollar amount (maximum benefit). The plan pays only to the listed maximum benefit. For example, your plan pays $1,900 a day for a hospital room. If the total hospital charge is $5,000 per day, the plan will pay $1,900. If the hospital charges $10,000 per day, the plan still only pays $1,900.</p>
            </div>
          </div>

          <div className="col-lg-6">
             <div className="premium-container pre-existing">
               <p className="ribbon-premiums">Coverage Type</p>
              <p className="title text-center text-blue">Pre-Existing</p>
              <p className="content text-center">
                The INF Elite & INF Premier provides coverage for Pre-Existing Conditions as defined in the plan as per policy limitations, exclusions, and maximums. These Plans may cover physician visits, labs, in-patient, out-patient, and specialist care.There is a 12 month look-back period for pre-existing conditions under these plans.
              </p>
              {/*<p className="content text-center">The INF Elite, INF Elite Short Term, INF Premier and INF Premier Short Term plans will cover pre-Existing conditions on par with new sicknesses. These Plans will cover physician visits, labs, in-patient, out-patient, and specialist care. There is no look-back period for pre-existing conditions under these plans.</p>*/}
            </div>
          </div>

          <div className="col-lg-6">
             <div className="premium-container acute">
               <p className="ribbon-premiums">Coverage Type</p>
              <p className="title text-center text-blue">Acute-onSet</p>
              <p className="content text-center">Diplomat Ameria Plan offer Acute-onset Pre-Existing conditions cover for visitors of all ages. These plans are relatively in-expesive to purchase. There is no guarantee that a typical condition will be covered. The Acute-Onset plans by nature may only cover emergency, in-patient hospitalizations related to pre-existing conditions in certain conditions. Coverage will end as soon as the patient is discharged from the hospital. Pre-Existing episodes must meet certain guidelines to be eligible for benefits to be paid out.</p>
            </div>
          </div>
     </Container>
      </section>
    </Layout>
  )
}

export default PremiumsPage

export const query = graphql`
  query PremiumsPageQuery {
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
    hero_background: file(name: { eq: "premium-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
