/* - Main import(s) 				-- */
import React, { Component } from 'react';

/* - Style import(s) 			-- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Signup.css';

class Signup extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="signup-box">
				<form>
					<div class="form-row">
						<div class="form-group col-md-6">
							<input type="text" class="form-control" id="firstNameEntry" placeholder="First" />
						</div>
						<div class="form-group col-md-6">
							<input type="text" class="form-control" id="lastNameEntry" placeholder="Last" />
						</div>
					</div>

					<div class="form-group">
						<input
							type="email"
							class="form-control"
							id="emailEntry"
							aria-describedby="emailHelp"
							placeholder="Enter email address..."
						/>
					</div>

					<div class="form-group">
						<input type="password" class="form-control" id="passwordEntry" placeholder="Password" />
					</div>

					<div class="form-group">
						<input
							type="password"
							class="form-control"
							id="confirmPasswordEntry"
							placeholder="Confirm Password"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Signup;
