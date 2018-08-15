/* - Main import(s) 				-- */
import React, { Component } from 'react';

/* - Style import(s) 			-- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/SignupLoginPage.css';

import Login from './Login';
import Signup from './Signup';

/*/
*  Component: SignupLogin
*  @props: TBD
*  @EventHandler(s): TBD
*  @Description: Signup/Login page
/*/
class SignupLoginPage extends Component {
	constructor(props) {
		super(props);
		this.alternateForms = this.alternateForms.bind(this);

		this.state = {
			signupIsHidden: true,
			loginIsHidden: false,
		};
	}

	/* Receive data from login submission and send to backend */
	handleLoginSubmit(email, password, rememberMeIsChecked) {
		console.log('Submitted login information:\n');
		console.log('Email: ' + email);
		console.log('Password: ' + password);
		console.log('Remember Me checkbox: ' + rememberMeIsChecked);
	}

	/* Receive data from sign up submission and send to backend */
	handleSignupSubmit(firstName, lastName, email, password, confirmPassword) {
		console.log('Submitted signup information:\n');
		console.log('First: ' + firstName);
		console.log('Last: ' + lastName);
		console.log('Email: ' + email);
		console.log('Password: ' + password);
		console.log('Confirm Password: ' + confirmPassword);
	}

	/* Alternate form displayed between sign in and sign up */
	alternateForms() {
		this.setState({
			signupIsHidden: !this.state.signupIsHidden,
			loginIsHidden: !this.state.loginIsHidden,
		});
	}

	/* Display either a login or signup form dependent on user selection */
	render() {
		return (
			<div className="signup-login-page">
				{!this.state.loginIsHidden && (
					<Login onReceiveLoginInformation={this.handleLoginSubmit} signUpClicked={this.alternateForms} />
				)}
				{!this.state.signupIsHidden && (
					<Signup onReceieveSignupInformation={this.handleSignupSubmit} loginClicked={this.alternateForms} />
				)}
			</div>
		);
	}
}

export default SignupLoginPage;
