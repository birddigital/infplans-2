import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

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
      <div id="footer-map">
        <ContainerFluid>
          <div className="map-frame">
            <iframe width="100%" height="300px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.107737267264!2d-2.2301981846090193!3d53.484404772062845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb128ce95b9bf%3A0x4f61665f8424cc34!2sThe%20Body%20Natural!5e0!3m2!1sen!2sph!4v1612778213974!5m2!1sen!2sph"></iframe>
          </div>
        </ContainerFluid>
      </div>
      <div id="footer">
        <Container>
          <div className="col-md-12">
            <p className="footer-copyright copyright text-center">Copyrights © {meta.title} {new Date().getFullYear()}. All Rights Reserved</p>
          </div>
        </Container>
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
