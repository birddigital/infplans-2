import React, { Component } from 'react';
import { Link } from 'gatsby'

class MobileDropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        {
          this.state.showMenu
            ? (
              <button className="mobile-nav text-center" onClick={this.showMenu}>
                Close
              </button>
            )
            : (
              <button className="mobile-nav text-center" onClick={this.showMenu}>
                Open
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

export default MobileDropdown
