/* - Main import(s) 				-- */
import React, { Component } from 'react';

/*/
 *  Component: Landing
 *  @props {NA}
 *  @EventHandler(s): NA
 *  @Description: splash page for the initial view
/*/
class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Landing"
    }
  }
  render(){
    return(
      <div>
        <h1 style = {{
          'text-align': 'center'
        }}>
          Content will go here
        </h1>
      </div>
    )
  }
}

export default Landing;
