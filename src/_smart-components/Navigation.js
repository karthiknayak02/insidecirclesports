/* - Main import(s) 				-- */
import React, { Component } from 'react';

/* - Helper import(s) 			-- */
import { Link } from 'react-router-dom';

/* - Component import(s) 		-- */
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

/* - Style import(s) 			-- */
import '../styles/Navigation.css';

/*/
 *  Component: Navigation
 *  @props {NA}
 *  @EventHandler(s): NA
 *  @Description: Navigation Bar
/*/
class Navigation extends Component {
	constructor(props) {
		super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="pull-sm-left" navbar>
              <NavItem>
                <Link className="nav-link" to ="/sport/nba">NBA</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to ="/sport/nfl">NFL</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to ="/sport/mlb">MLB</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to ="/sport/nhl">NHL</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to = "/sport/mls">MLS</Link>
              </NavItem>
            </Nav>
          </Collapse>
          <Nav className="abs-center-x">
            <Link to = "/" className="nav-link"><NavbarBrand >InsideCircleSports</NavbarBrand></Link>
          </Nav>
          <Nav className = "pull-sm-right" navbar>
            <NavItem>
              <Link className="nav-link" to ="/login">Login</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to ="/signup">SignUp</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;
