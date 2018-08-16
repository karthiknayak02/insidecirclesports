/** main import(s)                                                      */
import React, {Component} from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */

/** Redux import(s)                                                     */

/*/
 *  Component: Articles
 *  @props {Title, Date, Preview, img}
 *  @EventHandler(s):
 *  @Description:
/*/
class ArticlePreview extends Component {
  constructor(props){
    super(props)
    console.log(props);
  }

  render(){
    return(
      <div>
        <img src = ""/>
        <h2> </h2>
        <h4><i></i></h4>
        <p></p>
      </div>
    )
  }
}

export default ArticlePreview
