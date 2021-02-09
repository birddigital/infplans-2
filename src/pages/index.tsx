import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import styled from 'styled-components'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import EssentialOils from '../../content/images/essential-oils-img.png'
import Herbs from '../../content/images/herbs-img.png'
import WholeFoodSupplements from '../../content/images/whole-foods-supplements-img.png'
import Homeopathic from '../../content/images/homeopathic-remedies-img.png'
import FormIcon from '../../content/images/form-icon.png'
import Animals from '../../content/images/animals.png'
import ServiceShape from '../../content/images/services_shape.png'


interface Props {
  data: IndexQueryQuery
  location: Location
}

const HomePage: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  const posts = data.remark.posts
  const hero = data.hero?.childImageSharp?.fluid
  const hero_background = data.hero_background?.childImageSharp?.fluid
  const services_shape = data.services_shape?.childImageSharp?.fixed
  const animals = data.animals?.childImageSharp?.fluid
  const new_patients_bg = data.new_patients_bg?.childImageSharp?.fluid
  const our_products_bg = data.our_products_bg?.childImageSharp?.fluid
  const services_bg = data.services_bg?.childImageSharp?.fluid
  const contact_us_bg = data.contact_us_bg?.childImageSharp?.fluid
  const blog_bg = data.blog_bg?.childImageSharp?.fluid
  const horse = data.horse?.childImageSharp?.fluid
  const milk = data.milk?.childImageSharp?.fluid
  const smiley = data.smiley?.childImageSharp?.fluid
  const nutrition_coaching = data.nutrition_coaching?.childImageSharp?.fluid
  const dog = data.dog?.childImageSharp?.fluid
  const what_we_do_bg = data.what_we_do_bg?.childImageSharp?.fluid
  const guarantee_badge = data.guarantee_badge?.childImageSharp?.fluid
  const what_we_do = data.what_we_do?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <Meta site={meta} />
      <BackgroundImage
        Tag="section"
        className="hero-section-bg"
        fluid={hero_background}
        backgroundColor={`#e9f4f8`}
        alt="the body natural"
      >
        <div id="hero-section">
          <Container>
            <div className="col-lg-4">
              <h1 className="text-black">
                The Body <br />Natural
              </h1>
              <p className="hero-text text-black">
                Nutrition Response Testing <br />For Animals
              </p>
              <Link to="contact">
                <button className="btn btn-sm btn-outline-dark contact-us-btn no-border-radius btn-black">
                  <strong>
                    Contact Us <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </strong>
                </button>
              </Link>
            </div>
            <div className="col-lg-8">
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <BackgroundImage
        Tag="div"
        className="services-bg"
        fluid={services_bg}
        backgroundColor={`#040e18`}
        alt="services"
      >
        <div id="home-services-section">
          <Container>
            <div className="col">
              <div className="rounded service-column">
                <Img fixed={services_shape} className="service-shape" />
                <div className="service-content">
                  <Img fluid={nutrition_coaching} className="service-img" />
                  <p className="text-center">Nutrition <br />Coaching</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="rounded service-column">
                <Img fixed={services_shape} className="service-shape" />
                <div className="service-content">
                  <Img fluid={smiley} className="service-img" />
                  <p className="text-center">The Emotion <br />Code</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="rounded service-column">
                <Img fixed={services_shape} className="service-shape" />
                <div className="service-content">
                  <Img fluid={dog} className="service-img" />
                  <p className="text-center">The Body <br />Code</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="rounded service-column">
                <Img fixed={services_shape} className="service-shape" />
                <div className="service-content">
                  <Img fluid={milk} className="service-img" />
                  <p className="text-center">Nutrition Response Testing for animals</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="rounded service-column">
                <Img fixed={services_shape} className="service-shape" />
                <div className="service-content">
                  <Img fluid={horse} className="service-img" />
                  <p className="text-center">Equine Touch Bodywork</p>
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div className="col-lg-12">
              <img src={Animals} className="service-image-animals" />
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        className="our-products-bg"
        fluid={our_products_bg}
        backgroundColor={`#e9f4f8`}
        alt="our products"
      >
        <div id="home-products-sections" className="text-center">
          <Container>
            <div className="col-lg-12">
              <h2 className="text-light text-center">Our Products</h2>
            </div>
            <div className="col">
              <div className="product-column bg-white">
                <div className="product-container">
                  <img src={EssentialOils} alt="essential oils" />
                </div>
                <p className="text-center single-line">Essential Oils</p>
              </div>
            </div>
            <div className="col">
              <div className="product-column bg-white">
                <div className="product-container">
                  <img src={Herbs} alt="herbs" />
                </div>
                <p className="text-center single-line">Herbs</p>
              </div>
            </div>
            <div className="col">
              <div className="product-column bg-white">
                <div className="product-container">
                  <img src={WholeFoodSupplements} alt="whole food supplements" />
                </div>
                <p className="text-center">Whole Food Supplements</p>
              </div>
           </div>
            <div className="col">
              <div className="product-column bg-white">
                <div className="product-container">
                  <img src={Homeopathic} alt="homeopathic remedies" />
                </div>
                <p className="text-center">Homeopathic Remedies</p>
              </div>
            </div>
            <div className="col">
              <div className="product-column bg-white">
                <div className="product-container">
                  <img src={EssentialOils} alt="laser therapy" />
                </div>
                <p className="text-center single-line">Laser Therapy</p>
              </div>
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        className="new-patients-bg"
        fluid={new_patients_bg}
        backgroundColor={`#040e18`}
        alt="our products"
      >
        <div id="home-new-patients-section">
          <Container>
            <div className="col-lg-12">
              <h2 className="text-white text-light">
                New Patients
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-column text-center">
                    <div className="icon-container rounded-circle">
                      <img src={FormIcon} />
                    </div>
                    <p className="text-light">New Patient Routing Form</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-column text-center">
                    <div className="icon-container rounded-circle">
                      <img src={FormIcon} />
                    </div>
                    <p className="text-light">New Patient Introduction Form</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-column text-center">
                    <div className="icon-container rounded-circle">
                      <img src={FormIcon} />
                    </div>
                    <p className="text-light">Food Intake Form</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">

            </div>
          </Container>
        </div>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        className="what-we-do-bg"
        fluid={what_we_do_bg}
        backgroundColor={`#e9f4f8`}
        alt="what we do"
      >
        <div id="home-what-we-do">
          <Container>
            <div className="col-lg-6">
              <h3>ABOUT US</h3>
              <h2 className="text-black">What We Do</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="row guarantee-badge-row">
                <div className="col-lg-7">
                </div>
                <div className="col-lg-5">
                  <Img fluid={guarantee_badge} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Img fluid={what_we_do} />
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        className="blog-bg"
        fluid={blog_bg}
        backgroundColor={`#040e18`}
        alt="blogs"
      >
        <div id="home-blog-posts">
          <Container>
            <div className="col-lg-12">
              <h2 className="text-black text-center">
                Our Blogs
              </h2>
              <p className="text-black text-center">
                The relatively unrestricted circulation of information — including revolutionary ideas — transcended borders, captured the masses in the Reformation and threatened the power of political and religious authorities; the sharp increase in literacy broke.
              </p>
            </div>
            {posts.map((post, i) => (
              <Post
                data={post as PostByPathQuery}
                options={{
                  isIndex: true,
                }}
                key={i}
              />
            ))}
          </Container>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
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
    hero: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    hero_background: file(name: { eq: "hero-section-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    services_shape: file(name: { eq: "services_shape" }) {
      childImageSharp {
        fixed(width: 206, height: 206, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    },
    animals: file(name: { eq: "animals" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    new_patients_bg: file(name: { eq: "new-patients-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    our_products_bg: file(name: { eq: "our-products-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    services_bg: file(name: { eq: "services-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    contact_us_bg: file(name: { eq: "contact-us-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    blog_bg: file(name: { eq: "blog-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    what_we_do_bg: file(name: { eq: "what-we-do-bg" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    horse: file(name: { eq: "horse" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    milk: file(name: { eq: "milk" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    smiley: file(name: { eq: "smiley" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    nutrition_coaching: file(name: { eq: "apple" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    dog: file(name: { eq: "dog" }) {
      childImageSharp {
        fluid(maxWidth: 75, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    guarantee_badge: file(name: { eq: "20years" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    what_we_do: file(name: { eq: "what-we-do" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
