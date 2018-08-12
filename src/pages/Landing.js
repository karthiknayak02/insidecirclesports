/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */

/*/
 *  Component: Landing
 *  @props {NA}
 *  @EventHandler(s): NA
 *  @Description: splash page for the initial view
/*/
class Landing extends Component {
	render() {
		return (
			<div>
				<h1
					style={{
						'text-align': 'center',
					}}
				>
					Content will go here <br /> <br />
					(If no navbar is showing, change isLoggedIn to true in App.js)
				</h1>
			</div>
		);
	}
}

export default Landing;
