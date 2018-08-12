/* - Main import(s) 			-- */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

/* - Helper import(s) 		-- */
import registerServiceWorker from './registerServiceWorker';

/* - Component import(s) 	-- */
import App from './App';

/* - Style import(s) 		-- */
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
