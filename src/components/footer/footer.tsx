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
        desktop: file(relativePath: { eq: "contact-us-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        accredited: file(relativePath: { eq: "accredited.png" }) {
          childImageSharp {
            fixed(quality: 100, width: 293, height: 61) {
              ...GatsbyImageSharpFixed
            }
          }
        },

      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  const accredited = data.accredited.childImageSharp.fixed

  return (
    <div>
      <div id="footer-contact-us" className="text-white">
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Container>
            <div className="col-md-6">
              <h2>Who is this for?</h2>
              <ul className="fa-ul">
                <li><Link to="/"><span className="fa-li"><i className="fa fa-check"></i></span>Horses</Link></li>
                <li><Link to="/"><span className="fa-li"><i className="fa fa-check"></i></span>Dogs</Link></li>
                <li><Link to="/"><span className="fa-li"><i className="fa fa-check"></i></span>Mules</Link></li>
                <li><Link to="/"><span className="fa-li"><i className="fa fa-check"></i></span>Donkeys</Link></li>
                <li><Link to="/"><span className="fa-li"><i className="fa fa-check"></i></span>Goats</Link></li>
                <li><Link to="/"><span className="fa-li"><i className="fa fa-check"></i></span>Cows</Link></li>
                <li><Link to="/"><span className="fa-li"><i className="fa fa-check"></i></span>Cats</Link></li>
              </ul>
              <div className="footer-icon-container">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa fa-skype"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Contact Us</h2>
             <form action="/" id="contact-form">
               <input type="text" id="name" name="name" placeholder="Name*" required/>
               <input type="email" id="email" name="email" placeholder="Email*" required />
               <input type="tel" id="phone" name="phone" placeholder="Phone*" required />
               <textarea id="subject" name="subject" rows="5" placeholder="Tell Us What's Wrong*" required></textarea>
               <input type="submit" value="Send" /> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
             </form>
            </div>
          </Container>
        </BackgroundImage>
      </div>
      <div id="footer-contact-info" className="text-center text-white">
        <Container>
          <div className="col-md-4">
            <h2>Hours</h2>
            <p>
              Monday 8 – 6:30
            </p>
            <p>
              Tuesday 8 – 5
            </p>
            <p>
              Wednesday 9 – 6:30
            </p>
            <p>
              Thursday 9 – 5
            </p>
            <p>
              Fri & Sat – Call For Hours
            </p>
            <button className="btn btn-outline-white">REQUEST AN APPOINTMENT</button>
          </div>
          <div className="col-md-4">
            <h2>Location</h2>
            <p>
              3376 Niagara Falls Blvd. Suite 5 
            </p>
            <p>
              N. Tonawanda, NY 14120
            </p>
            <p>
              <strong><a href="tel:716-264-4248">716-264-4248</a></strong>
            </p>
            <button className="btn btn-outline-white">GET DIRECTIONS</button>
          </div>
          <div className="col-md-4">
            <a href="tel:716-264-4248" className="big-cta">Call Us: <br />(716) 264 4248</a>
            <Img fixed={accredited} />
            <button className="btn btn-outline-white">CALL NOW</button>
          </div>
          <div className="col-md-12">
            <p className="copyright text-center">Copyrights © The Body Natural {new Date().getFullYear()}. All Rights Reserved</p>
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