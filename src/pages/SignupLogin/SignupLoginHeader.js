/* - Main import(s) 				-- */
import React, { Component } from 'react';

/* - Style import(s) 			-- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/SignupLoginHeader.css';

/*/
*  Component: SignupLoginHeader
*  @props: TBD
*  @EventHandler(s): TBD
*  @Description: Logo and sign up/in text display
/*/
class SignupLoginHeader extends Component {
	constructor(props) {
		super(props);
	}

	/* Show IC logo and text depending on the current form */
	render() {
		return (
			<div className="entry-header">
				<img class="mb-4" src="https://s8.postimg.cc/qh5ck71gl/test_logo.png" alt="" width="102" height="102" />
				<h1 class="h3 mb-3 font-weight-normal"> {this.props.entryText}</h1>
			</div>
		);
	}
}

export default SignupLoginHeader;
