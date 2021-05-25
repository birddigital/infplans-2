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

const ClaimsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const infplans_big_logo = data.infplans_big_logo?.childImageSharp?.fluid
  const pdf_icon = data.pdf_icon?.childImageSharp?.fluid
  const submit_req_img = data.submit_req_img?.childImageSharp?.fluid
  const claims_payment_img = data.claims_payment_img?.childImageSharp?.fluid





  return (
    <Layout location={location}>
      <Meta site={meta} title="Insurance for Visitors Claims Forms  - INF Visitor Insurance"/>
      <BackgroundImage
        Tag="section"
        className="claims-form-hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="claims form hero background"
      >
        <div id="claims-form-hero-section">
          <Container>
            <div className="col-lg-12">
            <h1 className="text-white text-center">
                CLAIMS FORM
              </h1>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="claims-form-section-1">
       <Container>
        <div className="col-lg-12">
          <div className="claims-form-container">
           <h2 className="text-blue text-center">INF Claims Form</h2>
           <div className="row mt-4">
         <div className="col-lg-8">
          <p>
            Filing claims when using your insurance is needed to make sure that you are reimbursed for any eligible medical expense paid out-of-pocket. Although INF allows direct billing, it is highly advised for members to submit a claim form anytime they use their insurance, regardless of whether you have paid out-of-pocket. Sending in the proper paperwork and documentation may help expedite the claims and reimbursement process. Below you can find information on how to file claims for International Visitors Accident and Sickness Insurance plans:
          </p>
         </div>
          <div className="col-lg-4">
            <Img fluid={infplans_big_logo} className="big-logo"/>
            <button className="inf-btn"> Click to Get a Quote </button>
          </div>
         </div>

        <div className="col-lg-12">
         <div className="claims-form-container">
          <div className="row">
            <div className="col-lg-4">
              <h4 className="text-center">Submit Your Online Claim Form</h4>
              <p>
                Log in to your My INF Portal & file an online claim form. Navigate to the 'Active Policies' section of the Portal, and click the 'File a Claim' option.
              </p>
            </div>
            <div className="col-lg-4">
              <Img fluid={submit_req_img} className="submit-img"/>
              <h4 className="text-center">Submit The Following Required Documents</h4>
            </div>
            <div className="col-lg-4">
              <Img fluid={claims_payment_img} className="submit-img"/>
              <h4 className="text-center">Claims Payment</h4>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </Container>
     </section>

     <section id="claims-form-section-2">
       <Container>
       <div className="col-lg-12">
         <div className="row section2-container">
           <div className="col-lg-12">
             <h3 className="text-blue text-center row-title">Claims Form</h3>
           </div>
           <div className="col-lg-12">
             <div className="row mt-5 sign-in-container">
               <div className="col-lg-5">
                 <Img fluid={infplans_big_logo} className="big-logo"/>
               </div>
               <div className="col-lg-7">
                <div className="col-lg-12">
                  <h3 className="text-blue text-center">Member Sign In</h3>
                </div>
                 <form method="POST" action="">
                   <input type="email" id="email" name="email" placeholder="Email Address" />
                   <input type="submit" value="Next" />
                 </form>
             </div>
           </div>
          </div>
         </div>
        </div>
       </Container>
      </section>

      <section id="claims-form-section-3">
        <Container>
          <div className="col-lg-12">
            <div className="row claim-information-container">

              <div class="pc-tab">
                <input checked="checked" id="tab1" type="radio" name="pct" />
                <input id="tab2" type="radio" name="pct" />
                  <nav>
                    <ul>
                      <li class="tab1">
                        <label for="tab1">Claim Information for INF policies</label>
                      </li>
                      <li class="tab2">
                        <label for="tab2">Claim Information for SRPO policies</label>
                      </li>
                    </ul>
                  </nav>
                <section>
                  <div class="tab1">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-12">
                          <h4>Claims Office Information:</h4>
                        </div>
                        <div className="col-lg-6">
                          <p>Mail: Administrative Concepts, Inc. (ACI)</p>
                          <p>994 Old Eagle School Rd., Suite 1005, Wayne, PA 19087-1706</p>
                          <p>Toll Free: 888-293-9229 (from inside the U.S.)</p>
                          <p>Fax: 610-293-9299</p>
                        </div>
                        <div className="col-lg-6">
                          <p>Check Claim Status: 888-293-9229</p>
                          <p>Submit Bills Online:  aciclaims@visit-aci.com</p>
                          <p>Web: http://www.visit-aci.com</p>
                          ​<p>EDI Payor#: 22384</p>
                       </div>
                     </div>
                    </div>
                   <div className="col-lg-12">
                    <div className="row">
                     <div className="col-lg-6">
                      <h4>Download Claims Form Policy Numbers Starting with GLM</h4>
                       <Img fluid={pdf_icon} className="pdf-icon"/>
                       <button className="download-btn"> Download </button>
                      </div>
                    <div className="col-lg-6">
                      <h4>Download Claims Form Policy Numbers Starting with INF</h4>
                      <Img fluid={pdf_icon} className="pdf-icon"/>
                      <button className="download-btn2"> Download </button>
                    </div>
                  </div>
                </div>
               </div>
            <div class="tab2">
            <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <h4>Claims Office Information:</h4>
              </div>
              <div className="col-lg-6">
                <p>WebTPA</p>
                <p>PO Box 669</p>
                <p>Grapevine, TX 76099-0669</p>
                <p>Phone: 928-494-0112</p>
                <p>Fax: 469-417-1989</p>
              </div>
              <div className="col-lg-6">
                <p>Submit Bills Online: helpme@webtpa.com</p>
                <p>Web: http://www.visit-aci.com </p>
                <p>​EDI Payor#: 22384</p>
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

      <section id="claims-form-section-4">
        <Container>
          <div className="col-lg-12">
           <h3 className="text-blue text-center row-title">Additional Claims Information</h3>
            <div className="row additional-information-container">
            <div class="pc-tab">
              <input checked="checked" id="tab1" type="radio" name="pct" />
              <input id="tab2" type="radio" name="pct" />
                <nav>
                  <ul>
                    <li class="tab1">
                      <label for="tab1">For Policies starting with INF:</label>
                    </li>
                    <li class="tab2">
                      <label for="tab2">For Policies starting with SRPO:</label>
                    </li>
                  </ul>
                </nav>
                <section>
                  <div class="tab1">
                  <div className="col-lg-12">
                    <h4>For Policies starting with INF:</h4>
                     <p>All claims must be filed by completing the claim form found above in the Member portal. This form should be completed by the Policy Holder.</p>
                     <p>This form must be completed ONCE PER SICKNESS OR INJURY. The INF Claims Form for Providers should be completed by the Policy Holder & Providers (Doctors office, Hospitals etc.).</p>
                     <p>The Policy Holder should complete Section A. Providers should complete Section B of the form. The form can be mailed to the Insurance by the Provider's office or the Policy Holder. Providers can also submit claims online using EDI Pay#: 22384.</p>
                 </div>
                </div>
                  <div class="tab2">
                  <div className="col-lg-12">
                    <h4>For Policies starting with SRPO:</h4>
                     <p>Generally, providers file insurance claim directly with WebTPA. Additionally, all policyholders are required to complete an informational Section of the claim form found in the member portal above.</p>
                     <p>In the event a provider wishes to collect from policy holder directly, the second section of claim Form found at (or Standard Insurance Claims Form 1500 CMS/HCFA 1500 or UB92/UB04) should be completed by the doctor's office and submitted by policy holder to the Insurance Company for prompt processing.</p>
                     <p>Failure to do so would delay the claim processing or result in denial of claims by WebTPA.</p>
                     <p>The Policy Holder should complete Section A. Providers should complete Section B of the form. The form can be mailed to the Insurance by the Provider's office or the Policy Holder. Providers can also submit claims online using EDI Pay#: 22384.</p>
                 </div>
                 </div>
                </section>
              </div>
           </div>
         </div>
       </Container>
      </section>

      <section id="claims-form-section-5">
        <Container>
          <div className="col-lg-12">
           <h3 className="text-blue text-center row-title">Claims Process FAQs</h3>
            <div className="row claims-process-container">

            <div class="pc-tab">
              <input checked="checked" id="tab1" type="radio" name="pct" />
              <input id="tab2" type="radio" name="pct" />
              <input id="tab3" type="radio" name="pct" />
                <nav>
                  <ul>
                    <li class="tab1">
                      <label for="tab1">I paid for my medical care up front. How can I get reimbursed?</label>
                    </li>
                    <li class="tab2">
                      <label for="tab2">I took advantage of "Direct Billing" - do I still need to file a claim?</label>
                    </li>
                    <li class="tab3">
                      <label for="tab3">If I leave the country will my claims be paid?</label>
                    </li>
                  </ul>
                </nav>
                <section>
                  <div class="tab1">
                  <div className="col-lg-12">
                    <p>Simply fill out the claim form & follow the instructions, as well as providing the additional required documentation. Make sure to complete this paperwork carefully to ensure prompt payment for eligible expenses incurred.</p>
                 </div>
                 </div>
                  <div class="tab2">
                  <div className="col-lg-12">
                    <p>Yes. We highly advise individuals to file a claim with the insurance company, regardless of whether they have paid for the medical treatment up front. This creates a record with the insurance company, and will assist the claims process. If you do not file a claim, the payment may not go through to the health care provider, causing a delay in payment. This could result in a liability for you.</p>
                   </div>
                  </div>
                  <div class="tab3">
                  <div className="col-lg-12">
                    <p>Yes, eligible claims incurred while coverage is in effect will be paid. On the claims form, you need to designate where to send the check from the insurance company.</p>
                </div>
                </div>
            </section>
         </div>
         </div>
        </div>
       </Container>
      </section>
    </Layout>
  )
}

export default ClaimsPage

export const query = graphql`
  query ClaimsPageQuery {
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
    hero_background: file(name: { eq: "claims-hero-bg" }) {
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
    pdf_icon: file(name: { eq: "pdf-icon" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    submit_req_img: file(name: { eq: "submit-req-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    claims_payment_img: file(name: { eq: "claims-payment-img" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
