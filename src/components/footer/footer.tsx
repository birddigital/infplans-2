import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

import Logo from '../../../content/images/footer-logo.png'

const Footer = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        bg: file(name: { eq: "bg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
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
        },
      }
    `
  )
  const meta = data.site?.meta

  // Set ImageData.
  const bg = data.bg.childImageSharp.fluid

  return (
    <div>
      <div id="footer">
        <ContainerFluid>
          <div className="col-lg-3 text-left">
            <img src={Logo} />
            <p>INFPlans.com provides innovating visitor insurance options for international travelers</p>
          </div>
          <div className="col-lg-3">
            <h4>Navigate Our Site</h4>
            <p>Home</p>
            <p>Apply</p>
            <p>Plans</p>
            <p>Extend</p>
          </div>
          <div className="col-lg-3">
            <h4>Our Plan</h4>
            <p>Standard</p>
            <p>Elite Network</p>
            <p>Premium</p>
            <p>Traveler USA</p>
            <p>INF BMI</p>
          </div>
          <div className="col-lg-3">
            <h4>About Our Company</h4>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Why INF?</p>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">© INFPLANS {new Date().getFullYear()}</li>
              <li className="list-inline-item">Privacy policy</li>
              <li className="list-inline-item">Cookies policy</li>
              <li className="list-inline-item">Terms of use</li>
            </ul>
          </div>
        </ContainerFluid>
      </div>
    </div>

  )
}

const StyledBackgroundSection = styled(Footer)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
