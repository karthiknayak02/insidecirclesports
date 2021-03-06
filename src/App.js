/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */
import Routes from './routes/Routes';
import Navigation from './_smart-components/Navigation';

/** style import(s)                                                     */
import './styles/App.css';

/*/
 *  Component: App
 *  @props {}
 *  @EventHandler(s):
 *  @Description:
/*/
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
		};
	}

	render() {
		return (
			<div className="app-wrapper">
				{this.state.isLoggedIn ? <Navigation /> : null} <Routes />
			</div>
		);
	}
}

export default App;
