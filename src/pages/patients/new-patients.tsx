import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'

import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Meta from 'components/meta/meta'
import Layout from 'components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import { Link } from 'gatsby'
import Video from "components/video"

interface Props {
  data: IndexQueryQuery
  location: Location
}

const NewPatientsPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="New Patients" />
      <section id="hero-section" className="hero-section">
        <Container>
          <div className="col-lg-6">
            <h1 className="text-black">
              New Patients
            </h1>
            <p className="hero-text text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan arcu sed metus congue, quis tincidunt massa tempus.
            </p>
            <Link to="contact">
              <button className="btn btn-sm btn-outline-dark contact-us-btn no-border-radius btn-black">
                <strong>
                  Contact Us <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </strong>
              </button>
            </Link>
          </div>
          <div className="col-lg-6">
            <Video
              videoSrcURL="https://www.youtube.com/embed/u31qwQUeGuM"
              videoTitle="Official Music Video on YouTube"
            />
          </div>
        </Container>
      </section>
      <section id="new-patients-section-1" className="page-section">
          <Container>
            <div class="col text-center">
              <h2 className ="text-black"> How to Become a New Patient
              </h2>
            </div>
          </Container>
          <Container>
            <div class="col text-center" id="about-us-section-2">
              <h3 className ="text-black">
                  Step One: Contact Us
              </h3>
              <p className =" text-black">
                  The very first thing you're going to want to do is reach out to us either online or over the phone. You're always welcome to come by in person if you prefer.
              </p>
              <h3 className ="text-black">
                  Step Two: Send Us an Appointment
              </h3>
              <p className ="text-black">
                  You will need to speak with our front desk and pick a time for an initial appointment. Our initial exam takes about 1 hour. Come in 30 minutes early to fill out the required paperwork.
              </p>
            </div>
            <div class="col text-center">
              <h3 className ="text-black">
                  Step Three: Get Tested
              </h3>
              <p className ="text-black">
                  The initial exam is very gentle and comfortable. We will test your body's nervous reaction to environmental stressors, nutritional stressors, and find any organ or system that needs attention.
              </p>
              <h3 className ="text-black">
                  Step Four: Commit A Program
              </h3>
              <p className ="text-black">
                After your initial exam we will schedule you for an additional appointment later in the week. This appointment is your report of findings. The practitioner will go over the test results. From there you will need to decide if you're ready to commit to your health and adopt our wellness program.
              </p>
            </div>
          </Container>
      </section>
      <section id="new-patients-section-2" className="text-center page-section bg-lightblue">
        <Container>
          <div className="col-md-12">
            <h2> FREQUENTLY ASKED QUESTIONS ABOUT NUTRITION RESPONSE TESTING</h2>
          </div>
        </Container>
        <Container>
          <div className="col-md-6 text-black">
            <h3>
              WHAT IS NUTRITION RESPONSE TESTING?
            </h3>
            <p>
              Nutrition Response Testing is a completely natural and non-invasive system for identifying underlying problems in a person or pet's health. We use your body's natural reflexes to determine what should be done with your nutrition.
            </p>
            <h3>
              WILL NUTRITION RESPONSE TESTING WORK FOR ME?
            </h3>
            <p>
              In our experience Nutrition Response Testing is the one thing that works when nothing else does. We do from time to time come across cases that cannot be helped, but usually everyone can benefit from better nutrition through Nutrition Response Testing.
            </p>
            </div>
              <div className="col-md-6 text-black">
                <h3>
                  HOW DOES THE TESTING WORK?
                </h3>
                <p>
                  The testing itself is very simple. We apply pressure to your organ's with a light touch and your body responds with a weak or strong reflex. With this base response given by your body we are able to determine what your body wants more or less of.
                </p>
                <h3>
                  WHERE CAN I LEARN MORE ABOUT NUTRITION RESPONSE TESTING?
                </h3>
                <p>
                  We have regular workshops where we teach about different aspects of natural healing through nutrition. Our workshops are always free and we can answer any and every question that you have while you're in attendance.
                </p>
              </div>
        </Container>
        <Container>
          <div className="col-md-12">
            <h1> PLEASE FILL OUT THE FORM BELOW OR SIGN UP FOR A WORKSHOP</h1>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default NewPatientsPage

export const query = graphql`
  query NewPatientsPageQuery {
    hero: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        adsense
      }
    }
  }
`
