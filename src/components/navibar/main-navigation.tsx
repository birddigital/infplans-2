import React from 'react'
import { Link } from 'gatsby'
import 'components/navibar/style.scss'
import Logo from '../../../content/images/logo.png'
import MobileDropdown from 'components/navibar/navibar-mobile'

interface Props {
  title: string
  location: Location
}

const MainNav: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <ul className="navbar-nav bd-navbar-nav justify-content-end">
      <li
        className={
          location.pathname === '/' ? 'nav-item active' : 'nav-item'
        }
      >
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
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
  )
}

export default MainNav
