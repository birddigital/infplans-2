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
                  About
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/'
                    ? 'nav-item active nav-dropdown'
                    : 'nav-item nav-dropdown'
                }
              >
                <Link to="/" className="nav-link">
                  Dropdown
                </Link>
                <ul className="nav-submenu">
                  <li
                    className={
                      location.pathname === '/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/" className="nav-link">
                      Dropdown Menu
                    </Link>
                  </li>
                </ul>
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
