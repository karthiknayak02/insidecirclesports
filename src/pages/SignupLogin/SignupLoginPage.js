/* - Main import(s) 				-- */
import React, { Component } from 'react';

/* - Style import(s) 			-- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/SignupLoginPage.css';

import Login from './Login';
import Signup from './Signup';

/*/
*  Component: SignupLogin
*  @props {NA}
*  @EventHandler(s): NA
*  @Description: Signup/Login page for users of the site
/*/
class SignupLoginPage extends Component {
	constructor(props) {
		super(props);
	}

	handleLoginSubmit(email, password, rememberMeIsChecked) {
		alert(email + password + rememberMeIsChecked);
	}

	render() {
		return (
			<div className="signup-login-page">
				<Login receiveLoginInformation={this.handleLoginSubmit} />
				<Signup />
			</div>
		);
	}
}

export default SignupLoginPage;
