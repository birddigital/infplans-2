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

interface Props {
  data: IndexQueryQuery
  location: Location
}

const PremiumsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="INF Visitor Insurance Quote"/>
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
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>

      <section id="premium-section-1">
       <Container>
           <div className="col-lg-12 hidden">
            <div className="blue-bg">
              <h3 className="text-white text-center">WHAT KIND OF PLAN ARE YOU LOOKING FOR?</h3>
              <div className="row">
                <div className="col-lg-4">
                  <button className="premium1-btn" value="Network">Network</button>
                </div>
                <div className="col-lg-4">
                 <button className="premium2-btn" value="Fixed">Fixed</button>
                </div>
                <div className="col-lg-4">
                 <button className="premium3-btn" value="Any">Any</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 ">
           <div className="blue-bg">
             <h3 className="text-white text-center mb-4">WHAT IS THE AGE GROUP OF<br /> YOUR VISITOR?</h3>
              <form id="" method="" action="">
                <div className="select-container">
                  <div className="text-center select">
                    <select id="premium-selector">
                      <option>Select Age Group</option>
                      <option value="0-15">0-15</option>
                      <option value="16-20">16-20</option>
                      <option value="20-24">20-24</option>
                      <option value="25-29">25-29</option>
                      <option value="30-34">30-34</option>
                      <option value="35-39">35-39</option>
                      <option value="40-44">40-44</option>
                      <option value="45-49">45-49</option>
                      <option value="50-54">50-54</option>
                      <option value="55-59">55-59</option>
                      <option value="60-64">60-64</option>
                      <option value="65-69">65-69</option>
                      <option value="70-74">70-74</option>
                      <option value="75-79">75-79</option>
                      <option value="80-84">80-84</option>
                      <option value="85-89">85-89</option>
                      <option value="90-94">90-94</option>
                      <option value="95-99">95-99</option>
                    </select>
                  </div>
                </div>
              </form>
           </div>
         </div>

         <div className="col-lg-12  hidden">
          <div className="blue-bg text-center">
            <h3 className="text-white">DOES YOUR VISITOR HAVE <br />ANY PRE-EXISTING<br /> CONDITIONS? <span>(EG DIABETES,  BP ETC)</span></h3>
              <form id="custom-radio-buttons" method="" action="">
              <div class="radio-wrapper">
                <input type="radio" id="radio1" name="option" value="yes"/>
                <label for="radio1">
                  <span class="outer">
                    <span class="inner animated"></span>
                  </span>
                    Yes
                </label>
              </div>
              <div class="radio-wrapper">
                <input type="radio" id="radio2" name="option" value="no"/>
                <label for="radio2">
                  <span class="outer">
                    <span class="inner animated"></span>
                  </span>
                    No
                </label>
              </div>
             </form>
          </div>
        </div>

       </Container>
      </section>

      <section id="premium-section-2">
       <Container>
            <div className="col-lg-6">
              <div className="premium-container network">
                <p className="ribbon-premiums">Benefit Type</p>
                <p className="title text-center text-blue">Network</p>
                <p className="content text-center">This plan uses Preferred Provider Network (PPO). The plan pays 80 percent of the negotiated amount for covered medical expenses. For example- if you have a $10,000 bill, and network benefit may bring that down to $4000 and 80% of that $4000 will be paid by the plan ($3200) and you pay $800. This plan is recommended for anyone above 50 years of age.</p>
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
              <p className="content text-center">The INF Elite, INF Elite Short Term, INF Premier and INF Premier Short Term plans will cover pre-Existing conditions on par with new sicknesses. These Plans will cover physician visits, labs, in-patient, out-patient, and specialist care. There is no look-back period for pre-existing conditions under these plans.</p>
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