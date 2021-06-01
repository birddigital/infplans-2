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
import {FiClock} from '@react-icons/all-files/fi/FiClock'
import {FiPhoneCall} from '@react-icons/all-files/fi/FiPhoneCall'
import {FiMail} from '@react-icons/all-files/fi/FiMail'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const TeleMedicinePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const memd_logo = data.memd_logo?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="INF Tele Medicine - Visitors Insurance & Travel Insurance" />
      <BackgroundImage
        Tag="section"
        className="telemedicine-hero-section-bg"
        fluid={hero_background}
        alt="TeleMedicine"
      >
        <div id="telemedicine-hero-section">
          <Container>
            <div className="col-lg-12 text-center">
              <h1 className="text-white">
                TELEMEDICINE BY INF
              </h1>
              <button className="hero-btn"> Get a Quote </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <section id="telemedicine-section-1">
        <Container>
          <div className="col-lg-12">
            <div className="telemedicine-container text-center">
              <h2>
                No Additional Cost Telemedicine Services for members of INF when traveling to the United States**
              </h2>
              <p>
                TeleMedicine services offered by INF provide members & their families access to health providers instantly, from anywhere in the United States. All members who enroll in an INF Plan are automatically enrolled as members* of INF and when traveling to the United States, become eligible to take advantage of these non insurance services, which are provided at no additional cost to the member. Our Telemedicine service provides access to many of the same services offered by an in-person doctor visit or urgent care visit.
              </p>
              <p>
                *When you elect one of our insurance options you become a member of INF and will be charged a $10 membership fee.
              </p>
              <p>
                ** This service is not available when traveling to Canada or Mexico.
              </p>
              <p>
                Please note: Services described in this article are not affiliated with Crum & Forster SPC
              </p>
            </div>
          </div>
        </Container>
        <ContainerFluid>
          <div className="col-lg-12 text-center">
            <h3>
              Telemedicine Provider:
            </h3>
          </div>
          <div className="col-lg-7">
            <p>
              When you enroll in a plan with policy number starting with INF and are visiting the United States, you are automatically eligible for a MeMD Account as a member of INF. MeMD provides INF members with 24/7/365 access to MeMD’s highly qualified, licensed healthcare providers by phone, mobile app or computer.
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <Img fluid={memd_logo} className="memd-img"/>
            <button id="memd-enroll">Enroll in MeMD</button>
          </div>
        </ContainerFluid>
      </section>
      <section id="telemedicine-section-2">
        <Container>
          <div className="col-lg-12 text-center">
            <h2>
              Telemedicine FAQ
            </h2>
          </div>
          <div className="col-lg-12">
            <div className="accordion">
              <details>
                <summary aria-describedby="How much does Telemedicine cost?">How much does Telemedicine cost?</summary>
                <div className="accordion-content">
                  <p>
                    Our Telemedicine are offered at no cost so you get the best medical care possible at the lowest possible price. MeMD service comes at no additional cost to the member.
                  </p>
                </div>
              </details>
              <details>
                <summary aria-describedby="How do I use Telemedicine?">How do I use Telemedicine?</summary>
                <div className="accordion-content">
                  <p>
                    It's easy to use your Telemedicine account using modern technology. INF Telemedicine providers connect you to care when you need it most. Just follow these 3 simple steps:
                  </p>
                  <p>
                    <strong>Step 1: Request a visit</strong>
                  </p>
                  <p>
                    To get started, create an account. Then, using your phone, computer or mobile device, you can select if you would like to have a video or audio exam.
                  </p>
                  <p>
                    <strong>Step 2: Speak with you Provider</strong>
                  </p>
                  <p>
                    After reviewing your chart and medical history, your provider will start the visit. Discuss your symptoms and treatment options with a medical provider or therapist licensed to practice in your state.
                  </p>
                  <p>
                    <strong>Step 3: Receive Treatment</strong>
                  </p>
                  <p>
                    Follow your personalized treatment plan and get help feeling better faster. When medically necessary, your medical provider may write you a prescription, which you can pick-up at your local pharmacy.
                  </p>
                </div>
              </details>
              <details>
                <summary aria-describedby="Can I get a prescription?">Can I get a prescription?</summary>
                <div className="accordion-content">
                  <p>
                    Yes. Telemedicine will provide prescription & prescription refills. However, it is up to the doctor to recommend the best treatment. Doctors do not issue prescriptions for substances controlled by the DEA, non-therapeutic, and/or certain other drugs which may be harmful because of their potential for abuse.
                  </p>
                  <p>
                    Please note that prescriptions may incur a cost if they are not eligible expenses in the insurance policies.
                  </p>
                </div>
              </details>
              <details>
                <summary aria-describedby="How to enroll in MeMD">How to enroll in MeMD</summary>
                <div className="accordion-content">
                  <p>
                    When you enroll in a plan with policy number starting with INF and are visiting the United States, you are automatically eligible for a MeMD Account as a member of INF. MeMD provides INF members with 24/7/365 access to MeMD’s highly qualified, licensed healthcare providers by phone, mobile app or computer.
                  </p>
                </div>
              </details>
              <details>
                <summary aria-describedby="When should I use Telemedicine?">When should I use Telemedicine?</summary>
                <div className="accordion-content">
                  <p>
                    Telemedicine works similar to any urgent care clinic or doctor visit. That being said- you are able to visit a Telemedicine doctor for any of the following issues (list is not all inclusive):
                  </p>
                  <div className="row">
                    <div className="col-lg-4">
                      <ul>
                        <li>
                           Abrasions
                        </li>
                        <li>
                          Acne
                        </li>
                        <li>
                          Allergies
                        </li>
                        <li>
                           Asthma
                        </li>
                        <li>
                          Bacterial Vaginosis
                        </li>
                        <li>
                          Birth Control
                        </li>
                        <li>
                          Bites and Stings
                        </li>
                        <li>
                          Body Aches
                        </li>
                        <li>
                          Bronchitis
                        </li>
                        <li>
                          Bruises
                        </li>
                        <li>
                          Cough
                        </li>
                        <li>
                          Dehydration
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-4">
                      <ul>
                        <li>
                            Shortness-of-Breath
                        </li>
                        <li>
                           Medication Management
                        </li>
                        <li>
                          Domestic Violence
                        </li>
                        <li>
                           Urinary Tract Infections
                        </li>
                        <li>
                          Insomnia
                        </li>
                        <li>
                          Maternal Health and Post-Partum
                        </li>
                        <li>
                          Mood Swings
                        </li>
                        <li>
                          Obsessive Compulsive Disorder
                        </li>
                        <li>
                          Panic Attacks
                        </li>
                        <li>
                          Diarrhea
                        </li>
                        <li>
                          Earache
                        </li>
                        <li>
                          Light-Headedness
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-4">
                      <ul>
                        <li>
                            Parenting
                        </li>
                        <li>
                          Performance Coaching
                        </li>
                        <li>
                          PTSD
                        </li>
                        <li>
                           Relationships
                        </li>
                        <li>
                           Sexual Abuse
                        </li>
                        <li>
                          Sexuality
                        </li>
                        <li>
                          Social Anxiety
                        </li>
                        <li>
                          Spirituality
                        </li>
                        <li>
                          Stress Management
                        </li>
                        <li>
                          Substance Abuse
                        </li>
                        <li>
                          Trauma
                        </li>
                        <li>
                          Women’s Issues
                        </li>
                      </ul>
                    </div>

                  </div>
                  <p>
                    For minor health concerns, you don’t have to wait in an emergency room or urgent care center for diagnosis and treatment. Our Telemedicine service provides a highly qualified team of medical providers who can evaluate common conditions like those listed above.
                  </p>
                </div>
              </details>
              <details>
                <summary aria-describedby="Can Telemedicine handle my emergency situations?">Can Telemedicine handle my emergency situations?</summary>
                <div className="accordion-content">
                  <p>
                    Telemedicine is designed to handle non-emergent medical problems. You should NOT use it if you are experiencing a medical emergency.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default TeleMedicinePage

export const query = graphql`
  query TeleMedicinePageQuery {
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
    hero_background: file(name: { eq: "telemedicine-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    memd_logo: file(name: { eq: "memd-logo" }) {
      childImageSharp {
        fluid(maxWidth: 468, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
