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
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/services/" className="nav-link">
                  Services
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/products/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/products/" className="nav-link">
                  Products
                </Link>
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
                      location.pathname === '/species/horses/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/species/horses/" className="nav-link">
                      Horses
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
                <a href="/blog/" className="nav-link">
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
