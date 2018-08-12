/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */
import { Link } from 'react-router-dom';

/** component import(s)                                                 */
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

/** style import(s)                                                     */
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
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<nav>
				<Navbar color="light" light expand="md">
					<NavbarBrand>
						<Link to="/">InsideCircleSports</Link>
					</NavbarBrand>

					<Nav className="ml-auto" navbar>
						<NavItem className="nav-link-wrappers">
							<Link className="link" to="/sport/nfl">
								NFL
							</Link>
						</NavItem>
						<NavItem className="nav-link-wrappers">
							<Link className="link" to="/sport/nba">
								NBA
							</Link>
						</NavItem>
						<NavItem className="nav-link-wrappers">
							<Link className="link" to="/sport/nhl">
								NHL
							</Link>
						</NavItem>
						<NavItem className="nav-link-wrappers">
							<Link className="link" to="/sport/mlb">
								MLB
							</Link>
						</NavItem>
						<NavItem className="nav-link-wrappers">
							<Link className="link" to="/sport/mls">
								MLS
							</Link>
						</NavItem>
					</Nav>
				</Navbar>
			</nav>
		);
	}
}

export default Navigation;
