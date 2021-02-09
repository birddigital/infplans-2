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
                <i className="fa fa-times"></i>
              </button>
            )
            : (
              <button className="mobile-nav text-center" onClick={this.showMenu}>
                <i className="fa fa-bars"></i>
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