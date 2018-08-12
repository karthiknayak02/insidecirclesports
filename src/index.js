/** main import(s)                                                      */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

/** helper import(s)                                                    */
import registerServiceWorker from './registerServiceWorker';

/** component import(s)                                                 */
import App from './App';

/** style import(s)                                                     */
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  ADD LATER: REDUX
  <Provider store={store}>

  </Provider>
*/

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
