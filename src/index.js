import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.css'
import './css/index.css'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
