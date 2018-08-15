/* - Main import(s) 				-- */
import React, { Component } from 'react';

/* - Style import(s) 			-- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Login.css';
import SignupLoginHeader from './SignupLoginHeader';

/*/
*  Component: Login
*  @props: TBD
*  @EventHandler(s): TBD
*  @Description: Login form
/*/
class Login extends Component {
	constructor(props) {
		super(props);
		this.handleLoginSubmission = this.handleLoginSubmission.bind(this);
		this.showSignup = this.showSignup.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

		this.state = {
			email: '',
			password: '',
			rememberMe: false,
		};
	}

	/* Change email, password, checkbox values when user interacts with them */
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
		});
	}

	/* Propagate data to parent component to send to backend */
	handleLoginSubmission(event) {
		this.props.onReceiveLoginInformation(this.state.email, this.state.password, this.state.rememberMe);
		event.preventDefault();
	}

	/* Display the sign up form if the user desires */
	showSignup(event) {
		this.props.signUpClicked();
	}

	/* Show login form with sign in and sign up buttons at bottom */
	render() {
		return (
			<div>
				<div className="login-box">
					<form class="form-signin" novalidate onSubmit={this.handleLoginSubmission}>
						<SignupLoginHeader entryText="Sign in below" />

						<label for="inputEmail" class="sr-only">
							Email address
						</label>

						<input
							name="email"
							type="email"
							class="form-control"
							placeholder="Email address"
							autoFocus
							value={this.state.email}
							onChange={this.handleInputChange}
						/>

						<label for="inputPassword" class="sr-only">
							Password
						</label>
						<input
							name="password"
							type="password"
							class="form-control"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleInputChange}
						/>

						<div class="checkbox mb-3">
							<label>
								<input
									name="rememberMe"
									type="checkbox"
									value="remember-me"
									onChange={this.handleInputChange}
									checked={this.state.rememberMe}
								/>
								Remember me
							</label>
						</div>

						<button class="btn btn-lg btn-primary btn-block">Sign in</button>

						<hr />

						<button class="btn btn-lg btn-success btn-block" onClick={this.showSignup}>
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
