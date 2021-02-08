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
          <div className="col-lg-4">
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
          <div className="col-lg-4">
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
          <div className="col-lg-4">
            <a href="tel:716-264-4248" className="big-cta">Call Us: <br />(716) 264 4248</a>
            <Img fixed={accredited} />
            <button className="btn btn-outline-white">CALL NOW</button>
          </div>
        </Container>
      </div>
      <div id="footer-map">
        <ContainerFluid>
          <div className="map-frame">
            <iframe width="100%" height="300px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.107737267264!2d-2.2301981846090193!3d53.484404772062845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb128ce95b9bf%3A0x4f61665f8424cc34!2sThe%20Body%20Natural!5e0!3m2!1sen!2sph!4v1612778213974!5m2!1sen!2sph"></iframe>
          </div>
        </ContainerFluid>
      </div>
      <div id="site-footer">
        <Container>
          <div className="footer-social">
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
        </Container>
        <Container>
          <div className="search-container">
            <form action="/" id="search-bar">
              <input type="text" placeholder="Search.." name="search"/>
               <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
        </Container>
        <Container>
          <div className="footer-link">
            <ul>
              <li><Link to="/">Terms of Service</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">HIPAA</Link></li>
            </ul>
          </div>
        </Container>
        <Container>
          <div className="footer-content text-center">
            All documentation and practices are based on the research and opinions of our practitioners and have not been evaluated/approved by the FDA.<br/>
            We do not diagnose or treat diseases; participation is at the sole discretion of the user. Individual results may vary.
          </div>
        </Container>
        <Container>
          <div className="col-md-12">
            <p className="footer-copyright copyright text-center">Copyrights © The Body Natural {new Date().getFullYear()}. All Rights Reserved</p>
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