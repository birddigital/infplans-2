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
  )
}

export default MainNav
