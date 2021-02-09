import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'
import { Link } from 'gatsby'
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import Video from "components/video"

interface Props {
  data: IndexQueryQuery
  location: Location
}

const AboutPage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const hero = data.hero?.childImageSharp?.fluid
  const about_us_bg = data.about_us_bg?.childImageSharp?.fluid
  const about_us_img = data.about_us_img?.childImageSharp?.fixed
  const giraffe = data.giraffe?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} title="About"/>
      <section id="hero-section" class="hero-section">
        <Container>
          <div className="col-lg-6">
            <h1 className="text-black">
              About
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
      <section id="about-us-section-1" className="page-section">
          <Container>
            <div className="col text-center bg-light mission-container">
              <h2> Our Mission </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan arcu sed metus congue, quis tincidunt massa tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam porta non ipsum non rutrum. Mauris elementum sapien nec dui luctus, id laoreet velit sagittis. Aliquam vitae mauris lacus. Sed auctor sem maximus urna lacinia, quis tempus purus vehicula. Pellentesque sem magna, laoreet vitae cursus at, feugiat sit amet ligula. Vivamus feugiat, leo ac malesuada scelerisque, purus nunc lacinia diam, et iaculis nulla nibh sit amet augue. Integer tellus dolor, faucibus quis augue ac, tristique sollicitudin sem. Pellentesque euismod erat erat, sed auctor nibh blandit eget.</p>
            </div>
          </Container>
      </section>
      <section id="about-us-section-2" className="page-section text-left">
        <Container>
          <div className="col-lg-6">
            <h2>Lorem Ipsum Dolor</h2>
            <p className="hero-text text-black">
              Quisque ornare urna vel aliquam convallis. Phasellus tincidunt fringilla odio a suscipit. Nam tristique suscipit efficitur. Pellentesque ornare, sapien ac pellentesque auctor, magna sem vulputate libero, ut ultricies ante velit quis libero. Vestibulum laoreet sollicitudin erat. Duis in rhoncus sapien. Fusce condimentum nisl sit amet tellus viverra semper.
            </p>
            <p className="hero-text text-black">
              Quisque ornare urna vel aliquam convallis. Phasellus tincidunt fringilla odio a suscipit. Nam tristique suscipit efficitur. Pellentesque ornare, sapien ac pellentesque auctor, magna sem vulputate libero, ut ultricies ante velit quis libero. Vestibulum laoreet sollicitudin erat. Duis in rhoncus sapien. Fusce condimentum nisl sit amet tellus viverra semper.
            </p>
          </div>
          <div className="col-lg-6">
            <Img fluid={giraffe} />
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    hero: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    about_us_bg: file(name: { eq: "spinach" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    about_us_img: file(name: { eq: "apple" }) {
      childImageSharp {
        fixed(width: 120, height: 120, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    giraffe: file(relativePath: { eq: "images/giraffe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 540, quality: 100) {
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
