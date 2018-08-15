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
		this.showSignupDialog = this.showSignupDialog.bind(this);
		this.showLoginDialog = this.showLoginDialog.bind(this);

		this.state = {
			signupIsHidden: true,
			loginIsHidden: false,
		};
	}

	handleLoginSubmit(email, password, rememberMeIsChecked) {
		console.log(email + password + rememberMeIsChecked);
	}

	showSignupDialog() {
		this.setState({
			signupIsHidden: false,
			loginIsHidden: true,
		});
	}

	showLoginDialog() {
		this.setState({
			signupIsHidden: true,
			loginIsHidden: false,
		});
	}

	render() {
		return (
			<div className="signup-login-page">
				{!this.state.loginIsHidden && (
					<Login receiveLoginInformation={this.handleLoginSubmit} signUpClicked={this.showSignupDialog} />
				)}
				{!this.state.signupIsHidden && <Signup loginClicked={this.showLoginDialog} />}
			</div>
		);
	}
}

export default SignupLoginPage;
