/* - Main import(s) 					-- */
import React, { Component } from 'react';

/* - Helper import(s) 				-- */
import { Switch, Route } from 'react-router-dom';

/* - Page import(s) 					-- */
import Landing from '../pages/Landing';
import SportsPageMLB from '../pages/SportsPageMLB';
import SportsPageMLS from '../pages/SportsPageMLS';
import SportsPageNBA from '../pages/SportsPageNBA';
import SportsPageNFL from '../pages/SportsPageNFL';
import SportsPageNHL from '../pages/SportsPageNHL';
import SignupLogin from '../pages/SignupLogin';

/*/
 *  Component: Routes
 *  @props {}
 *  @EventHandler(s):
 *  @Description: Handls
/*/
class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/sport/mlb" component={SportsPageMLB} />
					<Route path="/sport/mls" component={SportsPageMLS} />
					<Route path="/sport/nba" component={SportsPageNBA} />
					<Route path="/sport/nfl" component={SportsPageNFL} />
					<Route path="/sport/nhl" component={SportsPageNHL} />
					<Route path="/login" component={SignupLogin} />
				</Switch>
			</main>
		);
	}
}

export default Routes;
