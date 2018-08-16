/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */
import _ from 'lodash'
/** component import(s)                                                 */
import { Container, Row, Col } from 'reactstrap';

/** style import(s)                                                     */
import '../styles/Landing.css';


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
      <div className = "landing-wrapper">
        <Container>

        </Container>
      </div>
    )
  }
}

export default Landing;
