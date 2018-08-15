/* - Main import(s) 				-- */
import React, { Component } from 'react';

/* - Style import(s) 			-- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Login.css';
import EntryHeader from './EntryHeader';

/*/
*  Component: Login
*  @props {NA}
*  @EventHandler(s): NA
*  @Description: Signup/Login page for users of the site
/*/
class Login extends Component {
	constructor(props) {
		super(props);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmission = this.handleSubmission.bind(this);
		this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
		this.showSignUp = this.showSignUp.bind(this);

		this.state = {
			email: '',
			password: '',
			rememberMeIsChecked: false,

			emailValid: false,
			passwordValid: false,
		};
	}

	// TODO: combine these 3 functions into one
	handleEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	handlePasswordChange(event) {
		this.setState({ password: event.target.value });
	}

	handleRememberMeChange(event) {
		this.setState({ rememberMeIsChecked: !this.state.rememberMeIsChecked }, () => {
			console.log('Checked: ' + this.state.rememberMeIsChecked);
		});
	}

	handleSubmission(event) {
		console.log('Email: ' + this.state.email);
		console.log('Password: ' + this.state.password);
		console.log('Remember: ' + this.state.rememberMeIsChecked);

		// Validate password, email

		// Send data to parent, SignupLoginPage
		this.props.receiveLoginInformation(this.state.email, this.state.password, this.state.rememberMeIsChecked);

		event.preventDefault();
	}

	showSignUp(event) {
		this.props.signUpClicked();
	}

	render() {
		return (
			<div>
				<div className="login-box">
					<form class="form-signin" novalidate onSubmit={this.handleSubmission}>
						<EntryHeader entryText="Sign in below" />

						<label for="inputEmail" class="sr-only">
							Email address
						</label>

						<input
							type="email"
							id="inputEmail"
							class="form-control"
							placeholder="Email address"
							// required
							autoFocus
							value={this.state.email}
							onChange={this.handleEmailChange}
						/>

						<label for="inputPassword" class="sr-only">
							Password
						</label>
						<input
							type="password"
							id="inputPassword"
							class="form-control"
							placeholder="Password"
							// required
							value={this.state.password}
							onChange={this.handlePasswordChange}
						/>

						<div class="checkbox mb-3">
							<label>
								<input
									type="checkbox"
									value="remember-me"
									onChange={this.handleRememberMeChange}
									checked={this.state.rememberMeIsChecked}
								/>
								Remember me
							</label>
						</div>

						<button class="btn btn-lg btn-primary btn-block">Sign in</button>

						<hr />

						<button class="btn btn-lg btn-success btn-block" type="submit" onClick={this.showSignUp}>
							Sign up
						</button>

						<p class="mt-5 mb-3 text-muted">© 2018</p>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
