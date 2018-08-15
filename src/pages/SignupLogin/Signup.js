/* - Main import(s) 				-- */
import React, { Component } from 'react';

/* - Style import(s) 			-- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Signup.css';
import SignupLoginHeader from './SignupLoginHeader.js';

/*/
*  Component: Signup
*  @props: TBD
*  @EventHandler(s): TBD
*  @Description: Signup form
/*/
class Signup extends Component {
	constructor(props) {
		super(props);
		this.handleSignupSubmission = this.handleSignupSubmission.bind(this);
		this.showLogin = this.showLogin.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	/* Change form values when user interacts with them */
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	/* Propagate data to parent component to send to backend */
	handleSignupSubmission(event) {
		this.props.onReceieveSignupInformation(
			this.state.firstName,
			this.state.lastName,
			this.state.email,
			this.state.password,
			this.state.confirmPassword
		);

		event.preventDefault();
	}

	/* Change rendered form to login form when clicked */
	showLogin() {
		this.props.loginClicked();
	}

	/* Show sign up form */
	render() {
		return (
			<div className="signup-box">
				<form class="form-signin" onSubmit={this.handleSignupSubmission}>
					<SignupLoginHeader entryText="Sign up below" />

					<div class="form-row">
						<div class="form-group col-md-6">
							<input
								name="firstName"
								type="text"
								class="form-control"
								placeholder="First"
								value={this.state.firstName}
								onChange={this.handleInputChange}
							/>
						</div>
						<div class="form-group col-md-6">
							<input
								name="lastName"
								type="text"
								class="form-control"
								placeholder="Last"
								value={this.state.lastName}
								onChange={this.handleInputChange}
							/>
						</div>
					</div>

					<div class="form-group">
						<input
							name="email"
							type="email"
							class="form-control"
							placeholder="Enter email address..."
							value={this.state.email}
							onChange={this.handleInputChange}
						/>
					</div>

					<div class="form-group">
						<input
							name="password"
							type="password"
							class="form-control"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleInputChange}
						/>
					</div>

					<div class="form-group">
						<input
							name="confirmPassword"
							type="password"
							class="form-control"
							placeholder="Confirm Password"
							value={this.state.confirmPassword}
							onChange={this.handleInputChange}
						/>
					</div>

					<button class="btn btn-lg btn-success btn-block">Sign up!</button>

					<hr />

					<button class="btn btn-lg btn-primary btn-block" onClick={this.showLogin}>
						Return to login
					</button>
				</form>
			</div>
		);
	}
}

export default Signup;
