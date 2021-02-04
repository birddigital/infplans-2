import React from 'react'
import { Link } from 'gatsby'
import 'components/navibar/style.scss'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <nav className="navbar navbar-expand navbar-light flex-column flex-md-row bg-primary" id="main-navigation">
      <div className="container">
        <div className="col-sm-6">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
        </div>
        <div className="col-sm-6">
          <div className="navbar-nav-scroll">
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
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  Profile
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
