/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import { Link } from 'react-router-dom';

/** component import(s)                                                 */

/** style import(s)                                                     */


/*/
 *  Component: Navigation
 *  @props {NA}
 *  @EventHandler(s): NA
 *  @Description: Navigation bar
/*/
class Navigation extends Component {
  render(){
    return(
      <div style = {{
        height: '150px',
        'background-color': 'grey',
        'text-align': 'center'
      }}>
        <h1>Navbar Goes here</h1>
        <div>
          <h3>Links</h3>
          <Link style ={{
            margin: '0px 5px 0px 5px'
          }} to = "/sport/nfl">NFL</Link>
          <Link style ={{
            margin: '0px 5px 0px 5px'
          }} to = "/sport/nba">NBA</Link>
          <Link style ={{
            margin: '0px 5px 0px 5px'
          }} to = "/sport/nhl">NHL</Link>
          <Link style ={{
            margin: '0px 5px 0px 5px'
          }} to = "/sport/mlb">MLB</Link>
          <Link style ={{
            margin: '0px 5px 0px 5px'
          }} to = "/sport/mls">MLS</Link>
        </div>
      </div>
    )
  }
}

export default Navigation
