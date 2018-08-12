/* - Main import(s) 				-- */
import React, { Component } from 'react';

/* - Style import(s) 			-- */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SignupLogin.css';

/*/
*  Component: SignupLogin
*  @props {NA}
*  @EventHandler(s): NA
*  @Description: Signup/Login page for users of the site
/*/
class SignupLogin extends Component {
	constructor(props) {
		super(props);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmission = this.handleSubmission.bind(this);
		this.handleRememberMeChange = this.handleRememberMeChange.bind(this);

		this.state = {
			email: '',
			password: '',
			rememberMeIsChecked: true,
		};
	}

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

		alert(
			'Email, password, remember me status: ' +
				this.state.email +
				', ' +
				this.state.password +
				', ' +
				this.state.rememberMeIsChecked
		);

		event.preventDefault();
	}

	render() {
		return (
			<div className="login-box">
				<form class="form-signin">
					<img class="mb-4" src="https://s8.postimg.cc/qh5ck71gl/test_logo.png" alt="" width="102" height="102" />

					<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

					<label for="inputEmail" class="sr-only">
						Email address
					</label>
					<input
						type="email"
						id="inputEmail"
						class="form-control"
						placeholder="Email address"
						required=""
						autoFocus=""
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
						required=""
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

					<button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmission}>
						Sign in
					</button>

					<p class="mt-5 mb-3 text-muted">© 2018</p>
				</form>
			</div>
		);
	}
}

export default SignupLogin;
