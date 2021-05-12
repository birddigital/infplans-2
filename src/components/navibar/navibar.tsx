import React from 'react'
import { Link } from 'gatsby'
import 'components/navibar/style.scss'
import Logo from '../../../content/images/logo.png'
import MobileDropdown from 'components/navibar/navibar-mobile'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <nav className="navbar navbar-expand navbar-light flex-column flex-md-row bg-primary" id="main-navigation">
      <div className="container">
        <div className="hidden-md-up">
          <MobileDropdown />
        </div>
        <div className="col-lg-6">
          <Link className="text-center" to="/">
            <img src={Logo} id="logo" alt="the body natural"/>
          </Link>

        </div>
        <div className="col-lg-6">

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
                  Support
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
                  My Account
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
              <li
                className={
                  location.pathname === '/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  <button>EyeMed</button>
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  <button>Show Plans</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      </div>
    </nav>
  )
}

export default Navibar
