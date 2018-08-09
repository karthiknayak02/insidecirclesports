/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SignupLogin.css';

/*/
*  Component: SignupLogin
*  @props {NA}
*  @EventHandler(s): NA
*  @Description: Signup/Login page for users of the site
/*/
class SignupLogin extends Component {
	render(){
		return(
			<div className="login-box">
				<form class="form-signin">
					<img class="mb-4" src="https://s8.postimg.cc/qh5ck71gl/test_logo.png" alt="" width="102" height="102" />
					<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
					<label for="inputEmail" class="sr-only">Email address</label>
					<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
					<label for="inputPassword" class="sr-only">Password</label>
					<input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
					<div class="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
					</div>
					<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
					<p class="mt-5 mb-3 text-muted">© 2018</p>
				</form>
			</div>
		)
	}
}

export default SignupLogin;