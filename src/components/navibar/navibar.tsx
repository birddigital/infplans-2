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
                  location.pathname === '/about/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/about/" className="nav-link">
                  About
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/services/'
                    ? 'nav-item active nav-dropdown'
                    : 'nav-item nav-dropdown'
                }
              >
                <Link to="/services/" className="nav-link">
                  Services
                </Link>
                <ul className="nav-submenu">
                  <li
                    className={
                      location.pathname === '/services/nutrition-coaching/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/services/nutrition-coaching/" className="nav-link">
                      Nutrition Coaching
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/services/the-emotion-code/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/services/the-emotion-code/" className="nav-link">
                      The Emotion Code
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/services/the-body-code/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/services/the-body-code/" className="nav-link">
                      The Body Code
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/services/nutrition-response-testing-for-animals/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/services/nutrition-response-testing-for-animals/" className="nav-link">
                      Nutrition Response Testing for Animals
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/services/equine-touch-bodywork/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/services/equine-touch-bodywork/" className="nav-link">
                      Equine Touch Bodywork
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  location.pathname === '/products/'
                    ? 'nav-item active nav-dropdown'
                    : 'nav-item nav-dropdown'
                }
              >
                <Link to="/products/" className="nav-link">
                  Products
                </Link>
                <ul className="nav-submenu">
                  <li
                    className={
                      location.pathname === '/products/essential-oils/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/products/essential-oils/" className="nav-link">
                      Essential Oils
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/products/herbs/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/products/herbs/" className="nav-link">
                      Herbs
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/products/whole-food-supplements/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/products/whole-food-supplements/" className="nav-link">
                      Whole Food Supplements
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/products/homeopathic-remedies/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/products/homeopathic-remedies/" className="nav-link">
                      Homeopathic Remedies
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  location.pathname === '/species/'
                    ? 'nav-item active nav-dropdown'
                    : 'nav-item nav-dropdown'
                }
              >
                <a href="#" className="nav-link">
                  Species
                </a>
                <ul className="nav-submenu">
                  <li
                    className={
                      location.pathname === '/species/horses/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/species/horses/" className="nav-link">
                      Horses
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/species/dogs/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/species/dogs/" className="nav-link">
                      Dogs
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/species/mules/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/species/mules/" className="nav-link">
                      Mules
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/species/donkeys/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/species/donkeys/" className="nav-link">
                      Donkeys
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/species/goats/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/species/goats/" className="nav-link">
                      Goats
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/species/cows/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/species/cows/" className="nav-link">
                      Cows
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/species/cats/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/species/cats/" className="nav-link">
                      Cats
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  location.pathname === '/patients/'
                    ? 'nav-item active nav-dropdown'
                    : 'nav-item nav-dropdown'
                }
              >
                <a href="#" className="nav-link">
                  Patients
                </a>
                <ul className="nav-submenu">
                  <li
                    className={
                      location.pathname === '/patients/new-patients/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/patients/new-patients/" className="nav-link">
                      New Patients
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/patients/cows/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/patients/existing-patients/" className="nav-link">
                      Existing Patients
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  location.pathname === '/Blog/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/blog/" className="nav-link">
                  Blog
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/contact/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/contact/" className="nav-link">
                  Contact
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
