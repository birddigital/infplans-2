import React from 'react'
import { Link } from 'gatsby'
import 'components/navibar/style.scss'
import Logo from '../../../content/images/logo.png'
import Megaphone from '../../../content/images/megaphone-navi.png'
import Whatsapp from '../../../content/images/whatsapp-navi.png'
import MobileDropdown from 'components/navibar/navibar-mobile'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <div>
      <div className="navibar-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <p><strong>COVID-19</strong>:For answers to frequently asked questions, please see our <a href="" target="_blank" id="resource-page">COVID-19 Resource Page</a></p>
            </div>
            <div className="col-lg-3 text-right">
              <a href="tel:4085403601"><p>Tel:408-540-3601</p></a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand navbar-light flex-column flex-md-row" id="main-navigation">
          <div className="container-fluid">
            <div className="hidden-md-up">
              <MobileDropdown />
            </div>
            <div className="col-lg-3">
              <Link className="text-center" to="/">
                <img src={Logo} id="logo" alt="the body natural"/>
              </Link>

            </div>
            <div className="col-lg-9">

              <div className="navbar-nav-scroll hidden-md-down">
                <ul className="navbar-nav bd-navbar-nav justify-content-end">
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active nav-dropdown'
                        : 'nav-item nav-dropdown'
                    }
                  >
                    <Link to="/inf-easy-select" className="nav-link">
                      Quote
                    </Link>
                    <ul className="nav-submenu">
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/visitors-insurance-quote" className="nav-link">
                          Get A Quote
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/inf-easy-select-premiums" className="nav-link">
                          Premiums
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active nav-dropdown'
                        : 'nav-item nav-dropdown'
                    }
                  >
                    <Link to="/apply" className="nav-link">
                      Apply
                    </Link>
                    <ul className="nav-submenu">
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/bmi-apply" className="nav-link">
                          Inf BMI Travel Plans
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/diplomat-america" className="nav-link">
                          Diplomat America
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/ihc-stm" className="nav-link">
                          IHC Plans
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/diplomat-international" className="nav-link">
                          Diplomat International
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/extend" className="nav-link">
                      Extend
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active nav-dropdown'
                        : 'nav-item nav-dropdown'
                    }
                  >
                    <Link to="" className="nav-link">
                      Support
                    </Link>
                    <ul className="nav-submenu">
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/faq" className="nav-link">
                          FAQ
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/claims" className="nav-link">
                          Claims
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/plan-id-cards" className="nav-link">
                          Plan ID Cards
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/request-a-quote" className="nav-link">
                          Request A Quote
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/first-health-ppo" className="nav-link">
                          Provider Search
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/contact-us" className="nav-link">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active nav-dropdown'
                        : 'nav-item nav-dropdown'
                    }
                  >
                    <Link to="" className="nav-link">
                      My Account
                    </Link>
                    <ul className="nav-submenu">
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/members" className="nav-link">
                          Members
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link to="/producers" className="nav-link">
                          Producers
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">
                      <button id="btn-2">EyeMed</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button id="btn-1">Show Plans</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navibar
