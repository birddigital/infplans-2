import React, { Component } from 'react';
import { Link } from 'gatsby'
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaBars } from "@react-icons/all-files/fa/FaBars";

class MobileNavigation extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      hideMenu: true,
    };

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true });
  }

  hideMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: false });
  }

  render() {
    return (
      <div>
        {
          this.state.showMenu
            ? (
              <button className="mobile-nav text-center" onClick={this.hideMenu}>
                <FaTimes size="21px" className="svg-icon-middle text-white"/>
              </button>
            )
            : (
              <button className="mobile-nav text-center" onClick={this.showMenu}>
                <FaBars size="21px" className="svg-icon-middle text-white"/>
              </button>
            )
        }
        {
          this.state.showMenu
            ? (
              <div
                className="menu mobile-menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div className="hidden-md-up">
                  <ul className="navbar-nav bd-navbar-nav justify-content-end">
                    <li
                      className={
                        location.pathname === '/'
                          ? 'nav-item active'
                          : 'nav-item'
                      }
                    >
                      <Link to="/" className="nav-link">
                        Nav 1
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
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default MobileNavigation
